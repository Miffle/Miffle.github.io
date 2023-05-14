for (let j = 0; j < candle_count; j++) {
    candle_plus_btn[j].addEventListener("click", function () {
        candle_item[j] += 1;
        candle_cost_item[j] = candle_price[j] * candle_item[j];
        SetText(cart_candle_label[j], candle_item[j]);
        SetText(candle_label[j], candle_item[j]);
        SetCost(cart_candle_cost[j], candle_cost_item[j])
        CartButtonShow(candle_price[j], "candle");
    });

    candle_min_btn[j].addEventListener('click', function () {
        if (countCheck(candle_item[j])) {
            candle_item[j] -= 1;
            candle_cost_item[j] = candle_price[j] * candle_item[j];
            SetText(cart_candle_label[j], candle_item[j]);
            SetText(candle_label[j], candle_item[j]);
            SetCost(cart_candle_cost[j], candle_cost_item[j])
            CartButtonShow(candle_price[j] * (-1), "candle");
        }
    });
    cart_candle_plus_btn[j].addEventListener("click", function () {
        candle_item[j] += 1;
        candle_cost_item[j] = candle_price[j] * candle_item[j];
        SetText(cart_candle_label[j], candle_item[j]);
        SetText(candle_label[j], candle_item[j]);
        SetCost(cart_candle_cost[j], candle_cost_item[j])
    })
    cart_candle_min_btn[j].addEventListener('click', function () {
        if (countCheck(candle_item[j])) {
            candle_item[j] -= 1;
            candle_cost_item[j] = candle_price[j] * candle_item[j];
            SetText(cart_candle_label[j], candle_item[j]);
            SetText(candle_label[j], candle_item[j]);
            SetCost(cart_candle_cost[j], candle_cost_item[j])
        }
    });
    candle_img[j].addEventListener('click', function () {
        blurOpacity(this, candle_disc[j])
    })
    candle_disc[j].addEventListener("click", function () {
        blurOpacity(candle_img[j], this)
    })

}

