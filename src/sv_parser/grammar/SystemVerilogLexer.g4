// SystemVerilog grammer
lexer grammar SystemVerilogLexer;

channels { CH_PP, CH_COMMENT }

// =============================================================================
// Preprocessor
// =============================================================================
BACKQUOTE: '`' -> more, pushMode(MODE_PPTYPE);

// =============================================================================
// Keywords
// =============================================================================
MODULE_KEYWORD: 'module' | 'macromodule';

ENDMODULE: 'endmodule';
INTERFACE: 'interface';
ENDINTERFACE: 'endinterface';
CLASS: 'class';
ENDCLASS: 'endclass';
PACKAGE: 'package';
ENDPACKAGE: 'endpackage';
PROGRAM: 'program';
ENDPROGRAM: 'endprogram';
GENERATE: 'generate';
ENDGENERATE: 'endgenerate';
TASK: 'task';
ENDTASK: 'endtask';
FUNCTION: 'function';
ENDFUNCTION: 'endfunction';

CLOCKING: 'clocking';
MODPORT: 'modport';
TIMEUNIT: 'timeunit';
TIMEPRECISION: 'timeprecision';
IMPLEMENTS: 'implements';

ALIAS: 'alias';
ASSIGN: 'assign';
DEASSIGN: 'deassign';
FORCE: 'force';
RELEASE: 'release';
DEFPARAM: 'defparam';

INITIAL: 'initial';
FOREVER: 'forever';
REPEAT: 'repeat';

ALWAYS_KEYWORD: 'always_comb' | 'always_latch' | 'always_ff' | 'always';

IF: 'if';
ELSE: 'else';

FOREACH: 'foreach';
FOR: 'for';
WHILE: 'while';
DO: 'do';

RETURN: 'return';
BREAK: 'break';
CONTINUE: 'continue';

WAIT: 'wait';
WAITORDER: 'wait_order';

CASE_KEYWORD: 'case' | 'casex' | 'casez';
ENDCASE: 'endcase';


DEFAULT: 'default';
PRIORITY: 'priority';
UNIQUE: 'unique';
UNIQUE0: 'unique0';

INSIDE: 'inside';
WITH: 'with';
MATCHES: 'matches';

ASSERT: 'assert';
ASSUME: 'assume';
COVER: 'cover';
FINAL: 'final';

FORK: 'fork';
FORKJOIN: 'forkjoin';
DISABLE: 'disable';
EXTERN: 'extern';

BEGIN: 'begin';
END: 'end';

DIST: 'dist';

NEW: 'new';

VIRTUAL: 'virtual';
PURE: 'pure';
EXTENDS: 'extends';

STATIC: 'static';
AUTOMATIC: 'automatic';
PROTECTED: 'protected';
LOCAL: 'local';

TYPEDEF: 'typedef';
NETTYPE: 'nettype';

IMPORT: 'import';
EXPORT: 'export';

THIS: 'this';
SUPER: 'super';
THISSUPER: 'this.super';

CHANDLE: 'chandle';
EVENT: 'event';
ONESTEP: '1step';

CLASS_ROOT: '$root.';
SCOPE_UNIT: '$unit::';
SCOPE_LOCAL: 'local::';
SCOPE_STD: 'std::';
SCOPE_FORALL: '*::*';

DOL_FATAL: '$fatal';
DOL_ERROR: '$error';
DOL_WARNING: '$warning';
DOL_INFO: '$info';

// =============================================================================
// TYPE
// =============================================================================
POSEDGE: 'posedge';
NEGEDGE: 'negedge';
EDGE: 'edge';

REF: 'ref';
INPUT: 'input';
OUTPUT: 'output';
INOUT: 'inout';

CONSTRAINT: 'constraint';
CONST: 'const';
PARAMETER: 'parameter';
LOCALPARAM: 'localparam';

SIGNING: 'signed' | 'unsigned';

STRING: 'string';

INTEGER_ATOM_TYPE:   'byte' | 'shortint' | 'int' | 'longint' | 'integer' | 'time';
INTEGER_VECTOR_TYPE: 'bit' | 'logic' | 'reg';
NON_INTEGER_TYPE:    'shortreal' | 'real' | 'realtime';
NET_TYPE:            'supply0' | 'supply1' | 'tri' | 'triand' | 'trior' | 'trireg' |
                     'tri0' | 'tri1' | 'uwire' | 'wire' | 'wand' | 'wor';


INTERCONNECT: 'interconnect';

VAR: 'var';
GENVAR: 'genvar';
IFF: 'iff';
RANDOMIZE: 'randomize';

RANDOM_QUALIFIER: 'rand' | 'randc';

VOID: 'void';
NULL: 'null';
TYPE: 'type';

ENUM: 'enum';

TAGGED: 'tagged';
STRUCT: 'struct';
UNION: 'union';

PACKED: 'packed';
UNPACKED: 'unpacked';

SOLVE: 'solve';
SOFT: 'soft';
BEFORE: 'before';

