import { parse } from './parser';
import { name, value, list, complexList, listStatement, valueStatement } from './struct-parts';

// Временные исхожные данные
const source =
"shape = {\
type = 'hoiprossish'\
vertices = {\
point = { x = '1', y = '0', z = '0' }\
point = { x = '0', y = '1', z = '0' }\
point = { x = '0', y = '0', z = '1' }\
point = { x = '1', y = '1', z = '1' }\
";

const simpleListNode = "point = { x = '1', y = '0', z = '0' }";

function match(source: string, pattern: string): any[] {
    console.log('source: ', source);
    console.log('pattern: ', pattern);
    
    const expression = new RegExp(pattern, 'g');
    const tests = expression.test(source);
    console.log('verdict: ', tests);

    if (tests) {
        console.log('match: ', source.match(expression))

        const matchResult = source.match(expression);
        return !!matchResult ? matchResult : [];
    }
    return [];
}

function main() {
    const nodes = parse(source);


    match(simpleListNode, name);
    console.log();

    const simpleListNodeValue = match(simpleListNode, list)[0];
    console.log()

    const simpleListNodeValueNodes = match(simpleListNodeValue, valueStatement);
    simpleListNodeValueNodes.forEach(node => {
        match(node, name);
        match(node, value);
        console.log();
    });
}

main();

