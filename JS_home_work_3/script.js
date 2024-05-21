// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const exponentiationNum = (number, rank) => {
    number = +prompt('Введите число');
    rank = +prompt('Введите степень');
    return number ** rank;
}

const sumNum = (param1, param2) => param1 + param2;

const numLevelFirst = exponentiationNum();
const numLevelSecond = exponentiationNum();

console.log(`${numLevelFirst} + ${numLevelSecond} = ${sumNum(numLevelFirst, numLevelSecond)}`);



// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// function calcSalary(numSalary) {
//     numSalary = prompt('Введите число');
//     if (isNaN(numSalary) === false) {
//         alert(`Размер заработной платы за вычетом налогов равен ${numSalary * 0.87}`);
//     } else {
//         alert('Вы ввели не число');
//     }
// }

// calcSalary();



// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// const maxNum = (numA, numB, numC) => {
//     let  max;
//     numA = +prompt('Введите первое число');
//     numB = +prompt('Введите второе число');
//     numC = +prompt('Введите третье число');

//     if (Number.isInteger(numA) === true || Number.isInteger(numB) === true || Number.isInteger(numC) === true) {
//         max = numA;
//         if (numB > max) max = numB;
//         if (numC > max) max = numC;
//     } 

//     if (isNaN(max)) alert('Введенные значения должны быть числами');
   
//     return max;
// }

// console.log(`${maxNum()}`);



// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// const sumNumb = (numberA, numberB) => numberA + numberB;
// const diffNum = (numberA, numberB) => (numberA > numberB) ? numberA - numberB : numberB - numberA;
// const prodNum = (numberA, numberB) => numberA * numberB;
// const divNum = (numberA, numberB) => numberA / numberB;

// numA = +prompt('Введите первое число');
// numB = +prompt('Введите второе число');
// console.log(`'+'  ${sumNumb(numA, numB)}`);
// console.log(`'-'  ${diffNum(numA, numB)}`);
// console.log(`'*'  ${prodNum(numA, numB)}`);
// console.log(`'/'  ${divNum(numA, numB)}`);