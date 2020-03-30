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

// Напишите условие if для проверки,
// что значение переменной age НЕ находится
// в диапазоне 14 и 90 включительно.
// Напишите 2 варианта: первый с использованием оператора НЕ !, 
// второй – без этого оператора.

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



// выволит простые числа 
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


// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились.'),
//   () => alert('Вы отменили выполнение.')
// );


// let obj = {
//   width: 10,
//   height: 10,
//   bgColor: "red",
// };

// let user = {
//   name: "Peter",
//   age: 25,
// }

// let allInfo = {};

// console.log(Object.assign(allInfo, obj, user));
// console.log(allInfo);

// delete obj.width;

// obj.human = true;

// for (let suck in obj) {
//   console.log('Вот это -> ' + suck + ' имеет значение ' + obj[suck]);
// }

// console.log(Object.keys(obj).length);

// let info = prompt('Что вы хотите узнать о пользователе?', '');
// alert( obj[info] ); 

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj) {
//   for (let key in user) {
//     return false;
//   } 
//   return true;
// }
// console.log(isEmpty());
// ////////////
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);
// /////////////
// let menu = {
//   width: 200,
//   height: 300,
// };

// console.log(menu);

// function multiplyNumeric(obj) {
//   for (let key in menu) {
//     console.log('Multiply the value ' + '"' + key + '"' + ' by 2 and get => ' + (menu[key] * 2));
//   }
// }
// multiplyNumeric();
/////////////
// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push(6);
// arr.shift();
// arr.unshift(0);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function(item, i, massive) {
//   console.log(i + ' => ' + item + '. All mass => ' + massive);
// });

// console.log(arr);

// let newMass = [1, 3, 5, 7, 9];
// //Получаем ключи массива
// for (let key in newMass) {
//   console.log(key);
// }
// console.log('--------------');
// //Получаем значения массива
// for (const key of newMass) {
//   console.log(key);
// }
////////////////////////////
// let ans = prompt('Add goods', ''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let items = ["первый", "второй", "третий"],
//     i = items.join(', ');
// console.log(items);
// console.log(i);

// let items = ["первый", "второй", "третий"],
//     i = items.sort();
// console.log(items);

// let items = [1, 15, 4],
//     i = items.sort(numSort);
// function numSort(a, b) {
//   return a - b;
// }
// console.log(items);

////////////////////////////////////////////
// let id = Symbol('idDesc');

// alert(id.toString()); //выводит символ с его описанием
// alert(id.description); //выводит только описание символа 

// let a = [1, 2, 3],
//     b = [1, 2, 3];

// console.log('1 23'[3]);

//////////////////////////////////////////
// let circle = document.getElementById('circle'), //by id
//     div = document.getElementsByTagName('div'), //by tag
//     square = document.getElementsByClassName('square'), //by class
//     selec = document.querySelectorAll('.section .square'), //чтобы не писать отдельно что-то из того что написанно выше для чего-то
//     selec2 = document.querySelector('.square'), //выдаёт 1й элемент
//     tr = document.querySelectorAll('.tr');

// for (let i = 0; i < selec.length; i++) {
//   tr[i].style.borderBottomColor = 'black';
// }

// tr.forEach(function(item, i, trs) {
//   item.style.backgroundColor = 'orange';
// });

// div[0].style.backgroundColor = 'red';
// div[1].style.backgroundColor = 'yellow';
// div[2].style.backgroundColor = 'green';
// div[3].style.borderRadius = '10%';
// div[4].style.borderRadius = '20%';
// div[5].style.borderRadius = '30%';
// div[6].style.borderRadius = '40%';

// let choise = prompt('orange or green?', '');

//   if (choise == 'orange') {
//     circle.style.backgroundColor = 'orange';
//   } else if (choise == 'green') {
//     circle.style.backgroundColor = 'green';
//   } else {
//     alert('Sosi pidor! Nevernoe znachenie!');
//   }

// console.log(circle);
// console.log(div);
// console.log(square[0]);
// console.log(selec[1]);
// console.log(selec2);

// let figure = document.createElement('div'); //записываем тег, который нужно создать

// figure.style.width = '100px';
// figure.style.height = '70px';
// figure.style.backgroundColor = 'orange';

// figure.classList.add('classExample'); //добавил класс элементу

//ПИШЕТСЯ ТОЛЬКО ДЛЯ РОДИТЕЛЬСКИХ ЭЛЕМЕНТОВ
// document.body.appendChild(figure); //add to end files of html
// wrapper.removeChild('square[1]');

// console.log(figure);


// let circle = document.getElementById('circle'),
//     div = document.querySelector('.div');

// function hid() {
//   this.style.visibility = 'hidden';
// }
// circle.addEventListener('click', hid);

