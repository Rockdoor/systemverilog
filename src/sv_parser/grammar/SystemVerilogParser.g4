// SystemVerilog grammer
parser grammar SystemVerilogParser;

options { tokenVocab=SystemVerilogLexer; }



////////////////////////////////////////////////////////////////////////////////
// Parser rules
////////////////////////////////////////////////////////////////////////////////

// =============================================================================
// 1.2 SystemVerilog source text
// =============================================================================
source_text: timeunits_declaration? description* EOF;

description:
  module_declaration
| interface_declaration
// | program_declaration
| package_declaration
| package_item
// | bind_directive
// | config_declaration
;

module_nonansi_header:
  MODULE_KEYWORD lifetime? ident package_import_declaration* parameter_port_list? list_of_ports SEMIC
;

module_ansi_header:
  MODULE_KEYWORD lifetime? ident package_import_declaration* parameter_port_list? list_of_port_declarations? SEMIC
;

module_declaration:
  module_ansi_header timeunits_declaration? non_port_module_item* ENDMODULE (COLON ident)?
| module_nonansi_header timeunits_declaration? module_item* ENDMODULE (COLON ident)?
| MODULE_KEYWORD lifetime? ident OP_PRN FORALL CL_PRN SEMIC timeunits_declaration? module_item* ENDMODULE (COLON ident)?
;

interface_declaration:
  interface_nonansi_header timeunits_declaration? interface_item* ENDINTERFACE (COLON ident)?
  interface_ansi_header timeunits_declaration? non_port_interface_item* ENDINTERFACE (COLON ident)?
;

interface_nonansi_header:
  INTERFACE lifetime? ident package_import_declaration* parameter_port_list? list_of_ports SEMIC
;

interface_ansi_header:
  INTERFACE lifetime? ident package_import_declaration* parameter_port_list? list_of_port_declarations? SEMIC
;

class_declaration:
  VIRTUAL? CLASS lifetime? ident parameter_port_list?
  (EXTENDS class_type (OP_PRN list_of_arguments CL_PRN)?)?
  (IMPLEMENTS interface_class_type (COM interface_class_type)*)?
  SEMIC
  class_item*
  ENDCLASS (COLON ident)?
;

interface_class_type:
  ps_ident parameter_value_assignment?
;

interface_class_declaration:
  INTERFACE CLASS ident parameter_port_list?
  (EXTENDS interface_class_type (COM interface_class_type)*)?
  SEMIC
  interface_class_item*
  ENDCLASS (COLON ident)?
;

interface_class_item:
  type_declaration
| interface_class_method
| local_parameter_declaration SEMIC
| parameter_declaration SEMIC
| SEMIC
;

interface_class_method:
  PURE VIRTUAL method_prototype SEMIC
;

package_declaration:
  PACKAGE lifetime? ident SEMIC timeunits_declaration? package_item* ENDPACKAGE (COLON ident)?
;

timeunits_declaration:
  TIMEUNIT time_literal (DIV time_literal)? SEMIC               # timeunits_declaration_0
| TIMEPRECISION time_literal SEMIC                              # timeunits_declaration_1
| TIMEUNIT time_literal SEMIC TIMEPRECISION time_literal SEMIC  # timeunits_declaration_2
| TIMEPRECISION time_literal SEMIC TIMEUNIT time_literal SEMIC  # timeunits_declaration_3
;

// =============================================================================
// 1.3 Module ports
// =============================================================================
parameter_port_list:
  SHP OP_PRN list_of_param_assignments (COM parameter_port_declaration)* CL_PRN
| SHP OP_PRN parameter_port_declaration (COM parameter_port_declaration)* CL_PRN
| SHP OP_PRN CL_PRN
;

parameter_port_declaration:
  parameter_declaration
| local_parameter_declaration
| TYPE list_of_type_assignments
;

list_of_ports: OP_PRN port (COM port)* CL_PRN;

list_of_port_declarations: 
  OP_PRN (ansi_port_declaration (COM ansi_port_declaration)*)? CL_PRN
;

port_declaration:
  inout_declaration
| input_declaration
| output_declaration
| ref_declaration
| interface_port_declaration
;

// *NOTE: actually "port_expression?" for all
port:
  port_expression
| DOT ident OP_PRN port_expression CL_PRN
;

port_expression:
  port_reference
| (port_reference (COM port_reference)*)*
;

port_reference: ident constant_select;

port_direction: INPUT | OUTPUT | INOUT | REF;

// *NOTE: actually "port_direction?"
net_port_header: port_direction net_port_type;

interface_port_header:
  ident (DOT ident)?     # interface_port_header_0
| INTERFACE (DOT ident)? # interface_port_header_1
;

ansi_port_declaration:
  (net_port_header | interface_port_header)? ident unpacked_dimension* (EQ constant_expression)?
;


// =============================================================================
// 1.4 Module items
// =============================================================================
elaboration_system_task:
  DOL_FATAL (OP_PRN finish_number (COM list_of_arguments)? CL_PRN)? SEMIC
| DOL_ERROR (OP_PRN list_of_arguments CL_PRN)? SEMIC
| DOL_WARNING (OP_PRN list_of_arguments CL_PRN)? SEMIC
| DOL_INFO (OP_PRN list_of_arguments CL_PRN)? SEMIC
;

// *NOTE: actually '0' | '1' | '2'
finish_number: UNSIGNED_NUMBER;

module_common_item:
  module_or_generate_item_declaration
