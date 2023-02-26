let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let items = [];

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
btn1.addEventListener("click", function () {

    tg.MainButton.setText("Вы выбрали товар 1!");
    items.push('1')
    tg.MainButton.show();
});

btn2.addEventListener("click", function () {

    tg.MainButton.setText("Вы выбрали товар 2!");
    items.push("2");
    tg.MainButton.show();

});

btn3.addEventListener("click", function () {

    tg.MainButton.setText("Вы выбрали товар 3!");
    items.push("3");
    tg.MainButton.show();

});

btn4.addEventListener("click", function () {

    tg.MainButton.setText("Вы выбрали товар 4!");
    items.push("4");
    tg.MainButton.show();

});

btn5.addEventListener("click", function () {

    tg.MainButton.setText("Вы выбрали товар 5!");
    items.push("5");
    tg.MainButton.show();

});

btn6.addEventListener("click", function () {

    tg.MainButton.setText("Вы выбрали товар 6!");
    items.push("6");
    tg.MainButton.show();

});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(items);
});