// circle.addEventListener('mouseenter', function() {
//   alert('Message');
// });
// div.addEventListener('click', function() {
//   alert('Message2');
//   this.style.backgroundColor = 'red';
// });

// function col() {
//   this.style.backgroundColor = '#00e51a';
// }
// function mess() {
//   alert('Sosi!');
// }
// function coord() {
//   alert("Coordinati: " + event.clientX + ":" + event.clientY);

//   if (event.clientX <= 50) {
//     alert('DO 50px');
//   } else {
//     alert('Bolishe 50px');
//   }
// }
// div.addEventListener('click', col);
// div.addEventListener('click', mess);
// div.addEventListener('click', coord);

// document.addEventListener("DOMContentLoaded", function() {
//   alert("DOM построен"); // а вот так сработает
// });

// class Sims {
//   handleEvent(event) {
//     switch (event.type) {
//       case 'mousedown':
//         div.style.backgroundColor = '#00e51a'; 
//         break;
//       case 'mouseup':
//         div.style.backgroundColor = 'blueviolet';
//         break;
//       default:
//         break;
//     }
//   }
// }

// let sims = new Sims();
// div.addEventListener('mousedown', sims);
// div.addEventListener('mouseup', sims);
//////////////////////////////////////
// let user = {
//     name: "John"
//   },
//   admin = {
//     name: "Peter"
//   };

// function sayHi() {
//   console.log(this.name);
// }

// user.action = sayHi;
// admin.action = sayHi;

// user.action();
// admin.action();


//CALCULATOR
// let calculator = {
//   read() {
//     this.a = +prompt('Select first number', '');
//     this.b = +prompt('Select second number', '');
//   },
//   sum() {
//     return (this.ab = this.a + this.b);
//   },
//   mul() {
//     return (this.AB = this.a * this.b);
//   }
// };

// calculator.read();
// alert(`Сумма чисел ${calculator.a} и ${calculator.b} равняется: ` + calculator.sum() );
// alert(`Произведение чисел ${calculator.a} и ${calculator.b} равняется: ` + calculator.mul() );


///////////////////////////////////////////////////////
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert(this.step);
//     return this;
//   }
// };

// console.log(ladder.up().up().down().showStep());


// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// console.log(new User('Ervin', 16));
// console.log(new User('Dima', 15));
///////////////////////////////////////////////////
// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('Введите значение', '');
//     this.b = +prompt('Введите значение снова', '');
//   };

//   this.sum = function() {
//     return (this.ab = this.a + this.b);
//   };

//   this.mul = function() {
//     return (this.AB = this.a * this.b);
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( 'Sum=' + calculator.sum() );
// alert( 'Sum=' + calculator.mul() );
////////////////////////////////////
// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('Введите значение', '');
//   };
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);
/////////////////////////
// let word = 'соси хуй пидор';
// console.log(  word.toUpperCase() );
// //////////////////////////
// let num = 3.1293812938129;
// console.log( num.toFixed(3) );
////////////////////////////////////
// console.log(4e-4);
////////////////////////////////////
// let num = 2.3521836;

// console.log( typeof( +num.toFixed(3) ) );
// console.log( typeof( Number( num.toFixed(3) ) ) );
/////////////////////////////
// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// }

// alert(`Число: ${readNumber()}`);

// readNumber();
/////////////////////////////////////
// let num = '21px';
// console.log(isFinite(num));
// console.log(!isFinite(num));
//////////////////////////////////////
// let word = 'hello',
//     word2 = 'H' + word.charAt(1) + word.charAt(2) + word.charAt(3) + word.charAt(4);

// console.log(word2);
// //////////////////////////////////////
// let weq = 'Somebody once told me the world is gonna roll me';

// console.log( weq.includes('me') );
// console.log( weq.startsWith('Some') );
// console.log( weq.endsWith('me') );
///////////////////////////////////////////
//BALL
// let area = document.querySelectorAll('.area')[0],
//     ball = document.querySelectorAll('.ball')[0];

// function coord() {
//   if (event.clientX > 10 && event.clientX < 810 && event.clientY > 10 && event.clientY < 610) {
//   ball.style.left =  event.clientX - 60 + 'px';
//   ball.style.top = event.clientY - 60 + 'px';
//   }
// }

// area.addEventListener('click', coord);
////////////////////////////////
//LIST
// let btnPlay = document.querySelectorAll('.btn-play')[0],
//     btnStop = document.querySelectorAll('.btn-stop')[0],
//     list = document.querySelectorAll('.list')[0];

// btnPlay.addEventListener('click', function() {
//   btnPlay.style.display = 'none';
//   btnStop.style.display = 'inline';
//   list.style.display = 'block';
// });

