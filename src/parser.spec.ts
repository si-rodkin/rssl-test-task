import { getNodeListItems, getNodeListValue, getNodeName, getNodeValue, parseNode } from './parser';

const fullExample =
    "shape = {\
type = 'hoiprossish'\
vertices = {\
point = { x = '1', y = '0', z = '0' }\
point = { x = '0', y = '1', z = '0' }\
point = { x = '0', y = '0', z = '1' }\
point = { x = '1', y = '1', z = '1' }\
";

const simpleListNode = "point = { x = '1', y = '0', z = '0' }";

test('Получаем имя узла', () => {
    expect(getNodeName(simpleListNode)).toBe('point');
});

test('Получаем значение узла', () => {
    expect(getNodeListValue(simpleListNode)).toBe("{ x = '1', y = '0', z = '0' }");
});

test('Парсим элементы простого списка', () => {
    const items = getNodeListItems(simpleListNode);

    expect(items.length).toBe(3);
    expect(items[0]).toBe("x = '1'");
    expect(items[1]).toBe("y = '0'");
    expect(items[2]).toBe("z = '0'");
});

test('Парсим простой узел', () => {
    const items = getNodeListItems(simpleListNode);
    
    expect(items.length).toBe(3);
    expect(getNodeValue(items[0])).toBe('\'1\'');
});

test('Что-то там', () => {
    const count = 1;
    const node = parseNode(simpleListNode, count);

    expect(node.id).toBe(1);
    expect(node.value.length).toBe(3);
});
