let candles = document.getElementById("candle")
let flowerpot = document.getElementById("flowerpot")
let flowerpots_div = document.getElementById("flowerpots")
let candles_div = document.getElementById("candles")
let start_page = document.getElementById('start_page')

candles.addEventListener("click", function () {
    start_page.hidden = true
    candles_div.hidden = false

})
flowerpot.addEventListener("click", function () {
    start_page.hidden = true
    flowerpots_div.hidden = false
})
