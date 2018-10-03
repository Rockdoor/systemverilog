@echo on

call src/sv_parser/bin/antlr.bat -Xexact-output-dir ^
  -o src/sv_parser/antlr_out ^
  src/sv_parser/grammar/SystemVerilogLexer.g4 ^
  src/sv_parser/grammar/SystemVerilogParser.g4

javac src/sv_parser/antlr_out/*.java

cd src/sv_parser/antlr_out

call ../bin/grun.bat SystemVerilog source_text -tokens %*
REM call ../bin/grun.bat SystemVerilog source_text -gui %*
