const UpdateStrategy = require('../strategy/updateStrategy')

  class BackstagePassesUpdateStrategy extends UpdateStrategy {
    update( {sellIn, quality} ) {

        sellIn -=1;
        if(sellIn<=0) quality = 0; // passes have expired
        else {
            if (sellIn < 11) { // concert in 10 or less days
              quality = Math.min(50, (sellIn < 6 ? quality + 3 : quality + 2))
            }
            else  quality++;
        } 
        return {sellIn, quality} ;
    }
}

module.exports = BackstagePassesUpdateStrategy;