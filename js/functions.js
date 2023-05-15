function SetText(text, item) {
    text.innerText = `${item} шт`;
}
function SetCost(text, cost) {
    text.innerText = `Цена: ${cost}₽`
}
function blurOpacity(img, disc) {
    img.classList.toggle('blur');
    disc.classList.toggle('opacity')
}

function countCheck(item) {
    return item !== 0;
}

function MainButtonShow() {
    tg.MainButton.setText(`Купить! ${candle_totalCost + flowerpot_totalCost} ₽`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
}
function CartButtonShow(cost, type) {
    total_cost_setting(cost, type)
    if(shopping_cart_btn.hidden === true){
        shopping_cart_btn.hidden = false;
    }
    CartButtonCheck();
}
function CartButtonCheck() {
    shopping_cart_btn.hidden = candle_totalCost === 0 && flowerpot_totalCost === 0;
}
function total_cost_setting(cost, type) {
    if (type === "candle") {
        candle_totalCost += cost;
    } else {
        flowerpot_totalCost += cost;
    }
    tg.MainButton.setText(`Купить! ${candle_totalCost + flowerpot_totalCost} ₽`)
}