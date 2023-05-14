let candles = document.getElementById("candle")
let flowerpot = document.getElementById("flowerpot")
let flowerpots_div = document.getElementById("flowerpots")
let candles_div = document.getElementById("candles")
let start_page = document.getElementById('start_page')
let header = document.getElementById("header")
let cart_div = document.getElementById('shopping_cart')
candles.addEventListener("click", function () {
    header.hidden = false
    start_page.hidden = true
    candles_div.hidden = false

})
flowerpot.addEventListener("click", function () {
    header.hidden = false
    start_page.hidden = true
    flowerpots_div.hidden = false
})

header.addEventListener("click", function (){
    start_page.hidden = false;
    candles_div.hidden = true;
    flowerpots_div.hidden = true;
    header.hidden = true
})
shopping_cart_btn.addEventListener('click', function (){
    start_page.hidden = true;
    candles_div.hidden = true;
    flowerpots_div.hidden = true;
    cart_div.hidden = false;
})