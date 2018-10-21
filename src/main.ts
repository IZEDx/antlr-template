import { ANTLRInputStream } from 'antlr4ts';
import { SampleGrammar } from './grammar/SampleGrammar/SampleGrammar';

const inputStream = new ANTLRInputStream("127.0.0.1 255.255.255.255 192.168.178.0 20.0.1.200 256.0.0.1");
const lexer = new SampleGrammar(inputStream);

for (let t of lexer.getAllTokens()) {
    if (t.type === SampleGrammar.IP) {
        console.log(`${t.startIndex}: ${t.text}`);
    }
}
