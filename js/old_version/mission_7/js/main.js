'use script';

let startCalc = document.getElementById('start')[0],
  budgetValue = document.getElementsByClassName('budget-value')[0],
  daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

  expensesItem = document.querySelectorAll('.expenses-item'),
  expensesItemBtn = document.getElementsByTagName('button')[0],
  optionaExpensesItemBtn = document.getElementsByTagName('button')[1],
  countBudgetBtn = document.getElementsByTagName('button')[2],
  optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  chooseIncome = document.querySelector('.choose-income'),
  savings = document.querySelector('#savings'),
  chooseSum = document.querySelector('.choose-sum'),
  choosePercent = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('day-value');

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

      if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != "" && b != "" && a.length < 50) {
        console.log("done");

        appData.expenses[a] = b;
      } else {
        alert("Некорректный ввод данных");
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + " грн.");
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Это высокий уровень достатка!");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt('Под какой процент?', '');

      appData.monthIncome = (save / 100 / 12 * percent).toFixed();
      alert('Доход в месяц с вашего депозита ' + appData.monthIncome + ' грн.');
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let charges = prompt('Статья необязательных расходов?', '');
      appData.optionalExpenses[i] = charges;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function () {
    let items = prompt('Что принесёт дополнительный доход? (Перечислит через запятую)', '');

    if (typeof (items) != 'string' || typeof (items) == null || items == '' || items == undefined) {
      console.log('Вы ввели некорректное значение. Поробуйте снова');
    } else {
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-то ещё?', ''));
      appData.income.sort();
    }

    appData.income.forEach(function (item, i) {
      alert('Способы доп. заработка: ' + (i + 1) + '—' + item);
    });
  }
};

for (let key in appData) {
  console.log('Наша программа включает в себя: ' + (key + 1) + ' — ' + appData[key]);
}