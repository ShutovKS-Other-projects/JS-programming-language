// Задание 4: Циклы от 1 до 10

/*
Напишите программу, которая выводит числа от 1 до 10 с помощью различных циклов: while, do…while, for.
 */

console.log("Цикл while:");
i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("\nЦикл do...while:");
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

console.log("\nЦикл for:");
for (let j = 1; j <= 10; j++) {
    console.log(j);
}
