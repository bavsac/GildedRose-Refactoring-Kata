exports.decreaseItemQuality= (item) => {
    item.quality = item.quality - 1;
}

exports.increaseItemQuality= (item) => {
    item.quality = item.quality + 1;
}