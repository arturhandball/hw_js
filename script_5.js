/*1. Сделайте функцию, которая отнимает от первого числа второе и делит на 
третье. Числа передаются параметром.*/

// function getResult (num1, num2, num3) {
//     let result = (num1 - num2) / num3;
//     console.log(result)
// }
// getResult(8, 1, 4);


/*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число 
передается параметром.*/

// function result (num) {
//     console.log(Math.pow(num, 2));
//     console.log(Math.pow(num, 3));
// }
// result(3);
// console.log('----------------');
// result(5);

/*3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.*/

// function getMax (num1, num2){
//     if (num1 > num2) {
//         return console.log(num1 + ' больше чем ' + num2 )
//     } else if (num1 < num2) {
//         return console.log (num1 + ' меньше чем ' + num2)
//     } else {
//         console.log('значения равны');
//     }
// }
// getMax(2, 9);
// getMax(9, 5);
// getMax(4, 4);

/*4. Напишите две функции: первая ф-ция должна возвращать массив с 
числовыми значениями, диапазон которых должен вводиться пользователем 
с клавиатуры; вторая – выводить полученный массив.*/
// let arr = [];
// function getArray () {

//    first = +prompt('Ввдите первое число');
//    last = +prompt('Введите последнее число');

//     for (let i = first; i <= last; i++){
//        arr.push(i);
//     }
// }

// function showArray(a) {
//     console.log(a);
// }

// getArray();
// showArray(arr);


/* 5) Сделайте функцию isEven() (even - это четный), которая параметром 
принимает целое число и проверяет: четное оно или нет. Если четное - пусть 
функция возвращает true, если нечетное — false.*/

// function isEven(num5) {
//     if (num5 % 2 == 0) {
//         console.log('Четное');
//         return true;
//     } else {
//         console.log('Нечетное');
//         return false;
//     }
// }

// isEven(4);
// isEven(5);

/*6. Напишите ф-цию, в которую передается массив с целыми числами. 
Верните новый массив, где останутся лежать только четные из этих чисел. 
Для этого используйте вспомогательную функцию isEven из предыдущей 
задачи.*/
// let arr = [];
// function getArray (length) {

//     for(let i = 1; i <= length; i++){
//         arr.push(i);
//     } console.log(arr)
// }
// let arr1 = [];
// function isEven() {

//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 == 0) {
//             arr1.push(arr[i]);
//         } else {
//             continue;
//         }
//     }
//     console.log(arr1);
// }

// getArray(25);
// isEven();

/* 7) Пирамиды*/



// function pyramid (h, s){
//     for (let i = 1; i <= h; i++){
//         let str = '';
//         for( let k = 0; k < i; k++){
//             if (s == undefined || s == ' ' || s == ''){
//                 str += i;
//             } else {
//                 str += s;
//             };
         
//         } console.log(str);
//     }  
// }

// pyramid(5, '');

/*8) Пирамиды из звездочек + reverse*/

// function pyramid (h){
//     h = +prompt('Высота треугольника');
//     let row;
//     for (let i = 1; i <= h; i++){
//         row = '';
//         for (let k = 1; k <= h-i; k++){
//         row += ' ';
//     }
//         for( let l = 1; l <= i*2-1; l++){
//         row += '*';
//     }
//     console.log(row);
//     }  

    
// }

// function pyramidReverse (h){
//     h = +prompt('Высота треугольника');
//     let row;
//     for (let i = h; i > 0; i--){
//         row = '';
//         for (let k = 1; k <= h-i; k++){
//         row += ' ';
//     }
//         for( let l = 1; l <= i*2-1; l++){
//         row += '*';
//     }
//     console.log(row);
//     }  
    
// }

// pyramid()
// pyramidReverse()

/*9. Напишите ф-цию, которая возвращает массив заполненный числами 
Фибоначи от 0 до 1000.*/

// function fibanachi (){
//     let arr = [0, 1];
//     for (let i = 2; i < Infinity; i++){
//         let a = arr[i - 1];
//         let b = arr[i - 2];
//         let num = a+b
//         if (num > 1000) {
//             break;
//         }
//         arr.push(num)
//     }
//     console.log(arr)

// }

// fibanachi()

