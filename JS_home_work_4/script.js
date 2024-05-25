// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i <= 10; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if( i % 2 === 1) {
//         console.log(`${i} - нечетное число`);
//     } else {
//         console.log(`${i} - четное число`);
//     }
// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// const newArr = arr.filter((num) => num < 4 || num > 5);
// console.log(newArr);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3


function randomArr(min, max, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        // function randomNumber(min, max) {
        //     return Math.random() * (max - min) + min;
        // }
        // arr.push(Math.round(Math.random() * (max - min) + min));
        arr.push(Math.round(Math.random() * 10));
    }
    return arr;
}

function sumNum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function minNumber(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        } else {
            continue
        }
    }
    return min;
}

function searchNum(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) console.log(`Индекс числа 3 в массиве равен: ${i}`);
    }
}

const randomArray = randomArr(0, 9, 5);
console.log(...randomArray);

// 1
console.log(`Сумма элементов массива(sumNum): ${sumNum(randomArray)}`);
// Метод reduce() принимает два параметра: функцию-колбэк и начальное значение для аккумулятора.
// Сама функция-колбэк может принимать четыре параметра:
// acc — текущее значение аккумулятора;
// item — элемент массива в текущей итерации;
// index — индекс текущего элемента;
// arr — сам массив, который мы перебираем.
const sum = randomArray.reduce((prev, curr) => prev + curr, 0);
console.log(`Сумма элементов массива(reduce): ${sum}`);

// 2
console.log(`Минимальное число массива(minNumber): ${minNumber(randomArray)}`);
const min = Math.min(...randomArray); // Math.min() + spread (...) 
console.log(`Минимальное число массива(Math.min() + spread (...)): ${min}`);

// 3
searchNum(randomArray);
console.log(randomArray.indexOf(3)); // Вернет индекс первой найденной тройки. Если такого числа нет возвращается -1.
console.log(`Есть ли в массиве число 3: ${randomArray.includes(3)}`);



// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx


let str = "x";
for (let i = 0; i < 20; i++) {
    console.log(str + '\n');
    str += "x";
}


for (let i = 1; i <= 20; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += "x";
    }
    console.log(str);
}
