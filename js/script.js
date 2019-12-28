'use strict'; 

let money = prompt("Каков Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let answer1 = prompt("Введите обязательную статью расходив в этом месяце", ""),
    answer2 = prompt("Во сколько обойдётся?", ""),
    answer3 = prompt("Введите обязательную статью расходив в этом месяце", ""),
    answer4 = prompt("Во сколько обойдётся?", "");

appData.expenses[answer1] = answer2; //вместо скобок можно поставить точку 
appData.expenses[answer3] = answer4; //вместо скобок можно поставить точку

alert(appData.budget / 30);