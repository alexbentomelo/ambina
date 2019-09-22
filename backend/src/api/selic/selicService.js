const SelicCycle = require('./selic')

SelicCycle.methods(['get', 'post', 'put', 'delete']);
SelicCycle.updateOptions({new: true, runValidators: true})

module.exports = SelicCycle