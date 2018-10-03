'user strict';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const svp = require("./antlr_out/SystemVerilogParser");
const svx = require("./antlr_out/SystemVerilogLexer");
const util = require("util");
///////////////////////////////////////////////////////////////////////////////
// utils
///////////////////////////////////////////////////////////////////////////////
function objmerge(obj0, obj1) {
    let obj = Object.assign(obj0);
    for (let x in obj1) {
        if (obj1[x] != null) {
            obj[x] = obj1[x];
        }
    }
    return obj;
}
function colrets(rets, p, list = true) {
    if (rets == null)
        return (list) ? [] : null;
    if (!Array.isArray(rets))
        rets = [rets];
    let items = [];
    for (let r of rets) {
        if (p == "")
            items.push(r.text);
        else
            items.push(r[p]);
    }
    return items;
}
class position {
    constructor(l = 0, c = 0) {
        this.line = l;
        this.character = c;
    }
}
exports.position = position;
class region {
    constructor(sl = 0, sc = 0, el = 0, ec = 0) {
        this.start = new position(sl, sc);
        this.end = new position(el, ec);
    }
}
exports.region = region;
function get_region(ctx) {
    if (ctx.start && ctx.stop) {
        return new region(ctx.start.line, ctx.start.charPositionInLine, ctx.stop.line, ctx.stop.charPositionInLine);
    }
    else {
        return new region();
    }
}
class cursor_belong {
}
exports.cursor_belong = cursor_belong;
class cursor_hint {
}
exports.cursor_hint = cursor_hint;
;
class data_decl {
    constructor(uri) {
        this.cs = [];
        this.typedef = false;
        this.pdim = [];
        this.updim = [];
        this.vdim = [];
        this.uri = uri;
        return this;
    }
}
exports.data_decl = data_decl;
class sv_timeunit {
    constructor(val = "", unit = "") {
        this.val = val;
        this.unit = unit;
    }
}
exports.sv_timeunit = sv_timeunit;
var module_class;
(function (module_class) {
    module_class[module_class["global"] = 0] = "global";
    module_class[module_class["package"] = 1] = "package";
    module_class[module_class["class"] = 2] = "class";
    module_class[module_class["module"] = 3] = "module";
    module_class[module_class["tf"] = 4] = "tf";
})(module_class = exports.module_class || (exports.module_class = {}));
class sv_module {
    constructor(mclass, uri) {
        this.cs = [];
        this.class = mclass;
        this.ident = "";
        this.timeunit = { unit: null, prec: null };
        this.pkgs = [];
        this.ports = {};
        this.params = {};
        this.vars = {};
        this.types = {};
        this.blocks = {};
        this.uri = uri;
        this.region = { start: { line: 1, character: 0 }, end: { line: 1, character: 0 } };
    }
}
exports.sv_module = sv_module;
///////////////////////////////////////////////////////////////////////////////
// sv_listener
///////////////////////////////////////////////////////////////////////////////
// exports.listener = class listener extends svlis.SystemVerilogListener {
class sv_listener {
    constructor(uri, line, col) {
        this.uri = uri;
        this.cursor_pos = { line: line, character: col };
        this.cursor_belong = null;
        this.cursor_hint = null;
        this.cs = ["_g_"];
        this.modules = {};
        this.search_ident = null;
        this.ident_locs = [];
        this.modules["_g_"] = new sv_module(module_class.global);
        this.modules["_g_"].ident = "_g_";
        this.modules["_g_"].cs = [];
        this.modules["_g_"].uri = uri;
        return this;
    }
    getCurrentScope() { return this.cs.join("::"); }
    getDB() {
        let mod = this.modules[this.getCurrentScope()];
        if (mod) {
            return this.modules[this.getCurrentScope()];
        }
        else {
            return new sv_module(module_class.global);
        }
    }
    getRuleName(ctx) {
        return svp.SystemVerilogParser.ruleNames[ctx.ruleIndex];
    }
    isCursorIncluded(ctx) {
        let cr_l = this.cursor_pos.line;
        let cr_c = this.cursor_pos.character;
        let st_l = ctx.start.line;
        let st_c = ctx.start.charPositionInLine;
        let ed_l = ctx.stop.line;
        let ed_c = ctx.stop.charPositionInLine + ctx.stop.text.length;
        if (st_l == ed_l)
            return st_l == cr_l && st_c <= cr_c && cr_c <= ed_c;
        if (st_l == cr_l)
            return st_c <= cr_c;
        if (ed_l == cr_l)
            return ed_c >= cr_c;
        return (st_l < cr_l && cr_l < ed_l);
    }
    getIncompleteIdent(node) {
        let ctx = node.parent.ruleContext;
        let idents = [];
        for (let i = node.symbol.tokenIndex; i >= 0; --i) {
            let pre_token = this.tokens.get(i);
            let pre_text = pre_token.text;
            let pre_symbol = svx.SystemVerilogLexer.VOCABULARY.getSymbolicName(pre_token.type);
            if (pre_text == "." || pre_text == "::" || pre_symbol == "IDENT") {
                if (idents.length) {
                    if (idents[0] == "." || idents[0] == "::") {
                        idents.unshift(pre_text);
                    }
                    else {
                        if (pre_symbol == "IDENT")
                            break;
                        else
                            idents.unshift(pre_text);
                    }
                }
                else
                    idents.unshift(pre_text);
            }
            else
                break;
        }
        return idents.join("");
    }
    findHintForCompletion(node) {
        let ctx = node.parent.ruleContext;
        let term = node.symbol.text;
        let rule = svp.SystemVerilogParser.ruleNames[ctx.ruleIndex];
        let name = svx.SystemVerilogLexer.VOCABULARY.getDisplayName(node.symbol.type);
        let lit = svx.SystemVerilogLexer.VOCABULARY.getLiteralName(node.symbol.type);
        let sym = svx.SystemVerilogLexer.VOCABULARY.getSymbolicName(node.symbol.type);
        let ident = this.getIncompleteIdent(node);
        this.cursor_hint = new cursor_hint();
        this.cursor_hint.term = term;
        this.cursor_hint.rule = rule;
        this.cursor_hint.ident = ident;
        this.cursor_hint.cs = this.cs.concat();
        this.cursor_hint.pos = new position(node.symbol.line, node.symbol.charPositionInLine);
    }
    // ==========================================================================
    //
    // ==========================================================================
    enterEveryRule(ctx) { }
    exitEveryRule(ctx) { }
    visitTerminal(node) {
        let cpline = this.cursor_pos.line;
        let cpcol = this.cursor_pos.character;
        let line = node.symbol.line;
        let col = node.symbol.charPositionInLine;
        let len = node.symbol.text.length;
        if (!this.cursor_hint) {
            if (line == cpline && ((col + len) >= cpcol && cpcol >= col)) {
                this.findHintForCompletion(node);
            }
            else if (cpline < line || (cpline == line && cpcol < col)) {
                this.cursor_hint = new cursor_hint();
                this.cursor_hint.term = "";
                this.cursor_hint.rule = "";
                this.cursor_hint.ident = "";
                this.cursor_hint.cs = this.cs.concat();
                this.cursor_hint.pos = new position(cpline, cpcol);
            }
        }
    }
    visitErrorNode(node) {
        let cpline = this.cursor_pos.line;
        let cpcol = this.cursor_pos.character;
        let line = node.symbol.line;
        let col = node.symbol.charPositionInLine;
        let len = node.symbol.text.length;
        if (!this.cursor_hint
            && node.symbol.tokenIndex >= 0
            && line == cpline
            && ((col + len) >= cpcol && cpcol >= col)) {
            this.findHintForCompletion(node);
        }
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitSource_text(ctx) {
    }
    // ==========================================================================
    //
    // ==========================================================================
    enterModule_declaration(ctx) {
    }
    exitModule_declaration(ctx) {
        this.getDB().region = get_region(ctx);
        this.getDB().cs = this.cs.concat();
        this.getDB().cs.pop();
        this.cs.pop();
    }
    enterModule_nonansi_header(ctx) {
        let mod = new sv_module(module_class.module, this.uri);
        mod.ident = ctx.ident().text;
        this.cs.push(mod.ident);
        this.modules[this.cs.join("::")] = mod;
    }
    exitModule_nonansi_header(ctx) {
    }
    enterModule_ansi_header(ctx) {
        let mod = new sv_module(module_class.module, this.uri);
        mod.ident = ctx.ident().text;
        this.cs.push(mod.ident);
        this.modules[this.cs.join("::")] = mod;
    }
    exitModule_ansi_header(ctx) {
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitPackage_import_declaration(ctx) {
        let db = this.getDB();
        let pkgs = colrets(ctx.package_import_item(), "");
        db.pkgs = db.pkgs.concat(pkgs);
    }
    exitParameter_port_list(ctx) {
        let db = this.getDB();
        for (let assigns of colrets(ctx.list_of_param_assignments(), "rets")) {
            for (let param of assigns) {
                param.param = "parameter";
                param.region = get_region(ctx);
                param.cs = this.cs.concat();
                db.params[param.ident] = param;
            }
        }
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitList_of_param_assignments(ctx) {
        ctx["rets"] = [];
        for (let param of colrets(ctx.param_assignment(), "rets")) {
            ctx["rets"].push(param);
        }
    }
    exitParameter_declaration(ctx) {
        let db = this.getDB();
        let decl = ctx.data_type_or_implicit()["rets"];
        let params = ctx.list_of_param_assignments()["rets"];
        for (let param of params) {
            param = objmerge(param, decl);
            param.param = "parameter";
            param.region = get_region(ctx);
            param.cs = this.cs.concat();
            db.params[param.ident] = param;
        }
    }
    exitLocal_parameter_declaration(ctx) {
        let db = this.getDB();
        let decl = ctx.data_type_or_implicit()["rets"];
        let params = ctx.list_of_param_assignments()["rets"];
        for (let param of params) {
            param = objmerge(param, decl);
            param.param = "localparam";
            param.region = get_region(ctx);
            param.cs = this.cs.concat();
            db.params[param.ident] = param;
        }
    }
    exitParam_assignment(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].ident = ctx.ident().text;
        ctx["rets"].updim = colrets(ctx.unpacked_dimension(), "", false);
        ctx["rets"].expr = colrets(ctx.constant_param_expression(), "")[0];
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitAnsi_port_declaration(ctx) {
        let db = this.getDB();
        let nphead = colrets(ctx.net_port_header(), "rets")[0];
        let iphead = colrets(ctx.interface_port_header(), "rets")[0];
        let vphead; // TODO
        let ident = ctx.ident().text;
        let updim = colrets(ctx.unpacked_dimension(), "");
        let expr = colrets(ctx.constant_expression(), "")[0];
        let port = new data_decl(this.uri);
        port = objmerge(port, nphead);
        port = objmerge(port, iphead);
        port = objmerge(port, vphead);
        port.ident = ident;
        port.updim = updim;
        port.expr = expr;
        port.region = get_region(ctx);
        port.cs = this.cs.concat();
        db.ports[ident] = port;
    }
    exitNet_port_header(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].dir = colrets(ctx.port_direction(), "")[0];
        ctx["rets"] = objmerge(ctx["rets"], ctx.net_port_type()["rets"]);
    }
    exitNet_port_type_0(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].data = ctx.ident().text;
    }
    exitNet_port_type_1(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].net = colrets(ctx.NET_TYPE(), "")[0];
        ctx["rets"] = objmerge(ctx["rets"], ctx.data_type_or_implicit()["rets"]);
    }
    exitNet_port_type_2(ctx) {
        ctx["rets"] = new data_decl(this.uri);
    }
    exitInterface_port_header_0(ctx) {
        let idents = colrets(ctx.ident(), "");
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].ident = idents[0];
        ctx["rets"].mport = idents[1];
    }
    exitInterface_port_header_1(ctx) {
        let idents = colrets(ctx.ident(), "");
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].mport = idents[0];
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitList_of_net_decl_assignments(ctx) {
        ctx["rets"] = [];
        for (let val of colrets(ctx.net_decl_assignment(), "rets")) {
            ctx["rets"] = ctx["rets"].concat(val);
        }
    }
    exitNet_decl_assignment(ctx) {
        let updim = colrets(ctx.unpacked_dimension(), "");
        let expr = colrets(ctx.expression(), "")[0];
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].ident = ctx.ident().text;
        ctx["rets"].updim = updim;
        ctx["rets"].expr = expr;
    }
    exitNet_declaration_0(ctx) {
        let db = this.getDB();
        let type = ctx.data_type_or_implicit()["rets"];
        type.net = ctx.NET_TYPE().text;
        type.region = get_region(ctx);
        type.cs = this.cs.concat();
        for (let val of ctx.list_of_net_decl_assignments()["rets"]) {
            db.vars[val.ident] = objmerge(val, type);
        }
    }
    exitNet_declaration_1(ctx) {
        let db = this.getDB();
        let type = new data_decl(this.uri);
        type.user = ctx.ident().text;
        type.region = get_region(ctx);
        type.cs = this.cs.concat();
        for (let val of ctx.list_of_net_decl_assignments()["rets"]) {
            db.vars[val.ident] = objmerge(val, type);
        }
    }
    exitNet_declaration_2(ctx) { }
    // ==========================================================================
    //
    // ==========================================================================
    exitList_of_variable_decl_assignments(ctx) {
        ctx["rets"] = [];
        for (let decl of colrets(ctx.variable_decl_assignment(), "rets")) {
            ctx["rets"] = ctx["rets"].concat(decl);
        }
    }
    exitVariable_decl_assignment(ctx) {
        let vdim = colrets(ctx.variable_dimension(), "");
        let expr = colrets(ctx.expression(), "")[0];
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].ident = ctx.ident().text;
        ctx["rets"].vdim = vdim;
        ctx["rets"].expr = expr;
    }
    exitData_declaration_0(ctx) {
        let db = this.getDB();
        let dtype = ctx.data_type()["rets"];
        if (!dtype)
            dtype = new data_decl(this.uri);
        dtype.life = colrets(ctx.lifetime(), "")[0];
        dtype.const = (ctx._c) ? ctx._c.text : null;
        dtype.var = (ctx._v) ? ctx._v.text : null;
        dtype.region = get_region(ctx);
        dtype.cs = this.cs.concat();
        for (let val of ctx.list_of_variable_decl_assignments()["rets"]) {
            db.vars[val.ident] = objmerge(val, dtype);
        }
    }
    exitData_declaration_1(ctx) { }
    exitData_declaration_2(ctx) { }
    exitData_declaration_3(ctx) { }
    // ==========================================================================
    //
    // ==========================================================================
    exitType_declaration_0(ctx) {
        let type = ctx.data_type()["rets"];
        type.typedef = true;
        type.ident = ctx.ident().text;
        type.vdim = colrets(ctx.variable_dimension(), "");
        type.region = get_region(ctx);
        type.cs = this.cs.concat();
        this.getDB().types[type.ident] = type;
    }
    exitType_declaration_1(ctx) { }
    exitType_declaration_2(ctx) {
        let type = new data_decl();
        type.struct = colrets(ctx.type_declaration_type(), "")[0];
        type.typedef = true;
        type.ident = ctx.ident().text;
        type.region = get_region(ctx);
        type.cs = this.cs.concat();
        this.getDB().types[type.ident] = type;
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitTask_declaration(ctx) {
        let db = this.getDB();
        db.lifetime = colrets(ctx.lifetime(), "")[0];
        db.region = get_region(ctx);
        db.cs = this.cs.concat();
        db.cs.pop();
        this.cs.pop();
    }
    enterTask_body_declaration_0(ctx) {
        ctx["rets"] = {};
    }
    enterTask_body_declaration_1(ctx) {
        let idents = colrets(ctx.ident(), "");
        let cscope = colrets(ctx.class_scope(), "");
        let if_ident, ident;
        if (idents.length >= 2) {
            if_ident = idents[0];
            ident = idents[1];
        }
        else {
            if_ident = null;
            ident = idents[0];
        }
        this.cs.push(ident);
        let name = this.getCurrentScope();
        this.modules[name] = new sv_module(module_class.tf, this.uri);
        this.modules[name].if_ident = if_ident;
        this.modules[name].ident = ident;
        this.modules[name].cscope = cscope[0];
        this.modules[name].tf = "task";
        this.modules[name].ports = {};
        this.modules[name].types = {};
        this.modules[name].params = {};
        this.modules[name].vars = {};
    }
    exitTf_port_item(ctx) {
        let db = this.getDB();
        let dir = colrets(ctx.tf_port_direction(), "")[0];
        let dtype = ctx.data_type_or_implicit()["rets"];
        let ident = colrets(ctx.ident(), "")[0];
        let vdim = colrets(ctx.variable_dimension(), "");
        let expr = colrets(ctx.expression(), "")[0];
        if (ident === undefined) {
            ident = util.format("port_%d_%d", ctx.start.line, ctx.start.charPositionInLine);
        }
        let port = dtype;
        port.dir = dir;
        port.ident = ident;
        port.vdim = vdim;
        port.expr = expr;
        port.region = get_region(ctx);
        port.cs = this.cs.concat();
        db.ports[ident] = port;
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitFunction_data_type_or_implicit(ctx) {
        let dtvoid = colrets(ctx.data_type_or_void(), "rets")[0];
        let dtype = colrets(ctx.implicit_data_type(), "rets")[0];
        if (dtvoid)
            ctx["rets"] = dtvoid;
        else
            ctx["rets"] = dtype;
    }
    exitFunction_declaration(ctx) {
        let db = this.getDB();
        db.lifetime = colrets(ctx.lifetime(), "")[0];
        db.region = get_region(ctx);
        db.cs = this.cs.concat();
        db.cs.pop();
        this.cs.pop();
    }
    enterFunction_body_declaration_0(ctx) {
    }
    enterFunction_body_declaration_1(ctx) {
        let idents = colrets(ctx.ident(), "");
        let cscope = colrets(ctx.class_scope(), "");
        let if_ident, ident;
        if (idents.length >= 2) {
            if_ident = idents[0];
            ident = idents[1];
        }
        else {
            if_ident = null;
            ident = idents[0];
        }
        this.cs.push(ident);
        let name = this.getCurrentScope();
        this.modules[name] = new sv_module(module_class.tf, this.uri);
        this.modules[name].rtype = null;
        this.modules[name].if_ident = if_ident;
        this.modules[name].ident = ident;
        this.modules[name].cscope = cscope[0];
        this.modules[name].tf = "function";
        this.modules[name].ports = {};
        this.modules[name].types = {};
        this.modules[name].params = {};
        this.modules[name].vars = {};
    }
    exitFunction_body_declaration_1(ctx) {
        let db = this.getDB();
        let rtype = ctx.function_data_type_or_implicit()["rets"];
        db.rtype = rtype;
    }
    // ==========================================================================
    //
    // ==========================================================================
    enterTf_call(ctx) {
        if (this.isCursorIncluded(ctx)) {
            this.cursor_belong = new cursor_belong();
            this.cursor_belong.rule = this.getRuleName(ctx);
            this.cursor_belong.sub = null;
            this.cursor_belong.caller = ctx.ps_or_hier_ident().text;
            this.cursor_belong.argnum = 0;
            this.cursor_belong.cs = this.cs.concat();
        }
    }
    exitList_of_arguments(ctx) {
        if (!this.cursor_belong)
            return;
        let commas = ctx.arg_comma();
        for (let i = 0; i < commas.length; ++i) {
            let cr_l = this.cursor_pos.line;
            let cr_c = this.cursor_pos.character;
            let cm_l = commas[i].stop.line;
            let cm_c = commas[i].stop.charPositionInLine;
            if ((cm_l == cr_l && cm_c >= cr_c) || cm_l > cr_l)
                break;
            ++this.cursor_belong.argnum;
        }
    }
    // ==========================================================================
    //
    // ==========================================================================
    enterModule_instantiation(ctx) {
        if (this.isCursorIncluded(ctx)) {
            this.cursor_belong = new cursor_belong();
            this.cursor_belong.rule = this.getRuleName(ctx);
            this.cursor_belong.sub = null;
            this.cursor_belong.caller = ctx.ident().text;
            this.cursor_belong.argnum = 0;
            this.cursor_belong.cs = this.cs.concat();
        }
    }
    exitList_of_parameter_assignments(ctx) {
        if (!this.cursor_belong)
            return;
        if (!this.isCursorIncluded(ctx))
            return;
        this.cursor_belong.sub = this.getRuleName(ctx);
        let commas = ctx.parameter_assign_comma();
        for (let i = 0; i < commas.length; ++i) {
            let cr_l = this.cursor_pos.line;
            let cr_c = this.cursor_pos.character;
            let l = commas[i].stop.line;
            let c = commas[i].stop.charPositionInLine;
            if ((l == cr_l && c >= cr_c) || l > cr_l)
                break;
            ++this.cursor_belong.argnum;
        }
    }
    exitList_of_port_connections(ctx) {
        if (!this.cursor_belong)
            return;
        if (!this.isCursorIncluded(ctx))
            return;
        this.cursor_belong.sub = this.getRuleName(ctx);
        let commas = ctx.port_conn_comma();
        for (let i = 0; i < commas.length; ++i) {
            let cr_l = this.cursor_pos.line;
            let cr_c = this.cursor_pos.character;
            let l = commas[i].stop.line;
            let c = commas[i].stop.charPositionInLine;
            if ((l == cr_l && c >= cr_c) || l > cr_l)
                break;
            ++this.cursor_belong.argnum;
        }
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitSeq_block(ctx) {
        let ident = colrets(ctx.ident(), "")[0];
        if (ident) {
            let db = this.getDB();
            db.blocks[ident] = new data_decl(this.uri);
            db.blocks[ident].ident = ident;
            db.blocks[ident].region = get_region(ctx);
            db.blocks[ident].cs = this.cs.concat();
        }
    }
    // ==========================================================================
    //
    // ==========================================================================
    enterPackage_declaration(ctx) {
        let pkg = new sv_module(module_class.package, this.uri);
        pkg.ident = ctx.ident(0).text;
        this.cs.push(pkg.ident);
        this.modules[this.getCurrentScope()] = pkg;
    }
    exitPackage_declaration(ctx) {
        this.getDB().region = get_region(ctx);
        this.getDB().cs = this.cs.concat();
        this.getDB().cs.pop();
        this.cs.pop();
    }
    // ==========================================================================
    //
    // ==========================================================================
    enterClass_declaration(ctx) {
        let cls = new sv_module(module_class.class, this.uri);
        cls.ident = ctx.ident(0).text;
        this.cs.push(cls.ident);
        this.modules[this.getCurrentScope()] = cls;
    }
    exitClass_declaration(ctx) {
        this.getDB().region = get_region(ctx);
        this.getDB().cs = this.cs.concat();
        this.getDB().cs.pop();
        this.cs.pop();
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitTime_literal(ctx) {
        ctx["rets"] = new sv_timeunit(ctx.UNSIGNED_NUMBER().text, ctx.TIME_UNIT().text);
    }
    exitTimeunits_declaration_0(ctx) {
        let db = this.getDB();
        db.timeunit.unit = ctx.time_literal(0)["rets"];
        db.timeunit.unit = (ctx.time_literal(1)) ? ctx.time_literal(1)["rets"] : undefined;
    }
    exitTimeunits_declaration_1(ctx) {
        let db = this.getDB();
        db.timeunit.prec = ctx.time_literal()["rets"];
    }
    exitTimeunits_declaration_2(ctx) {
        let db = this.getDB();
        db.timeunit.unit = ctx.time_literal(0)["rets"];
        db.timeunit.prec = ctx.time_literal(1)["rets"];
    }
    exitTimeunits_declaration_3(ctx) {
        let db = this.getDB();
        db.timeunit.unit = ctx.time_literal(1)["rets"];
        db.timeunit.prec = ctx.time_literal(0)["rets"];
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitData_type_or_implicit(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"] = objmerge(ctx["rets"], colrets(ctx.implicit_data_type(), "rets")[0]);
        ctx["rets"] = objmerge(ctx["rets"], colrets(ctx.data_type(), "rets")[0]);
    }
    exitImplicit_data_type(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].sign = colrets(ctx.SIGNING(), "");
        ctx["rets"].pdim = colrets(ctx.packed_dimension(), "");
    }
    exitData_type_0(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].data = ctx.INTEGER_VECTOR_TYPE().text;
        ctx["rets"].sign = colrets(ctx.SIGNING(), "", true)[0];
        ctx["rets"].pdim = colrets(ctx.packed_dimension(), "");
    }
    exitData_type_1(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].data = ctx.INTEGER_ATOM_TYPE().text;
        ctx["rets"].sign = colrets(ctx.SIGNING(), "")[0];
        ctx["rets"].pdim = null;
    }
    exitData_type_2(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].data = ctx.NON_INTEGER_TYPE().text;
        ctx["rets"].sign = null;
        ctx["rets"].pdim = null;
    }
    exitData_type_3(ctx) {
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].data = ctx.struct_union().text;
        ctx["rets"].pack = (ctx._p) ? ctx._p.text : null;
        ctx["rets"].sign = colrets(ctx.SIGNING(), "")[0];
        ctx["rets"].pdim = colrets(ctx.packed_dimension(), "");
        ctx["rets"].mem = {};
        for (let mem of colrets(ctx.struct_union_member(), "rets")) {
            ctx["rets"].mem = Object.assign(ctx["rets"].mem, mem);
        }
    }
    exitData_type_4(ctx) {
        ctx["rets"] = new data_decl(this.uri);
    }
    exitData_type_5(ctx) {
        ctx["rets"] = new data_decl(this.uri);
    }
    exitData_type_6(ctx) {
        ctx["rets"] = new data_decl(this.uri);
    }
    exitData_type_7(ctx) {
        ctx["rets"] = new data_decl(this.uri);
    }
    exitData_type_8(ctx) {
        let cscope = colrets(ctx.class_scope(), "")[0];
        let pscope = colrets(ctx.package_scope(), "")[0];
        let scope;
        if (cscope)
            scope = cscope;
        else if (pscope)
            scope = pscope;
        else
            scope = null;
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].scope = scope;
        ctx["rets"].user = ctx.ident().text;
        ctx["rets"].pdim = colrets(ctx.packed_dimension(), "");
    }
    exitData_type_9(ctx) {
        ctx["rets"] = new data_decl(this.uri);
    }
    exitData_type_10(ctx) {
        ctx["rets"] = new data_decl(this.uri);
    }
    exitData_type_11(ctx) {
        let ident = ctx.ps_ident().text;
        let ids = ident.split("::");
        let scope;
        if (ids.length >= 2)
            scope = ids.slice(0, ids.length - 2);
        else
            scope = [];
        ctx["rets"] = new data_decl(this.uri);
        ctx["rets"].scope = scope;
        ctx["rets"].user = ids[ids.length - 1];
    }
    exitData_type_12(ctx) {
        ctx["rets"] = new data_decl(this.uri);
    }
    exitData_type_or_void(ctx) {
        let type = colrets(ctx.data_type(), "rets")[0];
        ctx["rets"] = (type) ? type : { data: "void" };
    }
    exitStruct_union_member(ctx) {
        let type = ctx.data_type_or_void()["rets"];
        type.rand = colrets(ctx.RANDOM_QUALIFIER(), "")[0];
        type.region = get_region(ctx);
        type.cs = this.cs.concat();
        ctx["rets"] = {};
        for (let decl of ctx.list_of_variable_decl_assignments()["rets"]) {
            decl = objmerge(decl, type);
            ctx["rets"][decl.ident] = decl;
        }
    }
    // ==========================================================================
    //
    // ==========================================================================
    exitIdent(ctx) {
        if (!this.search_ident)
            return;
        let ident = ctx.IDENT();
        if (this.search_ident == ident.text) {
            this.ident_locs.push({
                start: { line: ident.symbol.line, character: ident.symbol.charPositionInLine },
                end: { line: ident.symbol.line, character: ident.symbol.charPositionInLine + ident.symbol.text.length }
            });
        }
    }
}
exports.sv_listener = sv_listener;
//# sourceMappingURL=sv_listener.js.map