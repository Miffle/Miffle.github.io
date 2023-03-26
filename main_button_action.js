let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";



Telegram.WebApp.onEvent("mainButtonClicked", function () {
    let totalCost = candle_totalCost + flowerpot_totalCost;
    let all_items = [];

    const candleNames = ["'Грейпфрут'", "'Лето на виноградной плантации'", "'Уд & Ваниль'", "'Свежесть манго'", "'Космическая ностальгия'"];

    const flowerpotColors = ["зеленого", "розового", "фиолетового", "черного", "желтого"];

    const candleQuantities = candle_item.filter(countCheck);
    const flowerpotQuantities = flowerpot_item.filter(countCheck);

    candleQuantities.forEach((quantity, index) => {
        all_items.push(`Свечей ${candleNames[index]} - ${quantity} шт.`);
    });

    flowerpotQuantities.forEach((quantity, index) => {
        all_items.push(`Кашпо ${flowerpotColors[index]} цвета - ${quantity} шт.`);
    });

    if (totalCost !== 0) {
        all_items.push(`Общая сумма = ${totalCost}`);
        tg.sendData(all_items)
    } else {
        tg.showAlert("Корзина пуста. Чтобы что-то купить - надо что-то выбрать")
    }
});