// | interface_instantiation
// | program_instantiation
// | assertion_item
// | bind_directive
| always_construct
| continuous_assign
| initial_construct
| final_construct
| loop_generate_construct
| conditional_generate_construct
| net_alias
| elaboration_system_task
;

module_item: 
  port_declaration SEMIC 
| non_port_module_item
;

module_or_generate_item:
  module_common_item
| module_instantiation
| parameter_override
// | gate_instantiation
// | udp_instantiateion
;

module_or_generate_item_declaration:
  package_or_generate_item_declaration
| genvar_declaration
// | clocking_declaration
// | DEFAULT CLOCKING ident SEMIC
// | DEFAULT DISABLE IFF expression_or_dist SEMIC
;

non_port_module_item:
  module_or_generate_item
| generate_region
// | specify_block
// | specparam_declaration
// | program_declaration
| module_declaration
// | interface_declaration
| timeunits_declaration
;

parameter_override: DEFPARAM list_of_defparam_assignments SEMIC;


// =============================================================================
// 1.6 Interface items
// =============================================================================
interface_or_generate_item:
  module_common_item
| modport_declaration
| extern_tf_declaration
;

extern_tf_declaration:
  EXTERN method_prototype SEMIC
| EXTERN FORKJOIN task_prototype SEMIC
;

interface_item:
  port_declaration SEMIC
| non_port_interface_item
;

non_port_interface_item:
  generate_region
| interface_or_generate_item
// | program_declaration
| interface_declaration
| timeunits_declaration
;


// =============================================================================
// 1.9 Class items
// =============================================================================
class_item:
  class_property
| class_method
| class_constraint
| class_declaration
// | covergroup_declaration
| local_parameter_declaration
| parameter_declaration
| SEMIC
;

class_property:
  property_qualifier* data_declaration
| CONST class_item_qualifier* data_type ident (EQ constant_expression)? SEMIC
;

class_method:
  method_qualifier* task_declaration
| method_qualifier* function_declaration
| PURE VIRTUAL class_item_qualifier* method_prototype SEMIC
| EXTERN method_qualifier* method_prototype SEMIC
| method_qualifier* class_constructor_declaration
| EXTERN method_qualifier* class_constructor_prototype
;

class_constructor_prototype: FUNCTION NEW (OP_PRN tf_port_list? CL_PRN)? SEMIC;

class_constraint:
  constraint_prototype
| constraint_declaration
;

class_item_qualifier: STATIC | PROTECTED | LOCAL;

property_qualifier:
  RANDOM_QUALIFIER
| class_item_qualifier
;

method_qualifier: PURE? VIRTUAL | class_item_qualifier;

method_prototype:
  task_prototype
| function_prototype
;

class_constructor_declaration:
  FUNCTION class_scope? NEW (OP_PRN tf_port_list? CL_PRN)? SEMIC
  block_item_declaration*
  (SUPER DOT NEW (OP_PRN list_of_arguments CL_PRN)? SEMIC)?
  function_statement_or_null*
  ENDFUNCTION (COLON NEW)?
;


// =============================================================================
// 1.9 Class items
// =============================================================================
constraint_declaration: STATIC? CONSTRAINT ident constraint_block;

constraint_block: OP_BRC constraint_block_item* CL_BRC;

constraint_block_item:
  SOLVE solve_before_list BEFORE solve_before_list SEMIC
| constraint_expression
;

solve_before_list: constraint_primary (COM constraint_primary)*;

constraint_primary:
  (implicit_class_handle DOT | class_scope)? hier_ident select
;

constraint_expression:
  SOFT? expression_or_dist SEMIC
| uniqueness_constraint SEMIC
| expression EVENT constraint_set
| IF OP_PRN expression CL_PRN constraint_set (ELSE constraint_set)?
// | foreach OP_PRN ps_or_hier_array_ident OP_BRK loop_variables CL_BRK CL_PRN constraint_set
| DISABLE SOFT constraint_primary SEMIC
;

uniqueness_constraint: UNIQUE OP_BRC open_range_list CL_BRC;

constraint_set:
  constraint_expression
| OP_BRC constraint_expression* CL_BRC
;

dist_list: dist_item (COM dist_item)*;

dist_item: value_range dist_weight?;

dist_weight:
  DISTW_EQ expression
| DISTW_SL expression
;

constraint_prototype:
  constraint_prototype_qualifier? STATIC? CONSTRAINT ident SEMIC
;

constraint_prototype_qualifier: EXTERN | PURE;


// =============================================================================
// 1.11 Package items
// =============================================================================
package_item:
  package_or_generate_item_declaration
| anonymous_program
| package_export_declaration
| timeunits_declaration
;

package_or_generate_item_declaration:
  net_declaration
| data_declaration
| task_declaration
| function_declaration
// | checker_declaration
// | dpi_import_export
// | extern_constraint_declaration
| class_declaration
| class_constructor_declaration
| local_parameter_declaration SEMIC
| parameter_declaration SEMIC
// | covergroup_declaration
// | overload_declaration
// | assertion_item_declaration
| SEMIC
;

anonymous_program:
  task_declaration
| function_declaration
| class_declaration
// | covergroup_declaration
| class_constructor_declaration
| SEMIC
;


// =============================================================================
// 2.1.1 Module parameter declarations
// =============================================================================
local_parameter_declaration:
  LOCALPARAM data_type_or_implicit list_of_param_assignments
| LOCALPARAM TYPE list_of_type_assignments
;

parameter_declaration:
  PARAMETER data_type_or_implicit list_of_param_assignments
