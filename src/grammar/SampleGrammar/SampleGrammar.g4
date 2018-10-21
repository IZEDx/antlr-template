lexer grammar SampleGrammar;

fragment DIGIT: [0-9];
fragment BYTE:  ('25' [0-5])
    	    |   ('2' [0-4] DIGIT)
            |   ([0-1]? DIGIT? DIGIT);

IP: (BYTE '.' BYTE '.' BYTE '.' BYTE)+;
WS: [ \t\r\n] ->skip;
