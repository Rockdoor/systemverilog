'use strict';

import * as vscode   from 'vscode';
import * as vsclient from 'vscode-languageclient';



function getSimpleIdent(line: string, column: number) {
  let i;
  for(i = column; i >= 0; --i) {
    if (! /[_a-zA-Z0-9]/.test(line[i])) {
      break;
    }
  }
  let start = i+1;

  for (i = column; i <= line.length; ++i) {
    if (! /[_a-zA-Z0-9]/.test(line[i])) {
      break;
    }
  }
  let end = i-1;

  return {ident: line.slice(start, end+1), start, end};
}


export async function instantiateModule() {
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

  await vscode.commands.executeCommand(
    'sv.server.instantiateModule',
    uri, rng
  );

  // let hover = (await vscode.commands.executeCommand(
  //   'vscode.executeHoverProvider', uri, pos
  // )) as vscode.Hover;

  // let line  = d.lineAt(pos.line).text;
  // let ident = getSimpleIdent(line, pos.character);
}
