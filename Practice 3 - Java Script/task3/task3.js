/* Задание З
Создайте модуль, предоставляющий функциональность работы с математическими операциями, реализуйте в нем 6 функций,
подключите в него модуль, предоставляющий константы, необходимые для ваших функций. При экспортировании функций и
переменных приведите примеры всех видов использования директивы экспорта.  Подключите реализованную функциональность
в основной модуль и приведите примеры использования. При импортировании функций и переменных приведите примеры
всех видов использования директивы импорта.
 */

import calculateCircleArea from './mathOperations.js';

import {
    naturalLog,
    calculateGravityForce as calculateGravity,
    calculateEnergy,
    calculatePhotonEnergy,
    calculateCircumference as calculCircumference
} from './mathOperations.js';

import * as mathOperations from './mathOperations.js';

console.log('Площадь круга:', calculateCircleArea(5));

console.log('Натуральный логарифм:', naturalLog(10));

console.log('Сила тяжести на Земле:', calculateGravity(60));

console.log('Энергия тела массой 1 кг:', mathOperations.calculateEnergy(1));

console.log('Энергия фотона:', calculatePhotonEnergy(5e14));

console.log('Длина окружности радиусом 5:', calculCircumference(5));
