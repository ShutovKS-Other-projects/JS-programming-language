// Создайте массив, содержащий пять произвольных элементов, выведите в консоль его первый и последний элементы.
// Обновите значение второго элемента массива, создайте второй массив, который является копией первого, выведите оба массива в консоль.
// Создайте функцию, которая объединяет два массива в один.
// Создайте массив пользователей (у каждого пользователя должно быть имя) и напишите функцию, которая принимает данный массив
// и возвращает массив имен.
// Создайте функцию нахождения среднего арифметического для массива чисел.

let array1 = [10, 20, 30, 40, 50];
console.log(`Первый элемент: ${array1[0]}`);
console.log(`Последний элемент: ${array1[array1.length - 1]}`);

array1[1] = 25;
console.log(array1);

let array2 = [...array1];
console.log('Оригинальный массив:', array1);
console.log('Копия массива:', array2);

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log('Объединенные массивы:', mergeArrays(array1, array2));

let users = [
    {name: 'Ольга'},
    {name: 'Максим'},
    {name: 'Анна'}
];

function getNames(users) {
    return users.map(user => user.name);
}

console.log('Массив имен:', getNames(users));

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log('Среднее арифметическое:', average([1, 2, 3, 4, 5]));
