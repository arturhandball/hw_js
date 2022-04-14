/*Напишите функцию numProducts(num),  которая в зависимости от переданного
 в нее целочисленного аргумента num, будет выводить слово «товар» в нужной форме 
(«12 товаров», но «22 товара»). По умолчанию аргумент num должен иметь значение 0.*/

// const numProducts = function(num) {

//     let result = String(num);

//     if (result[result.length-2] + result[result.length-1] == '12' ||  result[result.length-2] + result[result.length-1] == '13' || result[result.length-2] + result[result.length-1] == '14') {
//         console.log(result + ' товаров')
//     } else{

//     switch(result[result.length-1]) {
//         case '0':
//         case '5':
//         case '6':
//         case '7':
//         case '8':
//         case '9':    
//             console.log(result + ' товаров');
//             break;
//         case '1':
//              console.log(result + ' товар');
//             break;
//         case '2':
//         case '3':
//         case '4':
//             console.log(result + ' товара');
//             break;
//     }
// }

// }

// numProducts(12);
// numProducts(22);
// numProducts(112);
// numProducts(98);
// numProducts(244);


/*9. Создайте функцию "Калькулятор", calc(expression), которая должны уметь вычислять операции: 
сложение, вычитание, умножение, разность; между положительными целочисленными значениями.
 Математическое выражение должно передаваться через параметр expression в виде строки, 
 например: "45+8", "4-23". Если параметр не передается, то нужно запросить выражение через promp.
  Результат вычисления выведите через alert. Используйте регулярные выражения для "парсинг" (обработки) параметра).*/

//   const calc = function (expression) {
//       let num = String(expression);
//       (expression != null) ? num = expression : num = prompt('Введите выражение без пробелов');
//       let regexp = /^[0-9]{1,}[\+\*\-\/][0-9]{1,}$/;
      
//       if (regexp.test(num) == true) {
//           console.log(true);
//           let numbers = num.match(/\d+/g);
//           let a = numbers[0];
//           let b = numbers[1];
//           (num.indexOf('+') > 0) ? console.log(Number(a)+Number(b)) :
//           (num.indexOf('-') > 0) ? console.log(Number(a)-Number(b)) :
//           (num.indexOf('/') > 0) ? console.log(Number(a)/Number(b)) :
//                                    console.log(Number(a)*Number(b));

//       } else {
//           return calc();
//       }

//   }

//   calc();

/*Напиши функцию, которая будет проверять любой объем текста на вхождение плохих (запрещенных) слов,
 и возвращать новый, прошедший цензуру, текст. Запрещенные слова нужно заменить на символы "#" в зависимости от длины слова.
  В функцию нужно передавать два параметра: текст, массив запрещенных слов.*/

  const words = function(text, array) {

    let newText = text.split(/[\.\ \,]?\s/gi);
    console.log(newText)

      for(let i = 0; i < array.length; i++) {
          while (newText.indexOf(array[i]) > 0) {
          newText.splice(newText.indexOf(array[i]),1,'#'.repeat(array[i].length))}
      }
      console.log(newText.join(' '))
  }

  words('этот жестокий мир. съел всю его душу мир',['мир', 'съел'])

