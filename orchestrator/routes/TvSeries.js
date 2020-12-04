const router = require('express').Router()
const Controller = require('../controllers/TvSeriesController')

router.get('/', Controller.FindAllTvSeries)
router.get('/:id', Controller.FindONeTvSeries)

router.post('/', Controller.AddTvSeries)

router.put('/:id', Controller.UpdateTvSeries)

router.delete('/:id', Controller.DeleteTvSeries)

module.exports = router