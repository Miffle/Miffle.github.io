function SetText(text, item, cost) {
    text.innerText = `${item} шт / ${cost} ₽`;
}

function blurOpacity(img, disc) {
    img.classList.toggle('blur');
    disc.classList.toggle('opacity')
}

function countCheck(item) {
    return item !== 0;
}