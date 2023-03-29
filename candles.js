for (let j = 0; j < candle_count; j++) {
    candle_plus_btn[j].addEventListener("click", function () {
        candle_item[j] += 1;
        candle_cost_item[j] = candle_price[j] * candle_item[j];
        SetText(candle_label[j], candle_item[j], candle_cost_item[j]);
        MainButtonShow(candle_price[j]);
    });

    candle_min_btn[j].addEventListener('click', function () {
        if (countCheck(candle_item[j])) {
            candle_item[j] -= 1;
            candle_cost_item[j] = candle_price[j] * candle_item[j];
            SetText(candle_label[j], candle_item[j], candle_cost_item[j]);
            MainButtonShow(candle_price[j] * (-1), "candle");
        }
    });
    candle_img[j].addEventListener('click', function () {
        blurOpacity(this, candle_disc[j])
    })
    candle_disc[j].addEventListener("click", function () {
        blurOpacity(candle_img[j], this)
    })
}

