let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText("Купить!").hide();
let items = [];
let item1 = 0
let item2 = 0
let item3 = 0
let item4 = 0
let item5 = 0
let item6 = 0
let cost_item1 = 0
let cost_item2 = 0
let cost_item3 = 0
let cost_item4 = 0
let cost_item5 = 0
let cost_item6 = 0
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
let clear = document.getElementById("clear_storage")

function MainButtonShow() {
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
}
function SetText(text, item, cost) {
    text.innerText = `${item} шт / Цена ${cost}`;
}

btn1.addEventListener("click", function () {
    item1 += 1;
    cost_item1 = 500 * item1;
    SetText(lable1, item1, cost_item1);
    MainButtonShow();
});

btn2.addEventListener("click", function () {
    item2 += 1;
    cost_item2 = 500 * item2;
    SetText(lable2, item2, cost_item2);
    MainButtonShow();

});

btn3.addEventListener("click", function () {
    item3 += 1;
    cost_item3 = 500 * item3;
    SetText(lable3, item3, cost_item3);
    MainButtonShow();

});

btn4.addEventListener("click", function () {
    item4 += 1;
    cost_item4 = 500 * item4;
    SetText(lable4, item4, cost_item4);
    MainButtonShow();

});

btn5.addEventListener("click", function () {
    item5 += 1;
    cost_item5 = 500 * item5;
    SetText(lable5, item5, cost_item5);

    MainButtonShow();

});

btn6.addEventListener("click", function () {
    item6 += 1;
    cost_item6 = 500 * item6;
    SetText(lable6, item6, cost_item6);
    MainButtonShow();

});

min_btn1.addEventListener('click', function () {
    if (item1 >= 1) {
        item1 -= 1;
        cost_item1 = 500 * item1;
        SetText(lable1, item1, cost_item1);
    }
    MainButtonShow();
})
min_btn2.addEventListener('click', function () {
    if (item2 >= 1) {
        item2 -= 1;
        cost_item2 = 500 * item2;
        SetText(lable2, item2, cost_item2);
    }
    MainButtonShow();
})
min_btn3.addEventListener('click', function () {
    if (item3 >= 1) {
        item3 -= 1;
        cost_item3 = 500 * item3;
        SetText(lable3, item3, cost_item3);
    }
    MainButtonShow();
})
min_btn4.addEventListener('click', function () {
    if (item4 >= 1) {
        item4 -= 1;
        cost_item4 = 500 * item4;
        SetText(lable4, item4, cost_item4);
    }
    MainButtonShow();
})
min_btn5.addEventListener('click', function () {
    if (item5 >= 1) {
        item5 -= 1;
        cost_item5 = 500 * item5;
        SetText(lable5, item5, cost_item5);
    }
    MainButtonShow();
})
min_btn6.addEventListener('click', function () {
    if (item6 >= 1) {
        item6 -= 1;
        cost_item6 = 500 * item6;
        SetText(lable6, item6, cost_item6);
    }
    MainButtonShow();
})

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    items.push(`Свеч №1 - ${item1}`, `Свеч №2 - ${item2}`, `Свеч №3 - ${item3}`, `Свеч №4 - ${item4}`, `Свеч №5 - ${item5}`, `Свеч №6 - ${item6}`)
    items.push(`Общая сумма = ${item1 * 500 + item2 * 500 + item3 * 500 + item4 * 500 + item5 * 500 + item6 * 500}`);
    tg.sendData(items);
});
