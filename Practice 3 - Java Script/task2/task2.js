/* Задание 2
Создайте функцию, которая на вход принимает функцию-колбэк и через несколько секунд возвращает некоторые данные.
Используйте функцию-колбэк, чтобы вывести эти данные в консоль после завершения асинхронной операции.
Создайте аналогичную функцию с использованием промиса, обработайте успешное и неуспешное выполнение промиса.
Создайте аналогичную функцию с использованием синтаксиса async/await, обработайте успешное и неуспешное выполнение функции.
Приведите пример параллельного выполнения нескольких асинхронных функций.
 */

// --- Функция с использованием колбэка ---
function fetchDataCallback(callback) {
    setTimeout(() => {
        const data = {name: 'Функция с использованием колбэка'};
        callback(null, data);
    }, 2000);
}

fetchDataCallback((error, data) => {
    if (error) {
        console.error('Ошибка:', error);
    } else {
        console.log('Данные получены (callback):', data);
    }
});

// --- Функция с использованием промиса ---
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const data = {name: 'Функция с использованием промиса'};
                resolve(data);
            } else {
                reject('Ошибка при получении данных');
            }
        }, 2000);
    });
}

fetchDataPromise()
    .then(data => {
        console.log('Данные получены (promise):', data);
    })
    .catch(error => {
        console.error('Ошибка (promise):', error);
    });

// --- Функция с использованием async/await ---
async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log('Данные получены (async/await):', data);
    } catch (error) {
        console.error('Ошибка (async/await):', error);
    }
}

fetchDataAsync();

// --- Параллельное выполнение нескольких асинхронных операций ---
async function fetchMultipleData() {
    const fetch1 = fetchDataPromise();
    const fetch2 = fetchDataPromise();

    try {
        const results = await Promise.all([fetch1, fetch2]);
        console.log('Все данные получены параллельно:', results);
    } catch (error) {
        console.error('Ошибка при параллельном выполнении:', error);
    }
}

fetchMultipleData();
