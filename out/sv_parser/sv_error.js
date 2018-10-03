'user strict';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscls = require("vscode-languageserver");
///////////////////////////////////////////////////////////////////////////////
// utils
///////////////////////////////////////////////////////////////////////////////
class diag_msg {
}
exports.diag_msg = diag_msg;
///////////////////////////////////////////////////////////////////////////////
// sv_error
///////////////////////////////////////////////////////////////////////////////
class sv_error {
    constructor() {
        this.diags = [];
        return this;
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        let diag = {};
        diag["severity"] = vscls.DiagnosticSeverity.Error;
        diag["range"] = {
            start: { line: line - 1, character: charPositionInLine },
            end: { line: line - 1, character: charPositionInLine }
        };
        diag["message"] = msg;
        diag["source"] = "sv_parser";
        this.diags.push(diag);
    }
}
exports.sv_error = sv_error;
//# sourceMappingURL=sv_error.js.map