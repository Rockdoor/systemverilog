'use strict';

import * as util        from "util";
import * as fs          from "fs";
import * as vscode      from "vscode";
import * as lserv       from "vscode-languageserver";
import * as sv_analyzer from "../sv_parser/sv_analyzer";

import * as path        from "path";
import Uri from "vscode-uri";

////////////////////////////////////////////////////////////////////////////////
// Preparation
////////////////////////////////////////////////////////////////////////////////
let sva        = new sv_analyzer.sv_analyzer();
let connection = lserv.createConnection(
  new lserv.IPCMessageReader(process), 
  new lserv.IPCMessageWriter(process));
let documents  = new lserv.TextDocuments();

let enLogging = false;
let preDefined = [];

documents.listen(connection);

////////////////////////////////////////////////////////////////////////////////
// Global variables
////////////////////////////////////////////////////////////////////////////////
let init_done     = false;
let initial_param = {
  wsroot: null,
  filelist: null,
  urilist: null
};

////////////////////////////////////////////////////////////////////////////////
// Utils.
////////////////////////////////////////////////////////////////////////////////
function serverlog(message?: any) {
  if (enLogging) {
    connection.console.log(message);
  }
}

function scanContent(uri: string, doc: string) {
  serverlog(`${uri}`);
  
  let last = new Date().getTime();
  sva.parseText(uri, doc, preDefined);
  let cur  = new Date().getTime();

  serverlog(`parsed in ${cur - last} msec`);

	connection.sendDiagnostics({
    uri: uri, 
    diagnostics: sva.filedb[uri].err.diags
  });
}

////////////////////////////////////////////////////////////////////////////////
// Response to Initialize
////////////////////////////////////////////////////////////////////////////////
connection.onInitialize((_initializeParams) => {
  serverlog('onInitialize.');

  initial_param.wsroot   = _initializeParams.initializationOptions.wsroot;
  initial_param.filelist = _initializeParams.initializationOptions.filelist;
  initial_param.urilist  = _initializeParams.initializationOptions.urilist;

  return {
    capabilities: {
      textDocumentSync: documents.syncKind,
      hoverProvider: true,
      completionProvider: {
        resolveProvider: true,
        triggerCharacters: ['.', ':']
      },
      signatureHelpProvider: {
        triggerCharacters: ['(', ',']
      },
      documentSymbolProvider: true,
      definitionProvider: true,
      referencesProvider: true,
      // codeLensProvider: {
      //   resolveProvider: true
      // },
      // codeActionProvider: true,
      executeCommandProvider: {
        commands: ["sv.server.instantiateModule"]
      },
    }
  };
});

////////////////////////////////////////////////////////////////////////////////
// Response to file change events
////////////////////////////////////////////////////////////////////////////////
connection.onDidChangeConfiguration((_didChangeConfigurationParams) => {
  serverlog('onDidChangeConfiguration.');

  let serverconf = _didChangeConfigurationParams.settings.svlog.server;

  enLogging = serverconf.enLogging;
  preDefined = serverconf.preDefined;

  serverlog('Pre defines:')
  serverlog(preDefined)

  sva.rootpath = initial_param.wsroot;
  sva.setIncPath(serverconf.includePath);

  let filelists = serverconf.initialFileLists;

  serverlog('File lists:')
  serverlog(filelists)

  for (let filelist of filelists) {
    let flist_path = initial_param.wsroot + "/" + path.dirname(filelist);
    let filenames;

    try {
      filenames = fs.readFileSync(filelist).toString().split("\n");
    }
    catch (err) {
      serverlog("failed to open filelist: " + filelist);
      continue;
    }

    serverlog(filelist)
    serverlog(flist_path)
    serverlog(filenames)

    for (let filename of filenames) {
      if (! filename.trim().length) {
        continue
      }

      filename = flist_path + "/" + filename.trim();
      serverlog(filename)

      let uri = Uri.file(filename);
      let text;

      try {
        text = fs.readFileSync(filename);
      }
      catch(err) {
        serverlog("failed to open source: " + filename);
        continue;
      }

      scanContent(uri.toString(), text.toString());
    }
  }

  if (! filelists.length) {
    for (let i = 0; i < initial_param.filelist.length; ++i) {
      let text = fs.readFileSync(initial_param.filelist[i]);
      scanContent(initial_param.urilist[i], text.toString());
    }
  }

  init_done = true;

  serverlog('Initial scanning finished.');
});


connection.onDidChangeWatchedFiles((_didChangeWatchedFilesParams) => {
  if (! init_done) return;
  serverlog('onDidChangeWatchedFiles.');
});

documents.onDidChangeContent((_didChangeTextDocumentParams) => {
  if (! init_done) return;
  serverlog('onDidChangeContent. ' + _didChangeTextDocumentParams.document.uri);

  // let doc  = _didChangeTextDocumentParams.document;
  // scanContent(doc.uri, doc.getText());
});

documents.onDidOpen((_textDocumentChangeEvent) => {
  if (! init_done) return;
  serverlog('onDidOpen.');
});

documents.onDidSave((_textDocumentChangeEvent) => {
  if (! init_done) return;
  serverlog('onDidSave.');

  let doc  = _textDocumentChangeEvent.document;
  scanContent(doc.uri, doc.getText());
});

