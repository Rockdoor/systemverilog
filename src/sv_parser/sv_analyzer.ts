'use strict';

import * as vscls       from "vscode-languageserver";
import * as pg          from "antlr4ts";
import * as pgtree      from "antlr4ts/tree";
import * as svlex       from "./antlr_out/SystemVerilogLexer";
import * as svpar       from "./antlr_out/SystemVerilogParser";
import * as sv_listener from "./sv_listener";
import * as sv_pp       from "./sv_preprocessor";
import * as sv_error    from "./sv_error";

import * as path        from "path"
import Uri from "vscode-uri"

class database {
  tokens: pg.CommonTokenStream;
  repl_tbl: sv_pp.replace[];
  tree: svpar.Source_textContext;
  lis: sv_listener.sv_listener;
  err: sv_error.sv_error;
}


/////////////////////////////////////////////////////////////////////////////
// Analyzing SystemVerilog
/////////////////////////////////////////////////////////////////////////////
export class sv_analyzer {
  filedb: {[key: string]: database};
  db:     sv_listener.sv_listener;
  csr: {
    uri:    string,
    hint:   sv_listener.cursor_hint, 
    belong: sv_listener.cursor_belong, 
    scopes: string[], 
    hiers:  string[], 
    ident:  string
  };
  rootpath: string;
  incpath: string[];

  constructor () {
    this.filedb   = {};
    this.db       = null;
    this.csr      = {uri: null, hint: null, belong: null, scopes: [], hiers: [], ident: ""};
    this.rootpath = "";
    this.incpath  = [];
    
    return this;
  }

