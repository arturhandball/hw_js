console.log('Задача 1');
let a1 = 1;
let b1 = 35;

while(a1 < 51) {
    console.log(a1);
    a1++;
}

while(b1 > 7){
    console.log(b1);
    b1--;
}

console.log('Задача 2');

let a2 = 89;

while(a2 >= 11) {
    document.write(a2 + '<br />');
    a2--;
}

console.log('Задача 3');

let sum3 = 0;

for (let i = 1; i <= 100; i++){
    sum3 += i;
} console.log('Сумма от 1 до 100 равна ' + sum3);

console.log('Задача 4');

let a4 = 5;
let sum4 = 0;

for (let i1 = 1; i1 <= a4; i1++){
    sum4 = 0
    for (let i2 = 1; i2 <= i1; i2++){
        sum4 += i2;
    }
    console.log('Сумма по числу ' + i1 + ' равна ' + sum4);
} 

console.log('Задача 5');

for (let i5 = 8; i5 <= 56; i5++){
    if (i5 % 2 == 0) {
        console.log(i5);
    }
}

let a5 = 8;

do {
    if(a5 % 2 == 0){
        console.log(a5);
    }
    a5++;
} while (a5 <= 56)

console.log('Задача 6');

for (let i6 = 1; i6 <=10; i6++){
    for(let j6 = 1; j6 <= 10; j6++){
        console.log(i6 + ' * ' + j6 + ' = ' + (i6 * j6));
    }
}

console.log('Задача 7');

let n7 = 1000;
let num7 = 0 //количество итераций

while (n7 >= 50){
    n7 = n7 / 2;
    num7++
} console.log('Результат деления ' + n7 + '. Количество итераций ' + num7);

console.log('Задача 8');// не смог поставить грамотную проверку на число

let a8 = prompt('Введите число');
let i8 = 0;//количество введенных цифр
let sum8 = 0;// сумма


while ((a8 != 0) && (a8 != null)){

    i8 = i8 + 1;
    sum8 = sum8 + Number(a8);
    a8 = prompt('Введите число');

}console.log('Введено цифр ' + i8 + '. Сумма чисел ' + sum8 + ' Среднее ' + (sum8 / i8));

console.log('Задача 9');//нет идей для цикла

let a9 = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let c9;
for ( let i9 = 0; i9 < a9.length; i9++){
}

console.log('Задача 10');

{let a10 = 2456;

let b10 = 0;//количество цифр

let c10 = String(a10);

let d10 = 0;

let e10 = '';

for (let i = 0; i < c10.length; i++){
    
    b10++;
    d10 += Number(c10[i]);
    e10 += c10[(c10.length - 1) - i];

}
console.log(b10 + ' =Количество цифр. ' + d10 + ' =Сумма чисел ' + 'Обратное число = ' + e10);


}