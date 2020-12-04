const router = require('express').Router()
const Movie = require('./Movie')

router.use('/movies',Movie)

module.exports = router