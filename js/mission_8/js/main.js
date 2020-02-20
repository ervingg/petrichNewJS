'use script';

let startBtn = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

  expensesItem = document.querySelectorAll('.expenses-item'),
  expensesItemBtn = document.getElementsByTagName('button')[0],
  optionalExpensesItemBtn = document.getElementsByTagName('button')[1],
  countBudgetBtn = document.getElementsByTagName('button')[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  chooseIncome = document.querySelector('.choose-income'),
  savings = document.querySelector('#savings'),
  chooseSum = document.querySelector('.choose-sum'),
  choosePercent = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

expensesItemBtn.disabled = true;
optionalExpensesItemBtn.disabled = true;
countBudgetBtn.disabled = true;

let money,
  time,
  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  };


startBtn.addEventListener('click', function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Каков Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Каков Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  expensesItemBtn.disabled = false;
  optionalExpensesItemBtn.disabled = false;
  countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', () => {
  let sum = 0;
  let allSum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
      a != "" && b != "" && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      alert("Некорректный ввод данных");
      i--;
    }

    expensesValue.textContent = sum;
    appData.moneyPerDay = ((money - sum) / 30).toFixed();
  }
  return appData.moneyPerDay;
});

optionalExpensesItemBtn.addEventListener('click', () => {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let charges = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = charges;

    optionalExpensesValue.textContent += appData.optionalExpenses[i] + '; ';
  }
});

countBudgetBtn.addEventListener('click', () => {
  dayBudgetValue.textContent = appData.moneyPerDay;

  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});

chooseIncome.addEventListener('input', () => {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

savings.addEventListener('click', () => {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', () => {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = (sum / 100 / 12 * percent);
    appData.yearIncome = (percent / 100 * percent);

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener('input', () => {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = (sum / 100 / 12 * percent);
    appData.yearIncome = (percent / 100 * percent);

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});