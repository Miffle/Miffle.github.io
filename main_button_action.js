let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    if (totalCost !== 0) {
        if (countCheck(item1)) {
            candles_items.push(`Свечей №1 - ${item1} шт.`)
        }
        if (countCheck(item2)) {
            candles_items.push(`Свечей №2 - ${item2} шт.`)
        }
        if (countCheck(item3)) {
            candles_items.push(`Свечей №3 - ${item3} шт.`)
        }
        if (countCheck(item4)) {
            candles_items.push(`Свечей №4 - ${item4} шт.`)
        }
        if (countCheck(item5)) {
            candles_items.push(`Свечей №5 - ${item5} шт.`)
        }
        candles_items.push(`Общая сумма = ${totalCost}`)
        tg.sendData(candles_items)
    } else {
        if (countCheck(flowerpot_item1)) {
            flowerpot_items.push(`Кашпо №1 - ${flowerpot_item1} шт.`)
        }
        if (countCheck(flowerpot_item2)) {
            flowerpot_items.push(`Кашпо №2 - ${flowerpot_item2} шт.`)
        }
        if (countCheck(flowerpot_item3)) {
            flowerpot_items.push(`Кашпо №3 - ${flowerpot_item3} шт.`)
        }
        if (countCheck(flowerpot_item4)) {
            flowerpot_items.push(`Кашпо №4 - ${flowerpot_item4} шт.`)
        }
        if (countCheck(flowerpot_item5)) {
            flowerpot_items.push(`Кашпо №5 - ${flowerpot_item5} шт.`)
        }

        flowerpot_items.push(`Общая сумма = ${flowerpot_totalCost}`);
        tg.sendData(flowerpot_items)
    }

});