| PARAMETER TYPE list_of_type_assignments
;


// =============================================================================
// 2.1.2 Port declarations
// =============================================================================
inout_declaration: 
  INOUT net_port_type list_of_port_identifiers
;

input_declaration:
  INPUT net_port_type list_of_port_identifiers
| INPUT variable_port_type list_of_variable_port_identifiers
;

output_declaration:
  OUTPUT net_port_type list_of_port_identifiers
| OUTPUT variable_port_type list_of_variable_port_identifiers
;

interface_port_declaration:
  ident list_of_interface_identifiers
  ident DOT ident list_of_interface_identifiers
;

ref_declaration:
  REF variable_port_type list_of_variable_identifiers
;


// =============================================================================
// 2.1.3 Type declarations
// =============================================================================

// *NOTE: originally data_type_or_implict
// *NOTE: originally package_import_declaration net_type_declaration
data_declaration:
  c=CONST? v=VAR? lifetime? data_type list_of_variable_decl_assignments SEMIC
                             # data_declaration_0
| type_declaration           # data_declaration_1
| package_import_declaration # data_declaration_2
| net_type_declaration       # data_declaration_3
;

package_import_declaration:
  IMPORT package_import_item (COM package_import_item)* SEMIC
;

package_import_item:
  ident SCOPE ident
| ident SCOPE MULT
;

package_export_declaration:
  EXPORT SCOPE_FORALL SEMIC
| EXPORT package_import_item (COM package_import_item) SEMIC
;

genvar_declaration: GENVAR list_of_genvar_identifiers SEMIC;

net_declaration:
  NET_TYPE data_type_or_implicit list_of_net_decl_assignments SEMIC
  # net_declaration_0
| ident list_of_net_decl_assignments SEMIC
  # net_declaration_1
| INTERCONNECT implicit_data_type (SHP delay_value)? ident unpacked_dimension
  (COM ident unpacked_dimension)? SEMIC
  # net_declaration_2
;


type_declaration:
  TYPEDEF data_type ident variable_dimension* SEMIC
  # type_declaration_0
| TYPEDEF ident constant_bit_select DOT ident ident SEMIC
  # type_declaration_1
| TYPEDEF type_declaration_type? ident SEMIC
  # type_declaration_2
;

type_declaration_type: ENUM | STRUCT | UNION | CLASS | INTERFACE CLASS;


net_type_declaration:
  NETTYPE data_type ident (WITH (package_scope | class_scope) ident)? SEMIC
| NETTYPE (package_scope | class_scope) ident ident SEMIC
;

lifetime: STATIC | AUTOMATIC;


// =============================================================================
// 2.2.1 Net and variable types
// =============================================================================
casting_type: 
  simple_type
| constant_primary 
| number
| SIGNING 
| STRING 
| CONST
;

data_type:
  INTEGER_VECTOR_TYPE SIGNING? packed_dimension*
  # data_type_0
| INTEGER_ATOM_TYPE SIGNING?
  # data_type_1
| NON_INTEGER_TYPE
  # data_type_2
| struct_union (p=PACKED SIGNING?)? OP_BRC struct_union_member+ CL_BRC packed_dimension*
  # data_type_3
| ENUM enum_base_type OP_BRC enum_name_declaration (COM enum_name_declaration)* CL_BRC packed_dimension*
  # data_type_4
| STRING
  # data_type_5
| CHANDLE
  # data_type_6
| VIRTUAL INTERFACE? ident parameter_value_assignment* (DOT ident)?
  # data_type_7
| (class_scope | package_scope)? ident packed_dimension*
  # data_type_8
| class_type
  # data_type_9
| EVENT
  # data_type_10
| ps_ident
  # data_type_11
| type_reference
  # data_type_12
;

data_type_or_implicit: data_type | implicit_data_type;
implicit_data_type:    SIGNING? packed_dimension*;

enum_base_type:
  INTEGER_ATOM_TYPE SIGNING?
| INTEGER_VECTOR_TYPE SIGNING? packed_dimension?
| ident packed_dimension?
;

enum_name_declaration:
  ident (OP_BRK integral_number (COLON integral_number)? CL_BRK)? (EQ expression)?
;

class_scope: class_type SCOPE;
class_type:  ps_ident parameter_value_assignment? (SCOPE ident parameter_value_assignment?)*;

integer_type: INTEGER_VECTOR_TYPE | INTEGER_ATOM_TYPE;

net_port_type: 
  ident                             # net_port_type_0
| NET_TYPE? data_type_or_implicit   # net_port_type_1
| INTERCONNECT implicit_data_type # net_port_type_2
;

variable_port_type: var_data_type;

var_data_type: data_type | VAR data_type_or_implicit;

simple_type: integer_type | NON_INTEGER_TYPE | ps_ident;

struct_union: STRUCT | UNION TAGGED?;

data_type_or_void: data_type | VOID;

struct_union_member: 
  RANDOM_QUALIFIER? data_type_or_void list_of_variable_decl_assignments SEMIC
;

type_reference: 
  TYPE OP_PRN expression CL_PRN 
| TYPE OP_PRN data_type CL_PRN
;

// =============================================================================
// 2.2.3 Delays
// =============================================================================
delay_value: UNSIGNED_NUMBER | real_number | ps_ident | time_literal | ONESTEP;


// =============================================================================
// 2.3 Declaration lists
// =============================================================================
list_of_defparam_assignments: defparam_assignment (COM defparam_assignment)*;