TIME_UNIT: 's' | 'ms' | 'us' | 'ns' | 'ps' | 'fs';

// =============================================================================
// PAREN
// =============================================================================
OP_PRN: '(';
CL_PRN: ')';
OP_BRC: '{';
CL_BRC: '}';
OP_BRK: '[';
CL_BRK: ']';

OP_CAST: '\'(';
OP_PATTERN: '\'{';


// =============================================================================
// OPERATORS
// =============================================================================
QUO: '\'';
COLON: ':';
SEMIC: ';';

DOT: '.';
COM: ',';
AT: '@';
EQ: '=';
QUES: '?';
XOR: '^';
OR: '|';
AND: '&';
INV: '~';
NOT: '!';
MINUS: '-';
PLUS: '+';
MULT: '*';
DIV: '/';
MOD: '%';
GT: '>';
LT: '<';

DOL: '$';
SHP: '#';

SHPSHP: '##';
SHPZERO: '#0';

ANDANDAND: '&&&';

MINUSGT: '->';
MINUSGTGT: '->>';

DISTW_EQ: ':=';
DISTW_SL: ':/';

ARR_XOR: 'xor';
ARR_AND: 'and';
ARR_OR: 'or';

SCOPE: '::';
FORALL: '.*';

PLUSCOLON: '+:';
MINUSCOLON: '-:';

LTLTLTEQ: '<<<=';
GTGTGTEQ: '>>>=';
LTLTEQ: '<<=';
GTGTEQ: '>>=';
PLUSEQ: '+=';
MINUSEQ: '-=';
MULTEQ: '*=';
DIVEQ: '/=';
MODEQ: '%=';
ANDEQ: '&=';
OREQ: '|=';
XOREQ: '^=';

INVXOR: '~^';
INVAND: '~&';
INVOR: '~|';

EQEQQUES: '==?';
NOTEQQUES: '!=?';
EQEQEQ: '===';
NOTEQEQ: '!==';
GTGTGT: '>>>';
LTLTLT: '<<<';
LTMINUSGT: '<->';
EQEQ: '==';
NOTEQ: '!=';
ANDAND: '&&';
OROR: '||';
MULTMULT: '**';
LTEQ: '<=';
GTEQ: '>=';
XORINV: '^~';
GTGT: '>>';
LTLT: '<<';

PLUSPLUS: '++';
MINUSMINUS: '--';


// =============================================================================
// Numbers
// =============================================================================
BINARY_NUMBER:  SIZE? BINARY_BASE BINARY_VALUE;
OCTAL_NUMBER:   SIZE? OCTAL_BASE OCTAL_VALUE;
HEX_NUMBER:     SIZE? HEX_BASE HEX_VALUE;
SIZED_UNSIGNED: SIZE? DECIMAL_BASE UNSIGNED_NUMBER;

FIXED_POINT_NUMBER: UNSIGNED_NUMBER '.' UNSIGNED_NUMBER;
SCIENCE_NUMBER: UNSIGNED_NUMBER ('.' UNSIGNED_NUMBER)? EXP SIGN? UNSIGNED_NUMBER;

UNSIGNED_NUMBER: DECIMAL_DIGIT ('_' | DECIMAL_DIGIT)*;

UNBASED_UNSIZED_LITERAL: '\'' ([01] | Z_OR_X);


// =============================================================================
// String
// =============================================================================
STRING_LITERAL: '"' (~["] | '\\' ["])* '"';


// =============================================================================
// Identifiers
// =============================================================================
SYSTEM_TF_IDENT: '$' [a-zA-Z0-9_$]+;

// HIER_IDENT: '$root.'? (IDENT '.')+ IDENT;
IDENT: SIMPLE_IDENT | ESCAPED_IDENT;
// SIMPLE_IDENT: [`a-zA-Z_] [`a-zA-Z0-9_$]*;
SIMPLE_IDENT: [a-zA-Z_] [a-zA-Z0-9_$]*;
ESCAPED_IDENT: '\\' ~[ ]+ WS;


// =============================================================================
// Blanks
// =============================================================================
WS:            [ \t\r\n]+               -> channel(HIDDEN);
LINE_COMMENT:  '//' ~[\r\n]* '\r'? '\n' -> channel(CH_COMMENT);
BLOCK_COMMENT: '/*' .*? '*/'            -> channel(CH_COMMENT);


// =============================================================================
// Helper rules (INV expected to match)
// =============================================================================
fragment WSN:  [ \t\r\n]*;

fragment EXP:  [eE];
fragment SIGN: [+-];

fragment ZERO_OR_ONE: [01];
fragment Z_OR_X:      [xXzZ];
fragment X_DIGIT:     [xX];
fragment Z_DIGIT:     [zZ];

