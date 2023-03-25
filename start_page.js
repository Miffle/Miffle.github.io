let tg = window.Telegram.WebApp;

tg.expand();
let candles = document.getElementById("candles")
let flowerpot = document.getElementById("flowerpot")


candles.addEventListener("click", function () {
    tg.openLink('candles/candles_page.html')
})
flowerpot.addEventListener("click", function () {
    window.location.href = 'flowerpot/flowerpot.html';
})