list_of_genvar_identifiers: ident (COM ident)*;

list_of_interface_identifiers:
  ident unpacked_dimension* (COM ident unpacked_dimension*)*
;

list_of_net_decl_assignments: net_decl_assignment (COM net_decl_assignment)*;

list_of_param_assignments: param_assignment (COM param_assignment)*;

list_of_port_identifiers: ident unpacked_dimension* (ident unpacked_dimension*)*;

list_of_tf_variable_identifiers:
  ident variable_dimension* (EQ expression)? 
  (ident variable_dimension* (EQ expression)?)*
;

list_of_type_assignments: type_assignment (COM type_assignment)*;

list_of_variable_decl_assignments:
  variable_decl_assignment (COM variable_decl_assignment)*
;

list_of_variable_identifiers:
  ident variable_dimension* (COM ident variable_dimension*)*
;

list_of_variable_port_identifiers:
  ident variable_dimension* (EQ constant_expression)? 
  (ident variable_dimension* (EQ constant_expression)?)*
;


// =============================================================================
// 2.4 Declaration assignments
// =============================================================================
defparam_assignment: hier_ident EQ constant_mintypmax_expression;

net_decl_assignment: ident unpacked_dimension* (EQ expression)?;

param_assignment: ident unpacked_dimension* (EQ constant_param_expression)?;

type_assignment: ident (EQ data_type);

variable_decl_assignment:
  ident variable_dimension* (EQ expression)?
| ident unsized_dimension variable_dimension* (EQ dynamic_array_new)?
| ident (EQ class_new)?
;

class_new: 
  class_scope? NEW (OP_PRN list_of_arguments CL_PRN)? 
| NEW expression
;

dynamic_array_new: NEW OP_BRK expression CL_BRK (OP_PRN expression CL_PRN)?;


// =============================================================================
// 2.5 Declaration ranges
// =============================================================================
unpacked_dimension:    OP_BRK constant_range CL_BRK | OP_BRK constant_expression CL_BRK;
packed_dimension:      OP_BRK constant_range CL_BRK | unsized_dimension;
assosiative_dimension: OP_BRK data_type CL_BRK | OP_BRK MULT CL_BRK;
variable_dimension:    unsized_dimension | unpacked_dimension | assosiative_dimension | queue_dimension;
queue_dimension:       OP_BRK DOL (COLON constant_expression)? CL_BRK;
unsized_dimension:     OP_BRK CL_BRK;


// =============================================================================
// 2.6 Function declaration
// =============================================================================
function_data_type_or_implicit: data_type_or_void | implicit_data_type;

function_declaration: FUNCTION lifetime? function_body_declaration;

function_body_declaration:
  function_data_type_or_implicit (ident DOT | class_scope)? ident SEMIC
  tf_item_declaration* function_statement_or_null* ENDFUNCTION (COLON ident)?
  # function_body_declaration_0
| function_data_type_or_implicit (ident DOT | class_scope)? ident 
  OP_PRN tf_port_list? CL_PRN SEMIC
  block_item_declaration* function_statement_or_null* ENDFUNCTION (COLON ident)?
  # function_body_declaration_1
;

function_prototype:
  FUNCTION data_type_or_void ident (OP_PRN tf_port_list? CL_PRN)?
;

// =============================================================================
// 2.7 Task declaration
// =============================================================================
task_declaration: TASK lifetime? task_body_declaration;

// *NOTE: actually tf_port_list?
task_body_declaration:
  (ident DOT | class_scope)? ident SEMIC tf_item_declaration* statement_or_null* ENDTASK (COLON ident)?
  # task_body_declaration_0
| (ident DOT | class_scope)? ident OP_PRN tf_port_list? CL_PRN SEMIC block_item_declaration* statement_or_null* ENDTASK (COLON ident)?
  # task_body_declaration_1
;

tf_item_declaration: block_item_declaration | tf_port_declaration;

tf_port_list: tf_port_item (COM tf_port_item)*;

// *NOTE: actually (ident variable_dimension* (EQ expression)?)?
tf_port_item:
  tf_port_direction? VAR? data_type_or_implicit
  ident variable_dimension* (EQ expression)?
;

tf_port_direction: port_direction | CONST REF;

tf_port_declaration:
  tf_port_direction VAR? data_type_or_implicit list_of_tf_variable_identifiers SEMIC
;

task_prototype: TASK ident (OP_PRN tf_port_list CL_PRN)?;


// =============================================================================
// 2.8 Block item declarations
// =============================================================================
block_item_declaration:
  data_declaration
| local_parameter_declaration SEMIC
| parameter_declaration SEMIC
;


// =============================================================================
// 2.9 Interface declarations
// =============================================================================
modport_declaration: MODPORT modport_item (COM modport_item)* SEMIC;

modport_item:
  ident OP_PRN modport_ports_declaration (COM modport_ports_declaration)* CL_PRN
;

modport_ports_declaration:
  modport_simple_ports_declaration
| modport_tf_ports_declaration
| modport_clocking_declaration
;

modport_clocking_declaration: CLOCKING ident;

modport_simple_ports_declaration:
  port_direction modport_simple_port (COM modport_simple_port)*;

modport_simple_port:
  ident
| DOT ident OP_PRN expression? CL_PRN
;

modport_tf_ports_declaration:
  import_export modport_tf_port (COM modport_tf_port)
;

modport_tf_port:
  method_prototype
| ident
;

import_export: IMPORT | EXPORT;


