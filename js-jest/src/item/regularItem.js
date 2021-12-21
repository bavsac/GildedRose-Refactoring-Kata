const Item = require('./item')

class RegularItem extends Item{
    
    update(){
        this.sellIn -= 1;
        this.quality = Math.max((this.sellIn > 0 ? this.quality - 1 : this.quality - 2), 0); 
    }
}

module.exports = RegularItem;