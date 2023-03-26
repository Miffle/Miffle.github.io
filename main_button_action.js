let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
function countCheck(item) {
    if (item > 0) {
        return true
    }
}
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    let totalCost = candle_totalCost + flowerpot_totalCost;
    let all_items = [];
    if (candle_totalCost !== 0) {
        if (countCheck(candle_item[0])) {
            all_items.push(`Свечей №1 - ${candle_item[0]} шт.`)
        }
        if (countCheck(candle_item[1])) {
            all_items.push(`Свечей №2 - ${candle_item[1]} шт.`)
        }
        if (countCheck(candle_item[2])) {
            all_items.push(`Свечей №3 - ${candle_item[2]} шт.`)
        }
        if (countCheck(candle_item[3])) {
            all_items.push(`Свечей №4 - ${candle_item[3]} шт.`)
        }
        if (countCheck(candle_item[4])) {
            all_items.push(`Свечей №5 - ${candle_item[4]} шт.`)
        }
        if (countCheck(flowerpot_item[0])) {
            all_items.push(`Кашпо №1 - ${flowerpot_item[0]} шт.`)
        }
        if (countCheck(flowerpot_item[1])) {
            all_items.push(`Кашпо №2 - ${flowerpot_item[1]} шт.`)
        }
        if (countCheck(flowerpot_item[2])) {
            all_items.push(`Кашпо №3 - ${flowerpot_item[2]} шт.`)
        }
        if (countCheck(flowerpot_item[3])) {
            all_items.push(`Кашпо №4 - ${flowerpot_item[3]} шт.`)
        }
        if (countCheck(flowerpot_item[4])) {
            all_items.push(`Кашпо №5 - ${flowerpot_item[4]} шт.`)
        }
        all_items.push(`Общая сумма = ${totalCost}`)
        tg.sendData(all_items)
    }
});