// =============================================================================
// 2.10 Assertion declaration
// =============================================================================
concurrent_assertion_item: (ident COLON)? concurrent_assertion_statement | checker_instantiation;

concurrent_assertion_statement:
;

expression_or_dist: expression (DIST OP_BRC dist_list CL_BRC)?;

// =============================================================================
// 4.1.1 Module instantiation
// =============================================================================
module_instantiation:
  ident parameter_value_assignment? hierarchical_instance (COM hierarchical_instance)* SEMIC
;

parameter_value_assignment: SHP OP_PRN list_of_parameter_assignments? CL_PRN;

parameter_assign_comma: COM;

list_of_parameter_assignments:
  ordered_parameter_assignment (parameter_assign_comma ordered_parameter_assignment)*
| named_parameter_assignment (parameter_assign_comma named_parameter_assignment)*
;

ordered_parameter_assignment: param_expression;

// *NOTE: the second rule is specially added for completion hint
named_parameter_assignment: 
  DOT ident OP_PRN param_expression? CL_PRN 
| DOT;

hierarchical_instance:
  name_of_instance OP_PRN list_of_port_connections? CL_PRN
;

name_of_instance: ident unpacked_dimension*;

port_conn_comma: COM;

list_of_port_connections:
  ordered_port_connection (port_conn_comma ordered_port_connection)*
| named_port_connection (port_conn_comma named_port_connection)*
;

// *NOTE: actually "expression?"
ordered_port_connection: expression;

named_port_connection: 
  DOT ident (OP_PRN expression? CL_PRN)?
| FORALL
;

// =============================================================================
// 4.1.4 Checker instantiation
// =============================================================================
checker_instantiation: 
  ps_ident name_of_instance OP_PRN list_of_checker_port_connections CL_PRN
;

list_of_checker_port_connections:
;


// =============================================================================
// 4.2 Generated instantiation
// =============================================================================
generate_region: GENERATE generate_item* ENDGENERATE;

loop_generate_construct:
  FOR OP_PRN genvar_initialization SEMIC genvar_expression SEMIC genvar_iteration CL_PRN generate_block
;

genvar_initialization: GENVAR? ident EQ constant_expression;

genvar_iteration:
  ident assignment_operator genvar_expression
| inc_or_dec_operator ident
| ident inc_or_dec_operator
;

conditional_generate_construct: if_generate_construct | case_generate_construct;

if_generate_construct:
  IF OP_PRN constant_expression CL_PRN generate_block (ELSE generate_block)?
;

// *NOTE: actually CASE OP_PRN
case_generate_construct:
  CASE_KEYWORD OP_PRN constant_expression CL_PRN case_generate_item case_generate_item* ENDCASE
;

case_generate_item:
  constant_expression (COM constant_expression)* COLON generate_block
| DEFAULT COLON? generate_block
;

generate_block:
  generate_item
| (ident COLON)? BEGIN (COLON ident) generate_item* END (COLON ident)?
;

generate_item:
  module_or_generate_item
// | interface_or_generate_item
// | checker_or_generate_item
;


// =============================================================================
// 6.1 Continuous assignment and net alias statements
// =============================================================================
continuous_assign:
  ASSIGN list_of_net_assignments SEMIC
| ASSIGN delay_control? list_of_variable_assignments SEMIC
;

list_of_net_assignments: net_assignment (COM net_assignment)*;

list_of_variable_assignments: variable_assignment (COM variable_assignment)*;

net_alias: ALIAS net_lvalue EQ net_lvalue (EQ net_lvalue)* SEMIC;

net_assignment: net_lvalue EQ expression;


// =============================================================================
// 6.2 Procedural blocks and assignments
// =============================================================================
initial_construct: INITIAL statement_or_null;

always_construct: ALWAYS_KEYWORD statement;

final_construct: FINAL function_statement;

blocking_assignment:
  variable_lvalue EQ delay_or_event_control expression
| non_range_variable_lvalue EQ dynamic_array_new
| (implicit_class_handle DOT | class_scope | package_scope)? hier_ident select EQ class_new
| operator_assignment
;

operator_assignment: variable_lvalue assignment_operator expression;

assignment_operator:
  LTLTLTEQ | GTGTGTEQ | LTLTEQ | GTGTEQ | PLUSEQ | MINUSEQ | MULTEQ | DIVEQ
| MODEQ | ANDEQ | OREQ | XOREQ | EQ
;

nonblocking_assignment:
  variable_lvalue LTEQ delay_or_event_control? expression
;

procedural_continuous_assignment:
  ASSIGN variable_assignment
| DEASSIGN variable_lvalue
| FORCE variable_assignment
| FORCE net_assignment
| RELEASE variable_lvalue
| RELEASE net_lvalue
;

variable_assignment: variable_lvalue EQ expression;


// =============================================================================
// 6.3 Parallel and sequential blocks
// =============================================================================
action_block:
  statement_or_null
| statement? ELSE statement_or_null
;

seq_block:
  BEGIN (COLON ident)? block_item_declaration* statement_or_null* END (COLON ident)?
;


// =============================================================================
// 6.4 Statements
// =============================================================================
statement_or_null: statement | SEMIC;

statement: (ident COLON)? statement_item;

statement_item:
  seq_block
| loop_statement
| jump_statement
| case_statement
| blocking_assignment SEMIC
| nonblocking_assignment SEMIC
| procedural_continuous_assignment SEMIC
| conditional_statement
| inc_or_dec_expression SEMIC
| subroutine_call_statement
| disable_statement
| event_trigger
| procedural_timing_control_statement
| wait_statement
| procedural_assertion_statement
;

