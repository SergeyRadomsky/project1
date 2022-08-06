"use strict"

let money = prompt("Ваш бюджет на месяц");
let time = prompt("Ваш бюджет на месяц");

let appData = {
    budget: money,
    expenses: {},
    income: [],
    optionalExpenses: {},
    timeData: time,
    savings: false,
};

let a1 = prompt("Введите обязательную стать расходов", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную стать расходов", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

console.log(appData.budget / 30);
