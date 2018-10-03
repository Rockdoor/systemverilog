// Generated from src/sv_parser/grammar/SystemVerilogParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { Task_body_declaration_1Context } from './SystemVerilogParser';
import { Task_body_declaration_0Context } from './SystemVerilogParser';
import { Type_declaration_0Context } from './SystemVerilogParser';
import { Type_declaration_1Context } from './SystemVerilogParser';
import { Type_declaration_2Context } from './SystemVerilogParser';
import { Net_port_type_2Context } from './SystemVerilogParser';
import { Net_port_type_1Context } from './SystemVerilogParser';
import { Net_port_type_0Context } from './SystemVerilogParser';
import { Data_type_11Context } from './SystemVerilogParser';
import { Data_type_12Context } from './SystemVerilogParser';
import { Data_type_9Context } from './SystemVerilogParser';
import { Data_type_8Context } from './SystemVerilogParser';
import { Data_type_10Context } from './SystemVerilogParser';
import { Data_type_5Context } from './SystemVerilogParser';
import { Data_type_4Context } from './SystemVerilogParser';
import { Data_type_7Context } from './SystemVerilogParser';
import { Data_type_6Context } from './SystemVerilogParser';
import { Data_type_1Context } from './SystemVerilogParser';
import { Data_type_0Context } from './SystemVerilogParser';
import { Data_type_3Context } from './SystemVerilogParser';
import { Data_type_2Context } from './SystemVerilogParser';
import { Timeunits_declaration_0Context } from './SystemVerilogParser';
import { Timeunits_declaration_1Context } from './SystemVerilogParser';
import { Timeunits_declaration_2Context } from './SystemVerilogParser';
import { Timeunits_declaration_3Context } from './SystemVerilogParser';
import { Data_declaration_1Context } from './SystemVerilogParser';
import { Data_declaration_0Context } from './SystemVerilogParser';
import { Data_declaration_3Context } from './SystemVerilogParser';
import { Data_declaration_2Context } from './SystemVerilogParser';
import { Function_body_declaration_1Context } from './SystemVerilogParser';
import { Function_body_declaration_0Context } from './SystemVerilogParser';
import { Interface_port_header_1Context } from './SystemVerilogParser';
import { Interface_port_header_0Context } from './SystemVerilogParser';
import { Net_declaration_2Context } from './SystemVerilogParser';
import { Net_declaration_1Context } from './SystemVerilogParser';
import { Net_declaration_0Context } from './SystemVerilogParser';
import { Source_textContext } from './SystemVerilogParser';
import { DescriptionContext } from './SystemVerilogParser';
import { Module_nonansi_headerContext } from './SystemVerilogParser';
import { Module_ansi_headerContext } from './SystemVerilogParser';
import { Module_declarationContext } from './SystemVerilogParser';
import { Interface_declarationContext } from './SystemVerilogParser';
import { Interface_nonansi_headerContext } from './SystemVerilogParser';
import { Interface_ansi_headerContext } from './SystemVerilogParser';
import { Class_declarationContext } from './SystemVerilogParser';
import { Interface_class_typeContext } from './SystemVerilogParser';
import { Interface_class_declarationContext } from './SystemVerilogParser';
import { Interface_class_itemContext } from './SystemVerilogParser';
import { Interface_class_methodContext } from './SystemVerilogParser';
import { Package_declarationContext } from './SystemVerilogParser';
import { Timeunits_declarationContext } from './SystemVerilogParser';
import { Parameter_port_listContext } from './SystemVerilogParser';
import { Parameter_port_declarationContext } from './SystemVerilogParser';
import { List_of_portsContext } from './SystemVerilogParser';
import { List_of_port_declarationsContext } from './SystemVerilogParser';
import { Port_declarationContext } from './SystemVerilogParser';
import { PortContext } from './SystemVerilogParser';
import { Port_expressionContext } from './SystemVerilogParser';
import { Port_referenceContext } from './SystemVerilogParser';
import { Port_directionContext } from './SystemVerilogParser';
import { Net_port_headerContext } from './SystemVerilogParser';
import { Interface_port_headerContext } from './SystemVerilogParser';
import { Ansi_port_declarationContext } from './SystemVerilogParser';
import { Elaboration_system_taskContext } from './SystemVerilogParser';
import { Finish_numberContext } from './SystemVerilogParser';
import { Module_common_itemContext } from './SystemVerilogParser';
import { Module_itemContext } from './SystemVerilogParser';
import { Module_or_generate_itemContext } from './SystemVerilogParser';
import { Module_or_generate_item_declarationContext } from './SystemVerilogParser';
import { Non_port_module_itemContext } from './SystemVerilogParser';
import { Parameter_overrideContext } from './SystemVerilogParser';
import { Interface_or_generate_itemContext } from './SystemVerilogParser';
import { Extern_tf_declarationContext } from './SystemVerilogParser';
import { Interface_itemContext } from './SystemVerilogParser';
import { Non_port_interface_itemContext } from './SystemVerilogParser';
import { Class_itemContext } from './SystemVerilogParser';
import { Class_propertyContext } from './SystemVerilogParser';
import { Class_methodContext } from './SystemVerilogParser';
import { Class_constructor_prototypeContext } from './SystemVerilogParser';
import { Class_constraintContext } from './SystemVerilogParser';
import { Class_item_qualifierContext } from './SystemVerilogParser';
import { Property_qualifierContext } from './SystemVerilogParser';
import { Method_qualifierContext } from './SystemVerilogParser';
import { Method_prototypeContext } from './SystemVerilogParser';
import { Class_constructor_declarationContext } from './SystemVerilogParser';
import { Constraint_declarationContext } from './SystemVerilogParser';
import { Constraint_blockContext } from './SystemVerilogParser';
import { Constraint_block_itemContext } from './SystemVerilogParser';
import { Solve_before_listContext } from './SystemVerilogParser';
import { Constraint_primaryContext } from './SystemVerilogParser';
import { Constraint_expressionContext } from './SystemVerilogParser';
import { Uniqueness_constraintContext } from './SystemVerilogParser';
import { Constraint_setContext } from './SystemVerilogParser';
import { Dist_listContext } from './SystemVerilogParser';
import { Dist_itemContext } from './SystemVerilogParser';
import { Dist_weightContext } from './SystemVerilogParser';
import { Constraint_prototypeContext } from './SystemVerilogParser';
import { Constraint_prototype_qualifierContext } from './SystemVerilogParser';
import { Package_itemContext } from './SystemVerilogParser';
import { Package_or_generate_item_declarationContext } from './SystemVerilogParser';
import { Anonymous_programContext } from './SystemVerilogParser';
import { Local_parameter_declarationContext } from './SystemVerilogParser';
import { Parameter_declarationContext } from './SystemVerilogParser';
import { Inout_declarationContext } from './SystemVerilogParser';
import { Input_declarationContext } from './SystemVerilogParser';
import { Output_declarationContext } from './SystemVerilogParser';
import { Interface_port_declarationContext } from './SystemVerilogParser';
import { Ref_declarationContext } from './SystemVerilogParser';
import { Data_declarationContext } from './SystemVerilogParser';
import { Package_import_declarationContext } from './SystemVerilogParser';
import { Package_import_itemContext } from './SystemVerilogParser';
import { Package_export_declarationContext } from './SystemVerilogParser';
import { Genvar_declarationContext } from './SystemVerilogParser';
import { Net_declarationContext } from './SystemVerilogParser';
import { Type_declarationContext } from './SystemVerilogParser';
import { Type_declaration_typeContext } from './SystemVerilogParser';
import { Net_type_declarationContext } from './SystemVerilogParser';
import { LifetimeContext } from './SystemVerilogParser';
import { Casting_typeContext } from './SystemVerilogParser';
import { Data_typeContext } from './SystemVerilogParser';
import { Data_type_or_implicitContext } from './SystemVerilogParser';
import { Implicit_data_typeContext } from './SystemVerilogParser';
import { Enum_base_typeContext } from './SystemVerilogParser';
import { Enum_name_declarationContext } from './SystemVerilogParser';
import { Class_scopeContext } from './SystemVerilogParser';
import { Class_typeContext } from './SystemVerilogParser';
import { Integer_typeContext } from './SystemVerilogParser';
import { Net_port_typeContext } from './SystemVerilogParser';
import { Variable_port_typeContext } from './SystemVerilogParser';
import { Var_data_typeContext } from './SystemVerilogParser';
import { Simple_typeContext } from './SystemVerilogParser';
import { Struct_unionContext } from './SystemVerilogParser';
import { Data_type_or_voidContext } from './SystemVerilogParser';
import { Struct_union_memberContext } from './SystemVerilogParser';
import { Type_referenceContext } from './SystemVerilogParser';
import { Delay_valueContext } from './SystemVerilogParser';
import { List_of_defparam_assignmentsContext } from './SystemVerilogParser';
import { List_of_genvar_identifiersContext } from './SystemVerilogParser';
import { List_of_interface_identifiersContext } from './SystemVerilogParser';
import { List_of_net_decl_assignmentsContext } from './SystemVerilogParser';
import { List_of_param_assignmentsContext } from './SystemVerilogParser';
import { List_of_port_identifiersContext } from './SystemVerilogParser';
import { List_of_tf_variable_identifiersContext } from './SystemVerilogParser';
import { List_of_type_assignmentsContext } from './SystemVerilogParser';
import { List_of_variable_decl_assignmentsContext } from './SystemVerilogParser';
import { List_of_variable_identifiersContext } from './SystemVerilogParser';
import { List_of_variable_port_identifiersContext } from './SystemVerilogParser';
import { Defparam_assignmentContext } from './SystemVerilogParser';
import { Net_decl_assignmentContext } from './SystemVerilogParser';
import { Param_assignmentContext } from './SystemVerilogParser';
import { Type_assignmentContext } from './SystemVerilogParser';
import { Variable_decl_assignmentContext } from './SystemVerilogParser';
import { Class_newContext } from './SystemVerilogParser';
import { Dynamic_array_newContext } from './SystemVerilogParser';
import { Unpacked_dimensionContext } from './SystemVerilogParser';
import { Packed_dimensionContext } from './SystemVerilogParser';
import { Assosiative_dimensionContext } from './SystemVerilogParser';
import { Variable_dimensionContext } from './SystemVerilogParser';
import { Queue_dimensionContext } from './SystemVerilogParser';
import { Unsized_dimensionContext } from './SystemVerilogParser';
import { Function_data_type_or_implicitContext } from './SystemVerilogParser';
import { Function_declarationContext } from './SystemVerilogParser';
import { Function_body_declarationContext } from './SystemVerilogParser';
import { Function_prototypeContext } from './SystemVerilogParser';
import { Task_declarationContext } from './SystemVerilogParser';
import { Task_body_declarationContext } from './SystemVerilogParser';
import { Tf_item_declarationContext } from './SystemVerilogParser';
import { Tf_port_listContext } from './SystemVerilogParser';
import { Tf_port_itemContext } from './SystemVerilogParser';
import { Tf_port_directionContext } from './SystemVerilogParser';
import { Tf_port_declarationContext } from './SystemVerilogParser';
import { Task_prototypeContext } from './SystemVerilogParser';
import { Block_item_declarationContext } from './SystemVerilogParser';
import { Modport_declarationContext } from './SystemVerilogParser';
import { Modport_itemContext } from './SystemVerilogParser';
import { Modport_ports_declarationContext } from './SystemVerilogParser';
import { Modport_clocking_declarationContext } from './SystemVerilogParser';
import { Modport_simple_ports_declarationContext } from './SystemVerilogParser';
import { Modport_simple_portContext } from './SystemVerilogParser';
import { Modport_tf_ports_declarationContext } from './SystemVerilogParser';
import { Modport_tf_portContext } from './SystemVerilogParser';
import { Import_exportContext } from './SystemVerilogParser';
import { Concurrent_assertion_itemContext } from './SystemVerilogParser';
import { Concurrent_assertion_statementContext } from './SystemVerilogParser';
import { Expression_or_distContext } from './SystemVerilogParser';
import { Module_instantiationContext } from './SystemVerilogParser';
import { Parameter_value_assignmentContext } from './SystemVerilogParser';
import { Parameter_assign_commaContext } from './SystemVerilogParser';
import { List_of_parameter_assignmentsContext } from './SystemVerilogParser';
import { Ordered_parameter_assignmentContext } from './SystemVerilogParser';
import { Named_parameter_assignmentContext } from './SystemVerilogParser';
import { Hierarchical_instanceContext } from './SystemVerilogParser';
import { Name_of_instanceContext } from './SystemVerilogParser';
import { Port_conn_commaContext } from './SystemVerilogParser';
import { List_of_port_connectionsContext } from './SystemVerilogParser';
import { Ordered_port_connectionContext } from './SystemVerilogParser';
import { Named_port_connectionContext } from './SystemVerilogParser';
import { Checker_instantiationContext } from './SystemVerilogParser';
import { List_of_checker_port_connectionsContext } from './SystemVerilogParser';
import { Generate_regionContext } from './SystemVerilogParser';
import { Loop_generate_constructContext } from './SystemVerilogParser';
import { Genvar_initializationContext } from './SystemVerilogParser';
import { Genvar_iterationContext } from './SystemVerilogParser';
import { Conditional_generate_constructContext } from './SystemVerilogParser';
import { If_generate_constructContext } from './SystemVerilogParser';
import { Case_generate_constructContext } from './SystemVerilogParser';
import { Case_generate_itemContext } from './SystemVerilogParser';
import { Generate_blockContext } from './SystemVerilogParser';
import { Generate_itemContext } from './SystemVerilogParser';
import { Continuous_assignContext } from './SystemVerilogParser';
import { List_of_net_assignmentsContext } from './SystemVerilogParser';
import { List_of_variable_assignmentsContext } from './SystemVerilogParser';
import { Net_aliasContext } from './SystemVerilogParser';
import { Net_assignmentContext } from './SystemVerilogParser';
import { Initial_constructContext } from './SystemVerilogParser';
import { Always_constructContext } from './SystemVerilogParser';
import { Final_constructContext } from './SystemVerilogParser';
import { Blocking_assignmentContext } from './SystemVerilogParser';
import { Operator_assignmentContext } from './SystemVerilogParser';
import { Assignment_operatorContext } from './SystemVerilogParser';
import { Nonblocking_assignmentContext } from './SystemVerilogParser';
import { Procedural_continuous_assignmentContext } from './SystemVerilogParser';
import { Variable_assignmentContext } from './SystemVerilogParser';
import { Action_blockContext } from './SystemVerilogParser';
import { Seq_blockContext } from './SystemVerilogParser';
import { Statement_or_nullContext } from './SystemVerilogParser';
import { StatementContext } from './SystemVerilogParser';
import { Statement_itemContext } from './SystemVerilogParser';
import { Function_statementContext } from './SystemVerilogParser';
import { Function_statement_or_nullContext } from './SystemVerilogParser';
import { Variable_identifier_listContext } from './SystemVerilogParser';
import { Procedural_timing_control_statementContext } from './SystemVerilogParser';
import { Delay_or_event_controlContext } from './SystemVerilogParser';
import { Delay_controlContext } from './SystemVerilogParser';
import { Event_controlContext } from './SystemVerilogParser';
import { Event_expressionContext } from './SystemVerilogParser';
import { Procedural_timing_controlContext } from './SystemVerilogParser';
import { Jump_statementContext } from './SystemVerilogParser';
import { Wait_statementContext } from './SystemVerilogParser';
import { Event_triggerContext } from './SystemVerilogParser';
import { Disable_statementContext } from './SystemVerilogParser';
import { Conditional_statementContext } from './SystemVerilogParser';
import { Unique_priorityContext } from './SystemVerilogParser';
import { Cond_predicateContext } from './SystemVerilogParser';
import { Expression_or_cond_patternContext } from './SystemVerilogParser';
import { Cond_patternContext } from './SystemVerilogParser';
import { Case_statementContext } from './SystemVerilogParser';
import { Case_expressionContext } from './SystemVerilogParser';
import { Case_itemContext } from './SystemVerilogParser';
import { Case_inside_itemContext } from './SystemVerilogParser';
import { Case_item_expressionContext } from './SystemVerilogParser';
import { Open_range_listContext } from './SystemVerilogParser';
import { Open_value_rangeContext } from './SystemVerilogParser';
import { PatternContext } from './SystemVerilogParser';
import { Loop_statementContext } from './SystemVerilogParser';
import { For_initializationContext } from './SystemVerilogParser';
import { For_variable_declarationContext } from './SystemVerilogParser';
import { For_stepContext } from './SystemVerilogParser';
import { For_step_assignmentContext } from './SystemVerilogParser';
import { Loop_variablesContext } from './SystemVerilogParser';
import { Subroutine_call_statementContext } from './SystemVerilogParser';
import { Assertion_itemContext } from './SystemVerilogParser';
import { Deferred_immediate_assertion_itemContext } from './SystemVerilogParser';
import { Procedural_assertion_statementContext } from './SystemVerilogParser';
import { Immediate_assertion_statementContext } from './SystemVerilogParser';
import { Simple_immediate_assertion_statementContext } from './SystemVerilogParser';
import { Simple_immediate_assert_statementContext } from './SystemVerilogParser';
import { Simple_immediate_assume_statementContext } from './SystemVerilogParser';
import { Simple_immediate_cover_statementContext } from './SystemVerilogParser';
import { Deferred_immediate_assertion_statementContext } from './SystemVerilogParser';
import { Deferred_immediate_assert_statementContext } from './SystemVerilogParser';
import { Deferred_immediate_assume_statementContext } from './SystemVerilogParser';
import { Deferred_immediate_cover_statementContext } from './SystemVerilogParser';
import { Cycle_delayContext } from './SystemVerilogParser';
import { Edge_identContext } from './SystemVerilogParser';
import { ConcatenationContext } from './SystemVerilogParser';
import { Constant_concatenationContext } from './SystemVerilogParser';
import { Constant_multiple_concatenationContext } from './SystemVerilogParser';
import { Multiple_concatenationContext } from './SystemVerilogParser';
import { Array_range_expressionContext } from './SystemVerilogParser';
import { Empty_queueContext } from './SystemVerilogParser';
import { Constant_function_callContext } from './SystemVerilogParser';
import { Tf_callContext } from './SystemVerilogParser';
import { System_tf_callContext } from './SystemVerilogParser';
import { Subroutine_callContext } from './SystemVerilogParser';
import { Function_subroutine_callContext } from './SystemVerilogParser';
import { Arg_commaContext } from './SystemVerilogParser';
import { List_of_argumentsContext } from './SystemVerilogParser';
import { Method_callContext } from './SystemVerilogParser';
import { Method_call_rootContext } from './SystemVerilogParser';
import { Method_call_bodyContext } from './SystemVerilogParser';
import { Built_in_method_callContext } from './SystemVerilogParser';
import { Array_manipulation_callContext } from './SystemVerilogParser';
import { Randomize_callContext } from './SystemVerilogParser';
import { Array_method_nameContext } from './SystemVerilogParser';
import { Inc_or_dec_expressionContext } from './SystemVerilogParser';
import { Constant_expressionContext } from './SystemVerilogParser';
import { Constant_mintypmax_expressionContext } from './SystemVerilogParser';
import { Constant_param_expressionContext } from './SystemVerilogParser';
import { Param_expressionContext } from './SystemVerilogParser';
import { Constant_range_expressionContext } from './SystemVerilogParser';
import { Constant_part_select_rangeContext } from './SystemVerilogParser';
import { Constant_rangeContext } from './SystemVerilogParser';
import { Constant_indexed_rangeContext } from './SystemVerilogParser';
import { ExpressionContext } from './SystemVerilogParser';
import { Tagged_union_expressionContext } from './SystemVerilogParser';
import { Value_rangeContext } from './SystemVerilogParser';
import { Mintypmax_expressionContext } from './SystemVerilogParser';
import { Part_select_rangeContext } from './SystemVerilogParser';
import { Indexed_rangeContext } from './SystemVerilogParser';
import { Genvar_expressionContext } from './SystemVerilogParser';
import { Constant_primaryContext } from './SystemVerilogParser';
import { PrimaryContext } from './SystemVerilogParser';
import { Class_qualifierContext } from './SystemVerilogParser';
import { Range_expressionContext } from './SystemVerilogParser';
import { Primary_literalContext } from './SystemVerilogParser';
import { Time_literalContext } from './SystemVerilogParser';
import { Implicit_class_handleContext } from './SystemVerilogParser';
import { Bit_selectContext } from './SystemVerilogParser';
import { SelectContext } from './SystemVerilogParser';
import { Nonrange_selectContext } from './SystemVerilogParser';
import { Constant_bit_selectContext } from './SystemVerilogParser';
import { Constant_selectContext } from './SystemVerilogParser';
import { Constant_castContext } from './SystemVerilogParser';
import { CastContext } from './SystemVerilogParser';
import { Net_lvalueContext } from './SystemVerilogParser';
import { Variable_lvalueContext } from './SystemVerilogParser';
import { Non_range_variable_lvalueContext } from './SystemVerilogParser';
import { NumberContext } from './SystemVerilogParser';
import { Integral_numberContext } from './SystemVerilogParser';
import { Decimal_numberContext } from './SystemVerilogParser';
import { Real_numberContext } from './SystemVerilogParser';
import { Unary_operatorContext } from './SystemVerilogParser';
import { Binary_operatorContext } from './SystemVerilogParser';
import { Inc_or_dec_operatorContext } from './SystemVerilogParser';
import { Unary_module_path_operatorContext } from './SystemVerilogParser';
import { Binary_module_path_operatorContext } from './SystemVerilogParser';
import { Package_scopeContext } from './SystemVerilogParser';
import { IdentContext } from './SystemVerilogParser';
import { Ps_identContext } from './SystemVerilogParser';
import { Hier_identContext } from './SystemVerilogParser';
import { Ps_or_hier_identContext } from './SystemVerilogParser';
import { Pp_textContext } from './SystemVerilogParser';
import { Pp_directiveContext } from './SystemVerilogParser';
import { Pp_default_nettypeContext } from './SystemVerilogParser';
import { Pp_timescaleContext } from './SystemVerilogParser';
import { Pp_includeContext } from './SystemVerilogParser';
import { Pp_define_onlyContext } from './SystemVerilogParser';
import { Pp_define_noargContext } from './SystemVerilogParser';
import { Pp_define_argContext } from './SystemVerilogParser';
import { Pp_undefContext } from './SystemVerilogParser';
import { Pp_call_noargContext } from './SystemVerilogParser';
import { Pp_call_argContext } from './SystemVerilogParser';
import { Pp_ifdefContext } from './SystemVerilogParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SystemVerilogParser`.
 */
