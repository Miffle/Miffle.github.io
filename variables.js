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
const candle_count = candle_plus_btn_id.length
let [candle_img, candle_disc, candle_label, candle_plus_btn, candle_min_btn] = [
    candle_img_id.map(id => document.getElementById(id)),
    candle_disc_id.map(id => document.getElementById(id)),
    candle_label_id.map(id => document.getElementById(id)),
    candle_plus_btn_id.map(id => document.getElementById(id)),
    candle_min_btn_id.map(id => document.getElementById(id))
]


let [flowerpot_price, flowerpot_item, flowerpot_cost_item] = [
    [150, 150, 150, 150, 150, 300, 300, 300, 300, 300],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
const [flowerpot_plus_btn_id, flowerpot_min_btn_id, flowerpot_label_id] = [
    ["flowerpots_btn1", "flowerpots_btn2", "flowerpots_btn3", "flowerpots_btn4", "flowerpots_btn5", "tray_btn1", "tray_btn2", "tray_btn3", "tray_btn4", "tray_btn5"],
    ["flowerpots_min_btn1", "flowerpots_min_btn2", "flowerpots_min_btn3", "flowerpots_min_btn4", "flowerpots_min_btn5", "tray_min_btn1", "tray_min_btn2", "tray_min_btn3", "tray_min_btn4", "tray_min_btn5"],
    ["flowerpots_count1", "flowerpots_count2", "flowerpots_count3", "flowerpots_count4", "flowerpots_count5", "tray_count1", "tray_count2", "tray_count3", "tray_count4", "tray_count5"]];
const [flowerpot_label, flowerpot_plus_btn, flowerpot_min_btn] = [
    flowerpot_label_id.map(id => document.getElementById(id)),
    flowerpot_plus_btn_id.map(id => document.getElementById(id)),
    flowerpot_min_btn_id.map(id => document.getElementById(id))];
const flowerpot_count = flowerpot_label_id.length;
let flowerpot_totalCost = 0;

const shopping_cart_btn = document.getElementById("shopping_cart_btn")