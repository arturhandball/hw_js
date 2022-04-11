/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального 
поиска и замены.*/

// let str = 'aaa@bbb@ccc';
// console.log( str.replace(/@/g, '!'));

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту 
дату в формат 31/12/2025. */

// let date = '2025-12-31';
// let date2 = date.split('-').reverse().join('/');
// console.log(date2);

/* 3 Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово 
«javascript» тремя разными способами (через substr, substring, slice).*/

// let str = 'Я учу javascript!';
// console.log(str.substr (2, 3) + str.substr (5, 11));
// console.log(str.substring (2, 6) + str.substring (6, 16));
// console.log(str.slice (2, 6) + str.slice (6, 16) );

/* 4 Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
//     console.log(sum)
// }
// console.log(Math.sqrt(sum));

/*5. Даны переменные a и b. Отнимите от a переменную b и результат 
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную 
c записалось положительное значение. Проверьте работу скрипта при a и b, 
равных соответственно 3 и 5, 6 и 1*/

// let a = 5;
// let b = 98;
// let c = a - b;

// c > 0 ? console.log(c) : console.log(Math.abs(c));

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
Для решения этой задачи напишите функцию, которая будет добавлять 0 
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 
сделает 01.09.2014).*/


//   МОЖЕТ ЕСТЬ КАКОЙ-ТО ДРУГОЙ СПОСОБ?))

// const times = function (){
//     let date = new Date();
//     let timeForm = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
//     //месяц отсчет с 0!!
//     let dateForm = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '.' + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' + date.getFullYear();
//     console.log(timeForm + ' ' + dateForm);
// }

// times();


/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая 
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
количество раз, буква 'a'.*/

// let str = 'aa aba abba abbba abca abea';
// console.log (str.match(/ab+a/g));

/*8. Напишите ф-цию строгой проверки ввода номер телефона в 
международном формате (<код страны> <код города или сети> <номер 
телефона>). Функция должна возвращать true или false. Используйте 
регулярные выражения.*/

// let phone = '+375 (29) 253-55-66';

// let regexp = /^[\ \+]?[\d]{1,3}[\ ]?[\(\-]?[\d]{1,2}[\)\-]?[\ ]?[\d]{1,3}[\ \-]?[\d]{1,2}[\ \-]?[\d]{1,2}$/g;

// console.log(regexp.test(phone));

/*9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих 
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме 
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
имя может содержать только буквы, цифры, но не быть первыми и 
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов. 
Функция должна возвращать true или false. Используйте регулярные 
выражения.*/

// let email = 'ar-tur_js@gmail.com'

// let regexp = /^[\w]{2,}[\.\-]?[\w]{1,}@[\w]{2,}[\.\-]?[\w]{1,}.[a-z]{2,11}$/gi;

// console.log(regexp.test(email));

/*10. Напишите ф-цию, которая из полного адреса с параметрами и без, 
например: https://tech.onliner.by/2018/04/26/smart-do-200/? 
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес 
доменного имени (https://tech.onliner.by), остальную часть адреса без 
параметров (/2018/04/26/smart-do-200/), параметры 
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе 
может и не быть каких-либо составляющих. Ф-ция должна возвращать 
массив.*/

// let adress = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';

// let regexpDomen = /^[\w]{3,5}[\:][\/][\/][\w\.\-]{2,}.[a-z]{2,11}/gi;
// let regexpLastDomen = /[\/][\w\/\-]{2,}[\/]/gi;
// let regexpParam = /[\?][\w\=\&\-\.]{2,}/gi;
// let regexpHash = /[\#]\w+$/gi;

// let arr = [].concat(adress.match(regexpDomen), adress.match(regexpLastDomen), adress.match(regexpParam), adress.match(regexpHash));

// console.log(arr);


