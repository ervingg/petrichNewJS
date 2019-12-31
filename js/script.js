// 'use strict'; 

// let money = prompt("Каков Ваш бюджет на месяц?", ""),
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
// let appData = {
//   budget: money,
//   timeData: time,
//   expenses: {},
//   optionalExpenses: {},
//   income: [],
//   savings: false
// };

// let answer1 = prompt("Введите обязательную статью расходив в этом месяце", ""),
//     answer2 = prompt("Во сколько обойдётся?", ""),
//     answer3 = prompt("Введите обязательную статью расходив в этом месяце", ""),
//     answer4 = prompt("Во сколько обойдётся?", "");

// appData.expenses[answer1] = answer2; //вместо скобок можно поставить точку 
// appData.expenses[answer3] = answer4; //вместо скобок можно поставить точку

// alert(appData.budget / 30);


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

let answer = prompt('Введите название вашего браузера, чтобы мы могли сообщить Вам поддерживаем ли мы этот браузер.', '');

if (answer == 'Edge') {
  alert("Извините, но мы не поддерживаем этот браузер :(");
} else if (answer == 'FireFox' ||
    answer == 'Chrome' ||
    answer == 'Safari' ||
    answer == 'Opera') {
  alert("Отлично, мы поддерживаем Ваш браузер!");
} else {
  alert('Мы надеемся, что эта страница выглядит хорошо :)');
}