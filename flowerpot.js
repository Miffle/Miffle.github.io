let first_flowerpot_price = 500;
let second_flowerpot_price = 500;
let third_flowerpot_price = 500;
let fourth_flowerpot_price = 500;
let fifth_flowerpot_price = 500;
let flowerpot_items = [];
let flowerpot_item1 = 0
let flowerpot_item2 = 0
let flowerpot_item3 = 0
let flowerpot_item4 = 0
let flowerpot_item5 = 0
let flowerpot_cost_item1 = 0
let flowerpot_cost_item2 = 0
let flowerpot_cost_item3 = 0
let flowerpot_cost_item4 = 0
let flowerpot_cost_item5 = 0
let flowerpot_totalCost = 0
let flowerpot_btn1 = document.getElementById("flowerpots_btn1");
let flowerpot_btn2 = document.getElementById("flowerpots_btn2");
let flowerpot_btn3 = document.getElementById("flowerpots_btn3");
let flowerpot_btn4 = document.getElementById("flowerpots_btn4");
let flowerpot_btn5 = document.getElementById("flowerpots_btn5");
let flowerpot_min_btn1 = document.getElementById("flowerpots_min_btn1");
let flowerpot_min_btn2 = document.getElementById("flowerpots_min_btn2");
let flowerpot_min_btn3 = document.getElementById("flowerpots_min_btn3");
let flowerpot_min_btn4 = document.getElementById("flowerpots_min_btn4");
let flowerpot_min_btn5 = document.getElementById("flowerpots_min_btn5");
let flowerpot_label1 = document.getElementById("flowerpots_count1");
let flowerpot_label2 = document.getElementById("flowerpots_count2");
let flowerpot_label3 = document.getElementById("flowerpots_count3");
let flowerpot_label4 = document.getElementById("flowerpots_count4");
let flowerpot_label5 = document.getElementById("flowerpots_count5");
let flowerpot_img1 = document.getElementById("flowerpots_img1");
let flowerpot_img2 = document.getElementById("flowerpots_img2");
let flowerpot_img3 = document.getElementById("flowerpots_img3");
let flowerpot_img4 = document.getElementById("flowerpots_img4");
let flowerpot_img5 = document.getElementById("flowerpots_img5");
let flowerpot_disc1 = document.getElementById("flowerpots_disc1")
let flowerpot_disc2 = document.getElementById("flowerpots_disc2")
let flowerpot_disc3 = document.getElementById("flowerpots_disc3")
let flowerpot_disc4 = document.getElementById("flowerpots_disc4")
let flowerpot_disc5 = document.getElementById("flowerpots_disc5")

