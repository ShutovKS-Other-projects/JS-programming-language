// Задание 2: Переменные с разными типами данных

/*
Объявите переменные, имеющие различные типы данных. Выведите в консоль их значения и типы данных, используя оператор typeof.
 */

let name = "Анна";
const age = 25;
var isStudent = true;
let score = 85.5;
let count = 10;
let array = [1, 2, 3];
let obj = {name: "Олег", age: 30};

console.log("Типы данных:");
console.log("name:", typeof name);
console.log("age:", typeof age);
console.log("isStudent:", typeof isStudent);
console.log("score:", typeof score);
console.log("count:", typeof count);
console.log("array:", typeof array);
console.log("obj:", typeof obj);

// Дополнительно выводим значения переменных
console.log("\nЗначения переменных:");
console.log("name:", name);
console.log("age:", age);
console.log("isStudent:", isStudent);
console.log("score:", score);
console.log("count:", count);
console.log("array:", array);
console.log("obj:", JSON.stringify(obj));
