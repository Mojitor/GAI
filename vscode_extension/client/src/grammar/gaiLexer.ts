// Generated from ./../grammar/gai.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class gaiLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "STRING_CONSTANT", 
		"BASE_TYPE_NAME", "IDENT", "HEX_INTEGER_CONSTANT", "INTEGER_CONSTANT", 
		"FLOAT_CONSTANT", "BLOCK_COMMENT", "COMMENT", "WHITESPACE",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(gaiLexer._LITERAL_NAMES, gaiLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return gaiLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(gaiLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "gai.g4"; }

	// @Override
	public get ruleNames(): string[] { return gaiLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return gaiLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return gaiLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return gaiLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1A\u0145\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f" +
		"\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x07\x11r\n\x11\f\x11\x0E\x11u\v\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x05\x12\xEA\n\x12\x03\x13\x03\x13\x07\x13\xEE" +
		"\n\x13\f\x13\x0E\x13\xF1\v\x13\x03\x14\x05\x14\xF4\n\x14\x03\x14\x03\x14" +
		"\x03\x14\x06\x14\xF9\n\x14\r\x14\x0E\x14\xFA\x03\x15\x05\x15\xFE\n\x15" +
		"\x03\x15\x06\x15\u0101\n\x15\r\x15\x0E\x15\u0102\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u010E\n\x15\x03" +
		"\x16\x05\x16\u0111\n\x16\x03\x16\x06\x16\u0114\n\x16\r\x16\x0E\x16\u0115" +
		"\x03\x16\x03\x16\x06\x16\u011A\n\x16\r\x16\x0E\x16\u011B\x03\x16\x03\x16" +
		"\x05\x16\u0120\n\x16\x03\x16\x06\x16\u0123\n\x16\r\x16\x0E\x16\u0124\x05" +
		"\x16\u0127\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u012D\n\x17\f" +
		"\x17\x0E\x17\u0130\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x07\x18\u013B\n\x18\f\x18\x0E\x18\u013E\v\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\u012E\x02\x02\x1A" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D" +
		"\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02" +
		"\x17-\x02\x18/\x02\x191\x02\x1A\x03\x02\f\x05\x02\f\f\x0F\x0F$$\x05\x02" +
		"C\\aac|\x06\x022;C\\aac|\x04\x02--//\x04\x02ZZzz\x05\x022;CHch\x03\x02" +
		"2;\x04\x02GGgg\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x02\u0169\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02" +
		"\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02" +
		"\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x033\x03\x02\x02\x02\x05;\x03" +
		"\x02\x02\x02\x07=\x03\x02\x02\x02\tG\x03\x02\x02\x02\vI\x03\x02\x02\x02" +
		"\rS\x03\x02\x02\x02\x0FU\x03\x02\x02\x02\x11W\x03\x02\x02\x02\x13Y\x03" +
		"\x02\x02\x02\x15[\x03\x02\x02\x02\x17]\x03\x02\x02\x02\x19_\x03\x02\x02" +
		"\x02\x1Ba\x03\x02\x02\x02\x1Dh\x03\x02\x02\x02\x1Fm\x03\x02\x02\x02!o" +
		"\x03\x02\x02\x02#\xE9\x03\x02\x02\x02%\xEB\x03\x02\x02\x02\'\xF3\x03\x02" +
		"\x02\x02)\u010D\x03\x02\x02\x02+\u0110\x03\x02\x02\x02-\u0128\x03\x02" +
		"\x02\x02/\u0136\x03\x02\x02\x021\u0141\x03\x02\x02\x0234\x07k\x02\x02" +
		"45\x07p\x02\x0256\x07e\x02\x0267\x07n\x02\x0278\x07w\x02\x0289\x07f\x02" +
		"\x029:\x07g\x02\x02:\x04\x03\x02\x02\x02;<\x07=\x02\x02<\x06\x03\x02\x02" +
		"\x02=>\x07p\x02\x02>?\x07c\x02\x02?@\x07o\x02\x02@A\x07g\x02\x02AB\x07" +
		"u\x02\x02BC\x07r\x02\x02CD\x07c\x02\x02DE\x07e\x02\x02EF\x07g\x02\x02" +
		"F\b\x03\x02\x02\x02GH\x070\x02\x02H\n\x03\x02\x02\x02IJ\x07k\x02\x02J" +
		"K\x07p\x02\x02KL\x07v\x02\x02LM\x07g\x02\x02MN\x07t\x02\x02NO\x07h\x02" +
		"\x02OP\x07c\x02\x02PQ\x07e\x02\x02QR\x07g\x02\x02R\f\x03\x02\x02\x02S" +
		"T\x07}\x02\x02T\x0E\x03\x02\x02\x02UV\x07\x7F\x02\x02V\x10\x03\x02\x02" +
		"\x02WX\x07*\x02\x02X\x12\x03\x02\x02\x02YZ\x07+\x02\x02Z\x14\x03\x02\x02" +
		"\x02[\\\x07.\x02\x02\\\x16\x03\x02\x02\x02]^\x07]\x02\x02^\x18\x03\x02" +
		"\x02\x02_`\x07_\x02\x02`\x1A\x03\x02\x02\x02ab\x07u\x02\x02bc\x07v\x02" +
		"\x02cd\x07t\x02\x02de\x07w\x02\x02ef\x07e\x02\x02fg\x07v\x02\x02g\x1C" +
		"\x03\x02\x02\x02hi\x07g\x02\x02ij\x07p\x02\x02jk\x07w\x02\x02kl\x07o\x02" +
		"\x02l\x1E\x03\x02\x02\x02mn\x07?\x02\x02n \x03\x02\x02\x02os\x07$\x02" +
		"\x02pr\n\x02\x02\x02qp\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02" +
		"\x02st\x03\x02\x02\x02tv\x03\x02\x02\x02us\x03\x02\x02\x02vw\x07$\x02" +
		"\x02w\"\x03\x02\x02\x02xy\x07d\x02\x02yz\x07q\x02\x02z{\x07q\x02\x02{" +
		"\xEA\x07n\x02\x02|}\x07d\x02\x02}~\x07{\x02\x02~\x7F\x07v\x02\x02\x7F" +
		"\xEA\x07g\x02\x02\x80\x81\x07w\x02\x02\x81\x82\x07d\x02\x02\x82\x83\x07" +
		"{\x02\x02\x83\x84\x07v\x02\x02\x84\xEA\x07g\x02\x02\x85\x86\x07u\x02\x02" +
		"\x86\x87\x07j\x02\x02\x87\x88\x07q\x02\x02\x88\x89\x07t\x02\x02\x89\xEA" +
		"\x07v\x02\x02\x8A\x8B\x07w\x02\x02\x8B\x8C\x07u\x02\x02\x8C\x8D\x07j\x02" +
		"\x02\x8D\x8E\x07q\x02\x02\x8E\x8F\x07t\x02\x02\x8F\xEA\x07v\x02\x02\x90" +
		"\x91\x07k\x02\x02\x91\x92\x07p\x02\x02\x92\xEA\x07v\x02\x02\x93\x94\x07" +
		"w\x02\x02\x94\x95\x07k\x02\x02\x95\x96\x07p\x02\x02\x96\xEA\x07v\x02\x02" +
		"\x97\x98\x07h\x02\x02\x98\x99\x07n\x02\x02\x99\x9A\x07q\x02\x02\x9A\x9B" +
		"\x07c\x02\x02\x9B\xEA\x07v\x02\x02\x9C\x9D\x07n\x02\x02\x9D\x9E\x07q\x02" +
		"\x02\x9E\x9F\x07p\x02\x02\x9F\xEA\x07i\x02\x02\xA0\xA1\x07w\x02\x02\xA1" +
		"\xA2\x07n\x02\x02\xA2\xA3\x07q\x02\x02\xA3\xA4\x07p\x02\x02\xA4\xEA\x07" +
		"i\x02\x02\xA5\xA6\x07f\x02\x02\xA6\xA7\x07q\x02\x02\xA7\xA8\x07w\x02\x02" +
		"\xA8\xA9\x07d\x02\x02\xA9\xAA\x07n\x02\x02\xAA\xEA\x07g\x02\x02\xAB\xAC" +
		"\x07k\x02\x02\xAC\xAD\x07p\x02\x02\xAD\xAE\x07v\x02\x02\xAE\xEA\x07:\x02" +
		"\x02\xAF\xB0\x07w\x02\x02\xB0\xB1\x07k\x02\x02\xB1\xB2\x07p\x02\x02\xB2" +
		"\xB3\x07v\x02\x02\xB3\xEA\x07:\x02\x02\xB4\xB5\x07k\x02\x02\xB5\xB6\x07" +
		"p\x02\x02\xB6\xB7\x07v\x02\x02\xB7\xB8\x073\x02\x02\xB8\xEA\x078\x02\x02" +
		"\xB9\xBA\x07w\x02\x02\xBA\xBB\x07k\x02\x02\xBB\xBC\x07p\x02\x02\xBC\xBD" +
		"\x07v\x02\x02\xBD\xBE\x073\x02\x02\xBE\xEA\x078\x02\x02\xBF\xC0\x07k\x02" +
		"\x02\xC0\xC1\x07p\x02\x02\xC1\xC2\x07v\x02\x02\xC2\xC3\x075\x02\x02\xC3" +
		"\xEA\x074\x02\x02\xC4\xC5\x07w\x02\x02\xC5\xC6\x07k\x02\x02\xC6\xC7\x07" +
		"p\x02\x02\xC7\xC8\x07v\x02\x02\xC8\xC9\x075\x02\x02\xC9\xEA\x074\x02\x02" +
		"\xCA\xCB\x07k\x02\x02\xCB\xCC\x07p\x02\x02\xCC\xCD\x07v\x02\x02\xCD\xCE" +
		"\x078\x02\x02\xCE\xEA\x076\x02\x02\xCF\xD0\x07w\x02\x02\xD0\xD1\x07k\x02" +
		"\x02\xD1\xD2\x07p\x02\x02\xD2\xD3\x07v\x02\x02\xD3\xD4\x078\x02\x02\xD4" +
		"\xEA\x076\x02\x02\xD5\xD6\x07h\x02\x02\xD6\xD7\x07n\x02\x02\xD7\xD8\x07" +
		"q\x02\x02\xD8\xD9\x07c\x02\x02\xD9\xDA\x07v\x02\x02\xDA\xDB\x075\x02\x02" +
		"\xDB\xEA\x074\x02\x02\xDC\xDD\x07h\x02\x02\xDD\xDE\x07n\x02\x02\xDE\xDF" +
		"\x07q\x02\x02\xDF\xE0\x07c\x02\x02\xE0\xE1\x07v\x02\x02\xE1\xE2\x078\x02" +
		"\x02\xE2\xEA\x076\x02\x02\xE3\xE4\x07u\x02\x02\xE4\xE5\x07v\x02\x02\xE5" +
		"\xE6\x07t\x02\x02\xE6\xE7\x07k\x02\x02\xE7\xE8\x07p\x02\x02\xE8\xEA\x07" +
		"i\x02\x02\xE9x\x03\x02\x02\x02\xE9|\x03\x02\x02\x02\xE9\x80\x03\x02\x02" +
		"\x02\xE9\x85\x03\x02\x02\x02\xE9\x8A\x03\x02\x02\x02\xE9\x90\x03\x02\x02" +
		"\x02\xE9\x93\x03\x02\x02\x02\xE9\x97\x03\x02\x02\x02\xE9\x9C\x03\x02\x02" +
		"\x02\xE9\xA0\x03\x02\x02\x02\xE9\xA5\x03\x02\x02\x02\xE9\xAB\x03\x02\x02" +
		"\x02\xE9\xAF\x03\x02\x02\x02\xE9\xB4\x03\x02\x02\x02\xE9\xB9\x03\x02\x02" +
		"\x02\xE9\xBF\x03\x02\x02\x02\xE9\xC4\x03\x02\x02\x02\xE9\xCA\x03\x02\x02" +
		"\x02\xE9\xCF\x03\x02\x02\x02\xE9\xD5\x03\x02\x02\x02\xE9\xDC\x03\x02\x02" +
		"\x02\xE9\xE3\x03\x02\x02\x02\xEA$\x03\x02\x02\x02\xEB\xEF\t\x03\x02\x02" +
		"\xEC\xEE\t\x04\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02" +
		"\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0&\x03\x02\x02\x02" +
		"\xF1\xEF\x03\x02\x02\x02\xF2\xF4\t\x05\x02\x02\xF3\xF2\x03\x02\x02\x02" +
		"\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x072\x02\x02" +
		"\xF6\xF8\t\x06\x02\x02\xF7\xF9\t\x07\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9" +
		"\xFA\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB" +
		"(\x03\x02\x02\x02\xFC\xFE\t\x05\x02\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE" +
		"\x03\x02\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\u0101\t\b\x02\x02\u0100" +
		"\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0100\x03\x02\x02" +
		"\x02\u0102\u0103\x03\x02\x02\x02\u0103\u010E\x03\x02\x02\x02\u0104\u0105" +
		"\x07v\x02\x02\u0105\u0106\x07t\x02\x02\u0106\u0107\x07w\x02\x02\u0107" +
		"\u010E\x07g\x02\x02\u0108\u0109\x07h\x02\x02\u0109\u010A\x07c\x02\x02" +
		"\u010A\u010B\x07n\x02\x02\u010B\u010C\x07u\x02\x02\u010C\u010E\x07g\x02" +
		"\x02\u010D\xFD\x03\x02\x02\x02\u010D\u0104\x03\x02\x02\x02\u010D\u0108" +
		"\x03\x02\x02\x02\u010E*\x03\x02\x02\x02\u010F\u0111\x07/\x02\x02\u0110" +
		"\u010F\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0113\x03\x02" +
		"\x02\x02\u0112\u0114\t\b\x02\x02\u0113\u0112\x03\x02\x02\x02\u0114\u0115" +
		"\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02" +
		"\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x070\x02\x02\u0118\u011A\t\b" +
		"\x02\x02\u0119\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
		"\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u0126\x03\x02" +
		"\x02\x02\u011D\u011F\t\t\x02\x02\u011E\u0120\t\x05\x02\x02\u011F\u011E" +
		"\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0122\x03\x02\x02\x02" +
		"\u0121\u0123\t\b\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02" +
		"\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125" +
		"\u0127\x03\x02\x02\x02\u0126\u011D\x03\x02\x02\x02\u0126\u0127\x03\x02" +
		"\x02\x02\u0127,\x03\x02\x02\x02\u0128\u0129\x071\x02\x02\u0129\u012A\x07" +
		",\x02\x02\u012A\u012E\x03\x02\x02\x02\u012B\u012D\v\x02\x02\x02\u012C" +
		"\u012B\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012F\x03\x02" +
		"\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130" +
		"\u012E\x03\x02\x02\x02\u0131\u0132\x07,\x02\x02\u0132\u0133\x071\x02\x02" +
		"\u0133\u0134\x03\x02\x02\x02\u0134\u0135\b\x17\x02\x02\u0135.\x03\x02" +
		"\x02\x02\u0136\u0137\x071\x02\x02\u0137\u0138\x071\x02\x02\u0138\u013C" +
		"\x03\x02\x02\x02\u0139\u013B\n\n\x02\x02\u013A\u0139\x03\x02\x02\x02\u013B" +
		"\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02" +
		"\x02\x02\u013D\u013F\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F" +
		"\u0140\b\x18\x02\x02\u01400\x03\x02\x02\x02\u0141\u0142\t\v\x02\x02\u0142" +
		"\u0143\x03\x02\x02\x02\u0143\u0144\b\x19\x03\x02\u01442\x03\x02\x02\x02" +
		"\x13\x02s\xE9\xEF\xF3\xFA\xFD\u0102\u010D\u0110\u0115\u011B\u011F\u0124" +
		"\u0126\u012E\u013C\x04\x02\x03\x02\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gaiLexer.__ATN) {
			gaiLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(gaiLexer._serializedATN));
		}

		return gaiLexer.__ATN;
	}

}