function MainButtonShow(cost) {
    flowerpot_totalCost += cost;
    tg.MainButton.setText(`Купить! ${flowerpot_totalCost} ₽`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
    if (flowerpot_totalCost === 0) {
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

flowerpot_img1.addEventListener("click", function () {
    blurOpacity(flowerpot_img1, flowerpot_disc1)
})

flowerpot_img2.addEventListener("click", function () {
    blurOpacity(this, flowerpot_disc2)
})
flowerpot_img3.addEventListener("click", function () {
    blurOpacity(this, flowerpot_disc3)
})
flowerpot_img4.addEventListener("click", function () {
    blurOpacity(this, flowerpot_disc4)
})
flowerpot_img5.addEventListener("click", function () {
    blurOpacity(this, flowerpot_disc5)
})
flowerpot_disc1.addEventListener("click", function () {
    blurOpacity(flowerpot_img1, this)
})
flowerpot_disc2.addEventListener("click", function () {
    blurOpacity(flowerpot_img2, this)
})
flowerpot_disc3.addEventListener("click", function () {
    blurOpacity(flowerpot_img3, this)
})
flowerpot_disc4.addEventListener("click", function () {
    blurOpacity(flowerpot_img4, this)
})
flowerpot_disc5.addEventListener("click", function () {
    blurOpacity(flowerpot_img5, this)
})

flowerpot_btn1.addEventListener("click", function () {
    flowerpot_item1 += 1;
    flowerpot_cost_item1 = first_flowerpot_price * flowerpot_item1;
    SetText(flowerpot_label1, flowerpot_item1, flowerpot_cost_item1);
    MainButtonShow(first_flowerpot_price);
});

flowerpot_btn2.addEventListener("click", function () {
    flowerpot_item2 += 1;
    flowerpot_cost_item2 = second_flowerpot_price * flowerpot_item2;
    SetText(flowerpot_label2, flowerpot_item2, flowerpot_cost_item2);
    MainButtonShow(second_flowerpot_price);

});

flowerpot_btn3.addEventListener("click", function () {
    flowerpot_item3 += 1;
    flowerpot_cost_item3 = third_flowerpot_price * flowerpot_item3;
    SetText(flowerpot_label3, flowerpot_item3, flowerpot_cost_item3);
    MainButtonShow(third_flowerpot_price);

});

flowerpot_btn4.addEventListener("click", function () {
    flowerpot_item4 += 1;
    flowerpot_cost_item4 = fourth_flowerpot_price * flowerpot_item4;
    SetText(flowerpot_label4, flowerpot_item4, flowerpot_cost_item4);
    MainButtonShow(fourth_flowerpot_price);

});

flowerpot_btn5.addEventListener("click", function () {
    flowerpot_item5 += 1;
    flowerpot_cost_item5 = fifth_flowerpot_price * flowerpot_item5;
    SetText(flowerpot_label5, flowerpot_item5, flowerpot_cost_item5);

    MainButtonShow(fifth_flowerpot_price);

});

flowerpot_min_btn1.addEventListener('click', function () {
    if (countCheck(flowerpot_item1)) {
        flowerpot_item1 -= 1;
        flowerpot_cost_item1 = first_flowerpot_price * flowerpot_item1;
        SetText(flowerpot_label1, flowerpot_item1, flowerpot_cost_item1);
        MainButtonShow(first_flowerpot_price * (-1));
    }

})
flowerpot_min_btn2.addEventListener('click', function () {
    if (countCheck(flowerpot_item2)) {
        flowerpot_item2 -= 1;
        flowerpot_cost_item2 = second_flowerpot_price * flowerpot_item2;
        SetText(flowerpot_label2, flowerpot_item2, flowerpot_cost_item2);
        MainButtonShow(second_flowerpot_price * (-1));
    }

})
flowerpot_min_btn3.addEventListener('click', function () {
    if (countCheck(flowerpot_item3) === true) {
        flowerpot_item3 -= 1;
        flowerpot_cost_item3 = third_flowerpot_price * flowerpot_item3;
        SetText(flowerpot_label3, flowerpot_item3, flowerpot_cost_item3);
        MainButtonShow(third_flowerpot_price * (-1));
    }

})
flowerpot_min_btn4.addEventListener('click', function () {
    if (countCheck(flowerpot_item4)) {
        flowerpot_item4 -= 1;
        flowerpot_cost_item4 = fourth_flowerpot_price * flowerpot_item4;
        SetText(flowerpot_label4, flowerpot_item4, flowerpot_cost_item4);
        MainButtonShow(fourth_flowerpot_price * (-1));
    }

})
flowerpot_min_btn5.addEventListener('click', function () {
    if (countCheck(flowerpot_item5)) {
        flowerpot_item5 -= 1;
        flowerpot_cost_item5 = fifth_flowerpot_price * flowerpot_item5;
        SetText(flowerpot_label5, flowerpot_item5, flowerpot_cost_item5);
        MainButtonShow(fifth_flowerpot_price * (-1));
    }

})

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    if (countCheck(flowerpot_item1)) {
        flowerpot_items.push(`Кашпо №1 - ${flowerpot_item1} шт.`)
    }
    if (countCheck(flowerpot_item2)) {
        flowerpot_items.push(`Кашпо №2 - ${flowerpot_item2} шт.`)
    }
    if (countCheck(flowerpot_item3)) {
        flowerpot_items.push(`Кашпо №3 - ${flowerpot_item3} шт.`)
    }
    if (countCheck(flowerpot_item4)) {
        flowerpot_items.push(`Кашпо №4 - ${flowerpot_item4} шт.`)
    }
    if (countCheck(flowerpot_item5)) {
        flowerpot_items.push(`Кашпо №5 - ${flowerpot_item5} шт.`)
    }

    flowerpot_items.push(`Общая сумма = ${flowerpot_totalCost}`);
    tg.sendData(flowerpot_items)
});
