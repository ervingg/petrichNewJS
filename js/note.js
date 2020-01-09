'use strict';

// //УСЛОВИЯ
// if (5 * 5 == 25) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let num = 50;

// if (num < 49) {
//   console.log("Неверно");
// } else if (num > 100) {
//     console.log("Такого быть не может :)");
// } else {
//   console.log("Всё верно! Num не может быть меньше 49 и больше 100");
// }

// (num == 100) ? console.log("Verno") : console.log("Net");

// let year = prompt("Какой год наступит через 8 часов?", "");

// if (year == 2020) {
//   alert("Да, ты прав!");
// } else {
//   alert("Не, нихуя");
// }


// let year1 = prompt("В каком году умер Ейнштейн?", "");

// if (year < 1955) {
//   alert("Нет, слишком рано.");
// } else if (year > 1955) {
//   alert("Нет, слишком поздно.");
// } else {
//   alert("Верно!");
// }


// let accessAllowed;
// let age = prompt("Сколько вам лет?", "");

// if (age < 18) {
//   accessAllowed = false;
// } else if (age == 18) {
//     accessAllowed = true;
// } else if (age > 18) {
//     accessAllowed = true;
// }

// alert(accessAllowed);


// let age = prompt("Ваш возраст?", "");

// let message = (age < 15) ? "Здарова, пездюк!" :
//   (age < 18) ? "Сорян, но ты всё ещё пездюк)" :
//   (age < 30) ? "Хеллоу, бойчик!" : "Здарова, олдыч))";

// alert(message);


// let answer = prompt("Какое официальное название JS?", "");

// if (answer == "ES6") {
//   alert("Верно!");
// } else if (answer == "es6") {
//     alert("Верно!");
// } else {
//   alert("Неправильно(( ES6!!!");
// }

// let num = prompt('Введите число', '');

// if (num > 0) {
//   alert( 1 );
// } else if (num > 0) {
//     alert( -1 );
// } else {
//   alert( 0 );
// }


// let a = 1,
//     b = 2;

// let result = (a + b < 4) ? console.log("Мало") : console.log("Много");


// let login = prompt('Введите логин', '');

// let message = (login == 'Member') ? 'Hi' :
//   (login == 'Director') ? 'Hello' :
//   (login == '') ? 'No login' : 
//   '';

// alert(message);

// const answer = prompt('Введите название вашего браузера, чтобы мы могли сообщить Вам поддерживаем ли мы этот браузер.', '');

// if (answer == 'Edge') {
//   alert("Извините, но мы не поддерживаем этот браузер :(");
// } else if (answer == 'FireFox' ||
//     answer == 'Chrome' ||
//     answer == 'Safari' ||
//     answer == 'Opera') {
//   alert("Отлично, мы поддерживаем Ваш браузер!");
// } else {
//   alert('Мы надеемся, что эта страница выглядит хорошо :)');
// }


// const number = +prompt('Введите цифру между 0 и 3', '');

// switch (number) {
//   case 0:
//     alert('Вы ввели цифру 0');
//     break;
//   case 1:
//     alert('Вы ввели цифру 1');
//     break;
//   case 2:
//   case 3:
//     alert('Вы ввели цифру 2 || 3');
//     break;
// }


// let apple = "1",
//     pie = "2";

// console.log(+apple + +pie);
// console.log(apple + pie);

// let userName = prompt('Ваше имя?', ''),
//     age = prompt('Ваш возраст?', '');
// alert(`Нихуя себе, ${userName}, тебе ${age} лет!!!`);


// let age = prompt('Number', '');

// if (age >= 14 && age <= 90) {
//   alert(true);
// }

//Напишите условие if для проверки,
//что значение переменной age НЕ находится
//в диапазоне 14 и 90 включительно.
//Напишите 2 варианта: первый с использованием оператора НЕ !, 
//второй – без этого оператора.

// if (!(age >= 14 && age <= 90)) {
//   alert(true);
// }

// if (age < 14 || age > 90) {
//   alert(true);               
// }                           


// let login = prompt("Введите логин", "");

// if (login == "Админ") {

//   let pass = prompt("Введите пароль", "");

//   if (pass == "Я главный") {
//     alert("Здравствуйте!");
//   } else if (pass == null || pass == '') {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }

// } else if (login == null || login == '') {
//   alert("Отменено");
// } else {
//   alert("Извините, но я Вас не знаю");
// }

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 15);

// for (let i = 0; i <= 20; i++) {
//   if (i == 10) {
//     continue;
//   } else if (i == 14) {
//     break;
//   }
//   console.log(i);
// }


// for (let i = 0; i < 10; i++) {

//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i); // 1, затем 3, 5, 7, 9
// }


// for (let i = 2; i <= 10; ++i) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }


// let i = 0;

// while (i < 3) {
//   console.log( `number ${i}!` );
//   i++;
// }



// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);



//выволит простые числа 
// point:
//   for (let i = 2; i <= 10; ++i) {
//     for (let j = 2; j < i; ++j) {
//       if (i % j == 0) {
//         continue point;
//       }
//     }
//     console.log(i);
//   }


// let num = +prompt('0-3', '');

// switch (num) {
//   case 0:
//     console.log("0");
//     break;
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//   case 3:
//     console.log("2 || 3");
//     break;
// }


// let age = prompt('How old are you?', '');

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }


// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }

//   //return a < b ? a : b;
// }

// console.log( min(2, 5) );
// console.log( min(3, -1) );
// console.log( min(1, 1) );


// function pow(x, n) {
//   return (n <= 1) ? x ** n : alert('Значение степени введено неверно');
// }

// let xVessel = +prompt('Придумайте значение для X', ''),
//     nVessel = +prompt('Придумайте значение показателя степени для N', '');

// alert( pow(xVessel, nVessel) );


// let a = 3;

// function addTwo(x) {
//   let ret = x + 2;
//   return ret;
// }

// let b = addTwo(a);
// console.log(b);


let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
  'Вы согласны?',
  () => alert('Вы согласились.'),
  () => alert('Вы отменили выполнение.')
);