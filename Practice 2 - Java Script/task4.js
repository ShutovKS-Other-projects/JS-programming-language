// Создайте набор имен с помощью Set, добавьте в него четыре значения. Удалите первый добавленный элемент,
// проверьте его отсутствие в наборе, выведите в консоль его размер.

let namesSet = new Set();
namesSet.add('Иван');
namesSet.add('Ольга');
namesSet.add('Максим');
namesSet.add('Анна');

namesSet.delete('Иван');

console.log('Содержит "Иван":', namesSet.has('Иван'));

console.log('Размер набора:', namesSet.size);

namesSet.add('Иван')
namesSet.add('Иван')

console.log('Размер набора:', namesSet.size);
