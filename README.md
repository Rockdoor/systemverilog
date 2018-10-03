# SystemVerilog extension for VSCode

This extension offers:
* A SystemVerilog(SV) parser
  * collecting information of ports, variables, tasks, functions, modules, packages, and classes
  * generating syntactical diagnosis (not contextual)
* IntelliSense connection by a language server, which responds to
  * hover
  * completion
  * signatureHelp
  * documentSymbol
  * definition
  * references
* SV specific commands
* auto indentation with aligning

# Setup the extension
After you clone the repositiory, you should run vscode tasks.

```
[Ctrl+T]
npm: init-setup
```

npm install and post install will run.
Now you can use the extension.

Furthermore, if you want to develop or customize the extension, 

```
[Ctrl+T]
gen_parser
```

Parser *.ts are generated from grammer files.


# Parsing
## Diagnosis

## Collecting information

## Supporting grammer

# Hover

# Completion

# Signature help

# Document symbol

# Definition

# References

# Commands

## Client-executing commands
### Aligns

### Convert declarations

### Miscellaneous


## Server-executing commands
### Instatiate module

# Smart indentation

