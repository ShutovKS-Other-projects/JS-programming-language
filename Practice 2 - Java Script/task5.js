// Создайте коллекцию ключ-значение с помощью Мар, добавьте в нее три элемента, выведите в консоль значение последнего добавленного элемента.
// Удалите любой элемент, проверьте его отсутствие в коллекции.

let map = new Map();
map.set('key1', 'Значение 1');
map.set('key2', 'Значение 2');
map.set('key3', 'Значение 3');

console.log('Последнее добавленное значение:', map.get('key3'));

map.delete('key2');

console.log('Содержит "key2":', map.has('key2'));