function_statement: statement;

function_statement_or_null: function_statement | SEMIC;

variable_identifier_list: ident (COM ident)*;


// =============================================================================
// 6.5 Timing control statements
// =============================================================================
procedural_timing_control_statement: procedural_timing_control statement_or_null;

delay_or_event_control:
  delay_control
| event_control
| REPEAT OP_PRN expression CL_PRN event_control
;

delay_control: SHP delay_value | SHP OP_PRN mintypmax_expression CL_PRN;

event_control:
  AT hier_ident
| AT OP_PRN event_expression CL_PRN
| AT MULT
| AT OP_PRN MULT CL_PRN
| AT ps_or_hier_ident
;

event_expression:
  edge_ident? expression (IFF expression)?
| event_expression OR event_expression
| event_expression COM event_expression
| OP_PRN event_expression CL_PRN
;

procedural_timing_control: delay_control | event_control | cycle_delay;

jump_statement:
  RETURN expression? SEMIC
| BREAK SEMIC
| CONTINUE SEMIC
;

wait_statement:
  WAIT OP_PRN expression CL_PRN statement_or_null
| WAIT FORK SEMIC
| WAITORDER OP_PRN hier_ident (COM hier_ident)* CL_PRN action_block
;

event_trigger:
  MINUSGT hier_ident SEMIC
| MINUSGTGT delay_or_event_control? hier_ident SEMIC
;

disable_statement:
  DISABLE hier_ident SEMIC
| DISABLE FORK SEMIC
;


// =============================================================================
// 6.6 Conditional statements
// =============================================================================
conditional_statement:
  unique_priority? IF OP_PRN cond_predicate CL_PRN statement_or_null
  (ELSE IF OP_PRN cond_predicate CL_PRN statement_or_null)*
  (ELSE statement_or_null)?
;

unique_priority: UNIQUE | UNIQUE0 | PRIORITY;

cond_predicate: expression_or_cond_pattern (ANDANDAND expression_or_cond_pattern)*;

expression_or_cond_pattern: expression | cond_pattern;

cond_pattern: expression MATCHES pattern;


// =============================================================================
// 6.7 Case statements
// =============================================================================
case_statement:
  unique_priority? CASE_KEYWORD OP_PRN case_expression CL_PRN case_item (case_item)* ENDCASE
| unique_priority? CASE_KEYWORD OP_PRN case_expression CL_PRN INSIDE case_inside_item (case_inside_item)* ENDCASE
;

case_expression: expression;

case_item:
  case_item_expression (COM case_item_expression)* COLON statement_or_null
| DEFAULT COLON? statement_or_null
;

case_inside_item:
  open_range_list COLON statement_or_null
| DEFAULT COLON? statement_or_null
;

case_item_expression: expression;

open_range_list: open_value_range (COM open_value_range)*;

open_value_range: value_range;


// =============================================================================
// 6.7.1 Patterns
// =============================================================================
pattern:
  DOT ident
| FORALL
| constant_expression
| TAGGED ident pattern?
| OP_PATTERN pattern (COM pattern) CL_BRC
| OP_PATTERN ident COLON pattern (COM ident COLON pattern)* CL_BRC
;


// =============================================================================
// 6.8 Looping statements
// =============================================================================
loop_statement:
  FOREVER statement_or_null
| REPEAT OP_PRN expression CL_PRN statement_or_null
| WHILE OP_PRN expression CL_PRN statement_or_null
| FOR OP_PRN for_initialization? SEMIC expression? SEMIC for_step? CL_PRN statement_or_null
| DO statement_or_null WHILE OP_PRN expression CL_PRN SEMIC
| FOREACH OP_PRN ps_or_hier_ident OP_BRK loop_variables CL_BRK CL_PRN statement
;

for_initialization:
  list_of_variable_assignments
| for_variable_declaration (COM for_variable_declaration)*
;

for_variable_declaration:
  VAR? data_type ident EQ expression (COM ident EQ expression)*
;

for_step:
  for_step_assignment (COM for_step_assignment)*
;

for_step_assignment:
  operator_assignment
| inc_or_dec_expression
| function_subroutine_call
;

loop_variables: ident? (COM ident)*;


// =============================================================================
// 6.9 Subroutine call statements
// =============================================================================
subroutine_call_statement:
  subroutine_call SEMIC
| VOID OP_CAST function_subroutine_call CL_PRN
;


// =============================================================================
// 6.11 Clocking block
// =============================================================================
assertion_item: concurrent_assertion_item | deferred_immediate_assertion_item;

deferred_immediate_assertion_item: (ident COLON)? deferred_immediate_assertion_statement;

procedural_assertion_statement:
//   concurrent_assertion_statement
// | immediate_assertion_statement
// | checker_instantiation
  immediate_assertion_statement
;

immediate_assertion_statement:
  simple_immediate_assertion_statement | deferred_immediate_assertion_statement
;

simple_immediate_assertion_statement:
  simple_immediate_assert_statement
| simple_immediate_assume_statement
| simple_immediate_cover_statement
;

simple_immediate_assert_statement: ASSERT OP_PRN expression CL_PRN action_block;
simple_immediate_assume_statement: ASSUME OP_PRN expression CL_PRN action_block;
simple_immediate_cover_statement:  COVER OP_PRN expression CL_PRN statement_or_null;

deferred_immediate_assertion_statement:
  deferred_immediate_assert_statement
