let tg = window.Telegram.WebApp;

tg.expand();
tg.enableClosingConfirmation();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
const candle_names = [
    "Свечей 'Грейпфрут'",
    "Свечей 'Лето на виноградной плантации'",
    "Свечей 'Уд & Ваниль'",
    "Свечей 'Свежесть манго'",
    "Свечей 'Космическая ностальгия'"
]
const flowerpot_names = [
    "Кашпо зеленого цвета",
    "Кашпо розового цвета",
    "Кашпо фиолетового цвета",
    "Кашпо черного цвета",
    "Кашпо желтого цвета",
    "Поднос зеленого цвета",
    "Поднос розового цвета",
    "Поднос фиолетового цвета",
    "Поднос черного цвета",
    "Поднос желтого цвета",
    "Многоугольное кашпо зеленого цвета",
    "Многоугольное кашпо розового цвета",
    "Многоугольное кашпо фиолетового цвета",
    "Многоугольное кашпо черного цвета",
    "Многоугольное кашпо желтого цвета",
]


Telegram.WebApp.onEvent("mainButtonClicked", function () {
    let totalCost = candle_totalCost + flowerpot_totalCost;


    const all_items = []

    for (let i = 0; i < candle_item.length; i++) {
        if (countCheck(candle_item[i])) {
            all_items.push(`${candle_names[i]} - ${candle_item[i]} шт.`)
        }
    }
    for (let i = 0; i < flowerpot_item.length; i++) {
        if (countCheck(flowerpot_item[i])) {
            all_items.push(`${flowerpot_names[i]} - ${flowerpot_item[i]} шт.`)
        }
    }
    if (totalCost !== 0) {
        all_items.push(`Общая сумма = ${totalCost}`);
        tg.sendData(all_items)
    } else {
        tg.showAlert("Корзина пуста. Чтобы что-то купить - надо что-то выбрать")
    }
});