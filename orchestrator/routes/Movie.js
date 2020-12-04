const router = require('express').Router()
const Controller = require('../controllers/MovieController')

router.get('/', Controller.FindAllMovie)
router.get('/:id', Controller.FindONeMovie)

router.post('/', Controller.AddMovie)

router.put('/:id', Controller.UpdateMovie)

router.delete('/:id', Controller.DeleteMovie)

module.exports = router