////////////////////////////////////////////////////////////////////////////////
// Response to Completion
////////////////////////////////////////////////////////////////////////////////
connection.onCompletion((_textDocumentPosition) => {
  if (! init_done) return;
  serverlog('onCompletion.');

  let ctx   = _textDocumentPosition.context;
  let pos   = _textDocumentPosition.position;
  let uri   = _textDocumentPosition.textDocument.uri;
  let doc   = documents.get(uri);

  scanContent(doc.uri, doc.getText());
  let items = sva.getCompleteItems(uri, pos.line + 1, pos.character);

  return items;
});

connection.onCompletionResolve((item) => {
  serverlog('onCompletionResolve.');
  return item;
});

////////////////////////////////////////////////////////////////////////////////
// Response to Hover
////////////////////////////////////////////////////////////////////////////////
connection.onHover((_textDocumentPositionParams) => {
  if (! init_done) return;
  serverlog('onHover.');
  let uri = _textDocumentPositionParams.textDocument.uri;
  let pos = _textDocumentPositionParams.position;
  let hover = sva.getHoverText(uri, pos.line + 1, pos.character + 1);
  return {
    contents: hover
  };
});

////////////////////////////////////////////////////////////////////////////////
// Response to SignatureHelp
////////////////////////////////////////////////////////////////////////////////
connection.onSignatureHelp((_textDocumentPositionParams) => {
  if (! init_done) return;
  serverlog('onSignatureHelp.');
  let uri = _textDocumentPositionParams.textDocument.uri;
  let pos = _textDocumentPositionParams.position;
  let doc   = documents.get(uri);

  scanContent(doc.uri, doc.getText());
  let sig = sva.getSignatureHelpText(uri, pos.line + 1, pos.character);

  return sig;
});

////////////////////////////////////////////////////////////////////////////////
// Response to DocumentSymbol
////////////////////////////////////////////////////////////////////////////////
connection.onDocumentSymbol((_documentSymbolParams) => {
  if (! init_done) return;
  serverlog('onDocumentSymbol.');
  let uri = _documentSymbolParams.textDocument.uri;
  return sva.getDocumentSymbolInfo(uri);
});

////////////////////////////////////////////////////////////////////////////////
// Response to Definition
////////////////////////////////////////////////////////////////////////////////
connection.onDefinition((_textDocumentPositionParams) => {
  if (! init_done) return;
  serverlog('onDefinition');
  let pos = _textDocumentPositionParams.position;
  let uri = _textDocumentPositionParams.textDocument.uri;

  return sva.getDefinitionLocations(uri, pos.line + 1, pos.character);
});

////////////////////////////////////////////////////////////////////////////////
// Response to Reference
////////////////////////////////////////////////////////////////////////////////
connection.onReferences((_referenceParams) => {
  if (! init_done) return;
  serverlog('onReference');
  let ctx = _referenceParams.context;
  let pos = _referenceParams.position;
  let uri = _referenceParams.textDocument.uri;
  let doc = documents.get(uri).getText();

  let ident = sva.getSimpleIdent(doc, pos.line, pos.character);

  return sva.getReferenceLocations(uri, pos.line + 1, pos.character, ident);
});

////////////////////////////////////////////////////////////////////////////////
// Response to CodeLens
////////////////////////////////////////////////////////////////////////////////
connection.onCodeLens((_codeLensParams) => {
  if (! init_done) return;
  serverlog('onCodeLens.');

  return [
    {
      range: {
        start: {line: 155, character: 21},
        end:   {line: 155, character: 33}
      },
      command: {
        title: "command title",
        command: "command command",
        arguments: []
      },
      data: 0
    }
  ];
});

connection.onCodeLensResolve((_codeLens) => {
  serverlog('onCodeLensResolve.');

  return _codeLens;
});

////////////////////////////////////////////////////////////////////////////////
// Response to CodeAction
////////////////////////////////////////////////////////////////////////////////
connection.onCodeAction((_codeActionParam) => {
  if (! init_done) return;
  serverlog('onCodeAction.');

  let com = lserv.Command.create("ExpandPorts", "sv.ExpandPorts");
  let act = lserv.CodeAction.create("ExpandPorts", com, lserv.CodeActionKind.RefactorInline);

  return [com];
});

connection.onExecuteCommand((_executeCommandParams) => {
  if (! init_done) return;
  serverlog('onExecuteCommand.');

  let param = _executeCommandParams;

  serverlog(param.command);
  serverlog(param.arguments);

  switch(_executeCommandParams.command) {
    case "sv.server.instantiateModule":
      let uri   = param.arguments[0] as string;
      let rng   = param.arguments[1] as vscode.Range;
      let text  = documents.get(uri).getText();
      let scid  = sva.getScopedIdent(text, rng.end.line, rng.end.character);
      let str   = sva.getInstantiateModule(uri, scid.ident, rng.end.line + 1, rng.end.character, scid.start);
      
      let er = lserv.Range.create(lserv.Position.create(rng.start.line, scid.start), lserv.Position.create(rng.end.line, scid.end));
      let te = lserv.TextEdit.replace(er, str);
      let we : lserv.WorkspaceEdit;
      we = {};
      we.changes = {};
      we.changes[uri] = [te];
      connection.workspace.applyEdit(we);
    break;
  }
});

////////////////////////////////////////////////////////////////////////////////
// Start listen
////////////////////////////////////////////////////////////////////////////////
connection.listen();

