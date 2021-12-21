
// the strategy pattern interface
class UpdateStrategy {
    update( {sellIn, quality} ) {
      return {sellIn,  quality} 
    }
  }

 module.exports = UpdateStrategy