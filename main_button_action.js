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
    if (totalCost !== 0) {
        if (countCheck(candle_item[0])) {
            all_items.push(`Свечей "Грейпфрут" - ${candle_item[0]} шт.`)
        }
        if (countCheck(candle_item[1])) {
            all_items.push(`Свечей "Лето на виноградной плантации" - ${candle_item[1]} шт.`)
        }
        if (countCheck(candle_item[2])) {
            all_items.push(`Свечей "Уд & Ваниль" - ${candle_item[2]} шт.`)
        }
        if (countCheck(candle_item[3])) {
            all_items.push(`Свечей "Свежесть манго" - ${candle_item[3]} шт.`)
        }
        if (countCheck(candle_item[4])) {
            all_items.push(`Свечей "Космическая ностальгия" - ${candle_item[4]} шт.`)
        }
        if (countCheck(flowerpot_item[0])) {
            all_items.push(`Кашпо зеленого цвета - ${flowerpot_item[0]} шт.`)
        }
        if (countCheck(flowerpot_item[1])) {
            all_items.push(`Кашпо розового цвета - ${flowerpot_item[1]} шт.`)
        }
        if (countCheck(flowerpot_item[2])) {
            all_items.push(`Кашп фиолетового цвета" - ${flowerpot_item[2]} шт.`)
        }
        if (countCheck(flowerpot_item[3])) {
            all_items.push(`Кашпо черного цвета - ${flowerpot_item[3]} шт.`)
        }
        if (countCheck(flowerpot_item[4])) {
            all_items.push(`Кашпо желтого цвета - ${flowerpot_item[4]} шт.`)
        }
        all_items.push(`Общая сумма = ${totalCost}`)
        tg.sendData(all_items)
    } else {tg.showAlert("Корзина пуста. Чтобы что-то купить - надо что-то выбрать")}
});