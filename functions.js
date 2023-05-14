function SetText(text, item, cost) {
    text.innerText = `${item} шт / ${cost} ₽`;
}

function blurOpacity(img, disc) {
    img.classList.toggle('blur');
    disc.classList.toggle('opacity')
}

function countCheck(item) {
    return item !== 0;
}

function MainButtonShow(cost, type) {
    total_cost_setting(cost, type)
    tg.MainButton.setText(`Купить! ${candle_totalCost + flowerpot_totalCost} ₽`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
    if (candle_totalCost === 0 && flowerpot_totalCost === 0) {
        tg.MainButton.hide();
    }

}
function CartButtonShow(cost, type) {
    total_cost_setting(cost, type)
    if(shopping_cart_btn.hidden === true){
        shopping_cart_btn.hidden = false;
    }
    if (candle_totalCost === 0 && flowerpot_totalCost === 0) {
        shopping_cart_btn.hidden = true;
    }
}
function total_cost_setting(cost, type) {
    if (type === "candle") {
        candle_totalCost += cost;
    } else {
        flowerpot_totalCost += cost;
    }

}