  setIncPath(paths: string[]) {
    this.incpath = [];
    for (let path of paths) {
      let ip = this.rootpath + "\\" + path;
      this.incpath.push(ip);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Parsing
  //////////////////////////////////////////////////////////////////////////////
  parseText(uri: string, text: string, preDefines: any[][]) {
    // invoke preprocessor parsing
    let pp_chars  = new pg.ANTLRInputStream(text);
    let pp_lexer  = new svlex.SystemVerilogLexer(pp_chars);
    let pp_tokens = new pg.CommonTokenStream(pp_lexer, svlex.SystemVerilogLexer.CH_PP);
    let pp_parser = new svpar.SystemVerilogParser(pp_tokens);
    let rew       = new pg.TokenStreamRewriter(pp_tokens);
    
    pp_parser.removeErrorListeners();
    pp_parser.buildParseTree = true;

    let pp_tree   = pp_parser.pp_text();
    let pp_pp     = new sv_pp.sv_preprocessor(rew, preDefines);
    let curpath   = path.dirname(Uri.parse(uri).fsPath);
    pp_pp.incpath = this.incpath.concat([curpath]);
    pp_pp.tokens  = pp_tokens;
    pgtree.ParseTreeWalker.DEFAULT.walk(pp_pp, pp_tree);

    let repl_src = rew.getText();
    // console.log(repl_src);

    // invoke main parsing
    let chars  = new pg.ANTLRInputStream(repl_src);
    let lexer  = new svlex.SystemVerilogLexer(chars);
    let tokens = new pg.CommonTokenStream(lexer, svlex.SystemVerilogLexer.DEFAULT_TOKEN_CHANNEL);
    let parser = new svpar.SystemVerilogParser(tokens);
    let error  = new sv_error.sv_error();

    parser.removeErrorListeners();
    parser.addErrorListener(error);
    parser.buildParseTree = true;
    
    let tree = parser.source_text();

    if (! this.filedb[uri]) {
      this.filedb[uri] = new database();
    }
    
    this.filedb[uri].tokens   = tokens;
    this.filedb[uri].repl_tbl = pp_pp.repl_tbl.concat();
    this.filedb[uri].tree     = tree;

    for (let diag of error.diags) {
      // Parser lines are shifted, calib. lines +1
      let newst = this.convPositionDstToSrc(this.filedb[uri].repl_tbl, diag.range.start.line+1, diag.range.start.character);
      let newed = this.convPositionDstToSrc(this.filedb[uri].repl_tbl, diag.range.end.line+1, diag.range.end.character);
     
      diag.range.start = {line: newst.line-1, character: newst.column};
      diag.range.end   = {line: newed.line-1, character: newed.column};
    }

    this.filedb[uri].err      = error;

    this.createDB(uri, 0, 0);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Position conversion to complement preprocessing, using replace table of repl_tbl
  //////////////////////////////////////////////////////////////////////////////
  convPositionDstToSrc(repl_tbl: sv_pp.replace[], line: number, column: number) {
    let new_line = line;
    let new_char = column;

    for (let repl of repl_tbl) {
      if (line > repl.dst.end.line) {
        new_line -= repl.ofs_line;
        line -= repl.ofs_line; // calib.
      }
      else if (repl.dst.start.line <= line && line <= repl.dst.end.line) {
        if (repl.dst.start.line == repl.dst.end.line) {
          if (repl.dst.start.character <= column && column <= repl.dst.end.character) {
            new_char = repl.dst.start.character;
          }
          else if (column > repl.dst.end.character) {
            new_char -= repl.ofs_char;
          }
        }
        else {
          new_line = repl.dst.start.line;
          
          if (line == repl.dst.end.line) {
            if (column > repl.dst.end.character) {
              new_char -= repl.ofs_char;
            }
            else {
              new_char = repl.dst.start.character;
            }
          }
          else {
            new_char = repl.dst.start.character;
          }
        }

        break; // repl.dst.start.line <= line && line <= repl.dst.end.line
      }
    }    

    return {line: new_line, column: new_char};
  }

  convPositionSrcToDst(repl_tbl: sv_pp.replace[], line: number, column: number) {
    let new_line = line;
    let new_char = column;

    for (let repl of repl_tbl) {
      if (line > repl.src.start.line) {
        new_line += repl.ofs_line;
      }
      else if (line == repl.src.start.line) {
        if (repl.src.start.line == repl.src.end.line) {
          if (repl.src.start.character <= column && column <= repl.src.end.character) {
            new_char = repl.src.start.character;
          }
          else if (repl.src.end.character < column) {
            new_char += repl.ofs_char;
          }
        }

        break; // line == repl.src.start.line
      }
    }

    return {line: new_line, column: new_char};
  }

  //////////////////////////////////////////////////////////////////////////////
  // Analyze paser tree, creating database and hints for completion
  //////////////////////////////////////////////////////////////////////////////
  createDB(uri: string, line: number, column: number, search_ident: string = null) {
    if (! (this.filedb[uri] && this.filedb[uri].tree))
      return;

    let pos = this.convPositionSrcToDst(this.filedb[uri].repl_tbl, line, column);

    this.db = new sv_listener.sv_listener(uri, pos.line, pos.column);
    this.db.search_ident = search_ident;
    this.db.tokens       = this.filedb[uri].tokens;

    pgtree.ParseTreeWalker.DEFAULT.walk(this.db, this.filedb[uri].tree);
    
    this.filedb[uri].lis = this.db;

    let hint   = this.db.cursor_hint;
    let belong = this.db.cursor_belong;
    let scopes;
    let hiers;
    let ident;

    if (hint && hint.ident) {
      scopes = hint.ident.split("::");
      hiers  = scopes[scopes.length - 1].split(".");
      ident  = hiers[hiers.length - 1];
      scopes.pop();
      hiers.pop();
    }

    this.csr = {uri, hint, belong, scopes, hiers, ident};
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get database
  //////////////////////////////////////////////////////////////////////////////
  getDB(uri: string) {
    if (! this.filedb[uri].lis)
      this.createDB(uri, 0, 0);

    return this.filedb[uri].lis;
  }

  /////////////////////////////////////////////////////////////////////////////
  // Utilities
  /////////////////////////////////////////////////////////////////////////////
  convRange(region: sv_listener.region) {
    return {
      start: {line: region.start.line - 1, character: region.start.character},
      end:   {line: region.end.line   - 1, character: region.end.character}
    };
  }

  reduceWhiteSpaces(str: string) {
    return str.replace(/ +/g, " ");
  }

  getSVText(str: string) {
    return "```sv\n" + str + "\n```";
  }

  getDataDeclElemStr(elem: any, defstr="", usedef=false) {
    if (elem) {
      if (Array.isArray(elem)) {
        return " " + elem.join("");
      }
      else {
        return " " + elem;
      }
    }
    return (usedef) ? " " + defstr : "";
  }

  getDataDeclStr(decl: sv_listener.data_decl, print_for=null) {
    let str = "";
    str += (decl.typedef) ? " typedef " : "";
    str += this.getDataDeclElemStr(decl.dir, "input", (["port"].indexOf(print_for)>=0));
    str += this.getDataDeclElemStr(decl.life);
    str += this.getDataDeclElemStr(decl.const);
    str += this.getDataDeclElemStr(decl.var);
    str += this.getDataDeclElemStr(decl.param);
    str += this.getDataDeclElemStr(decl.net);
    str += this.getDataDeclElemStr(decl.data);
    str += this.getDataDeclElemStr(decl.user);
    str += this.getDataDeclElemStr(decl.pack);
    str += this.getDataDeclElemStr(decl.sign);
    str += this.getDataDeclElemStr(decl.pdim);
    if (decl.mem) {
      str += " { \n"
      for (let keys = Object.keys(decl.mem), i=0; i<Math.min(keys.length, 10); ++i) {
        str += "  " + this.getDataDeclStr(decl.mem[keys[i]]) + ";\n";
      }
      str += "} "
    }
    str += this.getDataDeclElemStr(decl.ident);
    str += this.getDataDeclElemStr(decl.updim);
    str += this.getDataDeclElemStr(decl.vdim);
    str += (decl.expr) ? " = " + decl.expr : "";
    return this.reduceWhiteSpaces(str).trim();
  }
  
  getRegionStr(region: sv_listener.region) {
    return region.start.line + "_" + region.start.character + "_";
  }
  
  enumSearchingModules(cur_uri: string, current_scopes: string[], modifier_scope: string[]){
    let mods : sv_listener.sv_module[] = [];

    if (modifier_scope && modifier_scope.length) {
      for (let uri in this.filedb) {
        let db = this.getDB(uri);

        let str_scope = ["_g_"].concat(modifier_scope).join("::");
        let mod = db.modules[str_scope];
        if (mod)
          mods.push(mod);
        
        // mods.push(db.modules["_g_"]);
      }
    }
    else {
      for (let cs = current_scopes.concat(); cs.length > 0; cs.pop()) {
        let db = this.getDB(cur_uri);

        let str_cs = cs.join("::");
        let mod = db.modules[str_cs];
        if (mod) {
          mods.push(mod);

          for (let pkg of mod.pkgs) {
            let arr_pkg = pkg.split("::");
            if (arr_pkg[arr_pkg.length-1] == "*")
              arr_pkg.pop();

            let pkgmods = this.enumSearchingModules("", [], arr_pkg);
            mods = mods.concat(pkgmods);
          }
        }
      }
    }

    return mods;
  }

  searchDeclsOfVariable(refmods: sv_listener.sv_module[], root_type: any, ident: string, partial: boolean=false) {
    let decls = [];

    function matchIdent (dict: any, ident: string) {
      if (partial) {
        for (let key in dict) {
          let id = (ident) ? ident : "";
          if (key.indexOf(id) >= 0) {
            decls.push(dict[key]);
          }
        }
      }
      else {
        let decl = dict[ident];
        if (decl)
          decls.push(decl);
      }
    };

    if (root_type) {
      switch (root_type.constructor.name) {
        case "sv_module":
          matchIdent(root_type.vars,   ident);
          matchIdent(root_type.params, ident);
          matchIdent(root_type.ports,  ident);
          matchIdent(root_type.types,  ident);
        break;
        case "data_decl":
          matchIdent(root_type.mem, ident);
        break;
      }
    }
    else {
      for (let mod of refmods) {
        matchIdent(mod.vars,   ident);
        matchIdent(mod.params, ident);
        matchIdent(mod.ports,  ident);
        matchIdent(mod.types,  ident);
      }
    }

    return decls;
  }

  searchModules(uri: string, current_scope: string[], modifier_scope: string[], ident: string, modclass: sv_listener.module_class = null, partial: boolean=false) {
    let mods : sv_listener.sv_module[] = [];

    if (modifier_scope && modifier_scope.length > 0) {
      let id;
      let scope_lvl;
      
      if (modifier_scope[0] == "_g_") {
        id        = modifier_scope.concat([ident]).join("::");
        scope_lvl = modifier_scope.length + 1;
      }
      else { 
        id        = ["_g_"].concat(modifier_scope, [ident]).join("::");
        scope_lvl = modifier_scope.length + 2;
      }


      for (let key in this.filedb) {
        let db = this.getDB(key);

        if (partial) {
          for (let str_scope in db.modules) {
            if (scope_lvl == str_scope.split("::").length) {
              if (str_scope.indexOf(id) >= 0) {
                let mod = db.modules[str_scope];
                if (mod.class == modclass) {
                  mods.push(db.modules[str_scope]);
                }
              }
            }
          }
        }
        else {
          let mod = db.modules[id];
          if (mod) {
            if (mod.class == modclass)
              mods.push(mod);
          }
        }
      }
    }
    else {
      for (let cs = current_scope.concat(); cs.length > 0; cs.pop()) {
        let id = cs.concat([ident]).join("::");
        let scope_lvl = cs.length + 1;

        for (let key in this.filedb) {
          let db = this.getDB(key);

          if (partial) {
            for (let str_scope in db.modules) {
              if (scope_lvl == str_scope.split("::").length) {
                if (str_scope.indexOf(id) >= 0) {
                  let mod = db.modules[str_scope];
                  if (mod.class == modclass) {
                    mods.push(db.modules[str_scope]);
                  }
                }
              }
            }
          }
          else {
            let mod = db.modules[id];
            if (mod) {
              if (mod.class == modclass)
                mods.push(mod);
            }
          }
        }
      }
    }

    return mods;
  }

  searchModule(uri: string, current_scope: string[], modifier_scope: string[], ident: string, modclass: sv_listener.module_class = null) {
    return this.searchModules(uri, current_scope, modifier_scope, ident, modclass, false)[0];
  }

  searchTypeOfDecl(decl: sv_listener.data_decl) {
    if(! (decl && decl.user))
      return null;

    let scopes = (decl.scope) ? decl.scope.split("::").slice(0, -1) : [];
    let refmods = this.enumSearchingModules(decl.uri, decl.cs, scopes);

    for (let mod of refmods) {
      let type = mod.types[decl.user];
      if (type)
        return type;
    }

    let cls = this.searchModule(decl.uri, decl.cs, scopes, decl.user, sv_listener.module_class.class);
    if (cls)
      return cls;
    
    return null;
  }

  resolveHierReference(refmods: sv_listener.sv_module[], root_type: any, hiers: string[]) {
    if (! (hiers && hiers[0]))
      return root_type;

      let ident = hiers[0];

    let decls = this.searchDeclsOfVariable(refmods, root_type, ident, false);
    let decl = decls[0];
    let type = this.searchTypeOfDecl(decl);

    if (type)
      return this.resolveHierReference(refmods, type, hiers.slice(1));
    else 
      return null;
  }

  /////////////////////////////////////////////////////////////////////////////
  // OnHover
  /////////////////////////////////////////////////////////////////////////////
  getHoverText(uri: string, line: number, column: number) {
    this.createDB(uri, line, column);
    
    if (! this.csr.hint)
      return null;
    
    if (["ident", "ps_ident", "hier_ident", "ps_or_hier_ident"].indexOf(this.csr.hint.rule) < 0) {
      return null;
    }

    let text;

    text = this.getModuleInstantiationInfo().text;
    if (text.length) {
      return {
        kind: vscls.MarkupKind.Markdown,
        value: text.join("\n")
      }
    }

    if (this.csr.belong && this.csr.belong.rule == "tf_call") {
      // TODO
    }

    text = this.getClassInfo().text;
    if (text.length) {
      return {
        kind: vscls.MarkupKind.Markdown,
        value: text.join("\n")
      };
    }

    text = this.getVariableInfo().text;
    if (text.length) {
      return {
        kind: vscls.MarkupKind.Markdown,
        value: text.join("\n")
      };
    }
    
    text = this.getTaskFunctionInfo().text;
    if (text.length) {
      return {
        kind: vscls.MarkupKind.Markdown,
        value: text.join("\n")
      };
    }

    return null;
  }

  getModuleInfo() {
    let text = [];
    let range;
    let uri;

    let mod = this.searchModule(this.csr.uri, this.csr.hint.cs, this.csr.scopes, this.csr.ident, sv_listener.module_class.module);
    if (mod) {
      let strs = [];
      strs.push("module " + mod.ident + ";");
      
      for (let key in mod.params) {
        let decl = mod.params[key];
        if (decl.param == "parameter") {
          strs.push(this.getDataDeclStr(decl) + ";");
        }
      }

      for (let key in mod.ports) {
        let decl = mod.ports[key];
        strs.push(this.getDataDeclStr(decl, "port") + ";");
      }

      text.push("module " + this.csr.ident);
      text.push(this.getSVText(strs.join("\n")));
      range = mod.region;
      uri   = mod.uri;
    }

    return {text, range, uri};
  }
  
  getModuleInstantiationInfo() {
    let text = [];
    let range;
    let uri;

    if (this.csr.belong && this.csr.belong.rule == "module_instantiation") {
      let info = this.getModuleInfo();
      if (info.text.length || info.range) {
        return info;
      }

      if (this.csr.hiers[0] == "" && this.csr.hiers.length > 0) {
        let mod = this.searchModule(this.csr.uri, this.csr.hint.cs, this.csr.scopes, this.csr.belong.caller, sv_listener.module_class.module);
        if (mod) {
          let port = mod.ports[this.csr.ident];
          
          if (port) {
            text.push("port of module " + this.csr.belong.caller);
            text.push(this.getSVText(this.getDataDeclStr(port, "port")));
            range = port.region;
            uri   = port.uri;
          }
        }
      }
    }

    return {text, range, uri};
  }

  getClassInfo() {
    let text = [];
    let range;
    let uri;

    let mod = this.searchModule(this.csr.uri, this.csr.hint.cs, this.csr.scopes, this.csr.ident, sv_listener.module_class.class);
    if (mod) {
      let strs = [];
      strs.push("class " + mod.ident + ";");
      
      for (let key in mod.params) {
        let decl = mod.params[key];
        if (decl.param == "parameter") {
          strs.push(this.getDataDeclStr(decl) + ";");
        }
      }

      for (let key in mod.vars) {
        let decl = mod.vars[key];
        strs.push(this.getDataDeclStr(decl, "") + ";");
      }

      text.push("class " + this.csr.ident);
      text.push(this.getSVText(strs.join("\n")));
      range = mod.region;
      uri   = mod.uri;
    }

    return {text, range, uri};
  }

  getVariableInfo() {
    let text = [];
    let range;
    let uri;
    
    let refmods = this.enumSearchingModules(this.csr.uri, this.csr.hint.cs, this.csr.scopes);
    let type    = this.resolveHierReference(refmods, null, this.csr.hiers);
    let decls   = this.searchDeclsOfVariable(refmods, type, this.csr.ident, true);
    let decl    = decls[0];

    if (decl) {
      text.push("Variable in " + decl.cs.join("::"));
      text.push(this.getSVText(this.getDataDeclStr(decl) + ";"));
      range = decl.region;
      uri   = decl.uri;
    }

    return {text, range, uri};
  }

  getTaskFunctionInfo() {
    let text   = [];
    let range;
    let uri;

    let refmods = this.enumSearchingModules(this.csr.uri, this.csr.hint.cs, this.csr.scopes);
    let type    = this.resolveHierReference(refmods, null, this.csr.hiers);

    let tfs;

    if (type && type.constructor.name == "sv_module" && type.class == sv_listener.module_class.class) {
      let cls : sv_listener.sv_module = type;
      tfs = this.searchModule(cls.uri, cls.cs, cls.cs.concat(cls.ident), this.csr.ident, sv_listener.module_class.tf);
    }
    else {
      tfs = this.searchModule(this.csr.uri, this.csr.hint.cs, this.csr.scopes, this.csr.ident, sv_listener.module_class.tf);
    }

    if (tfs) {
      let str = "";
      str += tfs.tf;
      str += (tfs.lifetime) ? " [" + tfs.lifetime + "]" : " [static]";
      text.push(this.getSVText(str));

      str = tfs.cs.concat([tfs.ident]).join("::");
      text.push(this.getSVText(str));
      if (tfs.rtype && this.getDataDeclStr(tfs.rtype) != "") {
        text.push("*returns:*");
        str = "  " + this.getDataDeclStr(tfs.rtype) + ";";
        text.push(this.getSVText(str));
      }
      text.push("*ports:*");

      for (let pi in tfs.ports) {
        let p = tfs.ports[pi];
        str = "  " + this.getDataDeclStr(p, "port") + ";";
        text.push(this.getSVText(str));
      }

      range = tfs.region;
      uri   = tfs.uri;
    }

    return {text, range, uri};
  }

  /////////////////////////////////////////////////////////////////////////////
  // OnComplete
  /////////////////////////////////////////////////////////////////////////////
  getCompleteItems(uri, line, column) {
    this.createDB(uri, line, column);

    if (! this.csr.hint)
      return null;

    let clist = {
      isIncomplete: false,
      items: []
    };

    clist.items = clist.items.concat(this.getModuleInstantiationPortItems());
    if (clist.items.length)
      return clist;

    let tfs = this.getModuleItems(sv_listener.module_class.tf);
    clist.items = clist.items.concat(tfs);

    let mods = this.getModuleItems(sv_listener.module_class.module);
    clist.items = clist.items.concat(mods);

    let pkgs = this.getModuleItems(sv_listener.module_class.package);
    clist.items = clist.items.concat(pkgs);

    let clss = this.getModuleItems(sv_listener.module_class.class);
    clist.items = clist.items.concat(clss);

    let refmods = this.enumSearchingModules(this.csr.uri, this.csr.hint.cs, this.csr.scopes);
    let type    = this.resolveHierReference(refmods, null, this.csr.hiers);
    let decls   = this.searchDeclsOfVariable(refmods, type, this.csr.ident, true);

    for (let decl of decls) {
      let kind =  (decl.param) ?    vscls.CompletionItemKind.Constant :
                  (decl.dir) ?      vscls.CompletionItemKind.Value    :
                  (decl.typedef) ?  vscls.CompletionItemKind.Struct   :
                  (type) ?          vscls.CompletionItemKind.Field    :
                                    vscls.CompletionItemKind.Variable ;

      let msg  = (type) ? "Member of " + type.ident :
                          "Declared in " + decl.cs.join("::");

      clist.items.push({
        label: decl.ident,
        // sortText: this.getRegionStr(decl.region),
        kind: kind,
        detail: this.getDataDeclStr(decl),
        documentation: {
          kind: vscls.MarkupKind.Markdown,
          value: [msg, this.getSVText(this.getDataDeclStr(decl))].join("\n")
        }
      });
    }

    return clist;
  }

  getModuleInstantiationPortItems() {
    let items  = [];

    if (this.csr.belong && this.csr.belong.rule == "module_instantiation") {
      let scopes = this.csr.belong.caller.split("::");
      let hiers  = scopes[scopes.length - 1].split(".");
      let ident  = hiers[hiers.length - 1];
      scopes.pop();
      hiers.pop();

      let refmods = this.enumSearchingModules(this.csr.uri, this.csr.belong.cs, scopes);
      let type    = this.resolveHierReference(refmods, null, hiers);
  
      let mod;
  
      if (type && type.constructor.name == "sv_module" && type.class == sv_listener.module_class.module) {
        let cls : sv_listener.sv_module = type;
        mod = this.searchModule(cls.uri, cls.cs, cls.cs.concat(cls.ident), ident, sv_listener.module_class.module);
      }
      else {
        mod = this.searchModule(this.csr.uri, this.csr.hint.cs, scopes, ident, sv_listener.module_class.module);
      }
  
      if (mod) {
        for (let key in mod.ports) {
          if (mod.ports[key].ident.indexOf(this.csr.ident) >= 0) {
            items.push({
              label: key,
              // sortText: this.getRegionStr(mod.ports[key].region),
              kind: vscls.CompletionItemKind.Variable,
              detail: "Port of module " + this.csr.belong.caller,
              documentation: {
                kind: vscls.MarkupKind.Markdown,
                value: [this.getSVText(this.getDataDeclStr(mod.ports[key], "port"))].join("\n")
              }
            });
          }
        }
      }
    }

    return items;
  }
  
  getModuleItems(modcls: sv_listener.module_class) {
    let items  = [];

    let refmods = this.enumSearchingModules(this.csr.uri, this.csr.hint.cs, this.csr.scopes);
    let type    = this.resolveHierReference(refmods, null, this.csr.hiers);

    let mods = [];

    if (type && type.constructor.name == "sv_module" && type.class == sv_listener.module_class.class) {
      let cls : sv_listener.sv_module = type;
      mods = this.searchModules(cls.uri, cls.cs, cls.cs.concat(cls.ident), this.csr.ident, modcls, true);
    }
    else if (! type) {
      mods = this.searchModules(this.csr.uri, this.csr.hint.cs, this.csr.scopes, this.csr.ident, modcls, true);
    }

    for (let mod of mods) {
      let id = (this.csr.ident) ? this.csr.ident : "";
      if (mod.ident.indexOf(id) >= 0) {
        let kind, detail;

        switch (modcls) {
          case sv_listener.module_class.tf:
            kind = vscls.CompletionItemKind.Method;
            detail = "Task/Function " + mod.ident;
          break;
          case sv_listener.module_class.module:
            kind = vscls.CompletionItemKind.Module;
            detail = "Module " + mod.ident;
          break;
          case sv_listener.module_class.package:
            kind = vscls.CompletionItemKind.Interface;
            detail = "Package " + mod.ident;
          break;
          case sv_listener.module_class.class:
            kind = vscls.CompletionItemKind.Class;
            detail = "Class " + mod.ident;
          break;
          default:
            kind = vscls.CompletionItemKind.Event;
            detail = "Undefined "
          break;
        }

        items.push({
          label: mod.ident,
          // sortText: this.getRegionStr(mod.region),
          kind: kind,
          detail: detail,
          documentation: {
            kind: vscls.MarkupKind.Markdown,
            value: [this.getSVText("")].join("\n")
          }
        });
      }
    }

    return items;
  }

  /////////////////////////////////////////////////////////////////////////////
  // OnSignatureHelp
  /////////////////////////////////////////////////////////////////////////////
  getSignatureHelpText(uri, line, column) {
    this.createDB(uri, line, column);
    
    if (! this.csr.belong)
      return null;

    let sig = {
      signatures: [],
      activeSignature: null,
      activeParameter: null
    };
    
    if (this.csr.belong.rule == "tf_call") {
      let scopes = this.csr.belong.caller.split("::");
      let hiers  = scopes[scopes.length - 1].split(".");
      let ident  = hiers[hiers.length - 1];
      scopes.pop();
      hiers.pop();

      let refmods = this.enumSearchingModules(this.csr.uri, this.csr.belong.cs, scopes);
      let type    = this.resolveHierReference(refmods, null, hiers);
  
      let tfs;
  
      if (type && type.constructor.name == "sv_module" && type.class == sv_listener.module_class.class) {
        let cls : sv_listener.sv_module = type;
        tfs = this.searchModule(cls.uri, cls.cs, cls.cs.concat(cls.ident), ident, sv_listener.module_class.tf);
      }
      else {
        tfs = this.searchModule(this.csr.uri, this.csr.belong.cs, scopes, ident, sv_listener.module_class.tf);
      }

      if (tfs) {
        let si = {
          label: this.csr.belong.caller,
          documentation: {},
          parameters: []
        };

        let str = "";

        if (tfs.rtype) {
          str += this.getDataDeclStr(tfs.rtype) + "\n";
          str += "<= ";
        }

        str += tfs.ident + " ("

        let plist = [];
        for (let id in tfs.ports) {
          let pstr = this.getDataDeclStr(tfs.ports[id]);
          plist.push(pstr);
          si.parameters.push({
            label: pstr,
            documentation: {
              kind: vscls.MarkupKind.Markdown,
              value: [this.getSVText(this.getDataDeclStr(tfs.ports[id]))].join("\n")
            }
          });
        }

        str += plist.join(", ") + ")";

        si.documentation = {
          kind: vscls.MarkupKind.Markdown,
          value: [this.getSVText(str)].join("\n")
        };

        sig.signatures.push(si);
      }
    }

    if (this.csr.belong.rule == "module_instantiation") {
      let scopes = this.csr.belong.caller.split("::");
      let hiers  = scopes[scopes.length - 1].split(".");
      let ident  = hiers[hiers.length - 1];
      scopes.pop();
      hiers.pop();

      let refmods = this.enumSearchingModules(this.csr.uri, this.csr.belong.cs, scopes);
      let type    = this.resolveHierReference(refmods, null, hiers);
  
      let mod;
  
      if (type && type.constructor.name == "sv_module" && type.class == sv_listener.module_class.class) {
        let cls : sv_listener.sv_module = type;
        mod = this.searchModule(cls.uri, cls.cs, cls.cs.concat(cls.ident), ident, sv_listener.module_class.module);
      }
      else {
        mod = this.searchModule(this.csr.uri, this.csr.belong.cs, scopes, ident, sv_listener.module_class.module);
      }

      if (mod) {
        let si = {
          label: this.csr.belong.caller,
          documentation: {
            kind: vscls.MarkupKind.PlainText,
            value: ["Module declaration"].join("\n")
          },
          parameters: []
        };

        for (let id in mod.ports) {
          si.parameters.push({
            label: id,
            documentation: {
              kind: vscls.MarkupKind.Markdown,
              value: [this.getSVText(this.getDataDeclStr(mod.ports[id]))].join("\n")
            }
          });
        }

        sig.signatures.push(si);
      }
    }

    sig.activeSignature = 0;
    sig.activeParameter = this.db.cursor_belong.argnum;
    
    return sig;
  }

  /////////////////////////////////////////////////////////////////////////////
  // OnDocumentSymbol
  /////////////////////////////////////////////////////////////////////////////
  getDocumentSymbolInfo(uri) {
    this.createDB(uri, 0, 0);

    let info = [];

    for (let key in this.db.modules) {
      let mod = this.db.modules[key];
      let cs  = key;

      let get_symbols = function(con, kind) {
        for (let key in con) {
          info.push({
            name: con[key].ident,
            kind: kind,
            location: {
              uri: uri,
              range: this.convRange(con[key].region)
            },
            containerName: cs
          });
        }
      }.bind(this);

      info.push({
        name: mod.ident,
        kind: vscls.SymbolKind.Module,
        location: {
          uri: uri,
          range: this.convRange(mod.region)
        },
        containerName: key
      });

      get_symbols(mod.types,  vscls.SymbolKind.TypeParameter);
      get_symbols(mod.params, vscls.SymbolKind.Constant);
      get_symbols(mod.ports,  vscls.SymbolKind.Field);
      get_symbols(mod.vars,   vscls.SymbolKind.Variable);
      get_symbols(mod.blocks, vscls.SymbolKind.Function);
    }

    return info;
  }

  /////////////////////////////////////////////////////////////////////////////
  // OnDefinition
  /////////////////////////////////////////////////////////////////////////////
  getDefinitionLocations(uri, line, column) {
    this.createDB(uri, line, column);

    let scope;

    scope = this.getModuleInstantiationInfo();
    if (! scope.range) scope = this.getClassInfo();
    if (! scope.range) scope = this.getVariableInfo();
    if (! scope.range) scope = this.getTaskFunctionInfo();

    if (scope.range) {
      scope.range.end = scope.range.start;

      return {
        uri: (scope.uri) ? scope.uri : uri,
        range: this.convRange(scope.range)
      };
    }
    else {
      return null;
    }
  }

  /////////////////////////////////////////////////////////////////////////////
  // OnReference
  /////////////////////////////////////////////////////////////////////////////
  getReferenceLocations(uri, line, column, ident) {
    this.createDB(uri, line, column, ident);
    
    let locs = [];
    for (let loc of this.db.ident_locs) {
      loc.start.line = loc.start.line - 1;
      loc.end.line   = loc.end.line - 1;
      
      locs.push({
        uri: uri,
        range: loc
      });
    }

    return locs;
  }

  getSimpleIdent(input: string, line: number, column: number) {
    let text = input.split("\n");
    --column;

    let i;
    for(i = column; i >= 0; --i) {
      if (! /[_a-zA-Z0-9]/.test(text[line][i])) {
        break;
      }
    }
    let start = i+1;

    for (i = column; i <= text[line].length; ++i) {
      if (! /[_a-zA-Z0-9]/.test(text[line][i])) {
        break;
      }
    }
    let end = i-1;

    return text[line].slice(start, end+1);
  }

  getScopedIdent(input: string, line: number, column: number) {
    let text = input.split("\n");
    --column;

    let i;
    for(i = column; i >= 0; --i) {
      if (! /[_a-zA-Z0-9:]/.test(text[line][i])) {
        break;
      }
    }
    let start = i+1;

    for (i = column; i <= text[line].length; ++i) {
      if (! /[_a-zA-Z0-9:]/.test(text[line][i])) {
        break;
      }
    }
    let end = i-1;

    return {ident:text[line].slice(start, end+1), start: start, end: end+1};
  }

  /////////////////////////////////////////////////////////////////////////////
  // OnExecute (instantiateModule)
  /////////////////////////////////////////////////////////////////////////////
  getInstantiateModule(uri: string, ident: string, line: number, char: number, base_indent: number) {
    this.createDB(uri, line, char);
    let scopes = ident.split("::");
    ident = scopes[scopes.length-1];
    scopes.pop();

    let mods = this.searchModules(uri, this.csr.hint.cs, scopes, ident, sv_listener.module_class.module, false);
    let mod  = mods[0];
    let text = [];
    let indent = function (level: number) {
      return " ".repeat(base_indent) + "  ".repeat(level);
    };

    if (mod) {
      let str = `${ident} u${ident} `;
      let params = Object.keys(mod.params);
      if (params.length) {
        str += "#(";
        text.push(str);

        for (let i=0; i<params.length; ++i) {
          str = `${indent(1)}.${params[i]} ()`;
          if (i+1 == params.length) {
            text.push(str);
            str = `${indent(0)}) `;
          }
          else {
            str += ",";
            text.push(str);
            str = `${indent(1)}`
          }
        }
      }

      let ports = Object.keys(mod.ports);
      if (ports.length) {
        str += "(";
        text.push(str);

        for (let i=0; i<ports.length; ++i) {
          str = `${indent(1)}.${ports[i]} ()`;
          if (i+1 == ports.length) {
            text.push(str);
            str = `${indent(0)});`
          }
          else {
            str += ",";
            text.push(str);
            str = `${indent(1)}`
          }
        }

        text.push(str);
      }
    }

    return text.join("\n");
  }
}

