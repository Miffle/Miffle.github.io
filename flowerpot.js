let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let first_flowerpot_price = 500;
let second_flowerpot_price = 500;
let third_flowerpot_price = 500;
let fourth_flowerpot_price = 500;
let fifth_flowerpot_price = 500;
let items = [];
let item1 = 0
let item2 = 0
let item3 = 0
let item4 = 0
let item5 = 0
let cost_item1 = 0
let cost_item2 = 0
let cost_item3 = 0
let cost_item4 = 0
let cost_item5 = 0
let totalCost = 0
let btn1 = document.getElementById("flowerpots_btn1");
let btn2 = document.getElementById("flowerpots_btn2");
let btn3 = document.getElementById("flowerpots_btn3");
let btn4 = document.getElementById("flowerpots_btn4");
let btn5 = document.getElementById("flowerpots_btn5");
let min_btn1 = document.getElementById("flowerpots_min_btn1");
let min_btn2 = document.getElementById("flowerpots_min_btn2");
let min_btn3 = document.getElementById("flowerpots_min_btn3");
let min_btn4 = document.getElementById("flowerpots_min_btn4");
let min_btn5 = document.getElementById("flowerpots_min_btn5");
let label1 = document.getElementById("flowerpots_count1");
let label2 = document.getElementById("flowerpots_count2");
let label3 = document.getElementById("flowerpots_count3");
let label4 = document.getElementById("flowerpots_count4");
let label5 = document.getElementById("flowerpots_count5");
let img1 = document.getElementById("flowerpots_img1");
let img2 = document.getElementById("flowerpots_img2");
let img3 = document.getElementById("flowerpots_img3");
let img4 = document.getElementById("flowerpots_img4");
let img5 = document.getElementById("flowerpots_img5");
let disc1 = document.getElementById("flowerpots_disc1")
let disc2 = document.getElementById("flowerpots_disc2")
let disc3 = document.getElementById("flowerpots_disc3")
let disc4 = document.getElementById("flowerpots_disc4")
let disc5 = document.getElementById("flowerpots_disc5")

function MainButtonShow(cost) {
    totalCost += cost;
    tg.MainButton.setText(`Купить! ${totalCost} ₽`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
    if (totalCost === 0) {
        tg.MainButton.hide();
    }
}

function blurOpacity(img, disc) {
    img.classList.toggle('blur');
    disc.classList.toggle('opacity')
}

function SetText(text, item, cost) {
    text.innerText = `${item} шт / ${cost}`;
}

function countCheck(item) {
    if (item > 0) {
        return true
    }
}

img1.addEventListener("click", function () {
    blurOpacity(img1, disc1)
})

img2.addEventListener("click", function () {
    blurOpacity(this, disc2)
})
img3.addEventListener("click", function () {
    blurOpacity(this, disc3)
})
img4.addEventListener("click", function () {
    blurOpacity(this, disc4)
})
img5.addEventListener("click", function () {
    blurOpacity(this, disc5)
})
disc1.addEventListener("click", function () {
    blurOpacity(img1, this)
})
disc2.addEventListener("click", function () {
    blurOpacity(img2, this)
})
disc3.addEventListener("click", function () {
    blurOpacity(img3, this)
})
disc4.addEventListener("click", function () {
    blurOpacity(img4, this)
})
disc5.addEventListener("click", function () {
    blurOpacity(img5, this)
})

btn1.addEventListener("click", function () {
    item1 += 1;
    cost_item1 = first_flowerpot_price * item1;
    SetText(label1, item1, cost_item1);
    MainButtonShow(first_flowerpot_price);
});

btn2.addEventListener("click", function () {
    item2 += 1;
    cost_item2 = second_flowerpot_price * item2;
    SetText(label2, item2, cost_item2);
    MainButtonShow(second_flowerpot_price);

});

btn3.addEventListener("click", function () {
    item3 += 1;
    cost_item3 = third_flowerpot_price * item3;
    SetText(label3, item3, cost_item3);
    MainButtonShow(third_flowerpot_price);

});

btn4.addEventListener("click", function () {
    item4 += 1;
    cost_item4 = fourth_flowerpot_price * item4;
    SetText(label4, item4, cost_item4);
    MainButtonShow(fourth_flowerpot_price);

});

btn5.addEventListener("click", function () {
    item5 += 1;
    cost_item5 = fifth_flowerpot_price * item5;
    SetText(label5, item5, cost_item5);

    MainButtonShow(fifth_flowerpot_price);

});

min_btn1.addEventListener('click', function () {
    if (countCheck(item1)) {
        item1 -= 1;
        cost_item1 = first_flowerpot_price * item1;
        SetText(label1, item1, cost_item1);
        MainButtonShow(first_flowerpot_price * (-1));
    }

})
min_btn2.addEventListener('click', function () {
    if (countCheck(item2)) {
        item2 -= 1;
        cost_item2 = second_flowerpot_price * item2;
        SetText(label2, item2, cost_item2);
        MainButtonShow(second_flowerpot_price * (-1));
    }

})
min_btn3.addEventListener('click', function () {
    if (countCheck(item3) === true) {
        item3 -= 1;
        cost_item3 = third_flowerpot_price * item3;
        SetText(label3, item3, cost_item3);
        MainButtonShow(third_flowerpot_price * (-1));
    }

})
min_btn4.addEventListener('click', function () {
    if (countCheck(item4)) {
        item4 -= 1;
        cost_item4 = fourth_flowerpot_price * item4;
        SetText(label4, item4, cost_item4);
        MainButtonShow(fourth_flowerpot_price * (-1));
    }

})
min_btn5.addEventListener('click', function () {
    if (countCheck(item5)) {
        item5 -= 1;
        cost_item5 = fifth_flowerpot_price * item5;
        SetText(label5, item5, cost_item5);
        MainButtonShow(fifth_flowerpot_price * (-1));
    }

})

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    if (countCheck(item1)) {
        items.push(`Кашпо №1 - ${item1} шт.`)
    }
    if (countCheck(item2)) {
        items.push(`Кашпо №2 - ${item2} шт.`)
    }
    if (countCheck(item3)) {
        items.push(`Кашпо №3 - ${item3} шт.`)
    }
    if (countCheck(item4)) {
        items.push(`Кашпо №4 - ${item4} шт.`)
    }
    if (countCheck(item5)) {
        items.push(`Кашпо №5 - ${item5} шт.`)
    }

    items.push(`Общая сумма = ${totalCost}`);
    tg.sendData(items)
});