// btnStop.addEventListener('click', function() {
//   btnPlay.style.display = 'inline';
//   btnStop.style.display = 'none';
//   list.style.display = 'none';
// });
//////////////////////////////////////
// CLOSE BTN
// let panel = document.querySelectorAll('.pane'),
//     btnBox = document.querySelectorAll('.close-btn-box'),
//     btnClose = document.querySelectorAll('.close-btn');

// let panes = document.querySelectorAll('.pane');
//     for(let pane of panes) {
//       pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//       // кнопка становится первым потомком плитки (pane)
//       pane.firstChild.onclick = () => pane.remove();
//     }

// btnClose.addEventListener('click', function() {
//   panel.style.display = 'none';
//   btnBox.style.display = 'none';
//   btnClose.style.display = 'none';
// });
///////////////////////////
//SLIDER
// let btnLeft = document.querySelector('btn-left'),
//     btnRight = document.querySelector('btn-right'),
//     area = document.querySelector('slider-area');

// btnLeft.addEventListener('click', function() {
//   area.style.marginLeft = '-125px';
// });
//////////////////////
// MOBILE EVENTS
// touchstart
// touchmove
// touchend
// touchenter
// touchcancel
// touchleave

// window.addEventListener('DOMContentLoaded', function() {
//   let box = document.querySelector('.box');

//   // box.addEventListener('touchstart', function(e) {
//   //   e.preventDefault();
//   //   // console.log('Event: touchstart');
//   //   console.log(e.touches[0].target);
//   //   // console.log(e.changedTouches);
//   //   // console.log(e.targetTouches);
//   // });

//   box.addEventListener('touchmove', function(e) {
//     e.preventDefault();
//     console.log(e.touches[0].pageX);
//     console.log(e.touches[0].pageY);
//   });

//   // box.addEventListener('touchend', function(e) {
//   //   e.preventDefault();
//   //   console.log('Event: touchend');
//   // });
// });

// let ans = prompt('Name', ''),
//     reg = /g/gi;

// console.log( ans.match(reg) );
////////////////////////////////////
//СКРИПТЫ И ИХ ВЫПОЛНЕНИЕ
// let vrem = setTimeout(sayHi, 2000),
//     vrem2 = setTimeout(function log() {
//       console.log('HI');
//       setTimeout(log, 2000);
//     });

// function sayHi() {
//   console.log('hi');
// }


// document.addEventListener('click', function(event) {
//   let id = event.target.dataset.toggleId;

//   if (!id) {
//     return;
//   }

//   let elem = document.getElementById(id);

//   elem.hidden = !elem.hidden;
// });

// WINCLOSE
// let wind = document.querySelectorAll('.pane'),
//     btn = document.querySelectorAll('.remove-button'),
//     cont = document.querySelector('#container');

// cont.addEventListener('click', function(event) {
//   let target = event.target.className;

//   if (target != 'remove-button') {
//     return;
//   } else {
//     wind.style.display = 'none';
//   }
// });  

// cont.onclick = function(event) {
//   if (event.target.className != 'remove-button') {
//     return;
//   }

//   let pane = event.target.closest('.pane');
//       pane.remove();
// };

//////////////////////////
// действия браузера по умол
// let inText = document.querySelector("#inText");

// inText.onmousedown = function(event) {
//   return false;
// }
/////////////////
// let btnBox = document.querySelector('.btn-box'),
//     btn = document.querySelectorAll('button');

//////////////////////////////
// BUTTONS
// document.querySelector('.btn-box').addEventListener('click', function (event) {
//   if (event.target && event.target.tagName == 'BUTTON') {
//     console.log("Здарова тварына!");
//   }
// });
///////////////////////////////
// let user = {
//   name: 'John',
//   surname: 'Smith',
//   get fullname() {
//     return `${this.name}` + ` ${this.surname}`;
//   }
// };

// console.log(user.fullname);
/////////////////////////////////////////////////
// let arr = ['ervin', 'oleg'];

// let [first, second] = arr;

// console.log(arr);
// console.log(first);
// console.log(second);
//////////////////////////////////////
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// let {
//   size: { 
//     width,
//     height
//   },
//   items: [item1, item2], 
//   title = "Menu"
// } = options;

// alert(title);  
// alert(width); 
// alert(height);
// alert(item1);  
// alert(item2);
//////////////////////////////////////
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`Person ${this.name} said his name`);
  }
}

const john = new Person('John');
john.sayName(); // Person John said his name

class GreatPerson extends Person {
  constructor(name, phrase) {
    super(name); //super вызывает конструктор родителя Person
    this.phrase = phrase;
  }
  sayPhrase() {
    console.log(`${this.name} says: "${this.phrase}"`);
  }
}

const jane = new Person('Jane', 'Hello, World!');
jane.sayName(); // Person Jane said his name
jane.sayPhrase(); // Jane says: "Hello, World!"