| deferred_immediate_assume_statement
| deferred_immediate_cover_statement
;

deferred_immediate_assert_statement: ASSERT SHPZERO OP_PRN expression CL_PRN action_block | ASSERT FINAL OP_PRN expression CL_PRN action_block;
deferred_immediate_assume_statement: ASSUME SHPZERO OP_PRN expression CL_PRN action_block | ASSUME FINAL OP_PRN expression CL_PRN action_block;
deferred_immediate_cover_statement:  COVER SHPZERO OP_PRN expression CL_PRN statement_or_null | COVER FINAL OP_PRN expression CL_PRN statement_or_null;


// =============================================================================
// 6.11 Clocking block
// =============================================================================
cycle_delay:
  SHPSHP integral_number
| SHPSHP ident
| SHPSHP OP_PRN expression CL_PRN
;


// =============================================================================
// 7.4 Specify path delays
// =============================================================================
edge_ident: POSEDGE | NEGEDGE | EDGE;


// =============================================================================
// 8.1 Concatenations
// =============================================================================
concatenation: OP_BRC expression (COM expression)* CL_BRC;
constant_concatenation: OP_BRC constant_expression (COM constant_expression)* CL_BRC;
constant_multiple_concatenation: OP_BRC constant_expression constant_concatenation CL_BRC;
multiple_concatenation: OP_BRC expression concatenation CL_BRC;

array_range_expression:
  expression
| expression COLON expression
| expression PLUSCOLON expression
| expression MINUSCOLON expression
;

empty_queue: OP_BRC CL_BRC;


// =============================================================================
// 8.2 Subroutine call
// =============================================================================
constant_function_call: function_subroutine_call;

tf_call: ps_or_hier_ident (OP_PRN list_of_arguments CL_PRN)?;

system_tf_call: 
  SYSTEM_TF_IDENT (OP_PRN list_of_arguments CL_PRN)?
| SYSTEM_TF_IDENT OP_PRN data_type (COM expression)? CL_PRN
;

subroutine_call: 
  tf_call
| system_tf_call
| method_call
| SCOPE_STD? randomize_call
;

function_subroutine_call: subroutine_call;

arg_comma: COM;

list_of_arguments:
  expression? (arg_comma expression?)* (arg_comma DOT ident OP_PRN expression? CL_PRN)*
| DOT ident OP_PRN expression? CL_PRN (arg_comma DOT ident OP_PRN expression? CL_PRN)*
;

method_call: method_call_root DOT method_call_body;

// *NOTE: actually "primary | implicit_class_handle", but it cause left recursive
method_call_root: 
  (class_qualifier | package_scope) hier_ident select 
| implicit_class_handle
;

method_call_body: 
  ident (OP_PRN list_of_arguments CL_PRN)?
| built_in_method_call
;

built_in_method_call: array_manipulation_call | randomize_call;

array_manipulation_call: 
  array_method_name (OP_PRN list_of_arguments CL_PRN)? (WITH OP_PRN expression CL_PRN)?
;

randomize_call:
  RANDOMIZE (OP_PRN (variable_identifier_list | NULL)? CL_PRN)?
;

array_method_name: ident | UNIQUE | AND | OR | XOR;


// =============================================================================
// 8.3 Expressions
// =============================================================================
inc_or_dec_expression:
  inc_or_dec_operator variable_lvalue
| variable_lvalue inc_or_dec_operator
;

constant_expression:
  constant_primary
| unary_operator constant_primary
| constant_expression binary_operator constant_expression
| constant_expression QUES constant_expression COLON constant_expression
;

constant_mintypmax_expression:
  constant_expression
| constant_expression COLON constant_expression COLON constant_expression
;

constant_param_expression:
  constant_mintypmax_expression
| data_type
| DOL
;

param_expression:
  mintypmax_expression
| data_type
| DOL
;

constant_range_expression: constant_expression | constant_part_select_range;

constant_part_select_range: constant_range | constant_indexed_range;

constant_range: constant_expression COLON constant_expression;

constant_indexed_range:
  constant_expression PLUSCOLON constant_expression
| constant_expression MINUSCOLON constant_expression
;

expression:
  primary
| unary_operator primary
| inc_or_dec_expression
| OP_PRN operator_assignment CL_PRN
| expression binary_operator expression
| expression INSIDE OP_BRC open_range_list CL_BRC
| expression QUES expression COLON expression
| tagged_union_expression
;

tagged_union_expression: TAGGED ident expression?;

value_range: 
  expression 
| OP_BRK expression COLON expression CL_BRK
;

mintypmax_expression:
  expression
| expression COLON expression COLON expression
;

part_select_range: constant_range | indexed_range;

indexed_range:
  expression PLUSCOLON constant_expression
| expression MINUSCOLON constant_expression
;

genvar_expression: constant_expression;


// =============================================================================
// 8.4 Primaries
// =============================================================================

constant_primary:
  primary_literal
| ps_ident constant_select
| ident (OP_BRK constant_range_expression CL_BRK)?
| (package_scope | class_scope)? ident constant_select
| constant_concatenation (OP_BRK constant_range_expression CL_BRK)?
| constant_function_call
| OP_PRN constant_mintypmax_expression CL_PRN
// | constant_cast
;

// *NOTE: acutually "| (class_qualifier | package_scope)? hier_ident select"
primary:
  primary_literal
