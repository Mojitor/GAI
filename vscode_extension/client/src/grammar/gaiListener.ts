// Generated from ./../grammar/gai.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Array_typeContext } from "./gaiParser";
import { Base_typeContext } from "./gaiParser";
import { Ns_typeContext } from "./gaiParser";
import { SchemaContext } from "./gaiParser";
import { IncludeContext } from "./gaiParser";
import { Namespace_declContext } from "./gaiParser";
import { Interface_declContext } from "./gaiParser";
import { Func_declContext } from "./gaiParser";
import { Formal_parametersContext } from "./gaiParser";
import { TypeContext } from "./gaiParser";
import { Struct_declContext } from "./gaiParser";
import { Field_declContext } from "./gaiParser";
import { Enum_declContext } from "./gaiParser";
import { Enum_filedContext } from "./gaiParser";
import { Integer_constContext } from "./gaiParser";
import { Ns_identContext } from "./gaiParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `gaiParser`.
 */
export interface gaiListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `array_type`
	 * labeled alternative in `gaiParser.type`.
	 * @param ctx the parse tree
	 */
	enterArray_type?: (ctx: Array_typeContext) => void;
	/**
	 * Exit a parse tree produced by the `array_type`
	 * labeled alternative in `gaiParser.type`.
	 * @param ctx the parse tree
	 */
	exitArray_type?: (ctx: Array_typeContext) => void;

	/**
	 * Enter a parse tree produced by the `base_type`
	 * labeled alternative in `gaiParser.type`.
	 * @param ctx the parse tree
	 */
	enterBase_type?: (ctx: Base_typeContext) => void;
	/**
	 * Exit a parse tree produced by the `base_type`
	 * labeled alternative in `gaiParser.type`.
	 * @param ctx the parse tree
	 */
	exitBase_type?: (ctx: Base_typeContext) => void;

	/**
	 * Enter a parse tree produced by the `ns_type`
	 * labeled alternative in `gaiParser.type`.
	 * @param ctx the parse tree
	 */
	enterNs_type?: (ctx: Ns_typeContext) => void;
	/**
	 * Exit a parse tree produced by the `ns_type`
	 * labeled alternative in `gaiParser.type`.
	 * @param ctx the parse tree
	 */
	exitNs_type?: (ctx: Ns_typeContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.schema`.
	 * @param ctx the parse tree
	 */
	enterSchema?: (ctx: SchemaContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.schema`.
	 * @param ctx the parse tree
	 */
	exitSchema?: (ctx: SchemaContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.include`.
	 * @param ctx the parse tree
	 */
	enterInclude?: (ctx: IncludeContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.include`.
	 * @param ctx the parse tree
	 */
	exitInclude?: (ctx: IncludeContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.namespace_decl`.
	 * @param ctx the parse tree
	 */
	enterNamespace_decl?: (ctx: Namespace_declContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.namespace_decl`.
	 * @param ctx the parse tree
	 */
	exitNamespace_decl?: (ctx: Namespace_declContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.interface_decl`.
	 * @param ctx the parse tree
	 */
	enterInterface_decl?: (ctx: Interface_declContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.interface_decl`.
	 * @param ctx the parse tree
	 */
	exitInterface_decl?: (ctx: Interface_declContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.func_decl`.
	 * @param ctx the parse tree
	 */
	enterFunc_decl?: (ctx: Func_declContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.func_decl`.
	 * @param ctx the parse tree
	 */
	exitFunc_decl?: (ctx: Func_declContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.formal_parameters`.
	 * @param ctx the parse tree
	 */
	enterFormal_parameters?: (ctx: Formal_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.formal_parameters`.
	 * @param ctx the parse tree
	 */
	exitFormal_parameters?: (ctx: Formal_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.struct_decl`.
	 * @param ctx the parse tree
	 */
	enterStruct_decl?: (ctx: Struct_declContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.struct_decl`.
	 * @param ctx the parse tree
	 */
	exitStruct_decl?: (ctx: Struct_declContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.field_decl`.
	 * @param ctx the parse tree
	 */
	enterField_decl?: (ctx: Field_declContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.field_decl`.
	 * @param ctx the parse tree
	 */
	exitField_decl?: (ctx: Field_declContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.enum_decl`.
	 * @param ctx the parse tree
	 */
	enterEnum_decl?: (ctx: Enum_declContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.enum_decl`.
	 * @param ctx the parse tree
	 */
	exitEnum_decl?: (ctx: Enum_declContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.enum_filed`.
	 * @param ctx the parse tree
	 */
	enterEnum_filed?: (ctx: Enum_filedContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.enum_filed`.
	 * @param ctx the parse tree
	 */
	exitEnum_filed?: (ctx: Enum_filedContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.integer_const`.
	 * @param ctx the parse tree
	 */
	enterInteger_const?: (ctx: Integer_constContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.integer_const`.
	 * @param ctx the parse tree
	 */
	exitInteger_const?: (ctx: Integer_constContext) => void;

	/**
	 * Enter a parse tree produced by `gaiParser.ns_ident`.
	 * @param ctx the parse tree
	 */
	enterNs_ident?: (ctx: Ns_identContext) => void;
	/**
	 * Exit a parse tree produced by `gaiParser.ns_ident`.
	 * @param ctx the parse tree
	 */
	exitNs_ident?: (ctx: Ns_identContext) => void;
}

