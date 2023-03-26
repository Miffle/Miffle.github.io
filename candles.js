let candle_price = [500, 500, 500, 500, 500]
let candle_item = [0,0,0,0,0]
let candle_cost_item = [0,0,0,0,0]
let candle_totalCost = 0
const candle_plus_btn_id = ["candles_btn1", "candles_btn2", "candles_btn3", "candles_btn4", "candles_btn5"]
const candle_min_btn_id = ["candles_min_btn1", "candles_min_btn2", "candles_min_btn3", "candles_min_btn4", "candles_min_btn5"]
const candle_label_id = ["candles_count1", "candles_count2", "candles_count3", "candles_count4", "candles_count5"]
const candle_img_id = ["candles_img1", "candles_img2", "candles_img3", "candles_img4", "candles_img5"]
const candle_disc_id = ["candles_disc1", "candles_disc2", "candles_disc3", "candles_disc4", "candles_disc5"]
const candle_count = candle_plus_btn_id.length
let candle_img = []
let candle_disc = []
let candle_label = []
let candle_plus_btn = []
let candle_min_btn = []

for (let i = 0; i < candle_count; i++) {
    candle_label.push(document.getElementById(candle_label_id[i]))
    candle_plus_btn.push(document.getElementById(candle_plus_btn_id[i]))
    candle_min_btn.push(document.getElementById(candle_min_btn_id[i]))
    candle_img.push(document.getElementById(candle_img_id[i]))
    candle_disc.push(document.getElementById(candle_disc_id[i]))
}
for (let j = 0; j < candle_count; j++){
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
            MainButtonShow(candle_price[j] * (-1));
        }
    });
    candle_img[j].addEventListener('click', function (){
        blurOpacity(this, candle_disc[j])
    })
    candle_disc[j].addEventListener("click", function () {
        blurOpacity(candle_img[j], this)
    })
}
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