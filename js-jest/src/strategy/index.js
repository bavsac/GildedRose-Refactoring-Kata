const UpdatableItem = require('./updatableItem')
const UpdateStrategy = require('./updateStrategy')
const BackstagePassesUpdateStrategy = require('./passesUpdateStrategy')
const AgedBrieUpdateStrategy = require('./agedBrieUpdateStrategy')
const ConjuredItemUpdateStrategy = require('./conjuredItemUpdateStrategy')

module.exports = {
                  UpdateStrategy, 
                  BackstagePassesUpdateStrategy,
                  UpdatableItem,
                  AgedBrieUpdateStrategy,
                  ConjuredItemUpdateStrategy
                }