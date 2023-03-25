let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let flowerpotPrices = [500, 500, 500, 500, 500, 500];
let items = [0, 0, 0, 0, 0, 0];
let costItems = [0, 0, 0, 0, 0, 0];
let totalCost = 0;

let buttonIds = ["btn1", "btn2", "btn3", "btn4", "btn5"];
let minButtonIds = ["min_btn1", "min_btn2", "min_btn3", "min_btn4", "min_btn5"];
let labelIds = ["count1", "count2", "count3", "count4", "count5"];
let imgIds = ["img1", "img2", "img3", "img4", "img5"];
let discIds = ["disc1", "disc2", "disc3", "disc4", "disc5"];

for (let i = 0; i < buttonIds.length; i++) {
    let button = document.getElementById(buttonIds[i]);
    let minButton = document.getElementById(minButtonIds[i]);
    let label = document.getElementById(labelIds[i]);

    button.addEventListener("click", function () {
        items[i]++;
        costItems[i] = flowerpotPrices[i] * items[i];
        SetText(label, items[i], costItems[i]);
        MainButtonShow(flowerpotPrices[i]);
    });

    minButton.addEventListener("click", function () {
        if (countCheck(items[i])) {
            items[i]--;
            costItems[i] = flowerpotPrices[i] * items[i];
            SetText(label, items[i], costItems[i]);
            MainButtonShow(-flowerpotPrices[i]);
        }
    });

    let img = document.getElementById(imgIds[i]);
    let disc = document.getElementById(discIds[i]);

    img.addEventListener("click", function () {
        toggleBlurAndOpacity(this, disc);
    });

    disc.addEventListener("click", function () {
        toggleBlurAndOpacity(img, this);
    });
}

function MainButtonShow(cost) {
    totalCost += cost;
    tg.MainButton.setText(`Купить! ${totalCost}`);
    if (!tg.MainButton.isVisible && totalCost !== 0) {
        tg.MainButton.show();
    } else if (tg.MainButton.isVisible && totalCost === 0) {
        tg.MainButton.hide();
    }
}

function SetText(text, item, cost) {
    text.innerText = `${item} шт / ${cost}`;
}

function countCheck(item) {
    return item > 0;
}

function toggleBlurAndOpacity(img, disc) {
    img.classList.toggle("blur");
    disc.classList.toggle("opacity");
}
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    if (countCheck(costItems[0])) {
        items[0].push(`Кашпо №1 - ${costItems[0]} шт.`)
    }
    if (countCheck(costItems[1])) {
        items[1].push(`Кашпо №2 - ${costItems[1]} шт.`)
    }
    if (countCheck(costItems[2])) {
        items[2].push(`Кашпо №3 - ${costItems[2]} шт.`)
    }
    if (countCheck(costItems[3])) {
        items[3].push(`Кашпо №4 - ${costItems[3]} шт.`)
    }
    if (countCheck(costItems[4])) {
        items[4].push(`Кашпо №5 - ${costItems[4]} шт.`)
    }
    items[5].push(`Общая сумма = ${totalCost}`);
    tg.sendData(items)
});