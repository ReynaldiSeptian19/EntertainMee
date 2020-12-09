const router = require('express').Router()
const TvSeries = require('./TvSeries')

router.use('/TvSeries',TvSeries)

module.exports = router