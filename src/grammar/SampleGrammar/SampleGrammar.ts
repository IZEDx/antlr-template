// Generated from src/grammar/SampleGrammar/SampleGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class SampleGrammar extends Lexer {
	public static readonly IP=1;
	public static readonly WS=2;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"DIGIT", "BYTE", "IP", "WS"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "IP", "WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SampleGrammar._LITERAL_NAMES, SampleGrammar._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return SampleGrammar.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SampleGrammar._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "SampleGrammar.g4"; }

	@Override
	public get ruleNames(): string[] { return SampleGrammar.ruleNames; }

	@Override
	public get serializedATN(): string { return SampleGrammar._serializedATN; }

	@Override
	public get modeNames(): string[] { return SampleGrammar.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x04-\b\x01\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x16"+
		"\n\x03\x03\x03\x05\x03\x19\n\x03\x03\x03\x05\x03\x1C\n\x03\x03\x04\x03"+
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04&\n\x04\r"+
		"\x04\x0E\x04\'\x03\x05\x03\x05\x03\x05\x03\x05\x02\x02\x02\x06\x03\x02"+
		"\x02\x05\x02\x02\x07\x02\x03\t\x02\x04\x03\x02\x07\x03\x022;\x03\x022"+
		"7\x03\x0226\x03\x0223\x05\x02\v\f\x0F\x0F\"\"/\x02\x07\x03\x02\x02\x02"+
		"\x02\t\x03\x02\x02\x02\x03\v\x03\x02\x02\x02\x05\x1B\x03\x02\x02\x02\x07"+
		"%\x03\x02\x02\x02\t)\x03\x02\x02\x02\v\f\t\x02\x02\x02\f\x04\x03\x02\x02"+
		"\x02\r\x0E\x074\x02\x02\x0E\x0F\x077\x02\x02\x0F\x10\x03\x02\x02\x02\x10"+
		"\x1C\t\x03\x02\x02\x11\x12\x074\x02\x02\x12\x13\t\x04\x02\x02\x13\x1C"+
		"\x05\x03\x02\x02\x14\x16\t\x05\x02\x02\x15\x14\x03\x02\x02\x02\x15\x16"+
		"\x03\x02\x02\x02\x16\x18\x03\x02\x02\x02\x17\x19\x05\x03\x02\x02\x18\x17"+
		"\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C"+
		"\x05\x03\x02\x02\x1B\r\x03\x02\x02\x02\x1B\x11\x03\x02\x02\x02\x1B\x15"+
		"\x03\x02\x02\x02\x1C\x06\x03\x02\x02\x02\x1D\x1E\x05\x05\x03\x02\x1E\x1F"+
		"\x070\x02\x02\x1F \x05\x05\x03\x02 !\x070\x02\x02!\"\x05\x05\x03\x02\""+
		"#\x070\x02\x02#$\x05\x05\x03\x02$&\x03\x02\x02\x02%\x1D\x03\x02\x02\x02"+
		"&\'\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(\b\x03\x02\x02"+
		"\x02)*\t\x06\x02\x02*+\x03\x02\x02\x02+,\b\x05\x02\x02,\n\x03\x02\x02"+
		"\x02\x07\x02\x15\x18\x1B\'\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SampleGrammar.__ATN) {
			SampleGrammar.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SampleGrammar._serializedATN));
		}

		return SampleGrammar.__ATN;
	}

}

