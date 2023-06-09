// Завдання 4
// На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни).
// Користувач вирішує купити ремонтних дроїд, які коштують по 3000 кредитів за штуку.
// Ціна одного дроїда зберігається в змінній pricePerDroid (створи і привласни).

// При відвідуванні сторінки, використовуючи prompt, необхідно запитати кількість дроїдів, які користувач хоче купити
// і зберегти в змінну.

// Напиши скрипт який:

// Якщо в prompt була натиснута кнопка Cancel, виводить в консоль повідомлення 'Скасовано користувачем!'.

// В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній totalPrice.

// Перевіряє чи зможе користувач оплатити замовлення:
// якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
// в іншому випадку необхідно порахувати залишок кредитів на рахунку і
// вивести повідомлення 'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'.

console.log("Завдання 4");

let credits = 23580;
console.log(`На вашому рахунку ${credits} кредитів`);

const pricePerDroid = 3000;
let totalPrice;

const quantity = prompt("Скільки дроїдів ви бажаєте придбати?");
let message;
totalPrice = pricePerDroid * quantity;

if (quantity === null) {
  message = "Скасовано користувачем!";
} else if (totalPrice > credits) {
  message = "Недостатньо коштів на рахунку!";
} else if (totalPrice <= credits) {
  credits -= totalPrice;
  message = `Ви купили ${quantity} дроїдів, на рахунку залишилося ${credits} кредитів.`;
} else {
  message = "Невірно заповнене поле вводу!";
}

console.log(message);
console.log("");
