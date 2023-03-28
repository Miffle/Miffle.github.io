let candle_price = [550, 550, 550, 550, 550]
let candle_item = [0, 0, 0, 0, 0]
let candle_cost_item = [0, 0, 0, 0, 0]
let candle_totalCost = 0
const [candle_plus_btn_id, candle_min_btn_id, candle_label_id, candle_img_id, candle_disc_id] = [
    ["candles_btn1", "candles_btn2", "candles_btn3", "candles_btn4", "candles_btn5"],
    ["candles_min_btn1", "candles_min_btn2", "candles_min_btn3", "candles_min_btn4", "candles_min_btn5"],
    ["candles_count1", "candles_count2", "candles_count3", "candles_count4", "candles_count5"],
    ["candles_img1", "candles_img2", "candles_img3", "candles_img4", "candles_img5"],
    ["candles_disc1", "candles_disc2", "candles_disc3", "candles_disc4", "candles_disc5"]]
const candle_count = candle_plus_btn_id.length
let [candle_img, candle_disc, candle_label, candle_plus_btn, candle_min_btn] = [
    candle_img_id.map(id => document.getElementById(id)),
    candle_disc_id.map(id => document.getElementById(id)),
    candle_label_id.map(id => document.getElementById(id)),
    candle_plus_btn_id.map(id => document.getElementById(id)),
    candle_min_btn_id.map(id => document.getElementById(id))
]

for (let j = 0; j < candle_count; j++) {
    candle_plus_btn[j].addEventListener("click", function () {
        candle_item[j] += 1;
        candle_cost_item[j] = candle_price[j] * candle_item[j];
        SetText(candle_label[j], candle_item[j], candle_cost_item[j]);
        MainButtonShow(candle_price[j]);
    });

    candle_min_btn[j].addEventListener('click', function () {
        if (countCheck(candle_item[j])) {
            candle_item[j] -= 1;
            candle_cost_item[j] = candle_price[j] * candle_item[j];
            SetText(candle_label[j], candle_item[j], candle_cost_item[j]);
            MainButtonShow(candle_price[j] * (-1), "candle");
        }
    });
    candle_img[j].addEventListener('click', function () {
        blurOpacity(this, candle_disc[j])
    })
    candle_disc[j].addEventListener("click", function () {
        blurOpacity(candle_img[j], this)
    })
}

function MainButtonShow(cost, type) {
    total_cost_setting(cost, type)
    tg.MainButton.setText(`Купить! ${candle_totalCost + flowerpot_totalCost} ₽`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
    if (candle_totalCost === 0 && flowerpot_totalCost === 0) {
        tg.MainButton.hide();
    }

}

function total_cost_setting(cost, type) {
    if (type === "candle") {
        candle_totalCost += cost;
    } else {
        flowerpot_totalCost += cost;
    }

}