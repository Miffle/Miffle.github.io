let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let items = [];
let item1 = 0
let item2 = 0
let item3 = 0
let item4 = 0
let item5 = 0
let item6 = 0
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
btn1.addEventListener("click", function () {
    item1 += 1;
    btn1.innerText = `Купить (${item1})`;
    tg.MainButton.setText("Вы выбрали товар 1!");
    items.push('Свеча 1')
    tg.MainButton.show();
});

btn2.addEventListener("click", function () {
    item2 += 1;
    btn2.innerText = `Купить (${item2})`;
    tg.MainButton.setText("Вы выбрали товар 2!");
    items.push("Свеча 2");
    tg.MainButton.show();

});

btn3.addEventListener("click", function () {
    item3 += 1;
    btn3.innerText = `Купить (${item3})`;
    tg.MainButton.setText("Вы выбрали товар 3!");
    items.push("Свеча 3");
    tg.MainButton.show();

});

btn4.addEventListener("click", function () {
    item4 += 1;
    btn4.innerText = `Купить (${item4})`;
    tg.MainButton.setText("Вы выбрали товар 4!");
    items.push("Свеча 4");
    tg.MainButton.show();

});

btn5.addEventListener("click", function () {
    item5 += 1;
    btn5.innerText = `Купить (${item5})`;
    tg.MainButton.setText("Вы выбрали товар 5!");
    items.push("Свеча 5");
    tg.MainButton.show();

});

btn6.addEventListener("click", function () {
    item6 += 1;
    tg.MainButton.setText("Вы выбрали товар 6!");
    btn6.innerText = `Купить (${item6})`;
    items.push("6");
    tg.MainButton.show();

});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(items);
});
