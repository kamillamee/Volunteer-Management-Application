const express = require('express')
const volunteers_router = require('./volunteers')

const router = express.Router()

// registering child routers
router.use('/volunteers', volunteers_router)

module.exports = router
