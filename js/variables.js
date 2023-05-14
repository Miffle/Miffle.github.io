tg.enableClosingConfirmation()
let [candle_price, candle_item, candle_cost_item] = [
    [550, 550, 550, 550, 550],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]]
let candle_totalCost = 0
const [candle_plus_btn_id, candle_min_btn_id, candle_label_id, candle_img_id, candle_disc_id] = [
    ["candles_btn1", "candles_btn2", "candles_btn3", "candles_btn4", "candles_btn5"],
    ["candles_min_btn1", "candles_min_btn2", "candles_min_btn3", "candles_min_btn4", "candles_min_btn5"],
    ["candles_count1", "candles_count2", "candles_count3", "candles_count4", "candles_count5"],
    ["candles_img1", "candles_img2", "candles_img3", "candles_img4", "candles_img5"],
    ["candles_disc1", "candles_disc2", "candles_disc3", "candles_disc4", "candles_disc5"]]
const [cart_candle_plus_btn_id, cart_candle_min_btn_id, cart_candle_label_id, cart_candle_cost_id] = [
    ["cart_candles_btn1", "cart_candles_btn2", "cart_candles_btn3", "cart_candles_btn4", "cart_candles_btn5"],
    ["cart_candles_min_btn1", "cart_candles_min_btn2", "cart_candles_min_btn3", "cart_candles_min_btn4", "cart_candles_min_btn5"],
    ["cart_candles_count1", "cart_candles_count2", "cart_candles_count3", "cart_candles_count4", "cart_candles_count5"],
    ['cart_candle_cost1','cart_candle_cost2','cart_candle_cost3','cart_candle_cost4','cart_candle_cost5']
]

const candle_count = candle_plus_btn_id.length
let [candle_img, candle_disc, candle_label, candle_plus_btn, candle_min_btn] = [
    candle_img_id.map(id => document.getElementById(id)),
    candle_disc_id.map(id => document.getElementById(id)),
    candle_label_id.map(id => document.getElementById(id)),
    candle_plus_btn_id.map(id => document.getElementById(id)),
    candle_min_btn_id.map(id => document.getElementById(id))
]
let [cart_candle_label, cart_candle_plus_btn, cart_candle_min_btn, cart_candle_cost] = [
    cart_candle_label_id.map(id => document.getElementById(id)),
    cart_candle_plus_btn_id.map(id => document.getElementById(id)),
    cart_candle_min_btn_id.map(id => document.getElementById(id)),
    cart_candle_cost_id.map(id => document.getElementById(id))
]

let [flowerpot_price, flowerpot_item, flowerpot_cost_item] = [
    [150, 150, 150, 150, 150, 300, 300, 300, 300, 300,150, 150, 150, 150, 150],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
const [flowerpot_plus_btn_id, flowerpot_min_btn_id, flowerpot_label_id] = [
    ["flowerpots_btn1", "flowerpots_btn2", "flowerpots_btn3", "flowerpots_btn4", "flowerpots_btn5", "tray_btn1", "tray_btn2", "tray_btn3", "tray_btn4", "tray_btn5",
        "flowerpots_btn6", "flowerpots_btn7", "flowerpots_btn8", "flowerpots_btn9", "flowerpots_btn10"],
    ["flowerpots_min_btn1", "flowerpots_min_btn2", "flowerpots_min_btn3", "flowerpots_min_btn4", "flowerpots_min_btn5", "tray_min_btn1", "tray_min_btn2", "tray_min_btn3", "tray_min_btn4", "tray_min_btn5",
        "flowerpots_min_btn6", "flowerpots_min_btn7", "flowerpots_min_btn8", "flowerpots_min_btn9", "flowerpots_min_btn10"],
    ["flowerpots_count1", "flowerpots_count2", "flowerpots_count3", "flowerpots_count4", "flowerpots_count5", "tray_count1", "tray_count2", "tray_count3", "tray_count4", "tray_count5",
        "flowerpots_count6", "flowerpots_count7", "flowerpots_count8", "flowerpots_count9", "flowerpots_count10"],
    ];
const [flowerpot_label, flowerpot_plus_btn, flowerpot_min_btn] = [
    flowerpot_label_id.map(id => document.getElementById(id)),
    flowerpot_plus_btn_id.map(id => document.getElementById(id)),
    flowerpot_min_btn_id.map(id => document.getElementById(id)),];
const [cart_flowerpot_plus_btn_id, cart_flowerpot_min_btn_id, cart_flowerpot_label_id, cart_flowerpot_cost_id] = [
    ["cart_flowerpots_btn1", "cart_flowerpots_btn2", "cart_flowerpots_btn3", "cart_flowerpots_btn4", "cart_flowerpots_btn5", "cart_tray_btn1", "cart_tray_btn2", "cart_tray_btn3", "cart_tray_btn4", "cart_tray_btn5",
        "cart_flowerpots_btn6", "cart_flowerpots_btn7", "cart_flowerpots_btn8", "cart_flowerpots_btn9", "cart_flowerpots_btn10"],
    ["cart_flowerpots_min_btn1", "cart_flowerpots_min_btn2", "cart_flowerpots_min_btn3", "cart_flowerpots_min_btn4", "cart_flowerpots_min_btn5", "cart_tray_min_btn1", "cart_tray_min_btn2", "cart_tray_min_btn3", "cart_tray_min_btn4", "cart_tray_min_btn5",
        "cart_flowerpots_min_btn6", "cart_flowerpots_min_btn7", "cart_flowerpots_min_btn8", "cart_flowerpots_min_btn9", "cart_flowerpots_min_btn10"],
    ["cart_flowerpots_count1", "cart_flowerpots_count2", "cart_flowerpots_count3", "cart_flowerpots_count4", "cart_flowerpots_count5", "cart_tray_count1", "cart_tray_count2", "cart_tray_count3", "cart_tray_count4", "cart_tray_count5",
        "cart_flowerpots_count6", "cart_flowerpots_count7", "cart_flowerpots_count8", "cart_flowerpots_count9", "cart_flowerpots_count10"],
    ["cart_flowerpots_cost1", "cart_flowerpots_cost2", "cart_flowerpots_cost3", "cart_flowerpots_cost4", "cart_flowerpots_cost5", "cart_tray_cost1", "cart_tray_cost2", "cart_tray_cost3", "cart_tray_cost4", "cart_tray_cost5",
        "cart_flowerpots_cost6", "cart_flowerpots_cost7", "cart_flowerpots_cost8", "cart_flowerpots_cost9", "cart_flowerpots_cost10"]];
const [cart_flowerpot_label, cart_flowerpot_plus_btn, cart_flowerpot_min_btn, cart_flowerpot_cost] = [
    cart_flowerpot_label_id.map(id => document.getElementById(id)),
    cart_flowerpot_plus_btn_id.map(id => document.getElementById(id)),
    cart_flowerpot_min_btn_id.map(id => document.getElementById(id)),
    cart_flowerpot_cost_id.map(id => document.getElementById(id))];
const flowerpot_count = flowerpot_price.length;
let flowerpot_totalCost = 0;

const shopping_cart_btn = document.getElementById("shopping_cart_btn")