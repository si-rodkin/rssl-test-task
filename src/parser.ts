import { StructNode } from "./node";
import { name, value, list, valueStatement, listStatement } from "./struct-parts";

export function getNodeName(node: string): string {
    // if (new RegExp(valueStatement))

    const result = node.match(new RegExp(name));
    return !!result && result.length > 0 ? result[0] : '';
}

export function getNodeValue(node: string): string {
    const result = node.match(new RegExp(value));
    return !!result && result.length > 0 ? result[0] : '';
}

export function getNodeListValue(node: string): string {
    const result = node.match(new RegExp(list));
    return !!result && result.length > 0 ? result[0] : '';
}

export function getNodeListItems(list: string): string[] {
    const result = list.match(new RegExp(valueStatement, 'g'));
    return !!result ? result : [];
}

function parseList(items: string[], count: number): StructNode[] {
    return items.map(item => parseNode(item, count));
}

export function parseNode(node: string, count: number): StructNode {
    
    if (new RegExp(valueStatement).test(node)) {
        return new StructNode(count++, getNodeName(node), getNodeValue(node))
    } else if (new RegExp(listStatement).test(node)) {
        const childs: StructNode[] = parseList(getNodeListItems(node), count);
        return new StructNode(count++, getNodeName(node), childs);
    }

    throw new Error('Неверный формат данных');
}
