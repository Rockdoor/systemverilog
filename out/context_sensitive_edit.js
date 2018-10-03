'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function getSimpleIdent(line, column) {
    let i;
    for (i = column; i >= 0; --i) {
        if (!/[_a-zA-Z0-9]/.test(line[i])) {
            break;
        }
    }
    let start = i + 1;
    for (i = column; i <= line.length; ++i) {
        if (!/[_a-zA-Z0-9]/.test(line[i])) {
            break;
        }
    }
    let end = i - 1;
    return { ident: line.slice(start, end + 1), start, end };
}
function instantiateModule() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!vscode.window.activeTextEditor) {
            vscode.window.showInformationMessage("Open files first!");
            return;
        }
        let e = vscode.window.activeTextEditor;
        let d = e.document;
        let ss = e.selections;
        let s = ss[0];
        let c = s.active;
        let st = s.start.line;
        let ed = s.end.line;
        let uri = vscode.Uri.file(d.fileName).toString();
        let rng = s;
        yield vscode.commands.executeCommand('sv.server.instantiateModule', uri, rng);
        // let hover = (await vscode.commands.executeCommand(
        //   'vscode.executeHoverProvider', uri, pos
        // )) as vscode.Hover;
        // let line  = d.lineAt(pos.line).text;
        // let ident = getSimpleIdent(line, pos.character);
    });
}
exports.instantiateModule = instantiateModule;
//# sourceMappingURL=context_sensitive_edit.js.map