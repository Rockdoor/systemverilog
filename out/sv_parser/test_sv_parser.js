'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const sv_analyzer = require("./sv_analyzer");
const default_input = './example/keccak_256.sv';
let file;
if (process.argv.length > 2)
    file = process.argv[2];
else
    file = default_input;
let input = fs.readFileSync(file, 'utf8');
let last = +new Date();
let analyzer = new sv_analyzer.sv_analyzer();
let line = 104;
let char = 8;
analyzer.parseText(file, input);
let scid = analyzer.getScopedIdent(input, line - 1, char - 1);
let ident = scid.ident;
let hover = analyzer.getHoverText(file, line, char - 1);
// let sig = analyzer.getSignatureHelpText(file, line, char-1);
// let comp = analyzer.getCompleteItems(file, line, char-1);
// let sym = analyzer.getDocumentSymbolInfo(file);
// let ref = analyzer.getReferenceLocations(file, line, char-1, ident);
let modinst = analyzer.getInstantiateModule(file, ident, line, char - 1, 2);
let cur = +new Date();
console.log(`runtime = ${cur - last} [ms]`);
//# sourceMappingURL=test_sv_parser.js.map