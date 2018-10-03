'user strict';

import * as vscls from "vscode-languageserver";
import * as pg    from "antlr4ts";
import * as util  from "util";


///////////////////////////////////////////////////////////////////////////////
// utils
///////////////////////////////////////////////////////////////////////////////
export class diag_msg {
  severity: number;
  range:    {start: {line:number,character:number}, end:{line:number,character:number}};
  message:  string;
  source:   string;
}


///////////////////////////////////////////////////////////////////////////////
// sv_error
///////////////////////////////////////////////////////////////////////////////
export class sv_error implements pg.ANTLRErrorListener<number> {
  diags: any;

  constructor() {
    this.diags = [];

    return this;
  }

  syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    let diag = {};
    diag["severity"] = vscls.DiagnosticSeverity.Error;
    diag["range"]    = {
      start: {line: line - 1, character: charPositionInLine},
      end:   {line: line - 1, character: charPositionInLine}
    }
    diag["message"]  = msg;
    diag["source"]   = "sv_parser";

    this.diags.push(diag);
  }
}



