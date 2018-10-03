// Generated from src/sv_parser/grammar/SystemVerilogParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SystemVerilogParser}.
 */
public interface SystemVerilogParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#source_text}.
	 * @param ctx the parse tree
	 */
	void enterSource_text(SystemVerilogParser.Source_textContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#source_text}.
	 * @param ctx the parse tree
	 */
	void exitSource_text(SystemVerilogParser.Source_textContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#description}.
	 * @param ctx the parse tree
	 */
	void enterDescription(SystemVerilogParser.DescriptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#description}.
	 * @param ctx the parse tree
	 */
	void exitDescription(SystemVerilogParser.DescriptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#module_nonansi_header}.
	 * @param ctx the parse tree
	 */
	void enterModule_nonansi_header(SystemVerilogParser.Module_nonansi_headerContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#module_nonansi_header}.
	 * @param ctx the parse tree
	 */
	void exitModule_nonansi_header(SystemVerilogParser.Module_nonansi_headerContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#module_ansi_header}.
	 * @param ctx the parse tree
	 */
	void enterModule_ansi_header(SystemVerilogParser.Module_ansi_headerContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#module_ansi_header}.
	 * @param ctx the parse tree
	 */
	void exitModule_ansi_header(SystemVerilogParser.Module_ansi_headerContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#module_declaration}.
	 * @param ctx the parse tree
	 */
	void enterModule_declaration(SystemVerilogParser.Module_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#module_declaration}.
	 * @param ctx the parse tree
	 */
	void exitModule_declaration(SystemVerilogParser.Module_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_declaration}.
	 * @param ctx the parse tree
	 */
	void enterInterface_declaration(SystemVerilogParser.Interface_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_declaration}.
	 * @param ctx the parse tree
	 */
	void exitInterface_declaration(SystemVerilogParser.Interface_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_nonansi_header}.
	 * @param ctx the parse tree
	 */
	void enterInterface_nonansi_header(SystemVerilogParser.Interface_nonansi_headerContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_nonansi_header}.
	 * @param ctx the parse tree
	 */
	void exitInterface_nonansi_header(SystemVerilogParser.Interface_nonansi_headerContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_ansi_header}.
	 * @param ctx the parse tree
	 */
	void enterInterface_ansi_header(SystemVerilogParser.Interface_ansi_headerContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_ansi_header}.
	 * @param ctx the parse tree
	 */
	void exitInterface_ansi_header(SystemVerilogParser.Interface_ansi_headerContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_declaration}.
	 * @param ctx the parse tree
	 */
	void enterClass_declaration(SystemVerilogParser.Class_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_declaration}.
	 * @param ctx the parse tree
	 */
	void exitClass_declaration(SystemVerilogParser.Class_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_class_type}.
	 * @param ctx the parse tree
	 */
	void enterInterface_class_type(SystemVerilogParser.Interface_class_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_class_type}.
	 * @param ctx the parse tree
	 */
	void exitInterface_class_type(SystemVerilogParser.Interface_class_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_class_declaration}.
	 * @param ctx the parse tree
	 */
	void enterInterface_class_declaration(SystemVerilogParser.Interface_class_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_class_declaration}.
	 * @param ctx the parse tree
	 */
	void exitInterface_class_declaration(SystemVerilogParser.Interface_class_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_class_item}.
	 * @param ctx the parse tree
	 */
	void enterInterface_class_item(SystemVerilogParser.Interface_class_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_class_item}.
	 * @param ctx the parse tree
	 */
	void exitInterface_class_item(SystemVerilogParser.Interface_class_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_class_method}.
	 * @param ctx the parse tree
	 */
	void enterInterface_class_method(SystemVerilogParser.Interface_class_methodContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_class_method}.
	 * @param ctx the parse tree
	 */
	void exitInterface_class_method(SystemVerilogParser.Interface_class_methodContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#package_declaration}.
	 * @param ctx the parse tree
	 */
	void enterPackage_declaration(SystemVerilogParser.Package_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#package_declaration}.
	 * @param ctx the parse tree
	 */
	void exitPackage_declaration(SystemVerilogParser.Package_declarationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code timeunits_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#timeunits_declaration}.
	 * @param ctx the parse tree
	 */
	void enterTimeunits_declaration_0(SystemVerilogParser.Timeunits_declaration_0Context ctx);
	/**
	 * Exit a parse tree produced by the {@code timeunits_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#timeunits_declaration}.
	 * @param ctx the parse tree
	 */
	void exitTimeunits_declaration_0(SystemVerilogParser.Timeunits_declaration_0Context ctx);
	/**
	 * Enter a parse tree produced by the {@code timeunits_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#timeunits_declaration}.
	 * @param ctx the parse tree
	 */
	void enterTimeunits_declaration_1(SystemVerilogParser.Timeunits_declaration_1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code timeunits_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#timeunits_declaration}.
	 * @param ctx the parse tree
	 */
	void exitTimeunits_declaration_1(SystemVerilogParser.Timeunits_declaration_1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code timeunits_declaration_2}
	 * labeled alternative in {@link SystemVerilogParser#timeunits_declaration}.
	 * @param ctx the parse tree
	 */
	void enterTimeunits_declaration_2(SystemVerilogParser.Timeunits_declaration_2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code timeunits_declaration_2}
	 * labeled alternative in {@link SystemVerilogParser#timeunits_declaration}.
	 * @param ctx the parse tree
	 */
	void exitTimeunits_declaration_2(SystemVerilogParser.Timeunits_declaration_2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code timeunits_declaration_3}
	 * labeled alternative in {@link SystemVerilogParser#timeunits_declaration}.
	 * @param ctx the parse tree
	 */
	void enterTimeunits_declaration_3(SystemVerilogParser.Timeunits_declaration_3Context ctx);
	/**
	 * Exit a parse tree produced by the {@code timeunits_declaration_3}
	 * labeled alternative in {@link SystemVerilogParser#timeunits_declaration}.
	 * @param ctx the parse tree
	 */
	void exitTimeunits_declaration_3(SystemVerilogParser.Timeunits_declaration_3Context ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#parameter_port_list}.
	 * @param ctx the parse tree
	 */
	void enterParameter_port_list(SystemVerilogParser.Parameter_port_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#parameter_port_list}.
	 * @param ctx the parse tree
	 */
	void exitParameter_port_list(SystemVerilogParser.Parameter_port_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#parameter_port_declaration}.
	 * @param ctx the parse tree
	 */
	void enterParameter_port_declaration(SystemVerilogParser.Parameter_port_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#parameter_port_declaration}.
	 * @param ctx the parse tree
	 */
	void exitParameter_port_declaration(SystemVerilogParser.Parameter_port_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_ports}.
	 * @param ctx the parse tree
	 */
	void enterList_of_ports(SystemVerilogParser.List_of_portsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_ports}.
	 * @param ctx the parse tree
	 */
	void exitList_of_ports(SystemVerilogParser.List_of_portsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_port_declarations}.
	 * @param ctx the parse tree
	 */
	void enterList_of_port_declarations(SystemVerilogParser.List_of_port_declarationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_port_declarations}.
	 * @param ctx the parse tree
	 */
	void exitList_of_port_declarations(SystemVerilogParser.List_of_port_declarationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#port_declaration}.
	 * @param ctx the parse tree
	 */
	void enterPort_declaration(SystemVerilogParser.Port_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#port_declaration}.
	 * @param ctx the parse tree
	 */
	void exitPort_declaration(SystemVerilogParser.Port_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#port}.
	 * @param ctx the parse tree
	 */
	void enterPort(SystemVerilogParser.PortContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#port}.
	 * @param ctx the parse tree
	 */
	void exitPort(SystemVerilogParser.PortContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#port_expression}.
	 * @param ctx the parse tree
	 */
	void enterPort_expression(SystemVerilogParser.Port_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#port_expression}.
	 * @param ctx the parse tree
	 */
	void exitPort_expression(SystemVerilogParser.Port_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#port_reference}.
	 * @param ctx the parse tree
	 */
	void enterPort_reference(SystemVerilogParser.Port_referenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#port_reference}.
	 * @param ctx the parse tree
	 */
	void exitPort_reference(SystemVerilogParser.Port_referenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#port_direction}.
	 * @param ctx the parse tree
	 */
	void enterPort_direction(SystemVerilogParser.Port_directionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#port_direction}.
	 * @param ctx the parse tree
	 */
	void exitPort_direction(SystemVerilogParser.Port_directionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#net_port_header}.
	 * @param ctx the parse tree
	 */
	void enterNet_port_header(SystemVerilogParser.Net_port_headerContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#net_port_header}.
	 * @param ctx the parse tree
	 */
	void exitNet_port_header(SystemVerilogParser.Net_port_headerContext ctx);
	/**
	 * Enter a parse tree produced by the {@code interface_port_header_0}
	 * labeled alternative in {@link SystemVerilogParser#interface_port_header}.
	 * @param ctx the parse tree
	 */
	void enterInterface_port_header_0(SystemVerilogParser.Interface_port_header_0Context ctx);
	/**
	 * Exit a parse tree produced by the {@code interface_port_header_0}
	 * labeled alternative in {@link SystemVerilogParser#interface_port_header}.
	 * @param ctx the parse tree
	 */
	void exitInterface_port_header_0(SystemVerilogParser.Interface_port_header_0Context ctx);
	/**
	 * Enter a parse tree produced by the {@code interface_port_header_1}
	 * labeled alternative in {@link SystemVerilogParser#interface_port_header}.
	 * @param ctx the parse tree
	 */
	void enterInterface_port_header_1(SystemVerilogParser.Interface_port_header_1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code interface_port_header_1}
	 * labeled alternative in {@link SystemVerilogParser#interface_port_header}.
	 * @param ctx the parse tree
	 */
	void exitInterface_port_header_1(SystemVerilogParser.Interface_port_header_1Context ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#ansi_port_declaration}.
	 * @param ctx the parse tree
	 */
	void enterAnsi_port_declaration(SystemVerilogParser.Ansi_port_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#ansi_port_declaration}.
	 * @param ctx the parse tree
	 */
	void exitAnsi_port_declaration(SystemVerilogParser.Ansi_port_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#elaboration_system_task}.
	 * @param ctx the parse tree
	 */
	void enterElaboration_system_task(SystemVerilogParser.Elaboration_system_taskContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#elaboration_system_task}.
	 * @param ctx the parse tree
	 */
	void exitElaboration_system_task(SystemVerilogParser.Elaboration_system_taskContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#finish_number}.
	 * @param ctx the parse tree
	 */
	void enterFinish_number(SystemVerilogParser.Finish_numberContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#finish_number}.
	 * @param ctx the parse tree
	 */
	void exitFinish_number(SystemVerilogParser.Finish_numberContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#module_common_item}.
	 * @param ctx the parse tree
	 */
	void enterModule_common_item(SystemVerilogParser.Module_common_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#module_common_item}.
	 * @param ctx the parse tree
	 */
	void exitModule_common_item(SystemVerilogParser.Module_common_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#module_item}.
	 * @param ctx the parse tree
	 */
	void enterModule_item(SystemVerilogParser.Module_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#module_item}.
	 * @param ctx the parse tree
	 */
	void exitModule_item(SystemVerilogParser.Module_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#module_or_generate_item}.
	 * @param ctx the parse tree
	 */
	void enterModule_or_generate_item(SystemVerilogParser.Module_or_generate_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#module_or_generate_item}.
	 * @param ctx the parse tree
	 */
	void exitModule_or_generate_item(SystemVerilogParser.Module_or_generate_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#module_or_generate_item_declaration}.
	 * @param ctx the parse tree
	 */
	void enterModule_or_generate_item_declaration(SystemVerilogParser.Module_or_generate_item_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#module_or_generate_item_declaration}.
	 * @param ctx the parse tree
	 */
	void exitModule_or_generate_item_declaration(SystemVerilogParser.Module_or_generate_item_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#non_port_module_item}.
	 * @param ctx the parse tree
	 */
	void enterNon_port_module_item(SystemVerilogParser.Non_port_module_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#non_port_module_item}.
	 * @param ctx the parse tree
	 */
	void exitNon_port_module_item(SystemVerilogParser.Non_port_module_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#parameter_override}.
	 * @param ctx the parse tree
	 */
	void enterParameter_override(SystemVerilogParser.Parameter_overrideContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#parameter_override}.
	 * @param ctx the parse tree
	 */
	void exitParameter_override(SystemVerilogParser.Parameter_overrideContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_or_generate_item}.
	 * @param ctx the parse tree
	 */
	void enterInterface_or_generate_item(SystemVerilogParser.Interface_or_generate_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_or_generate_item}.
	 * @param ctx the parse tree
	 */
	void exitInterface_or_generate_item(SystemVerilogParser.Interface_or_generate_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#extern_tf_declaration}.
	 * @param ctx the parse tree
	 */
	void enterExtern_tf_declaration(SystemVerilogParser.Extern_tf_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#extern_tf_declaration}.
	 * @param ctx the parse tree
	 */
	void exitExtern_tf_declaration(SystemVerilogParser.Extern_tf_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_item}.
	 * @param ctx the parse tree
	 */
	void enterInterface_item(SystemVerilogParser.Interface_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_item}.
	 * @param ctx the parse tree
	 */
	void exitInterface_item(SystemVerilogParser.Interface_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#non_port_interface_item}.
	 * @param ctx the parse tree
	 */
	void enterNon_port_interface_item(SystemVerilogParser.Non_port_interface_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#non_port_interface_item}.
	 * @param ctx the parse tree
	 */
	void exitNon_port_interface_item(SystemVerilogParser.Non_port_interface_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_item}.
	 * @param ctx the parse tree
	 */
	void enterClass_item(SystemVerilogParser.Class_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_item}.
	 * @param ctx the parse tree
	 */
	void exitClass_item(SystemVerilogParser.Class_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_property}.
	 * @param ctx the parse tree
	 */
	void enterClass_property(SystemVerilogParser.Class_propertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_property}.
	 * @param ctx the parse tree
	 */
	void exitClass_property(SystemVerilogParser.Class_propertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_method}.
	 * @param ctx the parse tree
	 */
	void enterClass_method(SystemVerilogParser.Class_methodContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_method}.
	 * @param ctx the parse tree
	 */
	void exitClass_method(SystemVerilogParser.Class_methodContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_constructor_prototype}.
	 * @param ctx the parse tree
	 */
	void enterClass_constructor_prototype(SystemVerilogParser.Class_constructor_prototypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_constructor_prototype}.
	 * @param ctx the parse tree
	 */
	void exitClass_constructor_prototype(SystemVerilogParser.Class_constructor_prototypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_constraint}.
	 * @param ctx the parse tree
	 */
	void enterClass_constraint(SystemVerilogParser.Class_constraintContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_constraint}.
	 * @param ctx the parse tree
	 */
	void exitClass_constraint(SystemVerilogParser.Class_constraintContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_item_qualifier}.
	 * @param ctx the parse tree
	 */
	void enterClass_item_qualifier(SystemVerilogParser.Class_item_qualifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_item_qualifier}.
	 * @param ctx the parse tree
	 */
	void exitClass_item_qualifier(SystemVerilogParser.Class_item_qualifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#property_qualifier}.
	 * @param ctx the parse tree
	 */
	void enterProperty_qualifier(SystemVerilogParser.Property_qualifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#property_qualifier}.
	 * @param ctx the parse tree
	 */
	void exitProperty_qualifier(SystemVerilogParser.Property_qualifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#method_qualifier}.
	 * @param ctx the parse tree
	 */
	void enterMethod_qualifier(SystemVerilogParser.Method_qualifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#method_qualifier}.
	 * @param ctx the parse tree
	 */
	void exitMethod_qualifier(SystemVerilogParser.Method_qualifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#method_prototype}.
	 * @param ctx the parse tree
	 */
	void enterMethod_prototype(SystemVerilogParser.Method_prototypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#method_prototype}.
	 * @param ctx the parse tree
	 */
	void exitMethod_prototype(SystemVerilogParser.Method_prototypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_constructor_declaration}.
	 * @param ctx the parse tree
	 */
	void enterClass_constructor_declaration(SystemVerilogParser.Class_constructor_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_constructor_declaration}.
	 * @param ctx the parse tree
	 */
	void exitClass_constructor_declaration(SystemVerilogParser.Class_constructor_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constraint_declaration}.
	 * @param ctx the parse tree
	 */
	void enterConstraint_declaration(SystemVerilogParser.Constraint_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constraint_declaration}.
	 * @param ctx the parse tree
	 */
	void exitConstraint_declaration(SystemVerilogParser.Constraint_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constraint_block}.
	 * @param ctx the parse tree
	 */
	void enterConstraint_block(SystemVerilogParser.Constraint_blockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constraint_block}.
	 * @param ctx the parse tree
	 */
	void exitConstraint_block(SystemVerilogParser.Constraint_blockContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constraint_block_item}.
	 * @param ctx the parse tree
	 */
	void enterConstraint_block_item(SystemVerilogParser.Constraint_block_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constraint_block_item}.
	 * @param ctx the parse tree
	 */
	void exitConstraint_block_item(SystemVerilogParser.Constraint_block_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#solve_before_list}.
	 * @param ctx the parse tree
	 */
	void enterSolve_before_list(SystemVerilogParser.Solve_before_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#solve_before_list}.
	 * @param ctx the parse tree
	 */
	void exitSolve_before_list(SystemVerilogParser.Solve_before_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constraint_primary}.
	 * @param ctx the parse tree
	 */
	void enterConstraint_primary(SystemVerilogParser.Constraint_primaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constraint_primary}.
	 * @param ctx the parse tree
	 */
	void exitConstraint_primary(SystemVerilogParser.Constraint_primaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constraint_expression}.
	 * @param ctx the parse tree
	 */
	void enterConstraint_expression(SystemVerilogParser.Constraint_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constraint_expression}.
	 * @param ctx the parse tree
	 */
	void exitConstraint_expression(SystemVerilogParser.Constraint_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#uniqueness_constraint}.
	 * @param ctx the parse tree
	 */
	void enterUniqueness_constraint(SystemVerilogParser.Uniqueness_constraintContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#uniqueness_constraint}.
	 * @param ctx the parse tree
	 */
	void exitUniqueness_constraint(SystemVerilogParser.Uniqueness_constraintContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constraint_set}.
	 * @param ctx the parse tree
	 */
	void enterConstraint_set(SystemVerilogParser.Constraint_setContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constraint_set}.
	 * @param ctx the parse tree
	 */
	void exitConstraint_set(SystemVerilogParser.Constraint_setContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#dist_list}.
	 * @param ctx the parse tree
	 */
	void enterDist_list(SystemVerilogParser.Dist_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#dist_list}.
	 * @param ctx the parse tree
	 */
	void exitDist_list(SystemVerilogParser.Dist_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#dist_item}.
	 * @param ctx the parse tree
	 */
	void enterDist_item(SystemVerilogParser.Dist_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#dist_item}.
	 * @param ctx the parse tree
	 */
	void exitDist_item(SystemVerilogParser.Dist_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#dist_weight}.
	 * @param ctx the parse tree
	 */
	void enterDist_weight(SystemVerilogParser.Dist_weightContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#dist_weight}.
	 * @param ctx the parse tree
	 */
	void exitDist_weight(SystemVerilogParser.Dist_weightContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constraint_prototype}.
	 * @param ctx the parse tree
	 */
	void enterConstraint_prototype(SystemVerilogParser.Constraint_prototypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constraint_prototype}.
	 * @param ctx the parse tree
	 */
	void exitConstraint_prototype(SystemVerilogParser.Constraint_prototypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constraint_prototype_qualifier}.
	 * @param ctx the parse tree
	 */
	void enterConstraint_prototype_qualifier(SystemVerilogParser.Constraint_prototype_qualifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constraint_prototype_qualifier}.
	 * @param ctx the parse tree
	 */
	void exitConstraint_prototype_qualifier(SystemVerilogParser.Constraint_prototype_qualifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#package_item}.
	 * @param ctx the parse tree
	 */
	void enterPackage_item(SystemVerilogParser.Package_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#package_item}.
	 * @param ctx the parse tree
	 */
	void exitPackage_item(SystemVerilogParser.Package_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#package_or_generate_item_declaration}.
	 * @param ctx the parse tree
	 */
	void enterPackage_or_generate_item_declaration(SystemVerilogParser.Package_or_generate_item_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#package_or_generate_item_declaration}.
	 * @param ctx the parse tree
	 */
	void exitPackage_or_generate_item_declaration(SystemVerilogParser.Package_or_generate_item_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#anonymous_program}.
	 * @param ctx the parse tree
	 */
	void enterAnonymous_program(SystemVerilogParser.Anonymous_programContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#anonymous_program}.
	 * @param ctx the parse tree
	 */
	void exitAnonymous_program(SystemVerilogParser.Anonymous_programContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#local_parameter_declaration}.
	 * @param ctx the parse tree
	 */
	void enterLocal_parameter_declaration(SystemVerilogParser.Local_parameter_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#local_parameter_declaration}.
	 * @param ctx the parse tree
	 */
	void exitLocal_parameter_declaration(SystemVerilogParser.Local_parameter_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#parameter_declaration}.
	 * @param ctx the parse tree
	 */
	void enterParameter_declaration(SystemVerilogParser.Parameter_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#parameter_declaration}.
	 * @param ctx the parse tree
	 */
	void exitParameter_declaration(SystemVerilogParser.Parameter_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#inout_declaration}.
	 * @param ctx the parse tree
	 */
	void enterInout_declaration(SystemVerilogParser.Inout_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#inout_declaration}.
	 * @param ctx the parse tree
	 */
	void exitInout_declaration(SystemVerilogParser.Inout_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#input_declaration}.
	 * @param ctx the parse tree
	 */
	void enterInput_declaration(SystemVerilogParser.Input_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#input_declaration}.
	 * @param ctx the parse tree
	 */
	void exitInput_declaration(SystemVerilogParser.Input_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#output_declaration}.
	 * @param ctx the parse tree
	 */
	void enterOutput_declaration(SystemVerilogParser.Output_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#output_declaration}.
	 * @param ctx the parse tree
	 */
	void exitOutput_declaration(SystemVerilogParser.Output_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#interface_port_declaration}.
	 * @param ctx the parse tree
	 */
	void enterInterface_port_declaration(SystemVerilogParser.Interface_port_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#interface_port_declaration}.
	 * @param ctx the parse tree
	 */
	void exitInterface_port_declaration(SystemVerilogParser.Interface_port_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#ref_declaration}.
	 * @param ctx the parse tree
	 */
	void enterRef_declaration(SystemVerilogParser.Ref_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#ref_declaration}.
	 * @param ctx the parse tree
	 */
	void exitRef_declaration(SystemVerilogParser.Ref_declarationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code data_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#data_declaration}.
	 * @param ctx the parse tree
	 */
	void enterData_declaration_0(SystemVerilogParser.Data_declaration_0Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#data_declaration}.
	 * @param ctx the parse tree
	 */
	void exitData_declaration_0(SystemVerilogParser.Data_declaration_0Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#data_declaration}.
	 * @param ctx the parse tree
	 */
	void enterData_declaration_1(SystemVerilogParser.Data_declaration_1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#data_declaration}.
	 * @param ctx the parse tree
	 */
	void exitData_declaration_1(SystemVerilogParser.Data_declaration_1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_declaration_2}
	 * labeled alternative in {@link SystemVerilogParser#data_declaration}.
	 * @param ctx the parse tree
	 */
	void enterData_declaration_2(SystemVerilogParser.Data_declaration_2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_declaration_2}
	 * labeled alternative in {@link SystemVerilogParser#data_declaration}.
	 * @param ctx the parse tree
	 */
	void exitData_declaration_2(SystemVerilogParser.Data_declaration_2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_declaration_3}
	 * labeled alternative in {@link SystemVerilogParser#data_declaration}.
	 * @param ctx the parse tree
	 */
	void enterData_declaration_3(SystemVerilogParser.Data_declaration_3Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_declaration_3}
	 * labeled alternative in {@link SystemVerilogParser#data_declaration}.
	 * @param ctx the parse tree
	 */
	void exitData_declaration_3(SystemVerilogParser.Data_declaration_3Context ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#package_import_declaration}.
	 * @param ctx the parse tree
	 */
	void enterPackage_import_declaration(SystemVerilogParser.Package_import_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#package_import_declaration}.
	 * @param ctx the parse tree
	 */
	void exitPackage_import_declaration(SystemVerilogParser.Package_import_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#package_import_item}.
	 * @param ctx the parse tree
	 */
	void enterPackage_import_item(SystemVerilogParser.Package_import_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#package_import_item}.
	 * @param ctx the parse tree
	 */
	void exitPackage_import_item(SystemVerilogParser.Package_import_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#package_export_declaration}.
	 * @param ctx the parse tree
	 */
	void enterPackage_export_declaration(SystemVerilogParser.Package_export_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#package_export_declaration}.
	 * @param ctx the parse tree
	 */
	void exitPackage_export_declaration(SystemVerilogParser.Package_export_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#genvar_declaration}.
	 * @param ctx the parse tree
	 */
	void enterGenvar_declaration(SystemVerilogParser.Genvar_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#genvar_declaration}.
	 * @param ctx the parse tree
	 */
	void exitGenvar_declaration(SystemVerilogParser.Genvar_declarationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code net_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#net_declaration}.
	 * @param ctx the parse tree
	 */
	void enterNet_declaration_0(SystemVerilogParser.Net_declaration_0Context ctx);
	/**
	 * Exit a parse tree produced by the {@code net_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#net_declaration}.
	 * @param ctx the parse tree
	 */
	void exitNet_declaration_0(SystemVerilogParser.Net_declaration_0Context ctx);
	/**
	 * Enter a parse tree produced by the {@code net_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#net_declaration}.
	 * @param ctx the parse tree
	 */
	void enterNet_declaration_1(SystemVerilogParser.Net_declaration_1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code net_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#net_declaration}.
	 * @param ctx the parse tree
	 */
	void exitNet_declaration_1(SystemVerilogParser.Net_declaration_1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code net_declaration_2}
	 * labeled alternative in {@link SystemVerilogParser#net_declaration}.
	 * @param ctx the parse tree
	 */
	void enterNet_declaration_2(SystemVerilogParser.Net_declaration_2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code net_declaration_2}
	 * labeled alternative in {@link SystemVerilogParser#net_declaration}.
	 * @param ctx the parse tree
	 */
	void exitNet_declaration_2(SystemVerilogParser.Net_declaration_2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code type_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#type_declaration}.
	 * @param ctx the parse tree
	 */
	void enterType_declaration_0(SystemVerilogParser.Type_declaration_0Context ctx);
	/**
	 * Exit a parse tree produced by the {@code type_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#type_declaration}.
	 * @param ctx the parse tree
	 */
	void exitType_declaration_0(SystemVerilogParser.Type_declaration_0Context ctx);
	/**
	 * Enter a parse tree produced by the {@code type_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#type_declaration}.
	 * @param ctx the parse tree
	 */
	void enterType_declaration_1(SystemVerilogParser.Type_declaration_1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code type_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#type_declaration}.
	 * @param ctx the parse tree
	 */
	void exitType_declaration_1(SystemVerilogParser.Type_declaration_1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code type_declaration_2}
	 * labeled alternative in {@link SystemVerilogParser#type_declaration}.
	 * @param ctx the parse tree
	 */
	void enterType_declaration_2(SystemVerilogParser.Type_declaration_2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code type_declaration_2}
	 * labeled alternative in {@link SystemVerilogParser#type_declaration}.
	 * @param ctx the parse tree
	 */
	void exitType_declaration_2(SystemVerilogParser.Type_declaration_2Context ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#type_declaration_type}.
	 * @param ctx the parse tree
	 */
	void enterType_declaration_type(SystemVerilogParser.Type_declaration_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#type_declaration_type}.
	 * @param ctx the parse tree
	 */
	void exitType_declaration_type(SystemVerilogParser.Type_declaration_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#net_type_declaration}.
	 * @param ctx the parse tree
	 */
	void enterNet_type_declaration(SystemVerilogParser.Net_type_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#net_type_declaration}.
	 * @param ctx the parse tree
	 */
	void exitNet_type_declaration(SystemVerilogParser.Net_type_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#lifetime}.
	 * @param ctx the parse tree
	 */
	void enterLifetime(SystemVerilogParser.LifetimeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#lifetime}.
	 * @param ctx the parse tree
	 */
	void exitLifetime(SystemVerilogParser.LifetimeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#casting_type}.
	 * @param ctx the parse tree
	 */
	void enterCasting_type(SystemVerilogParser.Casting_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#casting_type}.
	 * @param ctx the parse tree
	 */
	void exitCasting_type(SystemVerilogParser.Casting_typeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_0}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_0(SystemVerilogParser.Data_type_0Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_0}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_0(SystemVerilogParser.Data_type_0Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_1}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_1(SystemVerilogParser.Data_type_1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_1}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_1(SystemVerilogParser.Data_type_1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_2}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_2(SystemVerilogParser.Data_type_2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_2}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_2(SystemVerilogParser.Data_type_2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_3}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_3(SystemVerilogParser.Data_type_3Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_3}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_3(SystemVerilogParser.Data_type_3Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_4}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_4(SystemVerilogParser.Data_type_4Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_4}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_4(SystemVerilogParser.Data_type_4Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_5}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_5(SystemVerilogParser.Data_type_5Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_5}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_5(SystemVerilogParser.Data_type_5Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_6}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_6(SystemVerilogParser.Data_type_6Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_6}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_6(SystemVerilogParser.Data_type_6Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_7}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_7(SystemVerilogParser.Data_type_7Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_7}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_7(SystemVerilogParser.Data_type_7Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_8}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_8(SystemVerilogParser.Data_type_8Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_8}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_8(SystemVerilogParser.Data_type_8Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_9}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_9(SystemVerilogParser.Data_type_9Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_9}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_9(SystemVerilogParser.Data_type_9Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_10}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_10(SystemVerilogParser.Data_type_10Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_10}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_10(SystemVerilogParser.Data_type_10Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_11}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_11(SystemVerilogParser.Data_type_11Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_11}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_11(SystemVerilogParser.Data_type_11Context ctx);
	/**
	 * Enter a parse tree produced by the {@code data_type_12}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void enterData_type_12(SystemVerilogParser.Data_type_12Context ctx);
	/**
	 * Exit a parse tree produced by the {@code data_type_12}
	 * labeled alternative in {@link SystemVerilogParser#data_type}.
	 * @param ctx the parse tree
	 */
	void exitData_type_12(SystemVerilogParser.Data_type_12Context ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#data_type_or_implicit}.
	 * @param ctx the parse tree
	 */
	void enterData_type_or_implicit(SystemVerilogParser.Data_type_or_implicitContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#data_type_or_implicit}.
	 * @param ctx the parse tree
	 */
	void exitData_type_or_implicit(SystemVerilogParser.Data_type_or_implicitContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#implicit_data_type}.
	 * @param ctx the parse tree
	 */
	void enterImplicit_data_type(SystemVerilogParser.Implicit_data_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#implicit_data_type}.
	 * @param ctx the parse tree
	 */
	void exitImplicit_data_type(SystemVerilogParser.Implicit_data_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#enum_base_type}.
	 * @param ctx the parse tree
	 */
	void enterEnum_base_type(SystemVerilogParser.Enum_base_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#enum_base_type}.
	 * @param ctx the parse tree
	 */
	void exitEnum_base_type(SystemVerilogParser.Enum_base_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#enum_name_declaration}.
	 * @param ctx the parse tree
	 */
	void enterEnum_name_declaration(SystemVerilogParser.Enum_name_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#enum_name_declaration}.
	 * @param ctx the parse tree
	 */
	void exitEnum_name_declaration(SystemVerilogParser.Enum_name_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_scope}.
	 * @param ctx the parse tree
	 */
	void enterClass_scope(SystemVerilogParser.Class_scopeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_scope}.
	 * @param ctx the parse tree
	 */
	void exitClass_scope(SystemVerilogParser.Class_scopeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_type}.
	 * @param ctx the parse tree
	 */
	void enterClass_type(SystemVerilogParser.Class_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_type}.
	 * @param ctx the parse tree
	 */
	void exitClass_type(SystemVerilogParser.Class_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#integer_type}.
	 * @param ctx the parse tree
	 */
	void enterInteger_type(SystemVerilogParser.Integer_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#integer_type}.
	 * @param ctx the parse tree
	 */
	void exitInteger_type(SystemVerilogParser.Integer_typeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code net_port_type_0}
	 * labeled alternative in {@link SystemVerilogParser#net_port_type}.
	 * @param ctx the parse tree
	 */
	void enterNet_port_type_0(SystemVerilogParser.Net_port_type_0Context ctx);
	/**
	 * Exit a parse tree produced by the {@code net_port_type_0}
	 * labeled alternative in {@link SystemVerilogParser#net_port_type}.
	 * @param ctx the parse tree
	 */
	void exitNet_port_type_0(SystemVerilogParser.Net_port_type_0Context ctx);
	/**
	 * Enter a parse tree produced by the {@code net_port_type_1}
	 * labeled alternative in {@link SystemVerilogParser#net_port_type}.
	 * @param ctx the parse tree
	 */
	void enterNet_port_type_1(SystemVerilogParser.Net_port_type_1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code net_port_type_1}
	 * labeled alternative in {@link SystemVerilogParser#net_port_type}.
	 * @param ctx the parse tree
	 */
	void exitNet_port_type_1(SystemVerilogParser.Net_port_type_1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code net_port_type_2}
	 * labeled alternative in {@link SystemVerilogParser#net_port_type}.
	 * @param ctx the parse tree
	 */
	void enterNet_port_type_2(SystemVerilogParser.Net_port_type_2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code net_port_type_2}
	 * labeled alternative in {@link SystemVerilogParser#net_port_type}.
	 * @param ctx the parse tree
	 */
	void exitNet_port_type_2(SystemVerilogParser.Net_port_type_2Context ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#variable_port_type}.
	 * @param ctx the parse tree
	 */
	void enterVariable_port_type(SystemVerilogParser.Variable_port_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#variable_port_type}.
	 * @param ctx the parse tree
	 */
	void exitVariable_port_type(SystemVerilogParser.Variable_port_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#var_data_type}.
	 * @param ctx the parse tree
	 */
	void enterVar_data_type(SystemVerilogParser.Var_data_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#var_data_type}.
	 * @param ctx the parse tree
	 */
	void exitVar_data_type(SystemVerilogParser.Var_data_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#simple_type}.
	 * @param ctx the parse tree
	 */
	void enterSimple_type(SystemVerilogParser.Simple_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#simple_type}.
	 * @param ctx the parse tree
	 */
	void exitSimple_type(SystemVerilogParser.Simple_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#struct_union}.
	 * @param ctx the parse tree
	 */
	void enterStruct_union(SystemVerilogParser.Struct_unionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#struct_union}.
	 * @param ctx the parse tree
	 */
	void exitStruct_union(SystemVerilogParser.Struct_unionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#data_type_or_void}.
	 * @param ctx the parse tree
	 */
	void enterData_type_or_void(SystemVerilogParser.Data_type_or_voidContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#data_type_or_void}.
	 * @param ctx the parse tree
	 */
	void exitData_type_or_void(SystemVerilogParser.Data_type_or_voidContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#struct_union_member}.
	 * @param ctx the parse tree
	 */
	void enterStruct_union_member(SystemVerilogParser.Struct_union_memberContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#struct_union_member}.
	 * @param ctx the parse tree
	 */
	void exitStruct_union_member(SystemVerilogParser.Struct_union_memberContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#type_reference}.
	 * @param ctx the parse tree
	 */
	void enterType_reference(SystemVerilogParser.Type_referenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#type_reference}.
	 * @param ctx the parse tree
	 */
	void exitType_reference(SystemVerilogParser.Type_referenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#delay_value}.
	 * @param ctx the parse tree
	 */
	void enterDelay_value(SystemVerilogParser.Delay_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#delay_value}.
	 * @param ctx the parse tree
	 */
	void exitDelay_value(SystemVerilogParser.Delay_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_defparam_assignments}.
	 * @param ctx the parse tree
	 */
	void enterList_of_defparam_assignments(SystemVerilogParser.List_of_defparam_assignmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_defparam_assignments}.
	 * @param ctx the parse tree
	 */
	void exitList_of_defparam_assignments(SystemVerilogParser.List_of_defparam_assignmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_genvar_identifiers}.
	 * @param ctx the parse tree
	 */
	void enterList_of_genvar_identifiers(SystemVerilogParser.List_of_genvar_identifiersContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_genvar_identifiers}.
	 * @param ctx the parse tree
	 */
	void exitList_of_genvar_identifiers(SystemVerilogParser.List_of_genvar_identifiersContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_interface_identifiers}.
	 * @param ctx the parse tree
	 */
	void enterList_of_interface_identifiers(SystemVerilogParser.List_of_interface_identifiersContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_interface_identifiers}.
	 * @param ctx the parse tree
	 */
	void exitList_of_interface_identifiers(SystemVerilogParser.List_of_interface_identifiersContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_net_decl_assignments}.
	 * @param ctx the parse tree
	 */
	void enterList_of_net_decl_assignments(SystemVerilogParser.List_of_net_decl_assignmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_net_decl_assignments}.
	 * @param ctx the parse tree
	 */
	void exitList_of_net_decl_assignments(SystemVerilogParser.List_of_net_decl_assignmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_param_assignments}.
	 * @param ctx the parse tree
	 */
	void enterList_of_param_assignments(SystemVerilogParser.List_of_param_assignmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_param_assignments}.
	 * @param ctx the parse tree
	 */
	void exitList_of_param_assignments(SystemVerilogParser.List_of_param_assignmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_port_identifiers}.
	 * @param ctx the parse tree
	 */
	void enterList_of_port_identifiers(SystemVerilogParser.List_of_port_identifiersContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_port_identifiers}.
	 * @param ctx the parse tree
	 */
	void exitList_of_port_identifiers(SystemVerilogParser.List_of_port_identifiersContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_tf_variable_identifiers}.
	 * @param ctx the parse tree
	 */
	void enterList_of_tf_variable_identifiers(SystemVerilogParser.List_of_tf_variable_identifiersContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_tf_variable_identifiers}.
	 * @param ctx the parse tree
	 */
	void exitList_of_tf_variable_identifiers(SystemVerilogParser.List_of_tf_variable_identifiersContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_type_assignments}.
	 * @param ctx the parse tree
	 */
	void enterList_of_type_assignments(SystemVerilogParser.List_of_type_assignmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_type_assignments}.
	 * @param ctx the parse tree
	 */
	void exitList_of_type_assignments(SystemVerilogParser.List_of_type_assignmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_variable_decl_assignments}.
	 * @param ctx the parse tree
	 */
	void enterList_of_variable_decl_assignments(SystemVerilogParser.List_of_variable_decl_assignmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_variable_decl_assignments}.
	 * @param ctx the parse tree
	 */
	void exitList_of_variable_decl_assignments(SystemVerilogParser.List_of_variable_decl_assignmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_variable_identifiers}.
	 * @param ctx the parse tree
	 */
	void enterList_of_variable_identifiers(SystemVerilogParser.List_of_variable_identifiersContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_variable_identifiers}.
	 * @param ctx the parse tree
	 */
	void exitList_of_variable_identifiers(SystemVerilogParser.List_of_variable_identifiersContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_variable_port_identifiers}.
	 * @param ctx the parse tree
	 */
	void enterList_of_variable_port_identifiers(SystemVerilogParser.List_of_variable_port_identifiersContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_variable_port_identifiers}.
	 * @param ctx the parse tree
	 */
	void exitList_of_variable_port_identifiers(SystemVerilogParser.List_of_variable_port_identifiersContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#defparam_assignment}.
	 * @param ctx the parse tree
	 */
	void enterDefparam_assignment(SystemVerilogParser.Defparam_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#defparam_assignment}.
	 * @param ctx the parse tree
	 */
	void exitDefparam_assignment(SystemVerilogParser.Defparam_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#net_decl_assignment}.
	 * @param ctx the parse tree
	 */
	void enterNet_decl_assignment(SystemVerilogParser.Net_decl_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#net_decl_assignment}.
	 * @param ctx the parse tree
	 */
	void exitNet_decl_assignment(SystemVerilogParser.Net_decl_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#param_assignment}.
	 * @param ctx the parse tree
	 */
	void enterParam_assignment(SystemVerilogParser.Param_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#param_assignment}.
	 * @param ctx the parse tree
	 */
	void exitParam_assignment(SystemVerilogParser.Param_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#type_assignment}.
	 * @param ctx the parse tree
	 */
	void enterType_assignment(SystemVerilogParser.Type_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#type_assignment}.
	 * @param ctx the parse tree
	 */
	void exitType_assignment(SystemVerilogParser.Type_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#variable_decl_assignment}.
	 * @param ctx the parse tree
	 */
	void enterVariable_decl_assignment(SystemVerilogParser.Variable_decl_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#variable_decl_assignment}.
	 * @param ctx the parse tree
	 */
	void exitVariable_decl_assignment(SystemVerilogParser.Variable_decl_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_new}.
	 * @param ctx the parse tree
	 */
	void enterClass_new(SystemVerilogParser.Class_newContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_new}.
	 * @param ctx the parse tree
	 */
	void exitClass_new(SystemVerilogParser.Class_newContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#dynamic_array_new}.
	 * @param ctx the parse tree
	 */
	void enterDynamic_array_new(SystemVerilogParser.Dynamic_array_newContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#dynamic_array_new}.
	 * @param ctx the parse tree
	 */
	void exitDynamic_array_new(SystemVerilogParser.Dynamic_array_newContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#unpacked_dimension}.
	 * @param ctx the parse tree
	 */
	void enterUnpacked_dimension(SystemVerilogParser.Unpacked_dimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#unpacked_dimension}.
	 * @param ctx the parse tree
	 */
	void exitUnpacked_dimension(SystemVerilogParser.Unpacked_dimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#packed_dimension}.
	 * @param ctx the parse tree
	 */
	void enterPacked_dimension(SystemVerilogParser.Packed_dimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#packed_dimension}.
	 * @param ctx the parse tree
	 */
	void exitPacked_dimension(SystemVerilogParser.Packed_dimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#assosiative_dimension}.
	 * @param ctx the parse tree
	 */
	void enterAssosiative_dimension(SystemVerilogParser.Assosiative_dimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#assosiative_dimension}.
	 * @param ctx the parse tree
	 */
	void exitAssosiative_dimension(SystemVerilogParser.Assosiative_dimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#variable_dimension}.
	 * @param ctx the parse tree
	 */
	void enterVariable_dimension(SystemVerilogParser.Variable_dimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#variable_dimension}.
	 * @param ctx the parse tree
	 */
	void exitVariable_dimension(SystemVerilogParser.Variable_dimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#queue_dimension}.
	 * @param ctx the parse tree
	 */
	void enterQueue_dimension(SystemVerilogParser.Queue_dimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#queue_dimension}.
	 * @param ctx the parse tree
	 */
	void exitQueue_dimension(SystemVerilogParser.Queue_dimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#unsized_dimension}.
	 * @param ctx the parse tree
	 */
	void enterUnsized_dimension(SystemVerilogParser.Unsized_dimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#unsized_dimension}.
	 * @param ctx the parse tree
	 */
	void exitUnsized_dimension(SystemVerilogParser.Unsized_dimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#function_data_type_or_implicit}.
	 * @param ctx the parse tree
	 */
	void enterFunction_data_type_or_implicit(SystemVerilogParser.Function_data_type_or_implicitContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#function_data_type_or_implicit}.
	 * @param ctx the parse tree
	 */
	void exitFunction_data_type_or_implicit(SystemVerilogParser.Function_data_type_or_implicitContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#function_declaration}.
	 * @param ctx the parse tree
	 */
	void enterFunction_declaration(SystemVerilogParser.Function_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#function_declaration}.
	 * @param ctx the parse tree
	 */
	void exitFunction_declaration(SystemVerilogParser.Function_declarationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code function_body_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#function_body_declaration}.
	 * @param ctx the parse tree
	 */
	void enterFunction_body_declaration_0(SystemVerilogParser.Function_body_declaration_0Context ctx);
	/**
	 * Exit a parse tree produced by the {@code function_body_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#function_body_declaration}.
	 * @param ctx the parse tree
	 */
	void exitFunction_body_declaration_0(SystemVerilogParser.Function_body_declaration_0Context ctx);
	/**
	 * Enter a parse tree produced by the {@code function_body_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#function_body_declaration}.
	 * @param ctx the parse tree
	 */
	void enterFunction_body_declaration_1(SystemVerilogParser.Function_body_declaration_1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code function_body_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#function_body_declaration}.
	 * @param ctx the parse tree
	 */
	void exitFunction_body_declaration_1(SystemVerilogParser.Function_body_declaration_1Context ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#function_prototype}.
	 * @param ctx the parse tree
	 */
	void enterFunction_prototype(SystemVerilogParser.Function_prototypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#function_prototype}.
	 * @param ctx the parse tree
	 */
	void exitFunction_prototype(SystemVerilogParser.Function_prototypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#task_declaration}.
	 * @param ctx the parse tree
	 */
	void enterTask_declaration(SystemVerilogParser.Task_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#task_declaration}.
	 * @param ctx the parse tree
	 */
	void exitTask_declaration(SystemVerilogParser.Task_declarationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code task_body_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#task_body_declaration}.
	 * @param ctx the parse tree
	 */
	void enterTask_body_declaration_0(SystemVerilogParser.Task_body_declaration_0Context ctx);
	/**
	 * Exit a parse tree produced by the {@code task_body_declaration_0}
	 * labeled alternative in {@link SystemVerilogParser#task_body_declaration}.
	 * @param ctx the parse tree
	 */
	void exitTask_body_declaration_0(SystemVerilogParser.Task_body_declaration_0Context ctx);
	/**
	 * Enter a parse tree produced by the {@code task_body_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#task_body_declaration}.
	 * @param ctx the parse tree
	 */
	void enterTask_body_declaration_1(SystemVerilogParser.Task_body_declaration_1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code task_body_declaration_1}
	 * labeled alternative in {@link SystemVerilogParser#task_body_declaration}.
	 * @param ctx the parse tree
	 */
	void exitTask_body_declaration_1(SystemVerilogParser.Task_body_declaration_1Context ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#tf_item_declaration}.
	 * @param ctx the parse tree
	 */
	void enterTf_item_declaration(SystemVerilogParser.Tf_item_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#tf_item_declaration}.
	 * @param ctx the parse tree
	 */
	void exitTf_item_declaration(SystemVerilogParser.Tf_item_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#tf_port_list}.
	 * @param ctx the parse tree
	 */
	void enterTf_port_list(SystemVerilogParser.Tf_port_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#tf_port_list}.
	 * @param ctx the parse tree
	 */
	void exitTf_port_list(SystemVerilogParser.Tf_port_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#tf_port_item}.
	 * @param ctx the parse tree
	 */
	void enterTf_port_item(SystemVerilogParser.Tf_port_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#tf_port_item}.
	 * @param ctx the parse tree
	 */
	void exitTf_port_item(SystemVerilogParser.Tf_port_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#tf_port_direction}.
	 * @param ctx the parse tree
	 */
	void enterTf_port_direction(SystemVerilogParser.Tf_port_directionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#tf_port_direction}.
	 * @param ctx the parse tree
	 */
	void exitTf_port_direction(SystemVerilogParser.Tf_port_directionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#tf_port_declaration}.
	 * @param ctx the parse tree
	 */
	void enterTf_port_declaration(SystemVerilogParser.Tf_port_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#tf_port_declaration}.
	 * @param ctx the parse tree
	 */
	void exitTf_port_declaration(SystemVerilogParser.Tf_port_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#task_prototype}.
	 * @param ctx the parse tree
	 */
	void enterTask_prototype(SystemVerilogParser.Task_prototypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#task_prototype}.
	 * @param ctx the parse tree
	 */
	void exitTask_prototype(SystemVerilogParser.Task_prototypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#block_item_declaration}.
	 * @param ctx the parse tree
	 */
	void enterBlock_item_declaration(SystemVerilogParser.Block_item_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#block_item_declaration}.
	 * @param ctx the parse tree
	 */
	void exitBlock_item_declaration(SystemVerilogParser.Block_item_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#modport_declaration}.
	 * @param ctx the parse tree
	 */
	void enterModport_declaration(SystemVerilogParser.Modport_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#modport_declaration}.
	 * @param ctx the parse tree
	 */
	void exitModport_declaration(SystemVerilogParser.Modport_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#modport_item}.
	 * @param ctx the parse tree
	 */
	void enterModport_item(SystemVerilogParser.Modport_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#modport_item}.
	 * @param ctx the parse tree
	 */
	void exitModport_item(SystemVerilogParser.Modport_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#modport_ports_declaration}.
	 * @param ctx the parse tree
	 */
	void enterModport_ports_declaration(SystemVerilogParser.Modport_ports_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#modport_ports_declaration}.
	 * @param ctx the parse tree
	 */
	void exitModport_ports_declaration(SystemVerilogParser.Modport_ports_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#modport_clocking_declaration}.
	 * @param ctx the parse tree
	 */
	void enterModport_clocking_declaration(SystemVerilogParser.Modport_clocking_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#modport_clocking_declaration}.
	 * @param ctx the parse tree
	 */
	void exitModport_clocking_declaration(SystemVerilogParser.Modport_clocking_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#modport_simple_ports_declaration}.
	 * @param ctx the parse tree
	 */
	void enterModport_simple_ports_declaration(SystemVerilogParser.Modport_simple_ports_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#modport_simple_ports_declaration}.
	 * @param ctx the parse tree
	 */
	void exitModport_simple_ports_declaration(SystemVerilogParser.Modport_simple_ports_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#modport_simple_port}.
	 * @param ctx the parse tree
	 */
	void enterModport_simple_port(SystemVerilogParser.Modport_simple_portContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#modport_simple_port}.
	 * @param ctx the parse tree
	 */
	void exitModport_simple_port(SystemVerilogParser.Modport_simple_portContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#modport_tf_ports_declaration}.
	 * @param ctx the parse tree
	 */
	void enterModport_tf_ports_declaration(SystemVerilogParser.Modport_tf_ports_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#modport_tf_ports_declaration}.
	 * @param ctx the parse tree
	 */
	void exitModport_tf_ports_declaration(SystemVerilogParser.Modport_tf_ports_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#modport_tf_port}.
	 * @param ctx the parse tree
	 */
	void enterModport_tf_port(SystemVerilogParser.Modport_tf_portContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#modport_tf_port}.
	 * @param ctx the parse tree
	 */
	void exitModport_tf_port(SystemVerilogParser.Modport_tf_portContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#import_export}.
	 * @param ctx the parse tree
	 */
	void enterImport_export(SystemVerilogParser.Import_exportContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#import_export}.
	 * @param ctx the parse tree
	 */
	void exitImport_export(SystemVerilogParser.Import_exportContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#concurrent_assertion_item}.
	 * @param ctx the parse tree
	 */
	void enterConcurrent_assertion_item(SystemVerilogParser.Concurrent_assertion_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#concurrent_assertion_item}.
	 * @param ctx the parse tree
	 */
	void exitConcurrent_assertion_item(SystemVerilogParser.Concurrent_assertion_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#concurrent_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void enterConcurrent_assertion_statement(SystemVerilogParser.Concurrent_assertion_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#concurrent_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void exitConcurrent_assertion_statement(SystemVerilogParser.Concurrent_assertion_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#expression_or_dist}.
	 * @param ctx the parse tree
	 */
	void enterExpression_or_dist(SystemVerilogParser.Expression_or_distContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#expression_or_dist}.
	 * @param ctx the parse tree
	 */
	void exitExpression_or_dist(SystemVerilogParser.Expression_or_distContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#module_instantiation}.
	 * @param ctx the parse tree
	 */
	void enterModule_instantiation(SystemVerilogParser.Module_instantiationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#module_instantiation}.
	 * @param ctx the parse tree
	 */
	void exitModule_instantiation(SystemVerilogParser.Module_instantiationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#parameter_value_assignment}.
	 * @param ctx the parse tree
	 */
	void enterParameter_value_assignment(SystemVerilogParser.Parameter_value_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#parameter_value_assignment}.
	 * @param ctx the parse tree
	 */
	void exitParameter_value_assignment(SystemVerilogParser.Parameter_value_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#parameter_assign_comma}.
	 * @param ctx the parse tree
	 */
	void enterParameter_assign_comma(SystemVerilogParser.Parameter_assign_commaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#parameter_assign_comma}.
	 * @param ctx the parse tree
	 */
	void exitParameter_assign_comma(SystemVerilogParser.Parameter_assign_commaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_parameter_assignments}.
	 * @param ctx the parse tree
	 */
	void enterList_of_parameter_assignments(SystemVerilogParser.List_of_parameter_assignmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_parameter_assignments}.
	 * @param ctx the parse tree
	 */
	void exitList_of_parameter_assignments(SystemVerilogParser.List_of_parameter_assignmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#ordered_parameter_assignment}.
	 * @param ctx the parse tree
	 */
	void enterOrdered_parameter_assignment(SystemVerilogParser.Ordered_parameter_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#ordered_parameter_assignment}.
	 * @param ctx the parse tree
	 */
	void exitOrdered_parameter_assignment(SystemVerilogParser.Ordered_parameter_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#named_parameter_assignment}.
	 * @param ctx the parse tree
	 */
	void enterNamed_parameter_assignment(SystemVerilogParser.Named_parameter_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#named_parameter_assignment}.
	 * @param ctx the parse tree
	 */
	void exitNamed_parameter_assignment(SystemVerilogParser.Named_parameter_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#hierarchical_instance}.
	 * @param ctx the parse tree
	 */
	void enterHierarchical_instance(SystemVerilogParser.Hierarchical_instanceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#hierarchical_instance}.
	 * @param ctx the parse tree
	 */
	void exitHierarchical_instance(SystemVerilogParser.Hierarchical_instanceContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#name_of_instance}.
	 * @param ctx the parse tree
	 */
	void enterName_of_instance(SystemVerilogParser.Name_of_instanceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#name_of_instance}.
	 * @param ctx the parse tree
	 */
	void exitName_of_instance(SystemVerilogParser.Name_of_instanceContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#port_conn_comma}.
	 * @param ctx the parse tree
	 */
	void enterPort_conn_comma(SystemVerilogParser.Port_conn_commaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#port_conn_comma}.
	 * @param ctx the parse tree
	 */
	void exitPort_conn_comma(SystemVerilogParser.Port_conn_commaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_port_connections}.
	 * @param ctx the parse tree
	 */
	void enterList_of_port_connections(SystemVerilogParser.List_of_port_connectionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_port_connections}.
	 * @param ctx the parse tree
	 */
	void exitList_of_port_connections(SystemVerilogParser.List_of_port_connectionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#ordered_port_connection}.
	 * @param ctx the parse tree
	 */
	void enterOrdered_port_connection(SystemVerilogParser.Ordered_port_connectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#ordered_port_connection}.
	 * @param ctx the parse tree
	 */
	void exitOrdered_port_connection(SystemVerilogParser.Ordered_port_connectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#named_port_connection}.
	 * @param ctx the parse tree
	 */
	void enterNamed_port_connection(SystemVerilogParser.Named_port_connectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#named_port_connection}.
	 * @param ctx the parse tree
	 */
	void exitNamed_port_connection(SystemVerilogParser.Named_port_connectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#checker_instantiation}.
	 * @param ctx the parse tree
	 */
	void enterChecker_instantiation(SystemVerilogParser.Checker_instantiationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#checker_instantiation}.
	 * @param ctx the parse tree
	 */
	void exitChecker_instantiation(SystemVerilogParser.Checker_instantiationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_checker_port_connections}.
	 * @param ctx the parse tree
	 */
	void enterList_of_checker_port_connections(SystemVerilogParser.List_of_checker_port_connectionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_checker_port_connections}.
	 * @param ctx the parse tree
	 */
	void exitList_of_checker_port_connections(SystemVerilogParser.List_of_checker_port_connectionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#generate_region}.
	 * @param ctx the parse tree
	 */
	void enterGenerate_region(SystemVerilogParser.Generate_regionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#generate_region}.
	 * @param ctx the parse tree
	 */
	void exitGenerate_region(SystemVerilogParser.Generate_regionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#loop_generate_construct}.
	 * @param ctx the parse tree
	 */
	void enterLoop_generate_construct(SystemVerilogParser.Loop_generate_constructContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#loop_generate_construct}.
	 * @param ctx the parse tree
	 */
	void exitLoop_generate_construct(SystemVerilogParser.Loop_generate_constructContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#genvar_initialization}.
	 * @param ctx the parse tree
	 */
	void enterGenvar_initialization(SystemVerilogParser.Genvar_initializationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#genvar_initialization}.
	 * @param ctx the parse tree
	 */
	void exitGenvar_initialization(SystemVerilogParser.Genvar_initializationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#genvar_iteration}.
	 * @param ctx the parse tree
	 */
	void enterGenvar_iteration(SystemVerilogParser.Genvar_iterationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#genvar_iteration}.
	 * @param ctx the parse tree
	 */
	void exitGenvar_iteration(SystemVerilogParser.Genvar_iterationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#conditional_generate_construct}.
	 * @param ctx the parse tree
	 */
	void enterConditional_generate_construct(SystemVerilogParser.Conditional_generate_constructContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#conditional_generate_construct}.
	 * @param ctx the parse tree
	 */
	void exitConditional_generate_construct(SystemVerilogParser.Conditional_generate_constructContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#if_generate_construct}.
	 * @param ctx the parse tree
	 */
	void enterIf_generate_construct(SystemVerilogParser.If_generate_constructContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#if_generate_construct}.
	 * @param ctx the parse tree
	 */
	void exitIf_generate_construct(SystemVerilogParser.If_generate_constructContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#case_generate_construct}.
	 * @param ctx the parse tree
	 */
	void enterCase_generate_construct(SystemVerilogParser.Case_generate_constructContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#case_generate_construct}.
	 * @param ctx the parse tree
	 */
	void exitCase_generate_construct(SystemVerilogParser.Case_generate_constructContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#case_generate_item}.
	 * @param ctx the parse tree
	 */
	void enterCase_generate_item(SystemVerilogParser.Case_generate_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#case_generate_item}.
	 * @param ctx the parse tree
	 */
	void exitCase_generate_item(SystemVerilogParser.Case_generate_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#generate_block}.
	 * @param ctx the parse tree
	 */
	void enterGenerate_block(SystemVerilogParser.Generate_blockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#generate_block}.
	 * @param ctx the parse tree
	 */
	void exitGenerate_block(SystemVerilogParser.Generate_blockContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#generate_item}.
	 * @param ctx the parse tree
	 */
	void enterGenerate_item(SystemVerilogParser.Generate_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#generate_item}.
	 * @param ctx the parse tree
	 */
	void exitGenerate_item(SystemVerilogParser.Generate_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#continuous_assign}.
	 * @param ctx the parse tree
	 */
	void enterContinuous_assign(SystemVerilogParser.Continuous_assignContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#continuous_assign}.
	 * @param ctx the parse tree
	 */
	void exitContinuous_assign(SystemVerilogParser.Continuous_assignContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_net_assignments}.
	 * @param ctx the parse tree
	 */
	void enterList_of_net_assignments(SystemVerilogParser.List_of_net_assignmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_net_assignments}.
	 * @param ctx the parse tree
	 */
	void exitList_of_net_assignments(SystemVerilogParser.List_of_net_assignmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_variable_assignments}.
	 * @param ctx the parse tree
	 */
	void enterList_of_variable_assignments(SystemVerilogParser.List_of_variable_assignmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_variable_assignments}.
	 * @param ctx the parse tree
	 */
	void exitList_of_variable_assignments(SystemVerilogParser.List_of_variable_assignmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#net_alias}.
	 * @param ctx the parse tree
	 */
	void enterNet_alias(SystemVerilogParser.Net_aliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#net_alias}.
	 * @param ctx the parse tree
	 */
	void exitNet_alias(SystemVerilogParser.Net_aliasContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#net_assignment}.
	 * @param ctx the parse tree
	 */
	void enterNet_assignment(SystemVerilogParser.Net_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#net_assignment}.
	 * @param ctx the parse tree
	 */
	void exitNet_assignment(SystemVerilogParser.Net_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#initial_construct}.
	 * @param ctx the parse tree
	 */
	void enterInitial_construct(SystemVerilogParser.Initial_constructContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#initial_construct}.
	 * @param ctx the parse tree
	 */
	void exitInitial_construct(SystemVerilogParser.Initial_constructContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#always_construct}.
	 * @param ctx the parse tree
	 */
	void enterAlways_construct(SystemVerilogParser.Always_constructContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#always_construct}.
	 * @param ctx the parse tree
	 */
	void exitAlways_construct(SystemVerilogParser.Always_constructContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#final_construct}.
	 * @param ctx the parse tree
	 */
	void enterFinal_construct(SystemVerilogParser.Final_constructContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#final_construct}.
	 * @param ctx the parse tree
	 */
	void exitFinal_construct(SystemVerilogParser.Final_constructContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#blocking_assignment}.
	 * @param ctx the parse tree
	 */
	void enterBlocking_assignment(SystemVerilogParser.Blocking_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#blocking_assignment}.
	 * @param ctx the parse tree
	 */
	void exitBlocking_assignment(SystemVerilogParser.Blocking_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#operator_assignment}.
	 * @param ctx the parse tree
	 */
	void enterOperator_assignment(SystemVerilogParser.Operator_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#operator_assignment}.
	 * @param ctx the parse tree
	 */
	void exitOperator_assignment(SystemVerilogParser.Operator_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#assignment_operator}.
	 * @param ctx the parse tree
	 */
	void enterAssignment_operator(SystemVerilogParser.Assignment_operatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#assignment_operator}.
	 * @param ctx the parse tree
	 */
	void exitAssignment_operator(SystemVerilogParser.Assignment_operatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#nonblocking_assignment}.
	 * @param ctx the parse tree
	 */
	void enterNonblocking_assignment(SystemVerilogParser.Nonblocking_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#nonblocking_assignment}.
	 * @param ctx the parse tree
	 */
	void exitNonblocking_assignment(SystemVerilogParser.Nonblocking_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#procedural_continuous_assignment}.
	 * @param ctx the parse tree
	 */
	void enterProcedural_continuous_assignment(SystemVerilogParser.Procedural_continuous_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#procedural_continuous_assignment}.
	 * @param ctx the parse tree
	 */
	void exitProcedural_continuous_assignment(SystemVerilogParser.Procedural_continuous_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#variable_assignment}.
	 * @param ctx the parse tree
	 */
	void enterVariable_assignment(SystemVerilogParser.Variable_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#variable_assignment}.
	 * @param ctx the parse tree
	 */
	void exitVariable_assignment(SystemVerilogParser.Variable_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#action_block}.
	 * @param ctx the parse tree
	 */
	void enterAction_block(SystemVerilogParser.Action_blockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#action_block}.
	 * @param ctx the parse tree
	 */
	void exitAction_block(SystemVerilogParser.Action_blockContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#seq_block}.
	 * @param ctx the parse tree
	 */
	void enterSeq_block(SystemVerilogParser.Seq_blockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#seq_block}.
	 * @param ctx the parse tree
	 */
	void exitSeq_block(SystemVerilogParser.Seq_blockContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#statement_or_null}.
	 * @param ctx the parse tree
	 */
	void enterStatement_or_null(SystemVerilogParser.Statement_or_nullContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#statement_or_null}.
	 * @param ctx the parse tree
	 */
	void exitStatement_or_null(SystemVerilogParser.Statement_or_nullContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(SystemVerilogParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(SystemVerilogParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#statement_item}.
	 * @param ctx the parse tree
	 */
	void enterStatement_item(SystemVerilogParser.Statement_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#statement_item}.
	 * @param ctx the parse tree
	 */
	void exitStatement_item(SystemVerilogParser.Statement_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#function_statement}.
	 * @param ctx the parse tree
	 */
	void enterFunction_statement(SystemVerilogParser.Function_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#function_statement}.
	 * @param ctx the parse tree
	 */
	void exitFunction_statement(SystemVerilogParser.Function_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#function_statement_or_null}.
	 * @param ctx the parse tree
	 */
	void enterFunction_statement_or_null(SystemVerilogParser.Function_statement_or_nullContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#function_statement_or_null}.
	 * @param ctx the parse tree
	 */
	void exitFunction_statement_or_null(SystemVerilogParser.Function_statement_or_nullContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#variable_identifier_list}.
	 * @param ctx the parse tree
	 */
	void enterVariable_identifier_list(SystemVerilogParser.Variable_identifier_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#variable_identifier_list}.
	 * @param ctx the parse tree
	 */
	void exitVariable_identifier_list(SystemVerilogParser.Variable_identifier_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#procedural_timing_control_statement}.
	 * @param ctx the parse tree
	 */
	void enterProcedural_timing_control_statement(SystemVerilogParser.Procedural_timing_control_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#procedural_timing_control_statement}.
	 * @param ctx the parse tree
	 */
	void exitProcedural_timing_control_statement(SystemVerilogParser.Procedural_timing_control_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#delay_or_event_control}.
	 * @param ctx the parse tree
	 */
	void enterDelay_or_event_control(SystemVerilogParser.Delay_or_event_controlContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#delay_or_event_control}.
	 * @param ctx the parse tree
	 */
	void exitDelay_or_event_control(SystemVerilogParser.Delay_or_event_controlContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#delay_control}.
	 * @param ctx the parse tree
	 */
	void enterDelay_control(SystemVerilogParser.Delay_controlContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#delay_control}.
	 * @param ctx the parse tree
	 */
	void exitDelay_control(SystemVerilogParser.Delay_controlContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#event_control}.
	 * @param ctx the parse tree
	 */
	void enterEvent_control(SystemVerilogParser.Event_controlContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#event_control}.
	 * @param ctx the parse tree
	 */
	void exitEvent_control(SystemVerilogParser.Event_controlContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#event_expression}.
	 * @param ctx the parse tree
	 */
	void enterEvent_expression(SystemVerilogParser.Event_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#event_expression}.
	 * @param ctx the parse tree
	 */
	void exitEvent_expression(SystemVerilogParser.Event_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#procedural_timing_control}.
	 * @param ctx the parse tree
	 */
	void enterProcedural_timing_control(SystemVerilogParser.Procedural_timing_controlContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#procedural_timing_control}.
	 * @param ctx the parse tree
	 */
	void exitProcedural_timing_control(SystemVerilogParser.Procedural_timing_controlContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#jump_statement}.
	 * @param ctx the parse tree
	 */
	void enterJump_statement(SystemVerilogParser.Jump_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#jump_statement}.
	 * @param ctx the parse tree
	 */
	void exitJump_statement(SystemVerilogParser.Jump_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#wait_statement}.
	 * @param ctx the parse tree
	 */
	void enterWait_statement(SystemVerilogParser.Wait_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#wait_statement}.
	 * @param ctx the parse tree
	 */
	void exitWait_statement(SystemVerilogParser.Wait_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#event_trigger}.
	 * @param ctx the parse tree
	 */
	void enterEvent_trigger(SystemVerilogParser.Event_triggerContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#event_trigger}.
	 * @param ctx the parse tree
	 */
	void exitEvent_trigger(SystemVerilogParser.Event_triggerContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#disable_statement}.
	 * @param ctx the parse tree
	 */
	void enterDisable_statement(SystemVerilogParser.Disable_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#disable_statement}.
	 * @param ctx the parse tree
	 */
	void exitDisable_statement(SystemVerilogParser.Disable_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#conditional_statement}.
	 * @param ctx the parse tree
	 */
	void enterConditional_statement(SystemVerilogParser.Conditional_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#conditional_statement}.
	 * @param ctx the parse tree
	 */
	void exitConditional_statement(SystemVerilogParser.Conditional_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#unique_priority}.
	 * @param ctx the parse tree
	 */
	void enterUnique_priority(SystemVerilogParser.Unique_priorityContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#unique_priority}.
	 * @param ctx the parse tree
	 */
	void exitUnique_priority(SystemVerilogParser.Unique_priorityContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#cond_predicate}.
	 * @param ctx the parse tree
	 */
	void enterCond_predicate(SystemVerilogParser.Cond_predicateContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#cond_predicate}.
	 * @param ctx the parse tree
	 */
	void exitCond_predicate(SystemVerilogParser.Cond_predicateContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#expression_or_cond_pattern}.
	 * @param ctx the parse tree
	 */
	void enterExpression_or_cond_pattern(SystemVerilogParser.Expression_or_cond_patternContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#expression_or_cond_pattern}.
	 * @param ctx the parse tree
	 */
	void exitExpression_or_cond_pattern(SystemVerilogParser.Expression_or_cond_patternContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#cond_pattern}.
	 * @param ctx the parse tree
	 */
	void enterCond_pattern(SystemVerilogParser.Cond_patternContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#cond_pattern}.
	 * @param ctx the parse tree
	 */
	void exitCond_pattern(SystemVerilogParser.Cond_patternContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#case_statement}.
	 * @param ctx the parse tree
	 */
	void enterCase_statement(SystemVerilogParser.Case_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#case_statement}.
	 * @param ctx the parse tree
	 */
	void exitCase_statement(SystemVerilogParser.Case_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#case_expression}.
	 * @param ctx the parse tree
	 */
	void enterCase_expression(SystemVerilogParser.Case_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#case_expression}.
	 * @param ctx the parse tree
	 */
	void exitCase_expression(SystemVerilogParser.Case_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#case_item}.
	 * @param ctx the parse tree
	 */
	void enterCase_item(SystemVerilogParser.Case_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#case_item}.
	 * @param ctx the parse tree
	 */
	void exitCase_item(SystemVerilogParser.Case_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#case_inside_item}.
	 * @param ctx the parse tree
	 */
	void enterCase_inside_item(SystemVerilogParser.Case_inside_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#case_inside_item}.
	 * @param ctx the parse tree
	 */
	void exitCase_inside_item(SystemVerilogParser.Case_inside_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#case_item_expression}.
	 * @param ctx the parse tree
	 */
	void enterCase_item_expression(SystemVerilogParser.Case_item_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#case_item_expression}.
	 * @param ctx the parse tree
	 */
	void exitCase_item_expression(SystemVerilogParser.Case_item_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#open_range_list}.
	 * @param ctx the parse tree
	 */
	void enterOpen_range_list(SystemVerilogParser.Open_range_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#open_range_list}.
	 * @param ctx the parse tree
	 */
	void exitOpen_range_list(SystemVerilogParser.Open_range_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#open_value_range}.
	 * @param ctx the parse tree
	 */
	void enterOpen_value_range(SystemVerilogParser.Open_value_rangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#open_value_range}.
	 * @param ctx the parse tree
	 */
	void exitOpen_value_range(SystemVerilogParser.Open_value_rangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pattern}.
	 * @param ctx the parse tree
	 */
	void enterPattern(SystemVerilogParser.PatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pattern}.
	 * @param ctx the parse tree
	 */
	void exitPattern(SystemVerilogParser.PatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#loop_statement}.
	 * @param ctx the parse tree
	 */
	void enterLoop_statement(SystemVerilogParser.Loop_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#loop_statement}.
	 * @param ctx the parse tree
	 */
	void exitLoop_statement(SystemVerilogParser.Loop_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#for_initialization}.
	 * @param ctx the parse tree
	 */
	void enterFor_initialization(SystemVerilogParser.For_initializationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#for_initialization}.
	 * @param ctx the parse tree
	 */
	void exitFor_initialization(SystemVerilogParser.For_initializationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#for_variable_declaration}.
	 * @param ctx the parse tree
	 */
	void enterFor_variable_declaration(SystemVerilogParser.For_variable_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#for_variable_declaration}.
	 * @param ctx the parse tree
	 */
	void exitFor_variable_declaration(SystemVerilogParser.For_variable_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#for_step}.
	 * @param ctx the parse tree
	 */
	void enterFor_step(SystemVerilogParser.For_stepContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#for_step}.
	 * @param ctx the parse tree
	 */
	void exitFor_step(SystemVerilogParser.For_stepContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#for_step_assignment}.
	 * @param ctx the parse tree
	 */
	void enterFor_step_assignment(SystemVerilogParser.For_step_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#for_step_assignment}.
	 * @param ctx the parse tree
	 */
	void exitFor_step_assignment(SystemVerilogParser.For_step_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#loop_variables}.
	 * @param ctx the parse tree
	 */
	void enterLoop_variables(SystemVerilogParser.Loop_variablesContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#loop_variables}.
	 * @param ctx the parse tree
	 */
	void exitLoop_variables(SystemVerilogParser.Loop_variablesContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#subroutine_call_statement}.
	 * @param ctx the parse tree
	 */
	void enterSubroutine_call_statement(SystemVerilogParser.Subroutine_call_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#subroutine_call_statement}.
	 * @param ctx the parse tree
	 */
	void exitSubroutine_call_statement(SystemVerilogParser.Subroutine_call_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#assertion_item}.
	 * @param ctx the parse tree
	 */
	void enterAssertion_item(SystemVerilogParser.Assertion_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#assertion_item}.
	 * @param ctx the parse tree
	 */
	void exitAssertion_item(SystemVerilogParser.Assertion_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#deferred_immediate_assertion_item}.
	 * @param ctx the parse tree
	 */
	void enterDeferred_immediate_assertion_item(SystemVerilogParser.Deferred_immediate_assertion_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#deferred_immediate_assertion_item}.
	 * @param ctx the parse tree
	 */
	void exitDeferred_immediate_assertion_item(SystemVerilogParser.Deferred_immediate_assertion_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#procedural_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void enterProcedural_assertion_statement(SystemVerilogParser.Procedural_assertion_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#procedural_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void exitProcedural_assertion_statement(SystemVerilogParser.Procedural_assertion_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#immediate_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void enterImmediate_assertion_statement(SystemVerilogParser.Immediate_assertion_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#immediate_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void exitImmediate_assertion_statement(SystemVerilogParser.Immediate_assertion_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#simple_immediate_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void enterSimple_immediate_assertion_statement(SystemVerilogParser.Simple_immediate_assertion_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#simple_immediate_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void exitSimple_immediate_assertion_statement(SystemVerilogParser.Simple_immediate_assertion_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#simple_immediate_assert_statement}.
	 * @param ctx the parse tree
	 */
	void enterSimple_immediate_assert_statement(SystemVerilogParser.Simple_immediate_assert_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#simple_immediate_assert_statement}.
	 * @param ctx the parse tree
	 */
	void exitSimple_immediate_assert_statement(SystemVerilogParser.Simple_immediate_assert_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#simple_immediate_assume_statement}.
	 * @param ctx the parse tree
	 */
	void enterSimple_immediate_assume_statement(SystemVerilogParser.Simple_immediate_assume_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#simple_immediate_assume_statement}.
	 * @param ctx the parse tree
	 */
	void exitSimple_immediate_assume_statement(SystemVerilogParser.Simple_immediate_assume_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#simple_immediate_cover_statement}.
	 * @param ctx the parse tree
	 */
	void enterSimple_immediate_cover_statement(SystemVerilogParser.Simple_immediate_cover_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#simple_immediate_cover_statement}.
	 * @param ctx the parse tree
	 */
	void exitSimple_immediate_cover_statement(SystemVerilogParser.Simple_immediate_cover_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#deferred_immediate_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void enterDeferred_immediate_assertion_statement(SystemVerilogParser.Deferred_immediate_assertion_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#deferred_immediate_assertion_statement}.
	 * @param ctx the parse tree
	 */
	void exitDeferred_immediate_assertion_statement(SystemVerilogParser.Deferred_immediate_assertion_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#deferred_immediate_assert_statement}.
	 * @param ctx the parse tree
	 */
	void enterDeferred_immediate_assert_statement(SystemVerilogParser.Deferred_immediate_assert_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#deferred_immediate_assert_statement}.
	 * @param ctx the parse tree
	 */
	void exitDeferred_immediate_assert_statement(SystemVerilogParser.Deferred_immediate_assert_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#deferred_immediate_assume_statement}.
	 * @param ctx the parse tree
	 */
	void enterDeferred_immediate_assume_statement(SystemVerilogParser.Deferred_immediate_assume_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#deferred_immediate_assume_statement}.
	 * @param ctx the parse tree
	 */
	void exitDeferred_immediate_assume_statement(SystemVerilogParser.Deferred_immediate_assume_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#deferred_immediate_cover_statement}.
	 * @param ctx the parse tree
	 */
	void enterDeferred_immediate_cover_statement(SystemVerilogParser.Deferred_immediate_cover_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#deferred_immediate_cover_statement}.
	 * @param ctx the parse tree
	 */
	void exitDeferred_immediate_cover_statement(SystemVerilogParser.Deferred_immediate_cover_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#cycle_delay}.
	 * @param ctx the parse tree
	 */
	void enterCycle_delay(SystemVerilogParser.Cycle_delayContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#cycle_delay}.
	 * @param ctx the parse tree
	 */
	void exitCycle_delay(SystemVerilogParser.Cycle_delayContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#edge_ident}.
	 * @param ctx the parse tree
	 */
	void enterEdge_ident(SystemVerilogParser.Edge_identContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#edge_ident}.
	 * @param ctx the parse tree
	 */
	void exitEdge_ident(SystemVerilogParser.Edge_identContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#concatenation}.
	 * @param ctx the parse tree
	 */
	void enterConcatenation(SystemVerilogParser.ConcatenationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#concatenation}.
	 * @param ctx the parse tree
	 */
	void exitConcatenation(SystemVerilogParser.ConcatenationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_concatenation}.
	 * @param ctx the parse tree
	 */
	void enterConstant_concatenation(SystemVerilogParser.Constant_concatenationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_concatenation}.
	 * @param ctx the parse tree
	 */
	void exitConstant_concatenation(SystemVerilogParser.Constant_concatenationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_multiple_concatenation}.
	 * @param ctx the parse tree
	 */
	void enterConstant_multiple_concatenation(SystemVerilogParser.Constant_multiple_concatenationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_multiple_concatenation}.
	 * @param ctx the parse tree
	 */
	void exitConstant_multiple_concatenation(SystemVerilogParser.Constant_multiple_concatenationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#multiple_concatenation}.
	 * @param ctx the parse tree
	 */
	void enterMultiple_concatenation(SystemVerilogParser.Multiple_concatenationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#multiple_concatenation}.
	 * @param ctx the parse tree
	 */
	void exitMultiple_concatenation(SystemVerilogParser.Multiple_concatenationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#array_range_expression}.
	 * @param ctx the parse tree
	 */
	void enterArray_range_expression(SystemVerilogParser.Array_range_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#array_range_expression}.
	 * @param ctx the parse tree
	 */
	void exitArray_range_expression(SystemVerilogParser.Array_range_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#empty_queue}.
	 * @param ctx the parse tree
	 */
	void enterEmpty_queue(SystemVerilogParser.Empty_queueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#empty_queue}.
	 * @param ctx the parse tree
	 */
	void exitEmpty_queue(SystemVerilogParser.Empty_queueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_function_call}.
	 * @param ctx the parse tree
	 */
	void enterConstant_function_call(SystemVerilogParser.Constant_function_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_function_call}.
	 * @param ctx the parse tree
	 */
	void exitConstant_function_call(SystemVerilogParser.Constant_function_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#tf_call}.
	 * @param ctx the parse tree
	 */
	void enterTf_call(SystemVerilogParser.Tf_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#tf_call}.
	 * @param ctx the parse tree
	 */
	void exitTf_call(SystemVerilogParser.Tf_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#system_tf_call}.
	 * @param ctx the parse tree
	 */
	void enterSystem_tf_call(SystemVerilogParser.System_tf_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#system_tf_call}.
	 * @param ctx the parse tree
	 */
	void exitSystem_tf_call(SystemVerilogParser.System_tf_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#subroutine_call}.
	 * @param ctx the parse tree
	 */
	void enterSubroutine_call(SystemVerilogParser.Subroutine_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#subroutine_call}.
	 * @param ctx the parse tree
	 */
	void exitSubroutine_call(SystemVerilogParser.Subroutine_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#function_subroutine_call}.
	 * @param ctx the parse tree
	 */
	void enterFunction_subroutine_call(SystemVerilogParser.Function_subroutine_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#function_subroutine_call}.
	 * @param ctx the parse tree
	 */
	void exitFunction_subroutine_call(SystemVerilogParser.Function_subroutine_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#arg_comma}.
	 * @param ctx the parse tree
	 */
	void enterArg_comma(SystemVerilogParser.Arg_commaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#arg_comma}.
	 * @param ctx the parse tree
	 */
	void exitArg_comma(SystemVerilogParser.Arg_commaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#list_of_arguments}.
	 * @param ctx the parse tree
	 */
	void enterList_of_arguments(SystemVerilogParser.List_of_argumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#list_of_arguments}.
	 * @param ctx the parse tree
	 */
	void exitList_of_arguments(SystemVerilogParser.List_of_argumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#method_call}.
	 * @param ctx the parse tree
	 */
	void enterMethod_call(SystemVerilogParser.Method_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#method_call}.
	 * @param ctx the parse tree
	 */
	void exitMethod_call(SystemVerilogParser.Method_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#method_call_root}.
	 * @param ctx the parse tree
	 */
	void enterMethod_call_root(SystemVerilogParser.Method_call_rootContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#method_call_root}.
	 * @param ctx the parse tree
	 */
	void exitMethod_call_root(SystemVerilogParser.Method_call_rootContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#method_call_body}.
	 * @param ctx the parse tree
	 */
	void enterMethod_call_body(SystemVerilogParser.Method_call_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#method_call_body}.
	 * @param ctx the parse tree
	 */
	void exitMethod_call_body(SystemVerilogParser.Method_call_bodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#built_in_method_call}.
	 * @param ctx the parse tree
	 */
	void enterBuilt_in_method_call(SystemVerilogParser.Built_in_method_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#built_in_method_call}.
	 * @param ctx the parse tree
	 */
	void exitBuilt_in_method_call(SystemVerilogParser.Built_in_method_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#array_manipulation_call}.
	 * @param ctx the parse tree
	 */
	void enterArray_manipulation_call(SystemVerilogParser.Array_manipulation_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#array_manipulation_call}.
	 * @param ctx the parse tree
	 */
	void exitArray_manipulation_call(SystemVerilogParser.Array_manipulation_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#randomize_call}.
	 * @param ctx the parse tree
	 */
	void enterRandomize_call(SystemVerilogParser.Randomize_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#randomize_call}.
	 * @param ctx the parse tree
	 */
	void exitRandomize_call(SystemVerilogParser.Randomize_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#array_method_name}.
	 * @param ctx the parse tree
	 */
	void enterArray_method_name(SystemVerilogParser.Array_method_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#array_method_name}.
	 * @param ctx the parse tree
	 */
	void exitArray_method_name(SystemVerilogParser.Array_method_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#inc_or_dec_expression}.
	 * @param ctx the parse tree
	 */
	void enterInc_or_dec_expression(SystemVerilogParser.Inc_or_dec_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#inc_or_dec_expression}.
	 * @param ctx the parse tree
	 */
	void exitInc_or_dec_expression(SystemVerilogParser.Inc_or_dec_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_expression}.
	 * @param ctx the parse tree
	 */
	void enterConstant_expression(SystemVerilogParser.Constant_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_expression}.
	 * @param ctx the parse tree
	 */
	void exitConstant_expression(SystemVerilogParser.Constant_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_mintypmax_expression}.
	 * @param ctx the parse tree
	 */
	void enterConstant_mintypmax_expression(SystemVerilogParser.Constant_mintypmax_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_mintypmax_expression}.
	 * @param ctx the parse tree
	 */
	void exitConstant_mintypmax_expression(SystemVerilogParser.Constant_mintypmax_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_param_expression}.
	 * @param ctx the parse tree
	 */
	void enterConstant_param_expression(SystemVerilogParser.Constant_param_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_param_expression}.
	 * @param ctx the parse tree
	 */
	void exitConstant_param_expression(SystemVerilogParser.Constant_param_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#param_expression}.
	 * @param ctx the parse tree
	 */
	void enterParam_expression(SystemVerilogParser.Param_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#param_expression}.
	 * @param ctx the parse tree
	 */
	void exitParam_expression(SystemVerilogParser.Param_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_range_expression}.
	 * @param ctx the parse tree
	 */
	void enterConstant_range_expression(SystemVerilogParser.Constant_range_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_range_expression}.
	 * @param ctx the parse tree
	 */
	void exitConstant_range_expression(SystemVerilogParser.Constant_range_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_part_select_range}.
	 * @param ctx the parse tree
	 */
	void enterConstant_part_select_range(SystemVerilogParser.Constant_part_select_rangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_part_select_range}.
	 * @param ctx the parse tree
	 */
	void exitConstant_part_select_range(SystemVerilogParser.Constant_part_select_rangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_range}.
	 * @param ctx the parse tree
	 */
	void enterConstant_range(SystemVerilogParser.Constant_rangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_range}.
	 * @param ctx the parse tree
	 */
	void exitConstant_range(SystemVerilogParser.Constant_rangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_indexed_range}.
	 * @param ctx the parse tree
	 */
	void enterConstant_indexed_range(SystemVerilogParser.Constant_indexed_rangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_indexed_range}.
	 * @param ctx the parse tree
	 */
	void exitConstant_indexed_range(SystemVerilogParser.Constant_indexed_rangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(SystemVerilogParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(SystemVerilogParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#tagged_union_expression}.
	 * @param ctx the parse tree
	 */
	void enterTagged_union_expression(SystemVerilogParser.Tagged_union_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#tagged_union_expression}.
	 * @param ctx the parse tree
	 */
	void exitTagged_union_expression(SystemVerilogParser.Tagged_union_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#value_range}.
	 * @param ctx the parse tree
	 */
	void enterValue_range(SystemVerilogParser.Value_rangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#value_range}.
	 * @param ctx the parse tree
	 */
	void exitValue_range(SystemVerilogParser.Value_rangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#mintypmax_expression}.
	 * @param ctx the parse tree
	 */
	void enterMintypmax_expression(SystemVerilogParser.Mintypmax_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#mintypmax_expression}.
	 * @param ctx the parse tree
	 */
	void exitMintypmax_expression(SystemVerilogParser.Mintypmax_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#part_select_range}.
	 * @param ctx the parse tree
	 */
	void enterPart_select_range(SystemVerilogParser.Part_select_rangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#part_select_range}.
	 * @param ctx the parse tree
	 */
	void exitPart_select_range(SystemVerilogParser.Part_select_rangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#indexed_range}.
	 * @param ctx the parse tree
	 */
	void enterIndexed_range(SystemVerilogParser.Indexed_rangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#indexed_range}.
	 * @param ctx the parse tree
	 */
	void exitIndexed_range(SystemVerilogParser.Indexed_rangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#genvar_expression}.
	 * @param ctx the parse tree
	 */
	void enterGenvar_expression(SystemVerilogParser.Genvar_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#genvar_expression}.
	 * @param ctx the parse tree
	 */
	void exitGenvar_expression(SystemVerilogParser.Genvar_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_primary}.
	 * @param ctx the parse tree
	 */
	void enterConstant_primary(SystemVerilogParser.Constant_primaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_primary}.
	 * @param ctx the parse tree
	 */
	void exitConstant_primary(SystemVerilogParser.Constant_primaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterPrimary(SystemVerilogParser.PrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitPrimary(SystemVerilogParser.PrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#class_qualifier}.
	 * @param ctx the parse tree
	 */
	void enterClass_qualifier(SystemVerilogParser.Class_qualifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#class_qualifier}.
	 * @param ctx the parse tree
	 */
	void exitClass_qualifier(SystemVerilogParser.Class_qualifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#range_expression}.
	 * @param ctx the parse tree
	 */
	void enterRange_expression(SystemVerilogParser.Range_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#range_expression}.
	 * @param ctx the parse tree
	 */
	void exitRange_expression(SystemVerilogParser.Range_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#primary_literal}.
	 * @param ctx the parse tree
	 */
	void enterPrimary_literal(SystemVerilogParser.Primary_literalContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#primary_literal}.
	 * @param ctx the parse tree
	 */
	void exitPrimary_literal(SystemVerilogParser.Primary_literalContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#time_literal}.
	 * @param ctx the parse tree
	 */
	void enterTime_literal(SystemVerilogParser.Time_literalContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#time_literal}.
	 * @param ctx the parse tree
	 */
	void exitTime_literal(SystemVerilogParser.Time_literalContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#implicit_class_handle}.
	 * @param ctx the parse tree
	 */
	void enterImplicit_class_handle(SystemVerilogParser.Implicit_class_handleContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#implicit_class_handle}.
	 * @param ctx the parse tree
	 */
	void exitImplicit_class_handle(SystemVerilogParser.Implicit_class_handleContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#bit_select}.
	 * @param ctx the parse tree
	 */
	void enterBit_select(SystemVerilogParser.Bit_selectContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#bit_select}.
	 * @param ctx the parse tree
	 */
	void exitBit_select(SystemVerilogParser.Bit_selectContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#select}.
	 * @param ctx the parse tree
	 */
	void enterSelect(SystemVerilogParser.SelectContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#select}.
	 * @param ctx the parse tree
	 */
	void exitSelect(SystemVerilogParser.SelectContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#nonrange_select}.
	 * @param ctx the parse tree
	 */
	void enterNonrange_select(SystemVerilogParser.Nonrange_selectContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#nonrange_select}.
	 * @param ctx the parse tree
	 */
	void exitNonrange_select(SystemVerilogParser.Nonrange_selectContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_bit_select}.
	 * @param ctx the parse tree
	 */
	void enterConstant_bit_select(SystemVerilogParser.Constant_bit_selectContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_bit_select}.
	 * @param ctx the parse tree
	 */
	void exitConstant_bit_select(SystemVerilogParser.Constant_bit_selectContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_select}.
	 * @param ctx the parse tree
	 */
	void enterConstant_select(SystemVerilogParser.Constant_selectContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_select}.
	 * @param ctx the parse tree
	 */
	void exitConstant_select(SystemVerilogParser.Constant_selectContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#constant_cast}.
	 * @param ctx the parse tree
	 */
	void enterConstant_cast(SystemVerilogParser.Constant_castContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#constant_cast}.
	 * @param ctx the parse tree
	 */
	void exitConstant_cast(SystemVerilogParser.Constant_castContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#cast}.
	 * @param ctx the parse tree
	 */
	void enterCast(SystemVerilogParser.CastContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#cast}.
	 * @param ctx the parse tree
	 */
	void exitCast(SystemVerilogParser.CastContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#net_lvalue}.
	 * @param ctx the parse tree
	 */
	void enterNet_lvalue(SystemVerilogParser.Net_lvalueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#net_lvalue}.
	 * @param ctx the parse tree
	 */
	void exitNet_lvalue(SystemVerilogParser.Net_lvalueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#variable_lvalue}.
	 * @param ctx the parse tree
	 */
	void enterVariable_lvalue(SystemVerilogParser.Variable_lvalueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#variable_lvalue}.
	 * @param ctx the parse tree
	 */
	void exitVariable_lvalue(SystemVerilogParser.Variable_lvalueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#non_range_variable_lvalue}.
	 * @param ctx the parse tree
	 */
	void enterNon_range_variable_lvalue(SystemVerilogParser.Non_range_variable_lvalueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#non_range_variable_lvalue}.
	 * @param ctx the parse tree
	 */
	void exitNon_range_variable_lvalue(SystemVerilogParser.Non_range_variable_lvalueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(SystemVerilogParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(SystemVerilogParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#integral_number}.
	 * @param ctx the parse tree
	 */
	void enterIntegral_number(SystemVerilogParser.Integral_numberContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#integral_number}.
	 * @param ctx the parse tree
	 */
	void exitIntegral_number(SystemVerilogParser.Integral_numberContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#decimal_number}.
	 * @param ctx the parse tree
	 */
	void enterDecimal_number(SystemVerilogParser.Decimal_numberContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#decimal_number}.
	 * @param ctx the parse tree
	 */
	void exitDecimal_number(SystemVerilogParser.Decimal_numberContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#real_number}.
	 * @param ctx the parse tree
	 */
	void enterReal_number(SystemVerilogParser.Real_numberContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#real_number}.
	 * @param ctx the parse tree
	 */
	void exitReal_number(SystemVerilogParser.Real_numberContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#unary_operator}.
	 * @param ctx the parse tree
	 */
	void enterUnary_operator(SystemVerilogParser.Unary_operatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#unary_operator}.
	 * @param ctx the parse tree
	 */
	void exitUnary_operator(SystemVerilogParser.Unary_operatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#binary_operator}.
	 * @param ctx the parse tree
	 */
	void enterBinary_operator(SystemVerilogParser.Binary_operatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#binary_operator}.
	 * @param ctx the parse tree
	 */
	void exitBinary_operator(SystemVerilogParser.Binary_operatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#inc_or_dec_operator}.
	 * @param ctx the parse tree
	 */
	void enterInc_or_dec_operator(SystemVerilogParser.Inc_or_dec_operatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#inc_or_dec_operator}.
	 * @param ctx the parse tree
	 */
	void exitInc_or_dec_operator(SystemVerilogParser.Inc_or_dec_operatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#unary_module_path_operator}.
	 * @param ctx the parse tree
	 */
	void enterUnary_module_path_operator(SystemVerilogParser.Unary_module_path_operatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#unary_module_path_operator}.
	 * @param ctx the parse tree
	 */
	void exitUnary_module_path_operator(SystemVerilogParser.Unary_module_path_operatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#binary_module_path_operator}.
	 * @param ctx the parse tree
	 */
	void enterBinary_module_path_operator(SystemVerilogParser.Binary_module_path_operatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#binary_module_path_operator}.
	 * @param ctx the parse tree
	 */
	void exitBinary_module_path_operator(SystemVerilogParser.Binary_module_path_operatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#package_scope}.
	 * @param ctx the parse tree
	 */
	void enterPackage_scope(SystemVerilogParser.Package_scopeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#package_scope}.
	 * @param ctx the parse tree
	 */
	void exitPackage_scope(SystemVerilogParser.Package_scopeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#ident}.
	 * @param ctx the parse tree
	 */
	void enterIdent(SystemVerilogParser.IdentContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#ident}.
	 * @param ctx the parse tree
	 */
	void exitIdent(SystemVerilogParser.IdentContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#ps_ident}.
	 * @param ctx the parse tree
	 */
	void enterPs_ident(SystemVerilogParser.Ps_identContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#ps_ident}.
	 * @param ctx the parse tree
	 */
	void exitPs_ident(SystemVerilogParser.Ps_identContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#hier_ident}.
	 * @param ctx the parse tree
	 */
	void enterHier_ident(SystemVerilogParser.Hier_identContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#hier_ident}.
	 * @param ctx the parse tree
	 */
	void exitHier_ident(SystemVerilogParser.Hier_identContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#ps_or_hier_ident}.
	 * @param ctx the parse tree
	 */
	void enterPs_or_hier_ident(SystemVerilogParser.Ps_or_hier_identContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#ps_or_hier_ident}.
	 * @param ctx the parse tree
	 */
	void exitPs_or_hier_ident(SystemVerilogParser.Ps_or_hier_identContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_text}.
	 * @param ctx the parse tree
	 */
	void enterPp_text(SystemVerilogParser.Pp_textContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_text}.
	 * @param ctx the parse tree
	 */
	void exitPp_text(SystemVerilogParser.Pp_textContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_directive}.
	 * @param ctx the parse tree
	 */
	void enterPp_directive(SystemVerilogParser.Pp_directiveContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_directive}.
	 * @param ctx the parse tree
	 */
	void exitPp_directive(SystemVerilogParser.Pp_directiveContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_default_nettype}.
	 * @param ctx the parse tree
	 */
	void enterPp_default_nettype(SystemVerilogParser.Pp_default_nettypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_default_nettype}.
	 * @param ctx the parse tree
	 */
	void exitPp_default_nettype(SystemVerilogParser.Pp_default_nettypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_timescale}.
	 * @param ctx the parse tree
	 */
	void enterPp_timescale(SystemVerilogParser.Pp_timescaleContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_timescale}.
	 * @param ctx the parse tree
	 */
	void exitPp_timescale(SystemVerilogParser.Pp_timescaleContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_include}.
	 * @param ctx the parse tree
	 */
	void enterPp_include(SystemVerilogParser.Pp_includeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_include}.
	 * @param ctx the parse tree
	 */
	void exitPp_include(SystemVerilogParser.Pp_includeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_define_only}.
	 * @param ctx the parse tree
	 */
	void enterPp_define_only(SystemVerilogParser.Pp_define_onlyContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_define_only}.
	 * @param ctx the parse tree
	 */
	void exitPp_define_only(SystemVerilogParser.Pp_define_onlyContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_define_noarg}.
	 * @param ctx the parse tree
	 */
	void enterPp_define_noarg(SystemVerilogParser.Pp_define_noargContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_define_noarg}.
	 * @param ctx the parse tree
	 */
	void exitPp_define_noarg(SystemVerilogParser.Pp_define_noargContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_define_arg}.
	 * @param ctx the parse tree
	 */
	void enterPp_define_arg(SystemVerilogParser.Pp_define_argContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_define_arg}.
	 * @param ctx the parse tree
	 */
	void exitPp_define_arg(SystemVerilogParser.Pp_define_argContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_undef}.
	 * @param ctx the parse tree
	 */
	void enterPp_undef(SystemVerilogParser.Pp_undefContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_undef}.
	 * @param ctx the parse tree
	 */
	void exitPp_undef(SystemVerilogParser.Pp_undefContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_call_noarg}.
	 * @param ctx the parse tree
	 */
	void enterPp_call_noarg(SystemVerilogParser.Pp_call_noargContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_call_noarg}.
	 * @param ctx the parse tree
	 */
	void exitPp_call_noarg(SystemVerilogParser.Pp_call_noargContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_call_arg}.
	 * @param ctx the parse tree
	 */
	void enterPp_call_arg(SystemVerilogParser.Pp_call_argContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_call_arg}.
	 * @param ctx the parse tree
	 */
	void exitPp_call_arg(SystemVerilogParser.Pp_call_argContext ctx);
	/**
	 * Enter a parse tree produced by {@link SystemVerilogParser#pp_ifdef}.
	 * @param ctx the parse tree
	 */
	void enterPp_ifdef(SystemVerilogParser.Pp_ifdefContext ctx);
	/**
	 * Exit a parse tree produced by {@link SystemVerilogParser#pp_ifdef}.
	 * @param ctx the parse tree
	 */
	void exitPp_ifdef(SystemVerilogParser.Pp_ifdefContext ctx);
}