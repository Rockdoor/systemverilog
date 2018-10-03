'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode   from 'vscode';
import * as vsclient from 'vscode-languageclient';
import * as path     from 'path';

import * as si       from './smart_indent';
import * as cse      from './context_sensitive_edit';


// ============================================================================
// Activation callback
// ============================================================================
export async function activate(ctx: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "systemverilog" is now active!');

  	// The server is implemented in node
    let serverModule = ctx.asAbsolutePath(path.join('out', 'server', 'server.js'));
	  // The debug options for the server
    let debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };
    
    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    let serverOptions: vsclient.ServerOptions = {
      run : { module: serverModule, transport: vsclient.TransportKind.ipc },
      debug: { module: serverModule, transport: vsclient.TransportKind.ipc, options: debugOptions }
    }

    let wsroot = vscode.workspace.rootPath;
    let urilist = [];
    let filelist = [];


    await vscode.workspace.findFiles("**/*.{v,sv,vh,svh}").then((uris: vscode.Uri[]) => {
      uris.forEach((value: vscode.Uri, index: number, array: vscode.Uri[]) => {
        urilist.push(value.toString());
        filelist.push(value.fsPath);
      })
    });

    // Options to control the language client
    let clientOptions: vsclient.LanguageClientOptions = {
      documentSelector: [{scheme: 'file', language: 'sv'}],
      synchronize: {
        configurationSection: 'svlog',
        fileEvents: vscode.workspace.createFileSystemWatcher('**/*.{v,sv,vh,svh}')
      },
      initializationOptions: {
        wsroot,
        urilist,
        filelist
      }
    }

    let com = vscode.commands;
    let reg = com.registerCommand;
    let exe = com.executeCommand;
    let sub = ctx.subscriptions;

    sub.push(reg("sv.smartIndent",                si.smartIndent));
    sub.push(reg("sv.alignComment",               si.alignLineComment));
    sub.push(reg("sv.alignOpenParen",             si.alignOpenParen));
    sub.push(reg("sv.alignEqual",                 si.alignEqual));
    sub.push(reg("sv.alignRegExpWithInput",       si.alignRegExpWithInput));
    sub.push(reg("sv.deleteTrailingWhiteSpaces",  si.deleteTrailingWhiteSpaces));
    sub.push(reg("sv.convPortDeclToConn",         si.convPortDeclToConn));
    sub.push(reg("sv.convPortDeclToConnImplicit", si.convPortDeclToConnImplicit));
    sub.push(reg("sv.convPortDeclToSignal",       si.convPortDeclToSignal));
    sub.push(reg("sv.convPortDeclToNextSignal",   si.convPortDeclToNextSignal));
    sub.push(reg("sv.convSignalDeclToReset",      si.convSignalDeclToReset));
    sub.push(reg("sv.convSignalDeclToBReset",     si.convSignalDeclToBReset));
    sub.push(reg("sv.convResetToUpdate",          si.convResetToUpdate));
    sub.push(reg("sv.convResetToNext",            si.convResetToNext));
    sub.push(reg("sv.incSelectedNumbers",         si.incSelectedNumbers));
    sub.push(reg("sv.insSeqNumber",               si.insSeqNumber));
    sub.push(reg("sv.swapPortDirection",          si.swapPortDirection));
    sub.push(reg("sv.labelComment",               si.labelComment));

    sub.push(reg("sv.instantiateModule",          cse.instantiateModule))

    // Create the language client and start the client.
    let disposable = new vsclient.LanguageClient('svlog', 'Language server for SystemVerilog', serverOptions, clientOptions).start();

    sub.push(disposable);
}


// ============================================================================
// Deactivation callback
// ============================================================================
export function deactivate() {
}