export interface SystemVerilogParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `task_body_declaration_1`
	 * labeled alternative in `SystemVerilogParser.task_body_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_body_declaration_1?: (ctx: Task_body_declaration_1Context) => void;
	/**
	 * Exit a parse tree produced by the `task_body_declaration_1`
	 * labeled alternative in `SystemVerilogParser.task_body_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_body_declaration_1?: (ctx: Task_body_declaration_1Context) => void;

	/**
	 * Enter a parse tree produced by the `task_body_declaration_0`
	 * labeled alternative in `SystemVerilogParser.task_body_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_body_declaration_0?: (ctx: Task_body_declaration_0Context) => void;
	/**
	 * Exit a parse tree produced by the `task_body_declaration_0`
	 * labeled alternative in `SystemVerilogParser.task_body_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_body_declaration_0?: (ctx: Task_body_declaration_0Context) => void;

	/**
	 * Enter a parse tree produced by the `type_declaration_0`
	 * labeled alternative in `SystemVerilogParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration_0?: (ctx: Type_declaration_0Context) => void;
	/**
	 * Exit a parse tree produced by the `type_declaration_0`
	 * labeled alternative in `SystemVerilogParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration_0?: (ctx: Type_declaration_0Context) => void;

	/**
	 * Enter a parse tree produced by the `type_declaration_1`
	 * labeled alternative in `SystemVerilogParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration_1?: (ctx: Type_declaration_1Context) => void;
	/**
	 * Exit a parse tree produced by the `type_declaration_1`
	 * labeled alternative in `SystemVerilogParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration_1?: (ctx: Type_declaration_1Context) => void;

	/**
	 * Enter a parse tree produced by the `type_declaration_2`
	 * labeled alternative in `SystemVerilogParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration_2?: (ctx: Type_declaration_2Context) => void;
	/**
	 * Exit a parse tree produced by the `type_declaration_2`
	 * labeled alternative in `SystemVerilogParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration_2?: (ctx: Type_declaration_2Context) => void;

	/**
	 * Enter a parse tree produced by the `net_port_type_2`
	 * labeled alternative in `SystemVerilogParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	enterNet_port_type_2?: (ctx: Net_port_type_2Context) => void;
	/**
	 * Exit a parse tree produced by the `net_port_type_2`
	 * labeled alternative in `SystemVerilogParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	exitNet_port_type_2?: (ctx: Net_port_type_2Context) => void;

	/**
	 * Enter a parse tree produced by the `net_port_type_1`
	 * labeled alternative in `SystemVerilogParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	enterNet_port_type_1?: (ctx: Net_port_type_1Context) => void;
	/**
	 * Exit a parse tree produced by the `net_port_type_1`
	 * labeled alternative in `SystemVerilogParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	exitNet_port_type_1?: (ctx: Net_port_type_1Context) => void;

	/**
	 * Enter a parse tree produced by the `net_port_type_0`
	 * labeled alternative in `SystemVerilogParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	enterNet_port_type_0?: (ctx: Net_port_type_0Context) => void;
	/**
	 * Exit a parse tree produced by the `net_port_type_0`
	 * labeled alternative in `SystemVerilogParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	exitNet_port_type_0?: (ctx: Net_port_type_0Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_11`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_11?: (ctx: Data_type_11Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_11`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_11?: (ctx: Data_type_11Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_12`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_12?: (ctx: Data_type_12Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_12`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_12?: (ctx: Data_type_12Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_9`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_9?: (ctx: Data_type_9Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_9`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_9?: (ctx: Data_type_9Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_8`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_8?: (ctx: Data_type_8Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_8`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_8?: (ctx: Data_type_8Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_10`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_10?: (ctx: Data_type_10Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_10`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_10?: (ctx: Data_type_10Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_5`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_5?: (ctx: Data_type_5Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_5`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_5?: (ctx: Data_type_5Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_4`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_4?: (ctx: Data_type_4Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_4`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_4?: (ctx: Data_type_4Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_7`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_7?: (ctx: Data_type_7Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_7`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_7?: (ctx: Data_type_7Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_6`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_6?: (ctx: Data_type_6Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_6`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_6?: (ctx: Data_type_6Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_1`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_1?: (ctx: Data_type_1Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_1`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_1?: (ctx: Data_type_1Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_0`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_0?: (ctx: Data_type_0Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_0`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_0?: (ctx: Data_type_0Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_3`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_3?: (ctx: Data_type_3Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_3`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_3?: (ctx: Data_type_3Context) => void;

	/**
	 * Enter a parse tree produced by the `data_type_2`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type_2?: (ctx: Data_type_2Context) => void;
	/**
	 * Exit a parse tree produced by the `data_type_2`
	 * labeled alternative in `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type_2?: (ctx: Data_type_2Context) => void;

	/**
	 * Enter a parse tree produced by the `timeunits_declaration_0`
	 * labeled alternative in `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	enterTimeunits_declaration_0?: (ctx: Timeunits_declaration_0Context) => void;
	/**
	 * Exit a parse tree produced by the `timeunits_declaration_0`
	 * labeled alternative in `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	exitTimeunits_declaration_0?: (ctx: Timeunits_declaration_0Context) => void;

	/**
	 * Enter a parse tree produced by the `timeunits_declaration_1`
	 * labeled alternative in `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	enterTimeunits_declaration_1?: (ctx: Timeunits_declaration_1Context) => void;
	/**
	 * Exit a parse tree produced by the `timeunits_declaration_1`
	 * labeled alternative in `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	exitTimeunits_declaration_1?: (ctx: Timeunits_declaration_1Context) => void;

	/**
	 * Enter a parse tree produced by the `timeunits_declaration_2`
	 * labeled alternative in `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	enterTimeunits_declaration_2?: (ctx: Timeunits_declaration_2Context) => void;
	/**
	 * Exit a parse tree produced by the `timeunits_declaration_2`
	 * labeled alternative in `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	exitTimeunits_declaration_2?: (ctx: Timeunits_declaration_2Context) => void;

	/**
	 * Enter a parse tree produced by the `timeunits_declaration_3`
	 * labeled alternative in `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	enterTimeunits_declaration_3?: (ctx: Timeunits_declaration_3Context) => void;
	/**
	 * Exit a parse tree produced by the `timeunits_declaration_3`
	 * labeled alternative in `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	exitTimeunits_declaration_3?: (ctx: Timeunits_declaration_3Context) => void;

	/**
	 * Enter a parse tree produced by the `data_declaration_1`
	 * labeled alternative in `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	enterData_declaration_1?: (ctx: Data_declaration_1Context) => void;
	/**
	 * Exit a parse tree produced by the `data_declaration_1`
	 * labeled alternative in `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	exitData_declaration_1?: (ctx: Data_declaration_1Context) => void;

	/**
	 * Enter a parse tree produced by the `data_declaration_0`
	 * labeled alternative in `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	enterData_declaration_0?: (ctx: Data_declaration_0Context) => void;
	/**
	 * Exit a parse tree produced by the `data_declaration_0`
	 * labeled alternative in `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	exitData_declaration_0?: (ctx: Data_declaration_0Context) => void;

	/**
	 * Enter a parse tree produced by the `data_declaration_3`
	 * labeled alternative in `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	enterData_declaration_3?: (ctx: Data_declaration_3Context) => void;
	/**
	 * Exit a parse tree produced by the `data_declaration_3`
	 * labeled alternative in `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	exitData_declaration_3?: (ctx: Data_declaration_3Context) => void;

	/**
	 * Enter a parse tree produced by the `data_declaration_2`
	 * labeled alternative in `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	enterData_declaration_2?: (ctx: Data_declaration_2Context) => void;
	/**
	 * Exit a parse tree produced by the `data_declaration_2`
	 * labeled alternative in `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	exitData_declaration_2?: (ctx: Data_declaration_2Context) => void;

	/**
	 * Enter a parse tree produced by the `function_body_declaration_1`
	 * labeled alternative in `SystemVerilogParser.function_body_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_body_declaration_1?: (ctx: Function_body_declaration_1Context) => void;
	/**
	 * Exit a parse tree produced by the `function_body_declaration_1`
	 * labeled alternative in `SystemVerilogParser.function_body_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_body_declaration_1?: (ctx: Function_body_declaration_1Context) => void;

	/**
	 * Enter a parse tree produced by the `function_body_declaration_0`
	 * labeled alternative in `SystemVerilogParser.function_body_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_body_declaration_0?: (ctx: Function_body_declaration_0Context) => void;
	/**
	 * Exit a parse tree produced by the `function_body_declaration_0`
	 * labeled alternative in `SystemVerilogParser.function_body_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_body_declaration_0?: (ctx: Function_body_declaration_0Context) => void;

	/**
	 * Enter a parse tree produced by the `interface_port_header_1`
	 * labeled alternative in `SystemVerilogParser.interface_port_header`.
	 * @param ctx the parse tree
	 */
	enterInterface_port_header_1?: (ctx: Interface_port_header_1Context) => void;
	/**
	 * Exit a parse tree produced by the `interface_port_header_1`
	 * labeled alternative in `SystemVerilogParser.interface_port_header`.
	 * @param ctx the parse tree
	 */
	exitInterface_port_header_1?: (ctx: Interface_port_header_1Context) => void;

	/**
	 * Enter a parse tree produced by the `interface_port_header_0`
	 * labeled alternative in `SystemVerilogParser.interface_port_header`.
	 * @param ctx the parse tree
	 */
	enterInterface_port_header_0?: (ctx: Interface_port_header_0Context) => void;
	/**
	 * Exit a parse tree produced by the `interface_port_header_0`
	 * labeled alternative in `SystemVerilogParser.interface_port_header`.
	 * @param ctx the parse tree
	 */
	exitInterface_port_header_0?: (ctx: Interface_port_header_0Context) => void;

	/**
	 * Enter a parse tree produced by the `net_declaration_2`
	 * labeled alternative in `SystemVerilogParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	enterNet_declaration_2?: (ctx: Net_declaration_2Context) => void;
	/**
	 * Exit a parse tree produced by the `net_declaration_2`
	 * labeled alternative in `SystemVerilogParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	exitNet_declaration_2?: (ctx: Net_declaration_2Context) => void;

	/**
	 * Enter a parse tree produced by the `net_declaration_1`
	 * labeled alternative in `SystemVerilogParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	enterNet_declaration_1?: (ctx: Net_declaration_1Context) => void;
	/**
	 * Exit a parse tree produced by the `net_declaration_1`
	 * labeled alternative in `SystemVerilogParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	exitNet_declaration_1?: (ctx: Net_declaration_1Context) => void;

	/**
	 * Enter a parse tree produced by the `net_declaration_0`
	 * labeled alternative in `SystemVerilogParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	enterNet_declaration_0?: (ctx: Net_declaration_0Context) => void;
	/**
	 * Exit a parse tree produced by the `net_declaration_0`
	 * labeled alternative in `SystemVerilogParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	exitNet_declaration_0?: (ctx: Net_declaration_0Context) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.source_text`.
	 * @param ctx the parse tree
	 */
	enterSource_text?: (ctx: Source_textContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.source_text`.
	 * @param ctx the parse tree
	 */
	exitSource_text?: (ctx: Source_textContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.module_nonansi_header`.
	 * @param ctx the parse tree
	 */
	enterModule_nonansi_header?: (ctx: Module_nonansi_headerContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.module_nonansi_header`.
	 * @param ctx the parse tree
	 */
	exitModule_nonansi_header?: (ctx: Module_nonansi_headerContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.module_ansi_header`.
	 * @param ctx the parse tree
	 */
	enterModule_ansi_header?: (ctx: Module_ansi_headerContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.module_ansi_header`.
	 * @param ctx the parse tree
	 */
	exitModule_ansi_header?: (ctx: Module_ansi_headerContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.module_declaration`.
	 * @param ctx the parse tree
	 */
	enterModule_declaration?: (ctx: Module_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.module_declaration`.
	 * @param ctx the parse tree
	 */
	exitModule_declaration?: (ctx: Module_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_declaration`.
	 * @param ctx the parse tree
	 */
	enterInterface_declaration?: (ctx: Interface_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_declaration`.
	 * @param ctx the parse tree
	 */
	exitInterface_declaration?: (ctx: Interface_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_nonansi_header`.
	 * @param ctx the parse tree
	 */
	enterInterface_nonansi_header?: (ctx: Interface_nonansi_headerContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_nonansi_header`.
	 * @param ctx the parse tree
	 */
	exitInterface_nonansi_header?: (ctx: Interface_nonansi_headerContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_ansi_header`.
	 * @param ctx the parse tree
	 */
	enterInterface_ansi_header?: (ctx: Interface_ansi_headerContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_ansi_header`.
	 * @param ctx the parse tree
	 */
	exitInterface_ansi_header?: (ctx: Interface_ansi_headerContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_declaration`.
	 * @param ctx the parse tree
	 */
	enterClass_declaration?: (ctx: Class_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_declaration`.
	 * @param ctx the parse tree
	 */
	exitClass_declaration?: (ctx: Class_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_class_type`.
	 * @param ctx the parse tree
	 */
	enterInterface_class_type?: (ctx: Interface_class_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_class_type`.
	 * @param ctx the parse tree
	 */
	exitInterface_class_type?: (ctx: Interface_class_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_class_declaration`.
	 * @param ctx the parse tree
	 */
	enterInterface_class_declaration?: (ctx: Interface_class_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_class_declaration`.
	 * @param ctx the parse tree
	 */
	exitInterface_class_declaration?: (ctx: Interface_class_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_class_item`.
	 * @param ctx the parse tree
	 */
	enterInterface_class_item?: (ctx: Interface_class_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_class_item`.
	 * @param ctx the parse tree
	 */
	exitInterface_class_item?: (ctx: Interface_class_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_class_method`.
	 * @param ctx the parse tree
	 */
	enterInterface_class_method?: (ctx: Interface_class_methodContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_class_method`.
	 * @param ctx the parse tree
	 */
	exitInterface_class_method?: (ctx: Interface_class_methodContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.package_declaration`.
	 * @param ctx the parse tree
	 */
	enterPackage_declaration?: (ctx: Package_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.package_declaration`.
	 * @param ctx the parse tree
	 */
	exitPackage_declaration?: (ctx: Package_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	enterTimeunits_declaration?: (ctx: Timeunits_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	exitTimeunits_declaration?: (ctx: Timeunits_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.parameter_port_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_port_list?: (ctx: Parameter_port_listContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.parameter_port_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_port_list?: (ctx: Parameter_port_listContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.parameter_port_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_port_declaration?: (ctx: Parameter_port_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.parameter_port_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_port_declaration?: (ctx: Parameter_port_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_ports`.
	 * @param ctx the parse tree
	 */
	enterList_of_ports?: (ctx: List_of_portsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_ports`.
	 * @param ctx the parse tree
	 */
	exitList_of_ports?: (ctx: List_of_portsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_port_declarations`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_declarations?: (ctx: List_of_port_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_port_declarations`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_declarations?: (ctx: List_of_port_declarationsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.port_declaration`.
	 * @param ctx the parse tree
	 */
	enterPort_declaration?: (ctx: Port_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.port_declaration`.
	 * @param ctx the parse tree
	 */
	exitPort_declaration?: (ctx: Port_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?: (ctx: PortContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?: (ctx: PortContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.port_expression`.
	 * @param ctx the parse tree
	 */
	enterPort_expression?: (ctx: Port_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.port_expression`.
	 * @param ctx the parse tree
	 */
	exitPort_expression?: (ctx: Port_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.port_reference`.
	 * @param ctx the parse tree
	 */
	enterPort_reference?: (ctx: Port_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.port_reference`.
	 * @param ctx the parse tree
	 */
	exitPort_reference?: (ctx: Port_referenceContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.port_direction`.
	 * @param ctx the parse tree
	 */
	enterPort_direction?: (ctx: Port_directionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.port_direction`.
	 * @param ctx the parse tree
	 */
	exitPort_direction?: (ctx: Port_directionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.net_port_header`.
	 * @param ctx the parse tree
	 */
	enterNet_port_header?: (ctx: Net_port_headerContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.net_port_header`.
	 * @param ctx the parse tree
	 */
	exitNet_port_header?: (ctx: Net_port_headerContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_port_header`.
	 * @param ctx the parse tree
	 */
	enterInterface_port_header?: (ctx: Interface_port_headerContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_port_header`.
	 * @param ctx the parse tree
	 */
	exitInterface_port_header?: (ctx: Interface_port_headerContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.ansi_port_declaration`.
	 * @param ctx the parse tree
	 */
	enterAnsi_port_declaration?: (ctx: Ansi_port_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.ansi_port_declaration`.
	 * @param ctx the parse tree
	 */
	exitAnsi_port_declaration?: (ctx: Ansi_port_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.elaboration_system_task`.
	 * @param ctx the parse tree
	 */
	enterElaboration_system_task?: (ctx: Elaboration_system_taskContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.elaboration_system_task`.
	 * @param ctx the parse tree
	 */
	exitElaboration_system_task?: (ctx: Elaboration_system_taskContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.finish_number`.
	 * @param ctx the parse tree
	 */
	enterFinish_number?: (ctx: Finish_numberContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.finish_number`.
	 * @param ctx the parse tree
	 */
	exitFinish_number?: (ctx: Finish_numberContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.module_common_item`.
	 * @param ctx the parse tree
	 */
	enterModule_common_item?: (ctx: Module_common_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.module_common_item`.
	 * @param ctx the parse tree
	 */
	exitModule_common_item?: (ctx: Module_common_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.module_item`.
	 * @param ctx the parse tree
	 */
	enterModule_item?: (ctx: Module_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.module_item`.
	 * @param ctx the parse tree
	 */
	exitModule_item?: (ctx: Module_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.module_or_generate_item`.
	 * @param ctx the parse tree
	 */
	enterModule_or_generate_item?: (ctx: Module_or_generate_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.module_or_generate_item`.
	 * @param ctx the parse tree
	 */
	exitModule_or_generate_item?: (ctx: Module_or_generate_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.module_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterModule_or_generate_item_declaration?: (ctx: Module_or_generate_item_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.module_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitModule_or_generate_item_declaration?: (ctx: Module_or_generate_item_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.non_port_module_item`.
	 * @param ctx the parse tree
	 */
	enterNon_port_module_item?: (ctx: Non_port_module_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.non_port_module_item`.
	 * @param ctx the parse tree
	 */
	exitNon_port_module_item?: (ctx: Non_port_module_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.parameter_override`.
	 * @param ctx the parse tree
	 */
	enterParameter_override?: (ctx: Parameter_overrideContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.parameter_override`.
	 * @param ctx the parse tree
	 */
	exitParameter_override?: (ctx: Parameter_overrideContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_or_generate_item`.
	 * @param ctx the parse tree
	 */
	enterInterface_or_generate_item?: (ctx: Interface_or_generate_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_or_generate_item`.
	 * @param ctx the parse tree
	 */
	exitInterface_or_generate_item?: (ctx: Interface_or_generate_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.extern_tf_declaration`.
	 * @param ctx the parse tree
	 */
	enterExtern_tf_declaration?: (ctx: Extern_tf_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.extern_tf_declaration`.
	 * @param ctx the parse tree
	 */
	exitExtern_tf_declaration?: (ctx: Extern_tf_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_item`.
	 * @param ctx the parse tree
	 */
	enterInterface_item?: (ctx: Interface_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_item`.
	 * @param ctx the parse tree
	 */
	exitInterface_item?: (ctx: Interface_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.non_port_interface_item`.
	 * @param ctx the parse tree
	 */
	enterNon_port_interface_item?: (ctx: Non_port_interface_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.non_port_interface_item`.
	 * @param ctx the parse tree
	 */
	exitNon_port_interface_item?: (ctx: Non_port_interface_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_item`.
	 * @param ctx the parse tree
	 */
	enterClass_item?: (ctx: Class_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_item`.
	 * @param ctx the parse tree
	 */
	exitClass_item?: (ctx: Class_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_property`.
	 * @param ctx the parse tree
	 */
	enterClass_property?: (ctx: Class_propertyContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_property`.
	 * @param ctx the parse tree
	 */
	exitClass_property?: (ctx: Class_propertyContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_method`.
	 * @param ctx the parse tree
	 */
	enterClass_method?: (ctx: Class_methodContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_method`.
	 * @param ctx the parse tree
	 */
	exitClass_method?: (ctx: Class_methodContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_constructor_prototype`.
	 * @param ctx the parse tree
	 */
	enterClass_constructor_prototype?: (ctx: Class_constructor_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_constructor_prototype`.
	 * @param ctx the parse tree
	 */
	exitClass_constructor_prototype?: (ctx: Class_constructor_prototypeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_constraint`.
	 * @param ctx the parse tree
	 */
	enterClass_constraint?: (ctx: Class_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_constraint`.
	 * @param ctx the parse tree
	 */
	exitClass_constraint?: (ctx: Class_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_item_qualifier`.
	 * @param ctx the parse tree
	 */
	enterClass_item_qualifier?: (ctx: Class_item_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_item_qualifier`.
	 * @param ctx the parse tree
	 */
	exitClass_item_qualifier?: (ctx: Class_item_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.property_qualifier`.
	 * @param ctx the parse tree
	 */
	enterProperty_qualifier?: (ctx: Property_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.property_qualifier`.
	 * @param ctx the parse tree
	 */
	exitProperty_qualifier?: (ctx: Property_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.method_qualifier`.
	 * @param ctx the parse tree
	 */
	enterMethod_qualifier?: (ctx: Method_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.method_qualifier`.
	 * @param ctx the parse tree
	 */
	exitMethod_qualifier?: (ctx: Method_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.method_prototype`.
	 * @param ctx the parse tree
	 */
	enterMethod_prototype?: (ctx: Method_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.method_prototype`.
	 * @param ctx the parse tree
	 */
	exitMethod_prototype?: (ctx: Method_prototypeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_constructor_declaration`.
	 * @param ctx the parse tree
	 */
	enterClass_constructor_declaration?: (ctx: Class_constructor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_constructor_declaration`.
	 * @param ctx the parse tree
	 */
	exitClass_constructor_declaration?: (ctx: Class_constructor_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constraint_declaration`.
	 * @param ctx the parse tree
	 */
	enterConstraint_declaration?: (ctx: Constraint_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constraint_declaration`.
	 * @param ctx the parse tree
	 */
	exitConstraint_declaration?: (ctx: Constraint_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constraint_block`.
	 * @param ctx the parse tree
	 */
	enterConstraint_block?: (ctx: Constraint_blockContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constraint_block`.
	 * @param ctx the parse tree
	 */
	exitConstraint_block?: (ctx: Constraint_blockContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constraint_block_item`.
	 * @param ctx the parse tree
	 */
	enterConstraint_block_item?: (ctx: Constraint_block_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constraint_block_item`.
	 * @param ctx the parse tree
	 */
	exitConstraint_block_item?: (ctx: Constraint_block_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.solve_before_list`.
	 * @param ctx the parse tree
	 */
	enterSolve_before_list?: (ctx: Solve_before_listContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.solve_before_list`.
	 * @param ctx the parse tree
	 */
	exitSolve_before_list?: (ctx: Solve_before_listContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constraint_primary`.
	 * @param ctx the parse tree
	 */
	enterConstraint_primary?: (ctx: Constraint_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constraint_primary`.
	 * @param ctx the parse tree
	 */
	exitConstraint_primary?: (ctx: Constraint_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constraint_expression`.
	 * @param ctx the parse tree
	 */
	enterConstraint_expression?: (ctx: Constraint_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constraint_expression`.
	 * @param ctx the parse tree
	 */
	exitConstraint_expression?: (ctx: Constraint_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.uniqueness_constraint`.
	 * @param ctx the parse tree
	 */
	enterUniqueness_constraint?: (ctx: Uniqueness_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.uniqueness_constraint`.
	 * @param ctx the parse tree
	 */
	exitUniqueness_constraint?: (ctx: Uniqueness_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constraint_set`.
	 * @param ctx the parse tree
	 */
	enterConstraint_set?: (ctx: Constraint_setContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constraint_set`.
	 * @param ctx the parse tree
	 */
	exitConstraint_set?: (ctx: Constraint_setContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.dist_list`.
	 * @param ctx the parse tree
	 */
	enterDist_list?: (ctx: Dist_listContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.dist_list`.
	 * @param ctx the parse tree
	 */
	exitDist_list?: (ctx: Dist_listContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.dist_item`.
	 * @param ctx the parse tree
	 */
	enterDist_item?: (ctx: Dist_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.dist_item`.
	 * @param ctx the parse tree
	 */
	exitDist_item?: (ctx: Dist_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.dist_weight`.
	 * @param ctx the parse tree
	 */
	enterDist_weight?: (ctx: Dist_weightContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.dist_weight`.
	 * @param ctx the parse tree
	 */
	exitDist_weight?: (ctx: Dist_weightContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constraint_prototype`.
	 * @param ctx the parse tree
	 */
	enterConstraint_prototype?: (ctx: Constraint_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constraint_prototype`.
	 * @param ctx the parse tree
	 */
	exitConstraint_prototype?: (ctx: Constraint_prototypeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constraint_prototype_qualifier`.
	 * @param ctx the parse tree
	 */
	enterConstraint_prototype_qualifier?: (ctx: Constraint_prototype_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constraint_prototype_qualifier`.
	 * @param ctx the parse tree
	 */
	exitConstraint_prototype_qualifier?: (ctx: Constraint_prototype_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.package_item`.
	 * @param ctx the parse tree
	 */
	enterPackage_item?: (ctx: Package_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.package_item`.
	 * @param ctx the parse tree
	 */
	exitPackage_item?: (ctx: Package_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.package_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterPackage_or_generate_item_declaration?: (ctx: Package_or_generate_item_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.package_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitPackage_or_generate_item_declaration?: (ctx: Package_or_generate_item_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.anonymous_program`.
	 * @param ctx the parse tree
	 */
	enterAnonymous_program?: (ctx: Anonymous_programContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.anonymous_program`.
	 * @param ctx the parse tree
	 */
	exitAnonymous_program?: (ctx: Anonymous_programContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.local_parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterLocal_parameter_declaration?: (ctx: Local_parameter_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.local_parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitLocal_parameter_declaration?: (ctx: Local_parameter_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_declaration?: (ctx: Parameter_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_declaration?: (ctx: Parameter_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.inout_declaration`.
	 * @param ctx the parse tree
	 */
	enterInout_declaration?: (ctx: Inout_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.inout_declaration`.
	 * @param ctx the parse tree
	 */
	exitInout_declaration?: (ctx: Inout_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.input_declaration`.
	 * @param ctx the parse tree
	 */
	enterInput_declaration?: (ctx: Input_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.input_declaration`.
	 * @param ctx the parse tree
	 */
	exitInput_declaration?: (ctx: Input_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.output_declaration`.
	 * @param ctx the parse tree
	 */
	enterOutput_declaration?: (ctx: Output_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.output_declaration`.
	 * @param ctx the parse tree
	 */
	exitOutput_declaration?: (ctx: Output_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.interface_port_declaration`.
	 * @param ctx the parse tree
	 */
	enterInterface_port_declaration?: (ctx: Interface_port_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.interface_port_declaration`.
	 * @param ctx the parse tree
	 */
	exitInterface_port_declaration?: (ctx: Interface_port_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.ref_declaration`.
	 * @param ctx the parse tree
	 */
	enterRef_declaration?: (ctx: Ref_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.ref_declaration`.
	 * @param ctx the parse tree
	 */
	exitRef_declaration?: (ctx: Ref_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	enterData_declaration?: (ctx: Data_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	exitData_declaration?: (ctx: Data_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.package_import_declaration`.
	 * @param ctx the parse tree
	 */
	enterPackage_import_declaration?: (ctx: Package_import_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.package_import_declaration`.
	 * @param ctx the parse tree
	 */
	exitPackage_import_declaration?: (ctx: Package_import_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.package_import_item`.
	 * @param ctx the parse tree
	 */
	enterPackage_import_item?: (ctx: Package_import_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.package_import_item`.
	 * @param ctx the parse tree
	 */
	exitPackage_import_item?: (ctx: Package_import_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.package_export_declaration`.
	 * @param ctx the parse tree
	 */
	enterPackage_export_declaration?: (ctx: Package_export_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.package_export_declaration`.
	 * @param ctx the parse tree
	 */
	exitPackage_export_declaration?: (ctx: Package_export_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.genvar_declaration`.
	 * @param ctx the parse tree
	 */
	enterGenvar_declaration?: (ctx: Genvar_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.genvar_declaration`.
	 * @param ctx the parse tree
	 */
	exitGenvar_declaration?: (ctx: Genvar_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	enterNet_declaration?: (ctx: Net_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	exitNet_declaration?: (ctx: Net_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration?: (ctx: Type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration?: (ctx: Type_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.type_declaration_type`.
	 * @param ctx the parse tree
	 */
	enterType_declaration_type?: (ctx: Type_declaration_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.type_declaration_type`.
	 * @param ctx the parse tree
	 */
	exitType_declaration_type?: (ctx: Type_declaration_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.net_type_declaration`.
	 * @param ctx the parse tree
	 */
	enterNet_type_declaration?: (ctx: Net_type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.net_type_declaration`.
	 * @param ctx the parse tree
	 */
	exitNet_type_declaration?: (ctx: Net_type_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.lifetime`.
	 * @param ctx the parse tree
	 */
	enterLifetime?: (ctx: LifetimeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.lifetime`.
	 * @param ctx the parse tree
	 */
	exitLifetime?: (ctx: LifetimeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.casting_type`.
	 * @param ctx the parse tree
	 */
	enterCasting_type?: (ctx: Casting_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.casting_type`.
	 * @param ctx the parse tree
	 */
	exitCasting_type?: (ctx: Casting_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?: (ctx: Data_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.data_type_or_implicit`.
	 * @param ctx the parse tree
	 */
	enterData_type_or_implicit?: (ctx: Data_type_or_implicitContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.data_type_or_implicit`.
	 * @param ctx the parse tree
	 */
	exitData_type_or_implicit?: (ctx: Data_type_or_implicitContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.implicit_data_type`.
	 * @param ctx the parse tree
	 */
	enterImplicit_data_type?: (ctx: Implicit_data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.implicit_data_type`.
	 * @param ctx the parse tree
	 */
	exitImplicit_data_type?: (ctx: Implicit_data_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.enum_base_type`.
	 * @param ctx the parse tree
	 */
	enterEnum_base_type?: (ctx: Enum_base_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.enum_base_type`.
	 * @param ctx the parse tree
	 */
	exitEnum_base_type?: (ctx: Enum_base_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.enum_name_declaration`.
	 * @param ctx the parse tree
	 */
	enterEnum_name_declaration?: (ctx: Enum_name_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.enum_name_declaration`.
	 * @param ctx the parse tree
	 */
	exitEnum_name_declaration?: (ctx: Enum_name_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_scope`.
	 * @param ctx the parse tree
	 */
	enterClass_scope?: (ctx: Class_scopeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_scope`.
	 * @param ctx the parse tree
	 */
	exitClass_scope?: (ctx: Class_scopeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_type`.
	 * @param ctx the parse tree
	 */
	enterClass_type?: (ctx: Class_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_type`.
	 * @param ctx the parse tree
	 */
	exitClass_type?: (ctx: Class_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.integer_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.integer_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_type?: (ctx: Integer_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	enterNet_port_type?: (ctx: Net_port_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	exitNet_port_type?: (ctx: Net_port_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.variable_port_type`.
	 * @param ctx the parse tree
	 */
	enterVariable_port_type?: (ctx: Variable_port_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.variable_port_type`.
	 * @param ctx the parse tree
	 */
	exitVariable_port_type?: (ctx: Variable_port_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.var_data_type`.
	 * @param ctx the parse tree
	 */
	enterVar_data_type?: (ctx: Var_data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.var_data_type`.
	 * @param ctx the parse tree
	 */
	exitVar_data_type?: (ctx: Var_data_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.simple_type`.
	 * @param ctx the parse tree
	 */
	enterSimple_type?: (ctx: Simple_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.simple_type`.
	 * @param ctx the parse tree
	 */
	exitSimple_type?: (ctx: Simple_typeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.struct_union`.
	 * @param ctx the parse tree
	 */
	enterStruct_union?: (ctx: Struct_unionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.struct_union`.
	 * @param ctx the parse tree
	 */
	exitStruct_union?: (ctx: Struct_unionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.data_type_or_void`.
	 * @param ctx the parse tree
	 */
	enterData_type_or_void?: (ctx: Data_type_or_voidContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.data_type_or_void`.
	 * @param ctx the parse tree
	 */
	exitData_type_or_void?: (ctx: Data_type_or_voidContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.struct_union_member`.
	 * @param ctx the parse tree
	 */
	enterStruct_union_member?: (ctx: Struct_union_memberContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.struct_union_member`.
	 * @param ctx the parse tree
	 */
	exitStruct_union_member?: (ctx: Struct_union_memberContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.type_reference`.
	 * @param ctx the parse tree
	 */
	enterType_reference?: (ctx: Type_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.type_reference`.
	 * @param ctx the parse tree
	 */
	exitType_reference?: (ctx: Type_referenceContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.delay_value`.
	 * @param ctx the parse tree
	 */
	enterDelay_value?: (ctx: Delay_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.delay_value`.
	 * @param ctx the parse tree
	 */
	exitDelay_value?: (ctx: Delay_valueContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_defparam_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_defparam_assignments?: (ctx: List_of_defparam_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_defparam_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_defparam_assignments?: (ctx: List_of_defparam_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_genvar_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_genvar_identifiers?: (ctx: List_of_genvar_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_genvar_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_genvar_identifiers?: (ctx: List_of_genvar_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_interface_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_interface_identifiers?: (ctx: List_of_interface_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_interface_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_interface_identifiers?: (ctx: List_of_interface_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_net_decl_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_decl_assignments?: (ctx: List_of_net_decl_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_net_decl_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_decl_assignments?: (ctx: List_of_net_decl_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_param_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_param_assignments?: (ctx: List_of_param_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_param_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_param_assignments?: (ctx: List_of_param_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_port_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_identifiers?: (ctx: List_of_port_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_port_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_identifiers?: (ctx: List_of_port_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_tf_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_tf_variable_identifiers?: (ctx: List_of_tf_variable_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_tf_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_tf_variable_identifiers?: (ctx: List_of_tf_variable_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_type_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_type_assignments?: (ctx: List_of_type_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_type_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_type_assignments?: (ctx: List_of_type_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_variable_decl_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_decl_assignments?: (ctx: List_of_variable_decl_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_variable_decl_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_decl_assignments?: (ctx: List_of_variable_decl_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_identifiers?: (ctx: List_of_variable_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_identifiers?: (ctx: List_of_variable_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_variable_port_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_port_identifiers?: (ctx: List_of_variable_port_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_variable_port_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_port_identifiers?: (ctx: List_of_variable_port_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.defparam_assignment`.
	 * @param ctx the parse tree
	 */
	enterDefparam_assignment?: (ctx: Defparam_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.defparam_assignment`.
	 * @param ctx the parse tree
	 */
	exitDefparam_assignment?: (ctx: Defparam_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.net_decl_assignment`.
	 * @param ctx the parse tree
	 */
	enterNet_decl_assignment?: (ctx: Net_decl_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.net_decl_assignment`.
	 * @param ctx the parse tree
	 */
	exitNet_decl_assignment?: (ctx: Net_decl_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.param_assignment`.
	 * @param ctx the parse tree
	 */
	enterParam_assignment?: (ctx: Param_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.param_assignment`.
	 * @param ctx the parse tree
	 */
	exitParam_assignment?: (ctx: Param_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.type_assignment`.
	 * @param ctx the parse tree
	 */
	enterType_assignment?: (ctx: Type_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.type_assignment`.
	 * @param ctx the parse tree
	 */
	exitType_assignment?: (ctx: Type_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.variable_decl_assignment`.
	 * @param ctx the parse tree
	 */
	enterVariable_decl_assignment?: (ctx: Variable_decl_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.variable_decl_assignment`.
	 * @param ctx the parse tree
	 */
	exitVariable_decl_assignment?: (ctx: Variable_decl_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_new`.
	 * @param ctx the parse tree
	 */
	enterClass_new?: (ctx: Class_newContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_new`.
	 * @param ctx the parse tree
	 */
	exitClass_new?: (ctx: Class_newContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.dynamic_array_new`.
	 * @param ctx the parse tree
	 */
	enterDynamic_array_new?: (ctx: Dynamic_array_newContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.dynamic_array_new`.
	 * @param ctx the parse tree
	 */
	exitDynamic_array_new?: (ctx: Dynamic_array_newContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.unpacked_dimension`.
	 * @param ctx the parse tree
	 */
	enterUnpacked_dimension?: (ctx: Unpacked_dimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.unpacked_dimension`.
	 * @param ctx the parse tree
	 */
	exitUnpacked_dimension?: (ctx: Unpacked_dimensionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.packed_dimension`.
	 * @param ctx the parse tree
	 */
	enterPacked_dimension?: (ctx: Packed_dimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.packed_dimension`.
	 * @param ctx the parse tree
	 */
	exitPacked_dimension?: (ctx: Packed_dimensionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.assosiative_dimension`.
	 * @param ctx the parse tree
	 */
	enterAssosiative_dimension?: (ctx: Assosiative_dimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.assosiative_dimension`.
	 * @param ctx the parse tree
	 */
	exitAssosiative_dimension?: (ctx: Assosiative_dimensionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.variable_dimension`.
	 * @param ctx the parse tree
	 */
	enterVariable_dimension?: (ctx: Variable_dimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.variable_dimension`.
	 * @param ctx the parse tree
	 */
	exitVariable_dimension?: (ctx: Variable_dimensionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.queue_dimension`.
	 * @param ctx the parse tree
	 */
	enterQueue_dimension?: (ctx: Queue_dimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.queue_dimension`.
	 * @param ctx the parse tree
	 */
	exitQueue_dimension?: (ctx: Queue_dimensionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.unsized_dimension`.
	 * @param ctx the parse tree
	 */
	enterUnsized_dimension?: (ctx: Unsized_dimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.unsized_dimension`.
	 * @param ctx the parse tree
	 */
	exitUnsized_dimension?: (ctx: Unsized_dimensionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.function_data_type_or_implicit`.
	 * @param ctx the parse tree
	 */
	enterFunction_data_type_or_implicit?: (ctx: Function_data_type_or_implicitContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.function_data_type_or_implicit`.
	 * @param ctx the parse tree
	 */
	exitFunction_data_type_or_implicit?: (ctx: Function_data_type_or_implicitContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.function_body_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_body_declaration?: (ctx: Function_body_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.function_body_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_body_declaration?: (ctx: Function_body_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.function_prototype`.
	 * @param ctx the parse tree
	 */
	enterFunction_prototype?: (ctx: Function_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.function_prototype`.
	 * @param ctx the parse tree
	 */
	exitFunction_prototype?: (ctx: Function_prototypeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.task_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_declaration?: (ctx: Task_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.task_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_declaration?: (ctx: Task_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.task_body_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_body_declaration?: (ctx: Task_body_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.task_body_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_body_declaration?: (ctx: Task_body_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.tf_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterTf_item_declaration?: (ctx: Tf_item_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.tf_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitTf_item_declaration?: (ctx: Tf_item_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.tf_port_list`.
	 * @param ctx the parse tree
	 */
	enterTf_port_list?: (ctx: Tf_port_listContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.tf_port_list`.
	 * @param ctx the parse tree
	 */
	exitTf_port_list?: (ctx: Tf_port_listContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.tf_port_item`.
	 * @param ctx the parse tree
	 */
	enterTf_port_item?: (ctx: Tf_port_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.tf_port_item`.
	 * @param ctx the parse tree
	 */
	exitTf_port_item?: (ctx: Tf_port_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.tf_port_direction`.
	 * @param ctx the parse tree
	 */
	enterTf_port_direction?: (ctx: Tf_port_directionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.tf_port_direction`.
	 * @param ctx the parse tree
	 */
	exitTf_port_direction?: (ctx: Tf_port_directionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.tf_port_declaration`.
	 * @param ctx the parse tree
	 */
	enterTf_port_declaration?: (ctx: Tf_port_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.tf_port_declaration`.
	 * @param ctx the parse tree
	 */
	exitTf_port_declaration?: (ctx: Tf_port_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.task_prototype`.
	 * @param ctx the parse tree
	 */
	enterTask_prototype?: (ctx: Task_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.task_prototype`.
	 * @param ctx the parse tree
	 */
	exitTask_prototype?: (ctx: Task_prototypeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.block_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterBlock_item_declaration?: (ctx: Block_item_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.block_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitBlock_item_declaration?: (ctx: Block_item_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.modport_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_declaration?: (ctx: Modport_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.modport_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_declaration?: (ctx: Modport_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.modport_item`.
	 * @param ctx the parse tree
	 */
	enterModport_item?: (ctx: Modport_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.modport_item`.
	 * @param ctx the parse tree
	 */
	exitModport_item?: (ctx: Modport_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.modport_ports_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_ports_declaration?: (ctx: Modport_ports_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.modport_ports_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_ports_declaration?: (ctx: Modport_ports_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.modport_clocking_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_clocking_declaration?: (ctx: Modport_clocking_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.modport_clocking_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_clocking_declaration?: (ctx: Modport_clocking_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.modport_simple_ports_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_simple_ports_declaration?: (ctx: Modport_simple_ports_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.modport_simple_ports_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_simple_ports_declaration?: (ctx: Modport_simple_ports_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.modport_simple_port`.
	 * @param ctx the parse tree
	 */
	enterModport_simple_port?: (ctx: Modport_simple_portContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.modport_simple_port`.
	 * @param ctx the parse tree
	 */
	exitModport_simple_port?: (ctx: Modport_simple_portContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.modport_tf_ports_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_tf_ports_declaration?: (ctx: Modport_tf_ports_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.modport_tf_ports_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_tf_ports_declaration?: (ctx: Modport_tf_ports_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.modport_tf_port`.
	 * @param ctx the parse tree
	 */
	enterModport_tf_port?: (ctx: Modport_tf_portContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.modport_tf_port`.
	 * @param ctx the parse tree
	 */
	exitModport_tf_port?: (ctx: Modport_tf_portContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.import_export`.
	 * @param ctx the parse tree
	 */
	enterImport_export?: (ctx: Import_exportContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.import_export`.
	 * @param ctx the parse tree
	 */
	exitImport_export?: (ctx: Import_exportContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.concurrent_assertion_item`.
	 * @param ctx the parse tree
	 */
	enterConcurrent_assertion_item?: (ctx: Concurrent_assertion_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.concurrent_assertion_item`.
	 * @param ctx the parse tree
	 */
	exitConcurrent_assertion_item?: (ctx: Concurrent_assertion_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.concurrent_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterConcurrent_assertion_statement?: (ctx: Concurrent_assertion_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.concurrent_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitConcurrent_assertion_statement?: (ctx: Concurrent_assertion_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.expression_or_dist`.
	 * @param ctx the parse tree
	 */
	enterExpression_or_dist?: (ctx: Expression_or_distContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.expression_or_dist`.
	 * @param ctx the parse tree
	 */
	exitExpression_or_dist?: (ctx: Expression_or_distContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.module_instantiation`.
	 * @param ctx the parse tree
	 */
	enterModule_instantiation?: (ctx: Module_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.module_instantiation`.
	 * @param ctx the parse tree
	 */
	exitModule_instantiation?: (ctx: Module_instantiationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.parameter_value_assignment`.
	 * @param ctx the parse tree
	 */
	enterParameter_value_assignment?: (ctx: Parameter_value_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.parameter_value_assignment`.
	 * @param ctx the parse tree
	 */
	exitParameter_value_assignment?: (ctx: Parameter_value_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.parameter_assign_comma`.
	 * @param ctx the parse tree
	 */
	enterParameter_assign_comma?: (ctx: Parameter_assign_commaContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.parameter_assign_comma`.
	 * @param ctx the parse tree
	 */
	exitParameter_assign_comma?: (ctx: Parameter_assign_commaContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_parameter_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_parameter_assignments?: (ctx: List_of_parameter_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_parameter_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_parameter_assignments?: (ctx: List_of_parameter_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.ordered_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	enterOrdered_parameter_assignment?: (ctx: Ordered_parameter_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.ordered_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	exitOrdered_parameter_assignment?: (ctx: Ordered_parameter_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.named_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	enterNamed_parameter_assignment?: (ctx: Named_parameter_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.named_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	exitNamed_parameter_assignment?: (ctx: Named_parameter_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.hierarchical_instance`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_instance?: (ctx: Hierarchical_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.hierarchical_instance`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_instance?: (ctx: Hierarchical_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.name_of_instance`.
	 * @param ctx the parse tree
	 */
	enterName_of_instance?: (ctx: Name_of_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.name_of_instance`.
	 * @param ctx the parse tree
	 */
	exitName_of_instance?: (ctx: Name_of_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.port_conn_comma`.
	 * @param ctx the parse tree
	 */
	enterPort_conn_comma?: (ctx: Port_conn_commaContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.port_conn_comma`.
	 * @param ctx the parse tree
	 */
	exitPort_conn_comma?: (ctx: Port_conn_commaContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_port_connections`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_connections?: (ctx: List_of_port_connectionsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_port_connections`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_connections?: (ctx: List_of_port_connectionsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.ordered_port_connection`.
	 * @param ctx the parse tree
	 */
	enterOrdered_port_connection?: (ctx: Ordered_port_connectionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.ordered_port_connection`.
	 * @param ctx the parse tree
	 */
	exitOrdered_port_connection?: (ctx: Ordered_port_connectionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.named_port_connection`.
	 * @param ctx the parse tree
	 */
	enterNamed_port_connection?: (ctx: Named_port_connectionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.named_port_connection`.
	 * @param ctx the parse tree
	 */
	exitNamed_port_connection?: (ctx: Named_port_connectionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.checker_instantiation`.
	 * @param ctx the parse tree
	 */
	enterChecker_instantiation?: (ctx: Checker_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.checker_instantiation`.
	 * @param ctx the parse tree
	 */
	exitChecker_instantiation?: (ctx: Checker_instantiationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_checker_port_connections`.
	 * @param ctx the parse tree
	 */
	enterList_of_checker_port_connections?: (ctx: List_of_checker_port_connectionsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_checker_port_connections`.
	 * @param ctx the parse tree
	 */
	exitList_of_checker_port_connections?: (ctx: List_of_checker_port_connectionsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.generate_region`.
	 * @param ctx the parse tree
	 */
	enterGenerate_region?: (ctx: Generate_regionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.generate_region`.
	 * @param ctx the parse tree
	 */
	exitGenerate_region?: (ctx: Generate_regionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.loop_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterLoop_generate_construct?: (ctx: Loop_generate_constructContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.loop_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitLoop_generate_construct?: (ctx: Loop_generate_constructContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.genvar_initialization`.
	 * @param ctx the parse tree
	 */
	enterGenvar_initialization?: (ctx: Genvar_initializationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.genvar_initialization`.
	 * @param ctx the parse tree
	 */
	exitGenvar_initialization?: (ctx: Genvar_initializationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.genvar_iteration`.
	 * @param ctx the parse tree
	 */
	enterGenvar_iteration?: (ctx: Genvar_iterationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.genvar_iteration`.
	 * @param ctx the parse tree
	 */
	exitGenvar_iteration?: (ctx: Genvar_iterationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.conditional_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterConditional_generate_construct?: (ctx: Conditional_generate_constructContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.conditional_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitConditional_generate_construct?: (ctx: Conditional_generate_constructContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.if_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterIf_generate_construct?: (ctx: If_generate_constructContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.if_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitIf_generate_construct?: (ctx: If_generate_constructContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.case_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterCase_generate_construct?: (ctx: Case_generate_constructContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.case_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitCase_generate_construct?: (ctx: Case_generate_constructContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.case_generate_item`.
	 * @param ctx the parse tree
	 */
	enterCase_generate_item?: (ctx: Case_generate_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.case_generate_item`.
	 * @param ctx the parse tree
	 */
	exitCase_generate_item?: (ctx: Case_generate_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.generate_block`.
	 * @param ctx the parse tree
	 */
	enterGenerate_block?: (ctx: Generate_blockContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.generate_block`.
	 * @param ctx the parse tree
	 */
	exitGenerate_block?: (ctx: Generate_blockContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.generate_item`.
	 * @param ctx the parse tree
	 */
	enterGenerate_item?: (ctx: Generate_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.generate_item`.
	 * @param ctx the parse tree
	 */
	exitGenerate_item?: (ctx: Generate_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.continuous_assign`.
	 * @param ctx the parse tree
	 */
	enterContinuous_assign?: (ctx: Continuous_assignContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.continuous_assign`.
	 * @param ctx the parse tree
	 */
	exitContinuous_assign?: (ctx: Continuous_assignContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_net_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_assignments?: (ctx: List_of_net_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_net_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_assignments?: (ctx: List_of_net_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_variable_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_assignments?: (ctx: List_of_variable_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_variable_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_assignments?: (ctx: List_of_variable_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.net_alias`.
	 * @param ctx the parse tree
	 */
	enterNet_alias?: (ctx: Net_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.net_alias`.
	 * @param ctx the parse tree
	 */
	exitNet_alias?: (ctx: Net_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.net_assignment`.
	 * @param ctx the parse tree
	 */
	enterNet_assignment?: (ctx: Net_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.net_assignment`.
	 * @param ctx the parse tree
	 */
	exitNet_assignment?: (ctx: Net_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.initial_construct`.
	 * @param ctx the parse tree
	 */
	enterInitial_construct?: (ctx: Initial_constructContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.initial_construct`.
	 * @param ctx the parse tree
	 */
	exitInitial_construct?: (ctx: Initial_constructContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.always_construct`.
	 * @param ctx the parse tree
	 */
	enterAlways_construct?: (ctx: Always_constructContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.always_construct`.
	 * @param ctx the parse tree
	 */
	exitAlways_construct?: (ctx: Always_constructContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.final_construct`.
	 * @param ctx the parse tree
	 */
	enterFinal_construct?: (ctx: Final_constructContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.final_construct`.
	 * @param ctx the parse tree
	 */
	exitFinal_construct?: (ctx: Final_constructContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.blocking_assignment`.
	 * @param ctx the parse tree
	 */
	enterBlocking_assignment?: (ctx: Blocking_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.blocking_assignment`.
	 * @param ctx the parse tree
	 */
	exitBlocking_assignment?: (ctx: Blocking_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.operator_assignment`.
	 * @param ctx the parse tree
	 */
	enterOperator_assignment?: (ctx: Operator_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.operator_assignment`.
	 * @param ctx the parse tree
	 */
	exitOperator_assignment?: (ctx: Operator_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.nonblocking_assignment`.
	 * @param ctx the parse tree
	 */
	enterNonblocking_assignment?: (ctx: Nonblocking_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.nonblocking_assignment`.
	 * @param ctx the parse tree
	 */
	exitNonblocking_assignment?: (ctx: Nonblocking_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.procedural_continuous_assignment`.
	 * @param ctx the parse tree
	 */
	enterProcedural_continuous_assignment?: (ctx: Procedural_continuous_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.procedural_continuous_assignment`.
	 * @param ctx the parse tree
	 */
	exitProcedural_continuous_assignment?: (ctx: Procedural_continuous_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.variable_assignment`.
	 * @param ctx the parse tree
	 */
	enterVariable_assignment?: (ctx: Variable_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.variable_assignment`.
	 * @param ctx the parse tree
	 */
	exitVariable_assignment?: (ctx: Variable_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.action_block`.
	 * @param ctx the parse tree
	 */
	enterAction_block?: (ctx: Action_blockContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.action_block`.
	 * @param ctx the parse tree
	 */
	exitAction_block?: (ctx: Action_blockContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.seq_block`.
	 * @param ctx the parse tree
	 */
	enterSeq_block?: (ctx: Seq_blockContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.seq_block`.
	 * @param ctx the parse tree
	 */
	exitSeq_block?: (ctx: Seq_blockContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.statement_or_null`.
	 * @param ctx the parse tree
	 */
	enterStatement_or_null?: (ctx: Statement_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.statement_or_null`.
	 * @param ctx the parse tree
	 */
	exitStatement_or_null?: (ctx: Statement_or_nullContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.statement_item`.
	 * @param ctx the parse tree
	 */
	enterStatement_item?: (ctx: Statement_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.statement_item`.
	 * @param ctx the parse tree
	 */
	exitStatement_item?: (ctx: Statement_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.function_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_statement?: (ctx: Function_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.function_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_statement?: (ctx: Function_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.function_statement_or_null`.
	 * @param ctx the parse tree
	 */
	enterFunction_statement_or_null?: (ctx: Function_statement_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.function_statement_or_null`.
	 * @param ctx the parse tree
	 */
	exitFunction_statement_or_null?: (ctx: Function_statement_or_nullContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.variable_identifier_list`.
	 * @param ctx the parse tree
	 */
	enterVariable_identifier_list?: (ctx: Variable_identifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.variable_identifier_list`.
	 * @param ctx the parse tree
	 */
	exitVariable_identifier_list?: (ctx: Variable_identifier_listContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.procedural_timing_control_statement`.
	 * @param ctx the parse tree
	 */
	enterProcedural_timing_control_statement?: (ctx: Procedural_timing_control_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.procedural_timing_control_statement`.
	 * @param ctx the parse tree
	 */
	exitProcedural_timing_control_statement?: (ctx: Procedural_timing_control_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.delay_or_event_control`.
	 * @param ctx the parse tree
	 */
	enterDelay_or_event_control?: (ctx: Delay_or_event_controlContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.delay_or_event_control`.
	 * @param ctx the parse tree
	 */
	exitDelay_or_event_control?: (ctx: Delay_or_event_controlContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.delay_control`.
	 * @param ctx the parse tree
	 */
	enterDelay_control?: (ctx: Delay_controlContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.delay_control`.
	 * @param ctx the parse tree
	 */
	exitDelay_control?: (ctx: Delay_controlContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.event_control`.
	 * @param ctx the parse tree
	 */
	enterEvent_control?: (ctx: Event_controlContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.event_control`.
	 * @param ctx the parse tree
	 */
	exitEvent_control?: (ctx: Event_controlContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.event_expression`.
	 * @param ctx the parse tree
	 */
	enterEvent_expression?: (ctx: Event_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.event_expression`.
	 * @param ctx the parse tree
	 */
	exitEvent_expression?: (ctx: Event_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.procedural_timing_control`.
	 * @param ctx the parse tree
	 */
	enterProcedural_timing_control?: (ctx: Procedural_timing_controlContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.procedural_timing_control`.
	 * @param ctx the parse tree
	 */
	exitProcedural_timing_control?: (ctx: Procedural_timing_controlContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	enterJump_statement?: (ctx: Jump_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	exitJump_statement?: (ctx: Jump_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.wait_statement`.
	 * @param ctx the parse tree
	 */
	enterWait_statement?: (ctx: Wait_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.wait_statement`.
	 * @param ctx the parse tree
	 */
	exitWait_statement?: (ctx: Wait_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.event_trigger`.
	 * @param ctx the parse tree
	 */
	enterEvent_trigger?: (ctx: Event_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.event_trigger`.
	 * @param ctx the parse tree
	 */
	exitEvent_trigger?: (ctx: Event_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.disable_statement`.
	 * @param ctx the parse tree
	 */
	enterDisable_statement?: (ctx: Disable_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.disable_statement`.
	 * @param ctx the parse tree
	 */
	exitDisable_statement?: (ctx: Disable_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	enterConditional_statement?: (ctx: Conditional_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	exitConditional_statement?: (ctx: Conditional_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.unique_priority`.
	 * @param ctx the parse tree
	 */
	enterUnique_priority?: (ctx: Unique_priorityContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.unique_priority`.
	 * @param ctx the parse tree
	 */
	exitUnique_priority?: (ctx: Unique_priorityContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.cond_predicate`.
	 * @param ctx the parse tree
	 */
	enterCond_predicate?: (ctx: Cond_predicateContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.cond_predicate`.
	 * @param ctx the parse tree
	 */
	exitCond_predicate?: (ctx: Cond_predicateContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.expression_or_cond_pattern`.
	 * @param ctx the parse tree
	 */
	enterExpression_or_cond_pattern?: (ctx: Expression_or_cond_patternContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.expression_or_cond_pattern`.
	 * @param ctx the parse tree
	 */
	exitExpression_or_cond_pattern?: (ctx: Expression_or_cond_patternContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.cond_pattern`.
	 * @param ctx the parse tree
	 */
	enterCond_pattern?: (ctx: Cond_patternContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.cond_pattern`.
	 * @param ctx the parse tree
	 */
	exitCond_pattern?: (ctx: Cond_patternContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.case_statement`.
	 * @param ctx the parse tree
	 */
	enterCase_statement?: (ctx: Case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.case_statement`.
	 * @param ctx the parse tree
	 */
	exitCase_statement?: (ctx: Case_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.case_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_expression?: (ctx: Case_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.case_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_expression?: (ctx: Case_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.case_item`.
	 * @param ctx the parse tree
	 */
	enterCase_item?: (ctx: Case_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.case_item`.
	 * @param ctx the parse tree
	 */
	exitCase_item?: (ctx: Case_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.case_inside_item`.
	 * @param ctx the parse tree
	 */
	enterCase_inside_item?: (ctx: Case_inside_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.case_inside_item`.
	 * @param ctx the parse tree
	 */
	exitCase_inside_item?: (ctx: Case_inside_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.case_item_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_item_expression?: (ctx: Case_item_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.case_item_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_item_expression?: (ctx: Case_item_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.open_range_list`.
	 * @param ctx the parse tree
	 */
	enterOpen_range_list?: (ctx: Open_range_listContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.open_range_list`.
	 * @param ctx the parse tree
	 */
	exitOpen_range_list?: (ctx: Open_range_listContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.open_value_range`.
	 * @param ctx the parse tree
	 */
	enterOpen_value_range?: (ctx: Open_value_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.open_value_range`.
	 * @param ctx the parse tree
	 */
	exitOpen_value_range?: (ctx: Open_value_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	enterLoop_statement?: (ctx: Loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	exitLoop_statement?: (ctx: Loop_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.for_initialization`.
	 * @param ctx the parse tree
	 */
	enterFor_initialization?: (ctx: For_initializationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.for_initialization`.
	 * @param ctx the parse tree
	 */
	exitFor_initialization?: (ctx: For_initializationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.for_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterFor_variable_declaration?: (ctx: For_variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.for_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitFor_variable_declaration?: (ctx: For_variable_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.for_step`.
	 * @param ctx the parse tree
	 */
	enterFor_step?: (ctx: For_stepContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.for_step`.
	 * @param ctx the parse tree
	 */
	exitFor_step?: (ctx: For_stepContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.for_step_assignment`.
	 * @param ctx the parse tree
	 */
	enterFor_step_assignment?: (ctx: For_step_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.for_step_assignment`.
	 * @param ctx the parse tree
	 */
	exitFor_step_assignment?: (ctx: For_step_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.loop_variables`.
	 * @param ctx the parse tree
	 */
	enterLoop_variables?: (ctx: Loop_variablesContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.loop_variables`.
	 * @param ctx the parse tree
	 */
	exitLoop_variables?: (ctx: Loop_variablesContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.subroutine_call_statement`.
	 * @param ctx the parse tree
	 */
	enterSubroutine_call_statement?: (ctx: Subroutine_call_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.subroutine_call_statement`.
	 * @param ctx the parse tree
	 */
	exitSubroutine_call_statement?: (ctx: Subroutine_call_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.assertion_item`.
	 * @param ctx the parse tree
	 */
	enterAssertion_item?: (ctx: Assertion_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.assertion_item`.
	 * @param ctx the parse tree
	 */
	exitAssertion_item?: (ctx: Assertion_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.deferred_immediate_assertion_item`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_assertion_item?: (ctx: Deferred_immediate_assertion_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.deferred_immediate_assertion_item`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_assertion_item?: (ctx: Deferred_immediate_assertion_itemContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.procedural_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterProcedural_assertion_statement?: (ctx: Procedural_assertion_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.procedural_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitProcedural_assertion_statement?: (ctx: Procedural_assertion_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterImmediate_assertion_statement?: (ctx: Immediate_assertion_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitImmediate_assertion_statement?: (ctx: Immediate_assertion_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.simple_immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_immediate_assertion_statement?: (ctx: Simple_immediate_assertion_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.simple_immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_immediate_assertion_statement?: (ctx: Simple_immediate_assertion_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.simple_immediate_assert_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_immediate_assert_statement?: (ctx: Simple_immediate_assert_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.simple_immediate_assert_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_immediate_assert_statement?: (ctx: Simple_immediate_assert_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.simple_immediate_assume_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_immediate_assume_statement?: (ctx: Simple_immediate_assume_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.simple_immediate_assume_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_immediate_assume_statement?: (ctx: Simple_immediate_assume_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.simple_immediate_cover_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_immediate_cover_statement?: (ctx: Simple_immediate_cover_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.simple_immediate_cover_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_immediate_cover_statement?: (ctx: Simple_immediate_cover_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.deferred_immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_assertion_statement?: (ctx: Deferred_immediate_assertion_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.deferred_immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_assertion_statement?: (ctx: Deferred_immediate_assertion_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.deferred_immediate_assert_statement`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_assert_statement?: (ctx: Deferred_immediate_assert_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.deferred_immediate_assert_statement`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_assert_statement?: (ctx: Deferred_immediate_assert_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.deferred_immediate_assume_statement`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_assume_statement?: (ctx: Deferred_immediate_assume_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.deferred_immediate_assume_statement`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_assume_statement?: (ctx: Deferred_immediate_assume_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.deferred_immediate_cover_statement`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_cover_statement?: (ctx: Deferred_immediate_cover_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.deferred_immediate_cover_statement`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_cover_statement?: (ctx: Deferred_immediate_cover_statementContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.cycle_delay`.
	 * @param ctx the parse tree
	 */
	enterCycle_delay?: (ctx: Cycle_delayContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.cycle_delay`.
	 * @param ctx the parse tree
	 */
	exitCycle_delay?: (ctx: Cycle_delayContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.edge_ident`.
	 * @param ctx the parse tree
	 */
	enterEdge_ident?: (ctx: Edge_identContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.edge_ident`.
	 * @param ctx the parse tree
	 */
	exitEdge_ident?: (ctx: Edge_identContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.concatenation`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.concatenation`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_concatenation`.
	 * @param ctx the parse tree
	 */
	enterConstant_concatenation?: (ctx: Constant_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_concatenation`.
	 * @param ctx the parse tree
	 */
	exitConstant_concatenation?: (ctx: Constant_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterConstant_multiple_concatenation?: (ctx: Constant_multiple_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitConstant_multiple_concatenation?: (ctx: Constant_multiple_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterMultiple_concatenation?: (ctx: Multiple_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitMultiple_concatenation?: (ctx: Multiple_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.array_range_expression`.
	 * @param ctx the parse tree
	 */
	enterArray_range_expression?: (ctx: Array_range_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.array_range_expression`.
	 * @param ctx the parse tree
	 */
	exitArray_range_expression?: (ctx: Array_range_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.empty_queue`.
	 * @param ctx the parse tree
	 */
	enterEmpty_queue?: (ctx: Empty_queueContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.empty_queue`.
	 * @param ctx the parse tree
	 */
	exitEmpty_queue?: (ctx: Empty_queueContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_function_call`.
	 * @param ctx the parse tree
	 */
	enterConstant_function_call?: (ctx: Constant_function_callContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_function_call`.
	 * @param ctx the parse tree
	 */
	exitConstant_function_call?: (ctx: Constant_function_callContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.tf_call`.
	 * @param ctx the parse tree
	 */
	enterTf_call?: (ctx: Tf_callContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.tf_call`.
	 * @param ctx the parse tree
	 */
	exitTf_call?: (ctx: Tf_callContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.system_tf_call`.
	 * @param ctx the parse tree
	 */
	enterSystem_tf_call?: (ctx: System_tf_callContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.system_tf_call`.
	 * @param ctx the parse tree
	 */
	exitSystem_tf_call?: (ctx: System_tf_callContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.subroutine_call`.
	 * @param ctx the parse tree
	 */
	enterSubroutine_call?: (ctx: Subroutine_callContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.subroutine_call`.
	 * @param ctx the parse tree
	 */
	exitSubroutine_call?: (ctx: Subroutine_callContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.function_subroutine_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_subroutine_call?: (ctx: Function_subroutine_callContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.function_subroutine_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_subroutine_call?: (ctx: Function_subroutine_callContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.arg_comma`.
	 * @param ctx the parse tree
	 */
	enterArg_comma?: (ctx: Arg_commaContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.arg_comma`.
	 * @param ctx the parse tree
	 */
	exitArg_comma?: (ctx: Arg_commaContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.list_of_arguments`.
	 * @param ctx the parse tree
	 */
	enterList_of_arguments?: (ctx: List_of_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.list_of_arguments`.
	 * @param ctx the parse tree
	 */
	exitList_of_arguments?: (ctx: List_of_argumentsContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.method_call`.
	 * @param ctx the parse tree
	 */
	enterMethod_call?: (ctx: Method_callContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.method_call`.
	 * @param ctx the parse tree
	 */
	exitMethod_call?: (ctx: Method_callContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.method_call_root`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_root?: (ctx: Method_call_rootContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.method_call_root`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_root?: (ctx: Method_call_rootContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.method_call_body`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_body?: (ctx: Method_call_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.method_call_body`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_body?: (ctx: Method_call_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.built_in_method_call`.
	 * @param ctx the parse tree
	 */
	enterBuilt_in_method_call?: (ctx: Built_in_method_callContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.built_in_method_call`.
	 * @param ctx the parse tree
	 */
	exitBuilt_in_method_call?: (ctx: Built_in_method_callContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.array_manipulation_call`.
	 * @param ctx the parse tree
	 */
	enterArray_manipulation_call?: (ctx: Array_manipulation_callContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.array_manipulation_call`.
	 * @param ctx the parse tree
	 */
	exitArray_manipulation_call?: (ctx: Array_manipulation_callContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.randomize_call`.
	 * @param ctx the parse tree
	 */
	enterRandomize_call?: (ctx: Randomize_callContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.randomize_call`.
	 * @param ctx the parse tree
	 */
	exitRandomize_call?: (ctx: Randomize_callContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.array_method_name`.
	 * @param ctx the parse tree
	 */
	enterArray_method_name?: (ctx: Array_method_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.array_method_name`.
	 * @param ctx the parse tree
	 */
	exitArray_method_name?: (ctx: Array_method_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.inc_or_dec_expression`.
	 * @param ctx the parse tree
	 */
	enterInc_or_dec_expression?: (ctx: Inc_or_dec_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.inc_or_dec_expression`.
	 * @param ctx the parse tree
	 */
	exitInc_or_dec_expression?: (ctx: Inc_or_dec_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?: (ctx: Constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_mintypmax_expression?: (ctx: Constant_mintypmax_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_mintypmax_expression?: (ctx: Constant_mintypmax_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_param_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_param_expression?: (ctx: Constant_param_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_param_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_param_expression?: (ctx: Constant_param_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.param_expression`.
	 * @param ctx the parse tree
	 */
	enterParam_expression?: (ctx: Param_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.param_expression`.
	 * @param ctx the parse tree
	 */
	exitParam_expression?: (ctx: Param_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_range_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_range_expression?: (ctx: Constant_range_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_range_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_range_expression?: (ctx: Constant_range_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_part_select_range`.
	 * @param ctx the parse tree
	 */
	enterConstant_part_select_range?: (ctx: Constant_part_select_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_part_select_range`.
	 * @param ctx the parse tree
	 */
	exitConstant_part_select_range?: (ctx: Constant_part_select_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_range`.
	 * @param ctx the parse tree
	 */
	enterConstant_range?: (ctx: Constant_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_range`.
	 * @param ctx the parse tree
	 */
	exitConstant_range?: (ctx: Constant_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_indexed_range`.
	 * @param ctx the parse tree
	 */
	enterConstant_indexed_range?: (ctx: Constant_indexed_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_indexed_range`.
	 * @param ctx the parse tree
	 */
	exitConstant_indexed_range?: (ctx: Constant_indexed_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.tagged_union_expression`.
	 * @param ctx the parse tree
	 */
	enterTagged_union_expression?: (ctx: Tagged_union_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.tagged_union_expression`.
	 * @param ctx the parse tree
	 */
	exitTagged_union_expression?: (ctx: Tagged_union_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.value_range`.
	 * @param ctx the parse tree
	 */
	enterValue_range?: (ctx: Value_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.value_range`.
	 * @param ctx the parse tree
	 */
	exitValue_range?: (ctx: Value_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterMintypmax_expression?: (ctx: Mintypmax_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitMintypmax_expression?: (ctx: Mintypmax_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.part_select_range`.
	 * @param ctx the parse tree
	 */
	enterPart_select_range?: (ctx: Part_select_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.part_select_range`.
	 * @param ctx the parse tree
	 */
	exitPart_select_range?: (ctx: Part_select_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.indexed_range`.
	 * @param ctx the parse tree
	 */
	enterIndexed_range?: (ctx: Indexed_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.indexed_range`.
	 * @param ctx the parse tree
	 */
	exitIndexed_range?: (ctx: Indexed_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.genvar_expression`.
	 * @param ctx the parse tree
	 */
	enterGenvar_expression?: (ctx: Genvar_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.genvar_expression`.
	 * @param ctx the parse tree
	 */
	exitGenvar_expression?: (ctx: Genvar_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_primary`.
	 * @param ctx the parse tree
	 */
	enterConstant_primary?: (ctx: Constant_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_primary`.
	 * @param ctx the parse tree
	 */
	exitConstant_primary?: (ctx: Constant_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.class_qualifier`.
	 * @param ctx the parse tree
	 */
	enterClass_qualifier?: (ctx: Class_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.class_qualifier`.
	 * @param ctx the parse tree
	 */
	exitClass_qualifier?: (ctx: Class_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.range_expression`.
	 * @param ctx the parse tree
	 */
	enterRange_expression?: (ctx: Range_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.range_expression`.
	 * @param ctx the parse tree
	 */
	exitRange_expression?: (ctx: Range_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.primary_literal`.
	 * @param ctx the parse tree
	 */
	enterPrimary_literal?: (ctx: Primary_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.primary_literal`.
	 * @param ctx the parse tree
	 */
	exitPrimary_literal?: (ctx: Primary_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.time_literal`.
	 * @param ctx the parse tree
	 */
	enterTime_literal?: (ctx: Time_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.time_literal`.
	 * @param ctx the parse tree
	 */
	exitTime_literal?: (ctx: Time_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.implicit_class_handle`.
	 * @param ctx the parse tree
	 */
	enterImplicit_class_handle?: (ctx: Implicit_class_handleContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.implicit_class_handle`.
	 * @param ctx the parse tree
	 */
	exitImplicit_class_handle?: (ctx: Implicit_class_handleContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.bit_select`.
	 * @param ctx the parse tree
	 */
	enterBit_select?: (ctx: Bit_selectContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.bit_select`.
	 * @param ctx the parse tree
	 */
	exitBit_select?: (ctx: Bit_selectContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.select`.
	 * @param ctx the parse tree
	 */
	enterSelect?: (ctx: SelectContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.select`.
	 * @param ctx the parse tree
	 */
	exitSelect?: (ctx: SelectContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.nonrange_select`.
	 * @param ctx the parse tree
	 */
	enterNonrange_select?: (ctx: Nonrange_selectContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.nonrange_select`.
	 * @param ctx the parse tree
	 */
	exitNonrange_select?: (ctx: Nonrange_selectContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_bit_select`.
	 * @param ctx the parse tree
	 */
	enterConstant_bit_select?: (ctx: Constant_bit_selectContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_bit_select`.
	 * @param ctx the parse tree
	 */
	exitConstant_bit_select?: (ctx: Constant_bit_selectContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_select`.
	 * @param ctx the parse tree
	 */
	enterConstant_select?: (ctx: Constant_selectContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_select`.
	 * @param ctx the parse tree
	 */
	exitConstant_select?: (ctx: Constant_selectContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.constant_cast`.
	 * @param ctx the parse tree
	 */
	enterConstant_cast?: (ctx: Constant_castContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.constant_cast`.
	 * @param ctx the parse tree
	 */
	exitConstant_cast?: (ctx: Constant_castContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.cast`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.cast`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.net_lvalue`.
	 * @param ctx the parse tree
	 */
	enterNet_lvalue?: (ctx: Net_lvalueContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.net_lvalue`.
	 * @param ctx the parse tree
	 */
	exitNet_lvalue?: (ctx: Net_lvalueContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.variable_lvalue`.
	 * @param ctx the parse tree
	 */
	enterVariable_lvalue?: (ctx: Variable_lvalueContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.variable_lvalue`.
	 * @param ctx the parse tree
	 */
	exitVariable_lvalue?: (ctx: Variable_lvalueContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.non_range_variable_lvalue`.
	 * @param ctx the parse tree
	 */
	enterNon_range_variable_lvalue?: (ctx: Non_range_variable_lvalueContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.non_range_variable_lvalue`.
	 * @param ctx the parse tree
	 */
	exitNon_range_variable_lvalue?: (ctx: Non_range_variable_lvalueContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.integral_number`.
	 * @param ctx the parse tree
	 */
	enterIntegral_number?: (ctx: Integral_numberContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.integral_number`.
	 * @param ctx the parse tree
	 */
	exitIntegral_number?: (ctx: Integral_numberContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.decimal_number`.
	 * @param ctx the parse tree
	 */
	enterDecimal_number?: (ctx: Decimal_numberContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.decimal_number`.
	 * @param ctx the parse tree
	 */
	exitDecimal_number?: (ctx: Decimal_numberContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.real_number`.
	 * @param ctx the parse tree
	 */
	enterReal_number?: (ctx: Real_numberContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.real_number`.
	 * @param ctx the parse tree
	 */
	exitReal_number?: (ctx: Real_numberContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.binary_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_operator?: (ctx: Binary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.binary_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_operator?: (ctx: Binary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.inc_or_dec_operator`.
	 * @param ctx the parse tree
	 */
	enterInc_or_dec_operator?: (ctx: Inc_or_dec_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.inc_or_dec_operator`.
	 * @param ctx the parse tree
	 */
	exitInc_or_dec_operator?: (ctx: Inc_or_dec_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.unary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_module_path_operator?: (ctx: Unary_module_path_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.unary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_module_path_operator?: (ctx: Unary_module_path_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.binary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_module_path_operator?: (ctx: Binary_module_path_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.binary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_module_path_operator?: (ctx: Binary_module_path_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.package_scope`.
	 * @param ctx the parse tree
	 */
	enterPackage_scope?: (ctx: Package_scopeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.package_scope`.
	 * @param ctx the parse tree
	 */
	exitPackage_scope?: (ctx: Package_scopeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.ps_ident`.
	 * @param ctx the parse tree
	 */
	enterPs_ident?: (ctx: Ps_identContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.ps_ident`.
	 * @param ctx the parse tree
	 */
	exitPs_ident?: (ctx: Ps_identContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.hier_ident`.
	 * @param ctx the parse tree
	 */
	enterHier_ident?: (ctx: Hier_identContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.hier_ident`.
	 * @param ctx the parse tree
	 */
	exitHier_ident?: (ctx: Hier_identContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.ps_or_hier_ident`.
	 * @param ctx the parse tree
	 */
	enterPs_or_hier_ident?: (ctx: Ps_or_hier_identContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.ps_or_hier_ident`.
	 * @param ctx the parse tree
	 */
	exitPs_or_hier_ident?: (ctx: Ps_or_hier_identContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_text`.
	 * @param ctx the parse tree
	 */
	enterPp_text?: (ctx: Pp_textContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_text`.
	 * @param ctx the parse tree
	 */
	exitPp_text?: (ctx: Pp_textContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_directive`.
	 * @param ctx the parse tree
	 */
	enterPp_directive?: (ctx: Pp_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_directive`.
	 * @param ctx the parse tree
	 */
	exitPp_directive?: (ctx: Pp_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_default_nettype`.
	 * @param ctx the parse tree
	 */
	enterPp_default_nettype?: (ctx: Pp_default_nettypeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_default_nettype`.
	 * @param ctx the parse tree
	 */
	exitPp_default_nettype?: (ctx: Pp_default_nettypeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_timescale`.
	 * @param ctx the parse tree
	 */
	enterPp_timescale?: (ctx: Pp_timescaleContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_timescale`.
	 * @param ctx the parse tree
	 */
	exitPp_timescale?: (ctx: Pp_timescaleContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_include`.
	 * @param ctx the parse tree
	 */
	enterPp_include?: (ctx: Pp_includeContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_include`.
	 * @param ctx the parse tree
	 */
	exitPp_include?: (ctx: Pp_includeContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_define_only`.
	 * @param ctx the parse tree
	 */
	enterPp_define_only?: (ctx: Pp_define_onlyContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_define_only`.
	 * @param ctx the parse tree
	 */
	exitPp_define_only?: (ctx: Pp_define_onlyContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_define_noarg`.
	 * @param ctx the parse tree
	 */
	enterPp_define_noarg?: (ctx: Pp_define_noargContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_define_noarg`.
	 * @param ctx the parse tree
	 */
	exitPp_define_noarg?: (ctx: Pp_define_noargContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_define_arg`.
	 * @param ctx the parse tree
	 */
	enterPp_define_arg?: (ctx: Pp_define_argContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_define_arg`.
	 * @param ctx the parse tree
	 */
	exitPp_define_arg?: (ctx: Pp_define_argContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_undef`.
	 * @param ctx the parse tree
	 */
	enterPp_undef?: (ctx: Pp_undefContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_undef`.
	 * @param ctx the parse tree
	 */
	exitPp_undef?: (ctx: Pp_undefContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_call_noarg`.
	 * @param ctx the parse tree
	 */
	enterPp_call_noarg?: (ctx: Pp_call_noargContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_call_noarg`.
	 * @param ctx the parse tree
	 */
	exitPp_call_noarg?: (ctx: Pp_call_noargContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_call_arg`.
	 * @param ctx the parse tree
	 */
	enterPp_call_arg?: (ctx: Pp_call_argContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_call_arg`.
	 * @param ctx the parse tree
	 */
	exitPp_call_arg?: (ctx: Pp_call_argContext) => void;

	/**
	 * Enter a parse tree produced by `SystemVerilogParser.pp_ifdef`.
	 * @param ctx the parse tree
	 */
	enterPp_ifdef?: (ctx: Pp_ifdefContext) => void;
	/**
	 * Exit a parse tree produced by `SystemVerilogParser.pp_ifdef`.
	 * @param ctx the parse tree
	 */
	exitPp_ifdef?: (ctx: Pp_ifdefContext) => void;
}

