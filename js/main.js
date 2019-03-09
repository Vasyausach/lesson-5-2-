let startBtn = document.getElementById('start'), //начать расчет

    budgetValue = document.getElementsByClassName('budget-value'), //доход
    dayBudgetValue = document.getElementsByClassName('daybudget-value'), //буюджет на один день
    levelValue = document.getElementsByClassName('level-value'), //уровень дохода
    expensesValue = document.getElementsByClassName('expenses-value'), //обязательные расходы
    optionalExpensesValue = getElementsByClassName('optionalexpenses-value'), //возможные траты
    incomeValue = document.getElementsByClassName('income-value'), //дополнительный доход
    monthSavingsValue = getElementsByClassName('monthsavings-value'), //накопления за один месяц
    yearSavingsValue = getElementsByClassName('yearsavings-value'), //накопления за один год

    expensesItem = document.getElementsByClassName('expenses-item'), //обязательные расходы

    approve1 = document.getElementsByTagName('button')[0], //утвердить
    approve2 = document.getElementsByTagName('button')[1], //утвердить
    calculate = document.getElementsByTagName('button')[2], //рассчитать

    optionalExpenses1 = document.querySelectorAll('.optionalexpenses-item')[0], //необязательные расходы
    optionalExpenses2 = document.querySelectorAll('.optionalexpenses-item')[1], //необязательные расходы
    optionalExpenses3 = document.querySelectorAll('.optionalexpenses-item')[2], //необязательные расходы

    income = document.querySelector('#income'), //статьи
    savings = document.querySelector('#savings'), //чекбокс
    sum = document.querySelector('#sum'), //сумма
    percent = document.querySelector('#percent'), //процент
    yearValue = document.querySelector('.year-value'), //год
    monthValue = document.querySelector('.month-value'), //месяц
    dayValue = document.querySelector('.day-value'); //день

console.log(startBtn);
console.log(budgetValue);
console.log(dayBudgetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalExpensesValue);
console.log(incomeValue);
console.log(monthSavingsValue);
console.log(yearSavingsValue);
console.log(expensesItem);
console.log(approve1);
console.log(approve2);
console.log(calculate);
console.log(optionalExpensesItem);
console.log(income);
console.log(savings);
console.log(sum);
console.log(percent);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);