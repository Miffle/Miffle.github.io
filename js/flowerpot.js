for (let j = 0; j < flowerpot_count; j++) {
    flowerpot_plus_btn[j].addEventListener("click", function () {
        flowerpot_item[j] += 1;
        flowerpot_cost_item[j] = flowerpot_price[j] * flowerpot_item[j];
        SetText(cart_flowerpot_label[j], flowerpot_item[j]);
        SetText(flowerpot_label[j], flowerpot_item[j]);
        SetCost(cart_flowerpot_cost[j], flowerpot_cost_item[j]);
        CartButtonShow(flowerpot_price[j], "flowerpot");
    });

    flowerpot_min_btn[j].addEventListener('click', function () {
        if (countCheck(flowerpot_item[j])) {
            flowerpot_item[j] -= 1;
            flowerpot_cost_item[j] = flowerpot_price[j] * flowerpot_item[j];
            SetText(cart_flowerpot_label[j], flowerpot_item[j]);
            SetText(flowerpot_label[j], flowerpot_item[j]);
            SetCost(cart_flowerpot_cost[j], flowerpot_cost_item[j]);
            CartButtonShow(flowerpot_price[j] * (-1), "flowerpot");
        }
    });
    cart_flowerpot_plus_btn[j].addEventListener("click", function () {
        flowerpot_item[j] += 1;
        flowerpot_cost_item[j] = flowerpot_price[j] * flowerpot_item[j];
        SetText(cart_flowerpot_label[j], flowerpot_item[j]);
        SetText(flowerpot_label[j], flowerpot_item[j]);
        SetCost(cart_flowerpot_cost[j], flowerpot_cost_item[j]);
    });

    cart_flowerpot_min_btn[j].addEventListener('click', function () {
        if (countCheck(flowerpot_item[j])) {
            flowerpot_item[j] -= 1;
            flowerpot_cost_item[j] = flowerpot_price[j] * flowerpot_item[j];
            SetText(cart_flowerpot_label[j], flowerpot_item[j]);
            SetText(flowerpot_label[j], flowerpot_item[j]);
            SetCost(cart_flowerpot_cost[j], flowerpot_cost_item[j]);
        }
    });
}