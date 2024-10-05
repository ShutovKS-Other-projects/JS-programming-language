/*  Задание 1
Создайте функцию, которая принимает несколько аргументов, выполняет над ними математическую операцию и возвращает ее результат.
Реализуйте в ней обработку возможных ошибок с помощью конструкции try...catch, при получении ошибки выведите в консоль информацию о ней,
приведите пример использования. Создайте собственный класс ошибки, приведите пример использования.
 */

function performOperation(...args) {
    try {
        if (args.length < 2) {
            throw new Error('Недостаточно аргументов для выполнения операции.');
        }

        const result = args.reduce((acc, num) => {
            if (typeof num !== 'number') {
                throw new TypeError('Один из аргументов не является числом.');
            }

            if (num === 0) {
                throw new DivisionByZeroError('Деление на ноль невозможно.');
            }

            return acc / num;
        });

        return result;
    } catch (error) {
        console.error('Произошла ошибка:', error.message);
    }
}

console.log(performOperation(100, 5, 2));
console.log(performOperation(100, '5'));
console.log(performOperation(100));
console.log(performOperation(100, 0));