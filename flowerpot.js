let flowerpot_price = [500, 500, 500, 500, 500]
let flowerpot_item = [0,0,0,0,0]
let flowerpot_cost_item = [0,0,0,0,0]
let flowerpot_totalCost = 0
let flowerpot_plus_btn = [document.getElementById("flowerpots_btn1"),
    document.getElementById("flowerpots_btn2"),
    document.getElementById("flowerpots_btn3"),
    document.getElementById("flowerpots_btn4"),
    document.getElementById("flowerpots_btn5")]
let flowerpot_min_btn = [document.getElementById("flowerpots_min_btn1"),
    document.getElementById("flowerpots_min_btn2"),
    document.getElementById("flowerpots_min_btn3"),
    document.getElementById("flowerpots_min_btn4"),
    document.getElementById("flowerpots_min_btn5")]
let flowerpot_label = [document.getElementById("flowerpots_count1"),
    document.getElementById("flowerpots_count2"),
    document.getElementById("flowerpots_count3"),
    document.getElementById("flowerpots_count4"),
    document.getElementById("flowerpots_count5")]
let flowerpot_img = [
    document.getElementById("flowerpots_img1"),
    document.getElementById("flowerpots_img2"),
    document.getElementById("flowerpots_img3"),
    document.getElementById("flowerpots_img4"),
    document.getElementById("flowerpots_img5")]
let flowerpot_disc = [
    document.getElementById("flowerpots_disc1"),
    document.getElementById("flowerpots_disc2"),
    document.getElementById("flowerpots_disc3"),
    document.getElementById("flowerpots_disc4"),
    document.getElementById("flowerpots_disc5")]

flowerpot_img[0].addEventListener("click", function () {
    blurOpacity(this, flowerpot_disc[0])
})

flowerpot_img[1].addEventListener("click", function () {
    blurOpacity(this, flowerpot_disc[1])
})
flowerpot_img[2].addEventListener("click", function () {
    blurOpacity(this, flowerpot_disc[2])
})
flowerpot_img[3].addEventListener("click", function () {
    blurOpacity(this, flowerpot_disc[3])
})
flowerpot_img[4].addEventListener("click", function () {
    blurOpacity(this, flowerpot_disc[4])
})
flowerpot_disc[0].addEventListener("click", function () {
    blurOpacity(flowerpot_img[0], this)
})
flowerpot_disc[1].addEventListener("click", function () {
    blurOpacity(flowerpot_img[1], this)
})
flowerpot_disc[2].addEventListener("click", function () {
    blurOpacity(flowerpot_img[2], this)
})
flowerpot_disc[3].addEventListener("click", function () {
    blurOpacity(flowerpot_img[3], this)
})
flowerpot_disc[4].addEventListener("click", function () {
    blurOpacity(flowerpot_img[4], this)
})

flowerpot_plus_btn[0].addEventListener("click", function () {
    flowerpot_item[0] += 1;
    flowerpot_cost_item[0] = flowerpot_price[0] * flowerpot_item[0];
    SetText(flowerpot_label[0], flowerpot_item[0], flowerpot_cost_item[0]);
    MainButtonShow(flowerpot_price[0]);
});

flowerpot_plus_btn[1].addEventListener("click", function () {
    flowerpot_item[1] += 1;
    flowerpot_cost_item[1] = flowerpot_price[1] * flowerpot_item[1];
    SetText(flowerpot_label[1], flowerpot_item[1], flowerpot_cost_item[1]);
    MainButtonShow(flowerpot_price[1]);

});

flowerpot_plus_btn[2].addEventListener("click", function () {
    flowerpot_item[2] += 1;
    flowerpot_cost_item[2] = flowerpot_price[2] * flowerpot_item[2];
    SetText(flowerpot_label[2], flowerpot_item[2], flowerpot_cost_item[2]);
    MainButtonShow(flowerpot_price[2]);

});

flowerpot_plus_btn[3].addEventListener("click", function () {
    flowerpot_item[3] += 1;
    flowerpot_cost_item[3] = flowerpot_price[3] * flowerpot_item[3];
    SetText(flowerpot_label[3], flowerpot_item[3], flowerpot_cost_item[3]);
    MainButtonShow(flowerpot_price[3]);

});

flowerpot_plus_btn[4].addEventListener("click", function () {
    flowerpot_item[4] += 1;
    flowerpot_cost_item[4] = flowerpot_price[4] * flowerpot_item[4];
    SetText(flowerpot_label[4], flowerpot_item[4], flowerpot_cost_item[4]);

    MainButtonShow(flowerpot_price[4]);

});

flowerpot_min_btn[0].addEventListener('click', function () {
    if (countCheck(flowerpot_item[0])) {
        flowerpot_item[0] -= 1;
        flowerpot_cost_item[0] = flowerpot_price[0] * flowerpot_item[0];
        SetText(flowerpot_label[0], flowerpot_item[0], flowerpot_cost_item[0]);
        MainButtonShow(flowerpot_price[0] * (-1));
    }

})
flowerpot_min_btn[1].addEventListener('click', function () {
    if (countCheck(flowerpot_item[1])) {
        flowerpot_item[1] -= 1;
        flowerpot_cost_item[1] = flowerpot_price[1] * flowerpot_item[1];
        SetText(flowerpot_label[1], flowerpot_item[1], flowerpot_cost_item[1]);
        MainButtonShow(flowerpot_price[1] * (-1));
    }

})
flowerpot_min_btn[2].addEventListener('click', function () {
    if (countCheck(flowerpot_item[2]) === true) {
        flowerpot_item[2] -= 1;
        flowerpot_cost_item[2] = flowerpot_price[2] * flowerpot_item[2];
        SetText(flowerpot_label[2], flowerpot_item[2], flowerpot_cost_item[2]);
        MainButtonShow(flowerpot_price[2] * (-1));
    }

})
flowerpot_min_btn[3].addEventListener('click', function () {
    if (countCheck(flowerpot_item[3])) {
        flowerpot_item[3] -= 1;
        flowerpot_cost_item[3] = flowerpot_price[3] * flowerpot_item[3];
        SetText(flowerpot_label[3], flowerpot_item[3], flowerpot_cost_item[3]);
        MainButtonShow(flowerpot_price[3] * (-1));
    }

})
flowerpot_min_btn[4].addEventListener('click', function () {
    if (countCheck(flowerpot_item[4])) {
        flowerpot_item[4] -= 1;
        flowerpot_cost_item[4] = flowerpot_price[4] * flowerpot_item[4];
        SetText(flowerpot_label[4], flowerpot_item[4], flowerpot_cost_item[4]);
        MainButtonShow(flowerpot_price[4] * (-1));
    }

})
function MainButtonShow(cost) {
    flowerpot_totalCost += cost;
    tg.MainButton.setText(`Купить! ${flowerpot_totalCost} ₽`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
    if (candle_totalCost === 0) {
        tg.MainButton.hide();
    }
}