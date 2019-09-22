const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    const SelicCycle = require('../api/selic/selicService')
    SelicCycle.register(router, '/selicCycles')
}