const Item = require('./item')
const {increaseItemQuality} = require('../utils')

class BackstagePasses extends UpdatableItem{
    constructor( sellIn, quality){
        super( 'Backstage passes to a TAFKAL80ETC concert',sellIn, quality, new BackstagePassesUpdateStrategy() )
    }
    
}

class UpdatableItem extends Item {
    constructor( sellIn, quality, updateStrategy){
        super( 'Backstage passes to a TAFKAL80ETC concert',sellIn, quality)
        this.updateStrategy = updateStrategy
    }
    update(){
        const {sellIn, quality} =  this.updateStrategy
                    .update({sellIn:this.sellIn, quality:this.quality})
        
        this.sellIn = sellIn
        this.quality = quality
          
    }
}

// the strategy pattern interface
class UpdateStrategy {
  update( {sellIn, quality} ) {return {sellIn,  quality} }// 
}

class BackstagePassesUpdateStrategy  extends UpdateStrategy {
    update( {sellIn, quality} ) {

        sellIn -=1;
        if(sellIn<=0) quality = 0; // passes have expired
        else {
            if (sellIn < 11) { // concert in 10 or less days
              quality = Math.min(50, (sellIn < 6 ? quality + 3 : quality + 2))
            }
            else  quality++;
        } 
        console.log(sellIn, quality, "<<<< after updating using strategy")
        return {sellIn, quality} ; // need to affect sellIn hm,,,
    }
}

module.exports = BackstagePasses;

// const Item = require('./item')
// const {increaseItemQuality} = require('../utils')

// class BackstagePasses extends Item{
//     constructor( sellIn, quality){
//         super( 'Backstage passes to a TAFKAL80ETC concert',sellIn, quality)
//         this.updateStrategy = new BackstagePassesUpdateStrategy()
//     }
//     update(){
//         const data =  this.updateStrategy
//                     .update({this.sellIn, this.quality})
//         // console.log(data, "<<<< after updating using strategy")
//         this.sellIn = sellIn
//         this.quality = quality
          
//     }
// }

// // the strategy pattern interface
// class UpdateStrategy {
//   update( {sellIn, quality} ) {return {sellIn,  quality} }// returns quality
// }

// class BackstagePassesUpdateStrategy  extends UpdateStrategy {
//     update( {sellIn, quality} ) {
//         sellIn -=1;
//         if(sellIn<=0) quality = 0; // passes have expired
//         else {
//             if (sellIn < 11) { // concert in 10 or less days
//               quality = Math.min(50, (sellIn < 6 ? quality + 3 : quality + 2))
//             }
//             else  quality++;
//         } 
// console.log(sellIn, quality)
//         return {sellIn, quality} ; 
//     }
// }

// module.exports = BackstagePasses;