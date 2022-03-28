console.log('Задание 1') //1

let age = prompt('Сколько Вам лет?');
let nameFirst = prompt('Ваше имя?');
let city = prompt('В каком городе проживаете?');
let company = prompt('В какой компании работаете?');
let phone = prompt('Ваш контактный телефон?');
let email = prompt('Ваш контактный email');

console.log('Меня зовут ' + nameFirst + '. Мне ' + age + '. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контакты: ' + phone + ' ' + email + '.');


console.log('Задание 2');

let year = 2022 - age;

console.log(nameFirst + ' родился в ' + year + ' году');

console.log('Задание 3');

let str = '129471';

let arr1 = str.slice (0, 1);
let arr2 = str.slice (1, 2);
let arr3 = str.slice (2, 3);
let arr4 = str.slice (3, 4);
let arr5 = str.slice (4, 5);
let arr6 = str.slice (5, 6);

(Number(arr1) + Number(arr2) + Number(arr3) == Number(arr4) + Number(arr5) + Number(arr6)) ? console.log('Сумма равна') : console.log("Сумма не равна");


console.log('Задание 4');

let a = -1;

(a > 0) ? console.log('Верно') : console.log('Ошибка');


console.log('Задание 5');

let a5 = 10;
let b5 = 2;
let sum = a5 + b5;
let diff = a5 - b5;
let mult = a5 * b5;
let divi = a5 / b5;

if (sum > 0) {
    let sum2 = sum**2;
    console.log(sum2);
} else {
    console.log('Попробуй другое число')
}

console.log('Задание 6');

let a6 = 10;
let b6 = 2;

if((2 < a6 && a6 < 11) || (6 <= b6 && b6 < 14)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

console.log('Задание 7');

let n = prompt('Введите число от 1 до 59');

if (0 < n && n <= 15) {
    console.log('Первая четверть')
} else if (15 < n && n <= 30) {
    console.log('Вторая четверть');
} else if (30 < n && n <= 45) {
    console.log('Третья четверть');
} else if (45 < n && n < 60) {
    console.log('Четвертая четверть');
} else {
    console.log('Перечитай условие');
}

console.log('Задание 8');

let day = prompt('Введите число от 1 до 31');

if (0 < day && day <= 10) {
    console.log('Первая декада')
} else if (10 < day && day <= 20) {
    console.log('Вторая декада');
} else if (20 < day && day <= 31) {
    console.log('Третья декада');
} else {
    console.log('Перечитай условие');
}

console.log('Задание 9');

let day9 = prompt('Введите число больше 0');
let year9 = (day9 / 365);
let month9 = (day9 / 31);
let week9 = (day9 / 7);
let hour9 = (day9 * 24);
let minute9 = (hour9 * 60);
let second9 = (minute9 * 60);

if (year9 > 0) {
    console.log(year9 + ' г. ' + day9 + ' дней ' + month9 + ' месяцев ' + week9 + ' недель ' + hour9 + ' часов ' + minute9 + ' минут ' + second9 + ' секунд.')
} else {
    console.log('Выполни условие');
}

if (year9 < 1) { console.log('Меньше года');}
if (month9 < 1) { console.log('Меньше месяца');}
if (week9 < 1) { console.log('Меньше недели');}



console.log('Задание 10');

let day10 = prompt('Ведите число от 1 до 365');
let month10;

if (day10 < 32) {
    month10 = 1;
    console.log('Номер месяца в году ' + month10);
} else if (32 <= day10 && day10 < 60) {
    month10 = 2;
    console.log('Номер месяца в году ' + month10);
}  else if (60 <= day10 && day10 < 91) {
    month10 = 3;
    console.log('Номер месяца в году ' + month10);
}  else if (91 <= day10 && day10 < 121) {
    month10 = 4;
    console.log('Номер месяца в году ' + month10);
}  else if (121 <= day10 && day10 < 152) {
    month10 = 5;
    console.log('Номер месяца в году ' + month10);
}  else if (152 <= day10 && day10 < 182) {
    month10 = 6;
    console.log('Номер месяца в году ' + month10);
}  else if (182 <= day10 && day10 < 213) {
    month10 = 7;
    console.log('Номер месяца в году ' + month10);
}  else if (213 <= day10 && day10 < 244) {
    month10 = 8;
    console.log('Номер месяца в году ' + month10);
}  else if (244 <= day10 && day10 < 274) {
    month10 = 9;
    console.log('Номер месяца в году ' + month10);
}  else if (274 <= day10 && day10 < 305) {
    month10 = 10;
    console.log('Номер месяца в году ' + month10);
}  else if (305 <= day10 && day10 < 335) {
    month10 = 11;
    console.log('Номер месяца в году ' + month10);
}  else if (335 <= day10 && day10 < 366) {
    month10 = 12;
    console.log('Номер месяца в году ' + month10);
}  else  {
    console.log('Перечитай условие');
}

switch(month10) {
    case 1:
    case 2:
    case 12:
        console.log('Это зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Это весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Это лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Это осень');
        break;
    default:
        console.log('Что-то пошло не так. Перечитай условие')
} 