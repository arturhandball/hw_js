// 1) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// {
//     let arr = [1, 2, 3, 4, 5];
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     }
// }

// 2) Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут 
// быть положительными и отрицательными. Выведите на экран только отрицательные 
// числа, которые больше -10, но меньше -3.

// {
//     let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
//     let arrNew = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > -10 && arr[i] < -3){
//             arrNew.push(arr[i]);
//         }
//     }console.log(arrNew);
// }

/* 3) Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и 
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого 
массива. Запишите ее в переменную result и выведите.*/

// let arr = [];
// let sum = 0;

// for ( let i = 23; i <= 57; i++){
//     sum += i;
//     arr.push(i);
// }
// console.log(arr);
// console.log(sum);

// {
//     let i = 0;
//     let arr = [];
//     while (true){
//         i++
//         if (23 <= i && i <=57){
//             arr.push(i);
//         } else if (i < 23){
//             continue;
//         } else {
//             break;
//         }
//     } console.log(arr);
// }

/* 4) Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. 
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5*/

// let arr = ['10', '20', '30', '50', '235', '3000', '48', '51', '85', '66', '13'];

// for (let i = 0; i < arr.length; i++){
//     let a = arr[i];
//     if (a.slice(0,1) == 1 || a.slice(0,1) == 2 || a.slice(0,1) == 5) {
//         console.log(a);
//     }
// }

/* 5) Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все 
дни недели, а выходные дни выведите жирным.*/

// let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

// for (let i = 0; i < arr.length; i++){
//     if (i >= 0 && i <= 4) {
//         document.write(arr[i] + `<br/>`);
//     } else if (i > 4 && i < 7) {
//         document.write('<b>' + arr[i] + '</b>' + '<br/>');
//     } else {
//         break;
//     }
// }

/* 6) Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, 
и получите последний элемент массива, используя свойство length.*/

// let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

// arr[arr.length] = 'Last';
// console.log(arr);
// console.log(arr[arr.length - 1]);

/* 7) Запросите у пользователя по очереди числовые значения при помощи prompt и 
сохраните их в массив. Собирайте числа до тех пор, пока пользователь не введет пустое 
значение. Выведите получившийся массив на экран. Выполните сортировку чисел 
массива, и выведите его на экран.*/

//  let arr = [];

// while (true){
//     let num = prompt('Введите значение')
//     if (!num || num == ''){
//         console.log(arr);
//         break;
//     }
//     arr.push(num);
   
// }  
// arr.sort();
// console.log(arr);


/* 8) Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), 
используя цикл while и метод reverse*/

// let arr = [12, false, 'Текст', 4, 2, -5, 0];

//  arr.reverse()
//  console.log (arr);

// let i = arr.length;
// let arr2 = [];
// while (i > 0) {
//     i--;
//     arr2.push(arr[i]);
// } console.log(arr2)

/* 9) Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном 
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].*/

// let arr = [5, 9, 21, 9, , , , , 78, 6, , , , , , , , 7];
// let num = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] != null) {
//         continue;
//     } else {
//         num++
//     }
// }console.log(num)

/* 10) Найдите сумму элементов массива между двумя нулями (первым и последним нулями 
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть 
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или 
[1,8,0,13,76,8,7,0,22,0,2,3,2].*/

//  let arr = [1,8,13,76,0,8,7,22,2,3,0,2];
//  let first = arr.indexOf(0) + 1;
//  let last = arr.lastIndexOf(0);
//  let sum = 0;

//  let result = arr.splice(first, last - first);
//  console.log(result);

//  for (let i = 0; i < result.length; i++){
//      if (result.length != 0) {
//          sum += result[i];
//      } else {
//          break
//      }
    
//  }console.log (sum);

/* 11) Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает 
пользователь. Например: высота = 5, на экране*/

//  let raw = col = prompt('Введите число');
//  let a = ' ';
//  let b = '^';

//  while (col > 0){
//      col--;
//      console.log(Array(col+1).join(a) + Array(2*(raw-col)).join(b));
//  }
