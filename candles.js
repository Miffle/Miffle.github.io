let candle_prices = [500, 500, 500, 500, 500]
let candle_item = [0,0,0,0,0]
let candle_cost_item = [0,0,0,0,0]
let candle_totalCost = 0
let candle_plus_btn = [document.getElementById("candles_btn1"),
    document.getElementById("candles_btn2"),
    document.getElementById("candles_btn3"),
    document.getElementById("candles_btn4"),
    document.getElementById("candles_btn5")]
let candle_min_btn = [document.getElementById("candles_min_btn1"),
    document.getElementById("candles_min_btn2"),
    document.getElementById("candles_min_btn3"),
    document.getElementById("candles_min_btn4"),
    document.getElementById("candles_min_btn5")]
let candle_label = [document.getElementById("candles_count1"),
    document.getElementById("candles_count2"),
    document.getElementById("candles_count3"),
    document.getElementById("candles_count4"),
    document.getElementById("candles_count5")]
let candle_img = [
    document.getElementById("candles_img1"),
    document.getElementById("candles_img2"),
    document.getElementById("candles_img3"),
    document.getElementById("candles_img4"),
    document.getElementById("candles_img5")]
let candle_disc = [
    document.getElementById("candles_disc1"),
    document.getElementById("candles_disc2"),
    document.getElementById("candles_disc3"),
    document.getElementById("candles_disc4"),
    document.getElementById("candles_disc5")]

candle_img[0].addEventListener("click", function () {
    blurOpacity(this, candle_disc[0])
})

candle_img[1].addEventListener("click", function () {
    blurOpacity(this, candle_disc[1])
})
candle_img[2].addEventListener("click", function () {
    blurOpacity(this, candle_disc[2])
})
candle_img[3].addEventListener("click", function () {
    blurOpacity(this, candle_disc[3])
})
candle_img[4].addEventListener("click", function () {
    blurOpacity(this, candle_disc[4])
})
candle_disc[0].addEventListener("click", function () {
    blurOpacity(candle_img[0], this)
})
candle_disc[1].addEventListener("click", function () {
    blurOpacity(candle_img[1], this)
})
candle_disc[2].addEventListener("click", function () {
    blurOpacity(candle_img[2], this)
})
candle_disc[3].addEventListener("click", function () {
    blurOpacity(candle_img[3], this)
})
candle_disc[4].addEventListener("click", function () {
    blurOpacity(candle_img[4], this)
})

candle_plus_btn[0].addEventListener("click", function () {
    candle_item[0] += 1;
    candle_cost_item[0] = candle_prices[0] * candle_item[0];
    SetText(candle_label[0], candle_item[0], candle_cost_item[0]);
    MainButtonShow(candle_prices[0], "candle");
});

candle_plus_btn[1].addEventListener("click", function () {
    candle_item[1] += 1;
    candle_cost_item[1] = candle_prices[1] * candle_item[1];
    SetText(candle_label[1], candle_item[1], candle_cost_item[1]);
    MainButtonShow(candle_prices[1], "candle");

});

candle_plus_btn[2].addEventListener("click", function () {
    candle_item[2] += 1;
    candle_cost_item[2] = candle_prices[2] * candle_item[2];
    SetText(candle_label[2], candle_item[2], candle_cost_item[2]);
    MainButtonShow(candle_prices[2], "candle");

});

candle_plus_btn[3].addEventListener("click", function () {
    candle_item[3] += 1;
    candle_cost_item[3] = candle_prices[3] * candle_item[3];
    SetText(candle_label[3], candle_item[3], candle_cost_item[3]);
    MainButtonShow(candle_prices[3], "candle");

});

candle_plus_btn[4].addEventListener("click", function () {
    candle_item[4] += 1;
    candle_cost_item[4] = candle_prices[4] * candle_item[4];
    SetText(candle_label[4], candle_item[4], candle_cost_item[4]);

    MainButtonShow(candle_prices[4], "candle");

});

candle_min_btn[0].addEventListener('click', function () {
    if (countCheck(candle_item[0])) {
        candle_item[0] -= 1;
        candle_cost_item[0] = candle_prices[0] * candle_item[0];
        SetText(candle_label[0], candle_item[0], candle_cost_item[0]);
        MainButtonShow(candle_prices[0] * (-1), "candle");
    }

})
candle_min_btn[1].addEventListener('click', function () {
    if (countCheck(candle_item[1])) {
        candle_item[1] -= 1;
        candle_cost_item[1] = candle_prices[1] * candle_item[1];
        SetText(candle_label[1], candle_item[1], candle_cost_item[1]);
        MainButtonShow(candle_prices[1] * (-1), "candle");
    }

})
candle_min_btn[2].addEventListener('click', function () {
    if (countCheck(candle_item[2]) === true) {
        candle_item[2] -= 1;
        candle_cost_item[2] = candle_prices[2] * candle_item[2];
        SetText(candle_label[2], candle_item[2], candle_cost_item[2]);
        MainButtonShow(candle_prices[2] * (-1), "candle");
    }

})
candle_min_btn[3].addEventListener('click', function () {
    if (countCheck(candle_item[3])) {
        candle_item[3] -= 1;
        candle_cost_item[3] = candle_prices[3] * candle_item[3];
        SetText(candle_label[3], candle_item[3], candle_cost_item[3]);
        MainButtonShow(candle_prices[3] * (-1), "candle");
    }

})
candle_min_btn[4].addEventListener('click', function () {
    if (countCheck(candle_item[4])) {
        candle_item[4] -= 1;
        candle_cost_item[4] = candle_prices[4] * candle_item[4];
        SetText(candle_label[4], candle_item[4], candle_cost_item[4]);
        MainButtonShow(candle_prices[4] * (-1), "candle");
    }

})
function MainButtonShow(cost){
    candle_totalCost += cost;
    tg.MainButton.setText(`Купить! ${candle_totalCost} ₽`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
    if (candle_totalCost === 0) {
        tg.MainButton.hide();
    }
}