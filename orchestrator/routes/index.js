const router = require('express').Router()
const Controller = require('../controllers/OrchestratorControllerr')
const Movie = require('./Movie')
const TvSeries = require('./Movie')

router.get('/entertainme', Controller.EntertainMe)
router.use('/movies', Movie)
router.use('/TvSeries', TvSeries)

module.exports = router