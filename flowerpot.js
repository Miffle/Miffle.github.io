let flowerpot_price = [500, 500, 500, 500, 500]
let flowerpot_item = [0, 0, 0, 0, 0]
let flowerpot_cost_item = [0, 0, 0, 0, 0]
let flowerpot_totalCost = 0
let flowerpot_plus_btn_id = ["flowerpots_btn1", "flowerpots_btn2", "flowerpots_btn3", "flowerpots_btn4", "flowerpots_btn5"]
const flowerpot_min_btn_id = ["flowerpots_min_btn1", "flowerpots_min_btn2", "flowerpots_min_btn3", "flowerpots_min_btn4", "flowerpots_min_btn5"]
const flowerpot_label_id = ["flowerpots_count1", "flowerpots_count2", "flowerpots_count3", "flowerpots_count4", "flowerpots_count5"]
const flowerpot_count = flowerpot_label_id.length
let flowerpot_label = []
let flowerpot_plus_btn = []
let flowerpot_min_btn = []

for (let i = 0; i < flowerpot_count; i++) {
    flowerpot_label.push(document.getElementById(flowerpot_label_id[i]))
    flowerpot_plus_btn.push(document.getElementById(flowerpot_plus_btn_id[i]))
    flowerpot_min_btn.push(document.getElementById(flowerpot_min_btn_id[i]))
}
for (let j = 0; j <flowerpot_count; j++){
    flowerpot_plus_btn[j].addEventListener("click", function () {
        flowerpot_item[j] += 1;
        flowerpot_cost_item[j] = flowerpot_price[j] * flowerpot_item[j];
        SetText(flowerpot_label[j], flowerpot_item[j], flowerpot_cost_item[j]);
        MainButtonShow(flowerpot_price[j]);
    });

    flowerpot_min_btn[j].addEventListener('click', function () {
        if (countCheck(flowerpot_item[j])) {
            flowerpot_item[j] -= 1;
            flowerpot_cost_item[j] = flowerpot_price[j] * flowerpot_item[j];
            SetText(flowerpot_label[j], flowerpot_item[j], flowerpot_cost_item[j]);
            MainButtonShow(flowerpot_price[j] * (-1));
        }
    });
}

function MainButtonShow(cost) {
    flowerpot_totalCost += cost;
    tg.MainButton.setText(`Купить! ${flowerpot_totalCost} ₽`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
    if (candle_totalCost === 0) {
        tg.MainButton.hide();
    }
}