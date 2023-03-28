let [flowerpot_price, flowerpot_item, flowerpot_cost_item] = [
    [150, 150, 150, 150, 150, 300, 300, 300, 300, 300],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
const [flowerpot_plus_btn_id, flowerpot_min_btn_id, flowerpot_label_id] = [
    ["flowerpots_btn1",
        "flowerpots_btn2",
        "flowerpots_btn3",
        "flowerpots_btn4",
        "flowerpots_btn5",
        "tray_btn1",
        "tray_btn2",
        "tray_btn3",
        "tray_btn4",
        "tray_btn5"
    ],
    ["flowerpots_min_btn1", "flowerpots_min_btn2", "flowerpots_min_btn3", "flowerpots_min_btn4", "flowerpots_min_btn5", "tray_min_btn1", "tray_min_btn2", "tray_min_btn3", "tray_min_btn4", "tray_min_btn5"],
    ["flowerpots_count1", "flowerpots_count2", "flowerpots_count3", "flowerpots_count4", "flowerpots_count5", "tray_count1", "tray_count2", "tray_count3", "tray_count4", "tray_count5"]]
const [flowerpot_label, flowerpot_plus_btn, flowerpot_min_btn] = [
    flowerpot_label_id.map(id => document.getElementById(id)),
    flowerpot_plus_btn_id.map(id => document.getElementById(id)),
    flowerpot_min_btn_id.map(id => document.getElementById(id))]
const flowerpot_count = flowerpot_label_id.length
let flowerpot_totalCost = 0
for (let j = 0; j < flowerpot_count; j++) {
    flowerpot_plus_btn[j].addEventListener("click", function () {
        flowerpot_item[j] += 1;
        flowerpot_cost_item[j] = flowerpot_price[j] * flowerpot_item[j];
        SetText(flowerpot_label[j], flowerpot_item[j], flowerpot_cost_item[j]);
        MainButtonShow(flowerpot_price[j], "flowerpot");
    });

    flowerpot_min_btn[j].addEventListener('click', function () {
        if (countCheck(flowerpot_item[j])) {
            flowerpot_item[j] -= 1;
            flowerpot_cost_item[j] = flowerpot_price[j] * flowerpot_item[j];
            SetText(flowerpot_label[j], flowerpot_item[j], flowerpot_cost_item[j]);
            MainButtonShow(flowerpot_price[j] * (-1), "flowerpot");
        }
    });
}