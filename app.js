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
let min_btn1 = document.getElementById("min_btn1");
let min_btn2 = document.getElementById("min_btn2");
let min_btn3 = document.getElementById("min_btn3");
let min_btn4 = document.getElementById("min_btn4");
let min_btn5 = document.getElementById("min_btn5");
let min_btn6 = document.getElementById("min_btn6");
let lable1 = document.getElementById("count1");
let lable2 = document.getElementById("count2");
let lable3 = document.getElementById("count3");
let lable4 = document.getElementById("count4");
let lable5 = document.getElementById("count5");
let lable6 = document.getElementById("count6");
btn1.addEventListener("click", function () {
    item1 += 1;
    lable1.innerText = `Кол-во: ${item1}`
    tg.MainButton.setText("Купить!");
    if (tg.MainButton.hidden) {
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function () {
    item2 += 1;
    lable2.innerText = `Кол-во: ${item2}`
    tg.MainButton.setText("Купить!");
    if (tg.MainButton.hidden) {
        tg.MainButton.show();
    }

});

btn3.addEventListener("click", function () {
    item3 += 1;
    lable3.innerText = `Кол-во: ${item3}`
    tg.MainButton.setText("Купить!");
    if (tg.MainButton.hidden) {
        tg.MainButton.show();
    }

});

btn4.addEventListener("click", function () {
    item4 += 1;
    lable4.innerText = `Кол-во: ${item4}`
    tg.MainButton.setText("Купить!");
    if (tg.MainButton.hidden) {
        tg.MainButton.show();
    }

});

btn5.addEventListener("click", function () {
    item5 += 1;
    lable5.innerText = `Кол-во: ${item5}`
    tg.MainButton.setText("Купить!");
    if (tg.MainButton.hidden) {
        tg.MainButton.show();
    }

});

btn6.addEventListener("click", function () {
    item6 += 1;
    tg.MainButton.setText("Купить!");
    lable6.innerText = `Кол-во: ${item6}`
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }

});

min_btn1.addEventListener('click', function () {
    if (item1 >= 1) {
        item1 -= 1;
        lable1.innerText = `Кол-во: ${item1}`
    }
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
})
min_btn2.addEventListener('click', function () {
    if (item2 >= 1) {
        item2 -= 1;
        lable2.innerText = `Кол-во: ${item2}`
    }
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
})
min_btn3.addEventListener('click', function () {
    if (item3 >= 1) {
        item3 -= 1;
        lable3.innerText = `Кол-во: ${item3}`
    }
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
})
min_btn4.addEventListener('click', function () {
    if (item4 >= 1) {
        item4 -= 1;
        lable4.innerText = `Кол-во: ${item4}`
    }
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
})
min_btn5.addEventListener('click', function () {
    if (item5 >= 1) {
        item5 -= 1;
        lable5.innerText = `Кол-во: ${item5}`
    }
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
})
min_btn6.addEventListener('click', function () {
    if (item6 >= 1) {
        item6 -= 1;
        lable6.innerText = `Кол-во: ${item6}`
    }
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
})
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    items.push(["Свеч №1", item1, "Свеч №2", item2, "Свеч №3", item3, "Свеч №4", item4, "Свеч №5", item5, "Свеч №6", item6])
    items.push(`Общая сумма = ${item1 * 500 + item2 * 500 + item3 * 500 + item4 * 500 + item5 * 500 + item6 * 500}`);
    tg.sendData(items);
});
