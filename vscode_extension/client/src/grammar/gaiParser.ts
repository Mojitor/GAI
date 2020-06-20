// Generated from ./../grammar/gai.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { gaiListener } from "./gaiListener";

export class gaiParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly STRING_CONSTANT = 16;
	public static readonly BASE_TYPE_NAME = 17;
	public static readonly IDENT = 18;
	public static readonly HEX_INTEGER_CONSTANT = 19;
	public static readonly INTEGER_CONSTANT = 20;
	public static readonly FLOAT_CONSTANT = 21;
	public static readonly BLOCK_COMMENT = 22;
	public static readonly COMMENT = 23;
	public static readonly WHITESPACE = 24;
	public static readonly RULE_schema = 0;
	public static readonly RULE_include = 1;
	public static readonly RULE_namespace_decl = 2;
	public static readonly RULE_interface_decl = 3;
	public static readonly RULE_func_decl = 4;
	public static readonly RULE_formal_parameters = 5;
	public static readonly RULE_type = 6;
	public static readonly RULE_struct_decl = 7;
	public static readonly RULE_field_decl = 8;
	public static readonly RULE_enum_decl = 9;
	public static readonly RULE_enum_filed = 10;
	public static readonly RULE_integer_const = 11;
	public static readonly RULE_ns_ident = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"schema", "include", "namespace_decl", "interface_decl", "func_decl", 
		"formal_parameters", "type", "struct_decl", "field_decl", "enum_decl", 
		"enum_filed", "integer_const", "ns_ident",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'include'", "';'", "'namespace'", "'.'", "'interface'", "'{'", 
		"'}'", "'('", "')'", "','", "'['", "']'", "'struct'", "'enum'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "STRING_CONSTANT", "BASE_TYPE_NAME", "IDENT", "HEX_INTEGER_CONSTANT", 
		"INTEGER_CONSTANT", "FLOAT_CONSTANT", "BLOCK_COMMENT", "COMMENT", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(gaiParser._LITERAL_NAMES, gaiParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return gaiParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "gai.g4"; }

	// @Override
	public get ruleNames(): string[] { return gaiParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return gaiParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(gaiParser._ATN, this);
	}
	// @RuleVersion(0)
	public schema(): SchemaContext {
		let _localctx: SchemaContext = new SchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, gaiParser.RULE_schema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === gaiParser.T__0) {
				{
				{
				this.state = 26;
				this.include();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gaiParser.T__2) | (1 << gaiParser.T__4) | (1 << gaiParser.T__12) | (1 << gaiParser.T__13))) !== 0)) {
				{
				this.state = 36;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case gaiParser.T__2:
					{
					this.state = 32;
					this.namespace_decl();
					}
					break;
				case gaiParser.T__4:
					{
					this.state = 33;
					this.interface_decl();
					}
					break;
				case gaiParser.T__12:
					{
					this.state = 34;
					this.struct_decl();
					}
					break;
				case gaiParser.T__13:
					{
					this.state = 35;
					this.enum_decl();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public include(): IncludeContext {
		let _localctx: IncludeContext = new IncludeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, gaiParser.RULE_include);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(gaiParser.T__0);
			this.state = 42;
			this.match(gaiParser.STRING_CONSTANT);
			this.state = 43;
			this.match(gaiParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace_decl(): Namespace_declContext {
		let _localctx: Namespace_declContext = new Namespace_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, gaiParser.RULE_namespace_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(gaiParser.T__2);
			this.state = 46;
			this.match(gaiParser.IDENT);
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === gaiParser.T__3) {
				{
				{
				this.state = 47;
				this.match(gaiParser.T__3);
				this.state = 48;
				this.match(gaiParser.IDENT);
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 54;
			this.match(gaiParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interface_decl(): Interface_declContext {
		let _localctx: Interface_declContext = new Interface_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, gaiParser.RULE_interface_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(gaiParser.T__4);
			this.state = 57;
			this.match(gaiParser.IDENT);
			this.state = 58;
			this.match(gaiParser.T__5);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === gaiParser.BASE_TYPE_NAME || _la === gaiParser.IDENT) {
				{
				{
				this.state = 59;
				this.func_decl();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 65;
			this.match(gaiParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_decl(): Func_declContext {
		let _localctx: Func_declContext = new Func_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, gaiParser.RULE_func_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.type(0);
			this.state = 68;
			this.match(gaiParser.IDENT);
			this.state = 69;
			this.match(gaiParser.T__7);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === gaiParser.BASE_TYPE_NAME || _la === gaiParser.IDENT) {
				{
				this.state = 70;
				this.formal_parameters();
				}
			}

			this.state = 73;
			this.match(gaiParser.T__8);
			this.state = 74;
			this.match(gaiParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formal_parameters(): Formal_parametersContext {
		let _localctx: Formal_parametersContext = new Formal_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, gaiParser.RULE_formal_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.type(0);
			this.state = 77;
			this.match(gaiParser.IDENT);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === gaiParser.T__9) {
				{
				{
				this.state = 78;
				this.match(gaiParser.T__9);
				this.state = 79;
				this.type(0);
				this.state = 80;
				this.match(gaiParser.IDENT);
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, gaiParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gaiParser.BASE_TYPE_NAME:
				{
				_localctx = new Base_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 88;
				this.match(gaiParser.BASE_TYPE_NAME);
				}
				break;
			case gaiParser.IDENT:
				{
				_localctx = new Ns_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 89;
				this.ns_ident();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 97;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Array_typeContext(new TypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, gaiParser.RULE_type);
					this.state = 92;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 93;
					this.match(gaiParser.T__10);
					this.state = 94;
					this.match(gaiParser.T__11);
					}
					}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_decl(): Struct_declContext {
		let _localctx: Struct_declContext = new Struct_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, gaiParser.RULE_struct_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(gaiParser.T__12);
			this.state = 101;
			this.match(gaiParser.IDENT);
			this.state = 102;
			this.match(gaiParser.T__5);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === gaiParser.BASE_TYPE_NAME || _la === gaiParser.IDENT) {
				{
				{
				this.state = 103;
				this.field_decl();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 109;
			this.match(gaiParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_decl(): Field_declContext {
		let _localctx: Field_declContext = new Field_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, gaiParser.RULE_field_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.type(0);
			this.state = 112;
			this.match(gaiParser.IDENT);
			this.state = 113;
			this.match(gaiParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_decl(): Enum_declContext {
		let _localctx: Enum_declContext = new Enum_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, gaiParser.RULE_enum_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(gaiParser.T__13);
			this.state = 116;
			this.match(gaiParser.IDENT);
			this.state = 117;
			this.match(gaiParser.T__5);
			this.state = 118;
			this.enum_filed();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === gaiParser.T__9) {
				{
				{
				this.state = 119;
				this.match(gaiParser.T__9);
				this.state = 120;
				this.enum_filed();
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
			this.match(gaiParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_filed(): Enum_filedContext {
		let _localctx: Enum_filedContext = new Enum_filedContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, gaiParser.RULE_enum_filed);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(gaiParser.IDENT);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === gaiParser.T__14) {
				{
				this.state = 129;
				this.match(gaiParser.T__14);
				this.state = 130;
				this.integer_const();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer_const(): Integer_constContext {
		let _localctx: Integer_constContext = new Integer_constContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, gaiParser.RULE_integer_const);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			_la = this._input.LA(1);
			if (!(_la === gaiParser.HEX_INTEGER_CONSTANT || _la === gaiParser.INTEGER_CONSTANT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ns_ident(): Ns_identContext {
		let _localctx: Ns_identContext = new Ns_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, gaiParser.RULE_ns_ident);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(gaiParser.IDENT);
			this.state = 140;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 136;
					this.match(gaiParser.T__3);
					this.state = 137;
					this.match(gaiParser.IDENT);
					}
					}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1A\x92\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x07\x02\'\n\x02\f\x02\x0E\x02*\v\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x044\n\x04\f" +
		"\x04\x0E\x047\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07" +
		"\x05?\n\x05\f\x05\x0E\x05B\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06J\n\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07U\n\x07\f\x07\x0E\x07X\v\x07\x03\b\x03" +
		"\b\x03\b\x05\b]\n\b\x03\b\x03\b\x03\b\x07\bb\n\b\f\b\x0E\be\v\b\x03\t" +
		"\x03\t\x03\t\x03\t\x07\tk\n\t\f\t\x0E\tn\v\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v|\n\v\f\v\x0E\v\x7F" +
		"\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\x86\n\f\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\x8D\n\x0E\f\x0E\x0E\x0E\x90\v\x0E\x03\x0E\x02\x02" +
		"\x03\x0E\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x03\x03\x02\x15\x16\x02\x93" +
		"\x02\x1F\x03\x02\x02\x02\x04+\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b:" +
		"\x03\x02\x02\x02\nE\x03\x02\x02\x02\fN\x03\x02\x02\x02\x0E\\\x03\x02\x02" +
		"\x02\x10f\x03\x02\x02\x02\x12q\x03\x02\x02\x02\x14u\x03\x02\x02\x02\x16" +
		"\x82\x03\x02\x02\x02\x18\x87\x03\x02\x02\x02\x1A\x89\x03\x02\x02\x02\x1C" +
		"\x1E\x05\x04\x03\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F" +
		"\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 (\x03\x02\x02\x02!\x1F\x03\x02" +
		"\x02\x02\"\'\x05\x06\x04\x02#\'\x05\b\x05\x02$\'\x05\x10\t\x02%\'\x05" +
		"\x14\v\x02&\"\x03\x02\x02\x02&#\x03\x02\x02\x02&$\x03\x02\x02\x02&%\x03" +
		"\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x03" +
		"\x03\x02\x02\x02*(\x03\x02\x02\x02+,\x07\x03\x02\x02,-\x07\x12\x02\x02" +
		"-.\x07\x04\x02\x02.\x05\x03\x02\x02\x02/0\x07\x05\x02\x0205\x07\x14\x02" +
		"\x0212\x07\x06\x02\x0224\x07\x14\x02\x0231\x03\x02\x02\x0247\x03\x02\x02" +
		"\x0253\x03\x02\x02\x0256\x03\x02\x02\x0268\x03\x02\x02\x0275\x03\x02\x02" +
		"\x0289\x07\x04\x02\x029\x07\x03\x02\x02\x02:;\x07\x07\x02\x02;<\x07\x14" +
		"\x02\x02<@\x07\b\x02\x02=?\x05\n\x06\x02>=\x03\x02\x02\x02?B\x03\x02\x02" +
		"\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03\x02\x02" +
		"\x02CD\x07\t\x02\x02D\t\x03\x02\x02\x02EF\x05\x0E\b\x02FG\x07\x14\x02" +
		"\x02GI\x07\n\x02\x02HJ\x05\f\x07\x02IH\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"JK\x03\x02\x02\x02KL\x07\v\x02\x02LM\x07\x04\x02\x02M\v\x03\x02\x02\x02" +
		"NO\x05\x0E\b\x02OV\x07\x14\x02\x02PQ\x07\f\x02\x02QR\x05\x0E\b\x02RS\x07" +
		"\x14\x02\x02SU\x03\x02\x02\x02TP\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03" +
		"\x02\x02\x02VW\x03\x02\x02\x02W\r\x03\x02\x02\x02XV\x03\x02\x02\x02YZ" +
		"\b\b\x01\x02Z]\x07\x13\x02\x02[]\x05\x1A\x0E\x02\\Y\x03\x02\x02\x02\\" +
		"[\x03\x02\x02\x02]c\x03\x02\x02\x02^_\f\x05\x02\x02_`\x07\r\x02\x02`b" +
		"\x07\x0E\x02\x02a^\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02" +
		"cd\x03\x02\x02\x02d\x0F\x03\x02\x02\x02ec\x03\x02\x02\x02fg\x07\x0F\x02" +
		"\x02gh\x07\x14\x02\x02hl\x07\b\x02\x02ik\x05\x12\n\x02ji\x03\x02\x02\x02" +
		"kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02\x02\x02" +
		"nl\x03\x02\x02\x02op\x07\t\x02\x02p\x11\x03\x02\x02\x02qr\x05\x0E\b\x02" +
		"rs\x07\x14\x02\x02st\x07\x04\x02\x02t\x13\x03\x02\x02\x02uv\x07\x10\x02" +
		"\x02vw\x07\x14\x02\x02wx\x07\b\x02\x02x}\x05\x16\f\x02yz\x07\f\x02\x02" +
		"z|\x05\x16\f\x02{y\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02" +
		"\x02}~\x03\x02\x02\x02~\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81" +
		"\x07\t\x02\x02\x81\x15\x03\x02\x02\x02\x82\x85\x07\x14\x02\x02\x83\x84" +
		"\x07\x11\x02\x02\x84\x86\x05\x18\r\x02\x85\x83\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x17\x03\x02\x02\x02\x87\x88\t\x02\x02\x02\x88\x19" +
		"\x03\x02\x02\x02\x89\x8E\x07\x14\x02\x02\x8A\x8B\x07\x06\x02\x02\x8B\x8D" +
		"\x07\x14\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C" +
		"\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x1B\x03\x02\x02\x02\x90\x8E" +
		"\x03\x02\x02\x02\x0F\x1F&(5@IV\\cl}\x85\x8E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gaiParser.__ATN) {
			gaiParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(gaiParser._serializedATN));
		}

		return gaiParser.__ATN;
	}

}

export class SchemaContext extends ParserRuleContext {
	public include(): IncludeContext[];
	public include(i: number): IncludeContext;
	public include(i?: number): IncludeContext | IncludeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IncludeContext);
		} else {
			return this.getRuleContext(i, IncludeContext);
		}
	}
	public namespace_decl(): Namespace_declContext[];
	public namespace_decl(i: number): Namespace_declContext;
	public namespace_decl(i?: number): Namespace_declContext | Namespace_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_declContext);
		} else {
			return this.getRuleContext(i, Namespace_declContext);
		}
	}
	public interface_decl(): Interface_declContext[];
	public interface_decl(i: number): Interface_declContext;
	public interface_decl(i?: number): Interface_declContext | Interface_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interface_declContext);
		} else {
			return this.getRuleContext(i, Interface_declContext);
		}
	}
	public struct_decl(): Struct_declContext[];
	public struct_decl(i: number): Struct_declContext;
	public struct_decl(i?: number): Struct_declContext | Struct_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Struct_declContext);
		} else {
			return this.getRuleContext(i, Struct_declContext);
		}
	}
	public enum_decl(): Enum_declContext[];
	public enum_decl(i: number): Enum_declContext;
	public enum_decl(i?: number): Enum_declContext | Enum_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Enum_declContext);
		} else {
			return this.getRuleContext(i, Enum_declContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_schema; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterSchema) {
			listener.enterSchema(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitSchema) {
			listener.exitSchema(this);
		}
	}
}


export class IncludeContext extends ParserRuleContext {
	public STRING_CONSTANT(): TerminalNode { return this.getToken(gaiParser.STRING_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_include; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterInclude) {
			listener.enterInclude(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitInclude) {
			listener.exitInclude(this);
		}
	}
}


export class Namespace_declContext extends ParserRuleContext {
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gaiParser.IDENT);
		} else {
			return this.getToken(gaiParser.IDENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_namespace_decl; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterNamespace_decl) {
			listener.enterNamespace_decl(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitNamespace_decl) {
			listener.exitNamespace_decl(this);
		}
	}
}


export class Interface_declContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(gaiParser.IDENT, 0); }
	public func_decl(): Func_declContext[];
	public func_decl(i: number): Func_declContext;
	public func_decl(i?: number): Func_declContext | Func_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Func_declContext);
		} else {
			return this.getRuleContext(i, Func_declContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_interface_decl; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterInterface_decl) {
			listener.enterInterface_decl(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitInterface_decl) {
			listener.exitInterface_decl(this);
		}
	}
}


export class Func_declContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENT(): TerminalNode { return this.getToken(gaiParser.IDENT, 0); }
	public formal_parameters(): Formal_parametersContext | undefined {
		return this.tryGetRuleContext(0, Formal_parametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_func_decl; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterFunc_decl) {
			listener.enterFunc_decl(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitFunc_decl) {
			listener.exitFunc_decl(this);
		}
	}
}


export class Formal_parametersContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gaiParser.IDENT);
		} else {
			return this.getToken(gaiParser.IDENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_formal_parameters; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterFormal_parameters) {
			listener.enterFormal_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitFormal_parameters) {
			listener.exitFormal_parameters(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class Array_typeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterArray_type) {
			listener.enterArray_type(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitArray_type) {
			listener.exitArray_type(this);
		}
	}
}
export class Base_typeContext extends TypeContext {
	public BASE_TYPE_NAME(): TerminalNode { return this.getToken(gaiParser.BASE_TYPE_NAME, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterBase_type) {
			listener.enterBase_type(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitBase_type) {
			listener.exitBase_type(this);
		}
	}
}
export class Ns_typeContext extends TypeContext {
	public ns_ident(): Ns_identContext {
		return this.getRuleContext(0, Ns_identContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterNs_type) {
			listener.enterNs_type(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitNs_type) {
			listener.exitNs_type(this);
		}
	}
}


export class Struct_declContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(gaiParser.IDENT, 0); }
	public field_decl(): Field_declContext[];
	public field_decl(i: number): Field_declContext;
	public field_decl(i?: number): Field_declContext | Field_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Field_declContext);
		} else {
			return this.getRuleContext(i, Field_declContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_struct_decl; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterStruct_decl) {
			listener.enterStruct_decl(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitStruct_decl) {
			listener.exitStruct_decl(this);
		}
	}
}


export class Field_declContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENT(): TerminalNode { return this.getToken(gaiParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_field_decl; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterField_decl) {
			listener.enterField_decl(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitField_decl) {
			listener.exitField_decl(this);
		}
	}
}


export class Enum_declContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(gaiParser.IDENT, 0); }
	public enum_filed(): Enum_filedContext[];
	public enum_filed(i: number): Enum_filedContext;
	public enum_filed(i?: number): Enum_filedContext | Enum_filedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Enum_filedContext);
		} else {
			return this.getRuleContext(i, Enum_filedContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_enum_decl; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterEnum_decl) {
			listener.enterEnum_decl(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitEnum_decl) {
			listener.exitEnum_decl(this);
		}
	}
}


export class Enum_filedContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(gaiParser.IDENT, 0); }
	public integer_const(): Integer_constContext | undefined {
		return this.tryGetRuleContext(0, Integer_constContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_enum_filed; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterEnum_filed) {
			listener.enterEnum_filed(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitEnum_filed) {
			listener.exitEnum_filed(this);
		}
	}
}


export class Integer_constContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(gaiParser.INTEGER_CONSTANT, 0); }
	public HEX_INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(gaiParser.HEX_INTEGER_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_integer_const; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterInteger_const) {
			listener.enterInteger_const(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitInteger_const) {
			listener.exitInteger_const(this);
		}
	}
}


export class Ns_identContext extends ParserRuleContext {
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gaiParser.IDENT);
		} else {
			return this.getToken(gaiParser.IDENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gaiParser.RULE_ns_ident; }
	// @Override
	public enterRule(listener: gaiListener): void {
		if (listener.enterNs_ident) {
			listener.enterNs_ident(this);
		}
	}
	// @Override
	public exitRule(listener: gaiListener): void {
		if (listener.exitNs_ident) {
			listener.exitNs_ident(this);
		}
	}
}