fragment DECIMAL_DIGIT:          [0-9];
fragment NON_ZERO_DECIMAL_DIGIT: [1-9];
fragment BINARY_DIGIT:           X_DIGIT | Z_DIGIT | [0-1];
fragment OCTAL_DIGIT:            X_DIGIT | Z_DIGIT | [0-7];
fragment HEX_DIGIT:              X_DIGIT | Z_DIGIT | [0-9a-fA-F];

fragment DECIMAL_BASE: '\'' [sS]? [dD];
fragment BINARY_BASE:  '\'' [sS]? [bB];
fragment OCTAL_BASE:   '\'' [sS]? [oO];
fragment HEX_BASE:     '\'' [sS]? [hH];

fragment BINARY_VALUE: BINARY_DIGIT ('_' | BINARY_DIGIT)*;
fragment OCTAL_VALUE:  OCTAL_DIGIT ('_' | OCTAL_DIGIT)*;
fragment HEX_VALUE:    HEX_DIGIT ('_' | HEX_DIGIT)*;

fragment SIZE: UNSIGNED_NUMBER;


// =============================================================================
// Preprocessor mode
// =============================================================================

mode MODE_PPTYPE; // -----------------------------------------------------------

PP_DEFINE: 'define'                   -> channel(CH_PP), mode(MODE_DF);
PP_UNDEF:  'undef'                    -> channel(CH_PP), mode(MODE_PP);
PP_INCLUDE: 'include'                 -> channel(CH_PP), mode(MODE_PP);
PP_TIMESCALE: 'timescale'             -> channel(CH_PP), mode(MODE_PP);
PP_DEFAULT_NETTYPE: 'default_nettype' -> channel(CH_PP), mode(MODE_PP);
PP_IFDEF: 'ifdef'                     -> channel(CH_PP), mode(MODE_PP);
PP_IFNDEF: 'ifndef'                   -> channel(CH_PP), mode(MODE_PP);
PP_ELSE: 'else'                       -> channel(CH_PP), mode(MODE_PP);
PP_ELIF: 'elif'                       -> channel(CH_PP), mode(MODE_PP);
PP_ENDIF: 'endif'                     -> channel(CH_PP), mode(MODE_PP);

PP_CALL_NOARG: SIMPLE_IDENT           -> channel(CH_PP), popMode;
PP_CALL_ARG: SIMPLE_IDENT '('         -> channel(CH_PP), mode(MODE_PPCL);

mode MODE_PP; // ---------------------------------------------------------------

PP_WS: [ \t]+                         -> channel(HIDDEN); 
PP_NL: '\r'? '\n'                     -> channel(HIDDEN), popMode;

PP_DIV: DIV                           -> channel(CH_PP);
PP_DEFAULT_NETTYPE_VALUE:
  ('none' | 'wire' | 'reg' | 'logic') -> channel(CH_PP);

PP_STRING: STRING_LITERAL             -> channel(CH_PP);
PP_UNSIGNED_NUMBER: UNSIGNED_NUMBER   -> channel(CH_PP);
PP_TIME_UNIT: TIME_UNIT               -> channel(CH_PP);

PP_IDENT: SIMPLE_IDENT                -> channel(CH_PP);

PP_LINE_COMMENT:  '//' ~[\r\n]* '\r'? '\n' -> channel(CH_COMMENT);
PP_BLOCK_COMMENT: '/*' .*? '*/'            -> channel(CH_COMMENT);

mode MODE_PPCL; // -------------------------------------------------------------

PPCL_WS: [ \t]+                       -> channel(HIDDEN); 

PPCL_CL_PRN: CL_PRN                   -> channel(CH_PP), popMode;
PPCL_COM: COM                         -> channel(CH_PP);

PPCL_IDENT: SIMPLE_IDENT              -> channel(CH_PP);

mode MODE_DF; // ---------------------------------------------------------------

DF_WS: [ \t]+                         -> channel(HIDDEN); 
DF_NL: '\r'? '\n'                     -> channel(HIDDEN), popMode;

DF_MACRO_NAME_NOARG: DF_IDENT DF_WS   -> channel(CH_PP), pushMode(MODE_DFTX);
DF_MACRO_NAME_ARG: DF_IDENT '('       -> channel(CH_PP), pushMode(MODE_DFAG);

DF_IDENT: SIMPLE_IDENT                -> channel(CH_PP);

mode MODE_DFAG; // -------------------------------------------------------------

DFAG_WS: [ \t]+                       -> channel(HIDDEN); 
DFAG_NL: '\r'? '\n'                   -> channel(HIDDEN), popMode;

DFAG_CL_PRN: CL_PRN DF_WS             -> channel(CH_PP), mode(MODE_DFTX);
DFAG_COM: COM                         -> channel(CH_PP);
DFAG_EQ: EQ                           -> channel(CH_PP);

DFAG_IDENT: SIMPLE_IDENT              -> channel(CH_PP);

mode MODE_DFTX; // -------------------------------------------------------------

DFTX_MACRO_TEXT:
  ('\\' '\r'? '\n' | ~('\n' | '\r'))+ -> channel(CH_PP), popMode;
