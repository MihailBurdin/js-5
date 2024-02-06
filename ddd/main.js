// №1
// let number = 5;

// if (number < 0) {
//     console.log('Число отрицательное');
// } else if (number > 0) {
//     console.log('Число положительное');
// } else {
//     console.log('Число равно нулю');
// }

// №2

// let str = 'string'

// console.log(str.length)

// 1.3
// let string = 'string'

// console.log(string[5])

// №2

// let num = 10

// if (num % 2 == 0){
//     console.log('Четное')
// } else if (num % 2 != 0){
//     console.log('Не четное')
// };

// №3
// let word1 = "первое";
// let word2 = "второе";

// if (word1[0] === word2[0]) {
//     console.log('Первые буквы совпадают');
// } else {
//     console.log('Первые буквы не совпадают');
// }

// №4
// let word = "примерь";

// if (word.endsWith("ь")) {
//     let last2 = word.charAt(word.length - 2);
//     console.log('Предпоследняя буква:', last2);
// } else {
//     let last = word.charAt(word.length - 1);
//     console.log('Последняя буква:', last);
// }

// №5

// let number = 12345;
// let firstDigit = Number(number.toString()[0]);
// console.log('Первая цифра числа:', firstDigit);

// №6

// let number = 12345;
// let firstDigit = Number(number.toString()[0]);
// let lastDigit = Number(number.toString().slice(-1));
// let sum = firstDigit + lastDigit;
// console.log('Сумма первой и последней цифры числа:', sum);


// №7

// let number = 12345;
// let result = number.toString().length;
// console.log('Количество цифр в числе:', result);

// №8
// let number1 = 12345;
// let number2 = 15678;
// let firstDigit1 = Number(number1.toString()[0]);
// let firstDigit2 = Number(number2.toString()[0]);

// if (firstDigit1 === firstDigit2) {
//     console.log('Первые цифры совпадают');
// } else {
//     console.log('Первые цифры не совпадают');
// }

// №9
// let str = "example";

// if (str.length > 1) {
//     let last2 = str.charAt(str.length - 2);
//     console.log('Предпоследний символ строки:', last2);
// } else {
//     console.log('В строке меньше или равно одного символа.');
// }

// №10

// let num1 = 10;
// let num2 = 2;

// if (num1 % num2 === 0) {
//     console.log('Первое число делится на второе без остатка.');
// } else {
//     console.log('Первое число не делится на второе без остатка.');
// }

// №11

// for (let i = 1;i < 101; i++){
//     console.log(i)
// };

// №12

// for (let i = -100;i < 1; i++){
//     console.log(i)
// };

// №13
// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }

// №14
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }

// №15

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// №16

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log('Сумма всех целых чисел ', sum);


// №17

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         sum += i;
//     }
// }

// console.log('Сумма всех целых нечетных чисел :', sum);

// №18
// let num1 = 10;
// let num2 = 3;
// let result = num1 % num2;
// console.log('Остаток ', num1, 'на', num2, 'равен', result);

// №19
// let str = "Строка";
// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
// }

// №20
// let numbers = [1, 2, 3, 4, 5];
// let result = 0;

// for (let number of numbers) {
//     result += number ** 2;
// }

// console.log('Сумма квадратов :', result);

// №21
// let numbers = [1, 4, 9, 16, 25];
// let result = 0;

// for (let number of numbers) {
//     result += Math.sqrt(number);
// }

// console.log('Сумма квадратных корней :', result);

// №22
// let numbers = [2, 5, 12, 7, 8, 1];
// let result = 0;

// for (let number of numbers) {
//     if (number > 0 && number < 10) {
//         result += number;
//     }
// }

// console.log('Сумма элементов массива в диапазоне (0, 10):', result);

// №23
// let str = 'abcde';
// let result = str.split(''); 
// console.log('Массив букв:', result);

// №24
// let number = 12345;
// let result = Array.from(String(number), Number);
// console.log('Массив цифр:', result);

// №25

// let number = 12345;
// let reversedNumber = parseInt(number.toString().split('').reverse().join(''));
// console.log('Перевернутое число:', reversedNumber);

// №26
// let number = 12345;
// let sumOfDigits = 0;

// while (number > 0) {
//     sumOfDigits += number % 10;
//     number = Math.floor(number / 10);
// }

// console.log('Сумма цифр числа:', sumOfDigits);

// №27

// let array = [];
// for (let i = 1; i <= 10; i++) {
//     array.push(i);
// }
// console.log('Массив целых чисел от 1 до 10:', array);

// №28

// let array = [];
// for (let i = 2; i <= 100; i += 2) {
//     array.push(i);
// }
// console.log('Массив четных чисел от 1 до 100:', array);

// №29

// let nums = [1.456, 2.125, 3.32, 4.1, 5.34];

// let result = nums.map(num => Math.round(num * 10) / 10);
// console.log('Округленные дроби:', result);

// №30

// let numbers = [10, 20, 30, 40, 50];
// let increasedNumbers = numbers.map(num => num * 1.1);
// console.log(' увеличенные на 10%:', increasedNumbers);

// №31

// let array = [];
// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число от 1 до 100
//     array.push(randomNumber);
// }
// console.log('Массив случайных чисел:', array);

// №32

// let number = 12345;
// let strNumber = number.toString();
// for (let i = strNumber.length - 1; i >= 0; i--) {
//     console.log(strNumber[i]);
// }

// №33

// let array = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < array.length; i += 2) {
//     let subArray = array.slice(i, i + 2);
//     console.log(subArray);
// }

// №34

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let mergedArray = arr1.concat(arr2);
// console.log('Объединенный массив:', mergedArray);