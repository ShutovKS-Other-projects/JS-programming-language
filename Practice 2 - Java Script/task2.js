// Создайте произвольную строку, выведите в консоль ее длину, первый и последний символы.
// Проверьте, начинается ли строка с foo, заканчивается ли на bar, содержит ли она некоторую подстроку.

let str = "foobar123bar";
console.log(`Длина строки: ${str.length}`);
console.log(`Первый символ: ${str[0]}`);
console.log(`Последний символ: ${str[str.length - 1]}`);

console.log(`Начинается с "foo": ${str.startsWith('foo')}`);
console.log(`Заканчивается на "bar": ${str.endsWith('bar')}`);
console.log(`Содержит "123": ${str.includes('123')}`);