| (class_qualifier | package_scope) hier_ident select
| empty_queue
| concatenation (OP_BRK range_expression CL_BRK)?
| multiple_concatenation (OP_BRK range_expression CL_BRK)?
| function_subroutine_call
| OP_PRN mintypmax_expression CL_PRN
| cast
| THIS
| DOL
| NULL
;

class_qualifier: SCOPE_LOCAL? (implicit_class_handle DOT | class_scope)?;

range_expression: expression | part_select_range;

primary_literal: number | time_literal | UNBASED_UNSIZED_LITERAL | STRING_LITERAL;

time_literal: 
  UNSIGNED_NUMBER TIME_UNIT
| FIXED_POINT_NUMBER TIME_UNIT
;



implicit_class_handle: THIS | SUPER | THISSUPER;

bit_select: (OP_BRK expression CL_BRK)*;

select:
  ((DOT ident bit_select)* DOT ident)? bit_select (OP_BRK part_select_range CL_BRK)?
;

nonrange_select:
  ((DOT ident bit_select)* DOT ident)? bit_select
;

constant_bit_select: (OP_BRK constant_expression CL_BRK)*;

constant_select:
  ((DOT ident constant_bit_select)* DOT ident)? constant_bit_select
;

constant_cast: casting_type OP_CAST constant_expression CL_PRN;

cast: casting_type OP_CAST expression CL_PRN;

// =============================================================================
// 8.5 Expression left-side values
// =============================================================================
net_lvalue:
  ps_or_hier_ident constant_select
| OP_BRC net_lvalue (COM net_lvalue) CL_BRC
;

variable_lvalue:
  (implicit_class_handle DOT | package_scope)? hier_ident select
| OP_BRC variable_lvalue (COM variable_lvalue)* CL_BRC
;

non_range_variable_lvalue:
  (implicit_class_handle DOT | package_scope)? hier_ident nonrange_select
;


// =============================================================================
// 8.7 Numbers
// =============================================================================
number: integral_number | real_number;

integral_number:
  BINARY_NUMBER
| OCTAL_NUMBER
| HEX_NUMBER
| decimal_number
;

decimal_number:
  UNSIGNED_NUMBER
| SIZED_UNSIGNED
// | SIZE? DECIMAL_BASE X_DIGIT '_'*
// | SIZE? DECIMAL_BASE Z_DIGIT '_'*
;

real_number: FIXED_POINT_NUMBER | SCIENCE_NUMBER;


// =============================================================================
// 8.6 Operators
// =============================================================================
unary_operator: INVXOR | INVAND | INVOR | PLUS | MINUS | NOT | INV | AND | OR | XOR;

binary_operator: 
  EQEQQUES | NOTEQQUES | EQEQEQ | NOTEQEQ | GTGTGT | LTLTLT | LTMINUSGT
| EQEQ | NOTEQ | ANDAND | OROR | MULTMULT | LTEQ | GTEQ | XORINV | INVXOR 
| GTGT | LTLT | MINUSGT
| PLUS | MINUS | MULT | DIV | MOD | LT | GT | AND | OR | XOR;

inc_or_dec_operator: PLUSPLUS | MINUSMINUS;

unary_module_path_operator: 
  INVOR | INVAND | INVXOR | XORINV | NOT | INV | AND | OR | XOR
;

binary_module_path_operator:
  EQEQ | NOTEQ | ANDAND | OROR | AND | OR | XOR | XORINV | INVXOR
;

// =============================================================================
// 8.8 Strings
// =============================================================================

// =============================================================================
// 9.2 Comments
// =============================================================================

// =============================================================================
// 9.3 Identifiers
// =============================================================================
package_scope: ident SCOPE | SCOPE_UNIT;

ident:            IDENT;
ps_ident:         package_scope? ident;
hier_ident:       CLASS_ROOT? (ident constant_bit_select DOT)* ident;
ps_or_hier_ident: ps_ident | hier_ident;


// =============================================================================
// *** Preprocessors
// =============================================================================

pp_text: 
  pp_directive*
;

pp_directive:
  pp_default_nettype
| pp_timescale
| pp_include
| pp_define_only
| pp_define_noarg
| pp_define_arg
| pp_undef
| pp_call_noarg
| pp_call_arg
| pp_ifdef
;

pp_default_nettype:
  PP_DEFAULT_NETTYPE PP_DEFAULT_NETTYPE_VALUE
;

pp_timescale:
  PP_TIMESCALE PP_UNSIGNED_NUMBER PP_TIME_UNIT PP_DIV PP_UNSIGNED_NUMBER PP_TIME_UNIT
;

pp_include:
  PP_INCLUDE PP_STRING 
;

pp_define_only:
  PP_DEFINE DF_IDENT
;

pp_define_noarg:
  PP_DEFINE DF_MACRO_NAME_NOARG DFTX_MACRO_TEXT
;

pp_define_arg:
  PP_DEFINE DF_MACRO_NAME_ARG DFAG_IDENT (DFAG_COM DFAG_IDENT)* DFAG_CL_PRN DFTX_MACRO_TEXT
;

pp_undef:
  PP_UNDEF PP_IDENT
;

pp_call_noarg:
  PP_CALL_NOARG
;

pp_call_arg:
  PP_CALL_ARG PPCL_IDENT (PPCL_COM PPCL_IDENT)* PPCL_CL_PRN
;

pp_ifdef:
  (PP_IFDEF | PP_IFNDEF) PP_IDENT pp_ifdef? (PP_ELIF PP_IDENT pp_ifdef?)* (PP_ELSE pp_ifdef?)? PP_ENDIF
;
