const router = require('express').Router()
const Movie = require('./Movie')
const TvSeries = require('./TvSeries')

router.use('/movies',Movie)
router.use('/TvSeries',TvSeries)

module.exports = router