/* 10) Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
опять сложите его цифры. И так, пока сумма не станет однозначным числом 
(9 и менее). Исп. Рекурсию.*/

// let num = 15698;

// function result(arr){
//     let a = String(arr);
//     let sum = 0;
//     for (let i = 0; i < a.length; i++){
//         sum += +a[i];
//     } 
//     if (sum > 9) {
//         result(sum);
//     } else {
//         console.log(sum);
//     }

// }

// result(num)


/*11. Дан массив с числами (передается параметром). Выведите 
последовательно его элементы, используя рекурсию и не используя цикл.*/

// function array (arr){
//     console.log(arr[i]);
//     i++
//     if (i < arr.length) array(arr)
// }
// let i = 0;
// array([1, 20, 5, 35, 14, 8, 96, 0])



/* 12) Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер 
группы студента и выводящую введённые данные в следующем виде:
***************************** 
* Домашняя работа: «Функции» * 
* Выполнил: студент гр. W4017 * 
* Иванов Иван Иванович * 
***************************** 
Размер рамки должен определятся автоматически по самой длинной строке. 
Рамку вывести в консоль.*/

// const fame = function() {
//     let name = prompt('Enter your name');
//     let lastName = prompt('Enter your last name');
//     let patro = prompt('Enter your patronymic');
//     let group = prompt('Enter your group');
//     let hw = 'Домашняя работа: «Функции»';
//     let numGroup = 'Выполнил: студент гр. ' + group;
//     let fio = lastName + ' ' + name + ' ' + patro;
//     let a = Math.max(hw.length, numGroup.length, fio.length );
//     let b = '* ';
//     let c = '*';
//     let d = ' ';
//     console.log(c.repeat(a+4));
//     console.log(b + hw + d.repeat(a - hw.length + 1) + c);
//     console.log(b + numGroup + d.repeat(a - numGroup.length + 1) + c);
//     console.log(b + fio + d.repeat(a - fio.length + 1) + c);
//     console.log(c.repeat(a+4));
// }

// fame();


/* 13) 13. Напишите ф-цию, которая должна проверить правильность ввода адреса 
эл. почты, не используя регулярные выражения. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме 
одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
быть первыми и последними в адресе, и идти подряд, например: «..», «@.», 
«.@» или «@@», «_@», «@-», «--» и т.п. 
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
имя может содержать только буквы, цифры, но не быть первыми и 
единственными в имени, и точку; 
c. после последней точки и после @, домен верхнего уровня (ru, by, com и 
т.п.) не может быть длиной менее 2 и более 11 символов.*/

// const email = function(){
//     let email = prompt('Введите свой email').toLowerCase();
//     let letter = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'p', 'o', 'i', 'u', 'y', 't', 'r', 'e', 'w', 'q', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'b', 'v', 'c', 'x', 'z']
//     let symbol = ['-', '_', '.', '@']; 
//     let arr = Array.from(email);

//     for (let i = 0; i < arr.length; i++ ){
//         let char = arr[i];
//         if (letter.indexOf(char) == -1 && symbol.indexOf(char) == -1) {
//             console.log ('неверный символ')
//         }
//     }

//     if (arr.indexOf('@') != arr.lastIndexOf('@') || arr.indexOf('@') == -1) {
//         console.log ('проверьте символ @')
//     }

//     if (arr.lastIndexOf('.') < arr.indexOf('@') || arr.indexOf('.') == -1) {
//         console.log('проверьте символ "." после @')
//     }

//     if (symbol.includes(arr[0]) || symbol.includes(arr[arr.length - 1])) {
//         console.log('Проверьте первый и последний символы')
//     }

//     for (let i = 0; i < arr.length; i++){
//         if (symbol.includes(arr[i]) && symbol.includes(arr[i - 1])) {
//             console.log ('повторение символов')
//         }
//     }

//     let firstPart = email.substring(0, email.indexOf('@'));
//     if (firstPart.length <= 2) {
//         console.log ('слишком мало символов до @')
//     }

//     let domen = email.substring(email.lastIndexOf('.')+1);
//     if (domen.length < 2 || domen.length > 11) {
//         console.log('домен меньше 2 или больше 11 символов')
//     }

// }
// email()