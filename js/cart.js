let cart = document.getElementById("cart_container");
const cart_candles_items_id = [
    "item1", "item2", "item3", "item4", "item5"
]
const cart_flowerpot_items_id = ["item6", "item7", "item8", "item9", "item10", "item11", "item12", "item13",
    "item14", "item15", "item16", "item17", "item18", "item19", "item20"]
let cart_candles_items = cart_candles_items_id.map(id => document.getElementById(id))
let cart_flowerpot_items = cart_flowerpot_items_id.map(id => document.getElementById(id))

function unhiding_in_cart() {
    for (let i = 0; i < candle_item.length; i++) {
        if (candle_item[i] !== 0) {
                cart_candles_items[i].style.display = 'inline-block';
        }
    }
    for (let i = 0; i < flowerpot_item.length; i++){
        if (flowerpot_item[i] !== 0) {
            cart_flowerpot_items[i].style.display = 'inline-block';
        }
    }
}