let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

function MainButtonShow(cost, type) {
    if (type === "candle") {
        candle_totalCost += cost;
        tg.MainButton.setText(`Купить! ${candle_totalCost} ₽`)
        if (tg.MainButton.isVisible !== true) {
            tg.MainButton.show();
        }
        if (candle_totalCost === 0) {
            tg.MainButton.hide();
        }
    } else {
        flowerpot_totalCost += cost;
        tg.MainButton.setText(`Купить! ${flowerpot_totalCost} ₽`)
        if (tg.MainButton.isVisible !== true) {
            tg.MainButton.show();
        }
        if (candle_totalCost === 0) {
            tg.MainButton.hide();
        }
    }
}
function countCheck(item) {
    if (item > 0) {
        return true
    }
}
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    if (candle_totalCost !== 0) {
        if (countCheck(candle_item[0])) {
            candles_items.push(`Свечей №1 - ${candle_item[0]} шт.`)
        }
        if (countCheck(candle_item[1])) {
            candles_items.push(`Свечей №2 - ${candle_item[1]} шт.`)
        }
        if (countCheck(candle_item[2])) {
            candles_items.push(`Свечей №3 - ${candle_item[2]} шт.`)
        }
        if (countCheck(candle_item[3])) {
            candles_items.push(`Свечей №4 - ${candle_item[3]} шт.`)
        }
        if (countCheck(candle_item[4])) {
            candles_items.push(`Свечей №5 - ${candle_item[4]} шт.`)
        }
        candles_items.push(`Общая сумма = ${totalCost}`)
        candles_items.push(candle_item[0], candle_item[1], candle_item[2], candle_item[3], candle_item[4])
        tg.sendData(candles_items)
    } else {
        if (countCheck(flowerpot_item[0])) {
            flowerpot_items.push(`Кашпо №1 - ${flowerpot_item[0]} шт.`)
        }
        if (countCheck(flowerpot_item[1])) {
            flowerpot_items.push(`Кашпо №2 - ${flowerpot_item[1]} шт.`)
        }
        if (countCheck(flowerpot_item[2])) {
            flowerpot_items.push(`Кашпо №3 - ${flowerpot_item[2]} шт.`)
        }
        if (countCheck(flowerpot_item[3])) {
            flowerpot_items.push(`Кашпо №4 - ${flowerpot_item[3]} шт.`)
        }
        if (countCheck(flowerpot_item[4])) {
            flowerpot_items.push(`Кашпо №5 - ${flowerpot_item[4]} шт.`)
        }
        flowerpot_items.push(`Общая сумма = ${flowerpot_totalCost}`);
        tg.sendData(flowerpot_items)
    }

});
