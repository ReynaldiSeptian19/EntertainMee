const TvSeries = require('../model/TvSeries')

class Controller {
    static FindAllTvSeries(req, res){
        TvSeries.findAll()
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    static FindONeTvSeries(req, res){
        const id = req.params.id
        TvSeries.findOne(id)
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    static AddTvSeries(req, res){
        const data= {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tags: req.body.tags
        }
        TvSeries.addTvSeries(data)
        .then(result => {
            res.status(201).json(result.ops[0])
        })
        .catch(err =>[
            console.log(err)
        ])
    }

    static UpdateTvSeries(req, res){
        const id = req.params.id
        const data= {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tags: req.body.tags
        }
        TvSeries.updateTvSeries(id, data)
        .then(result =>{
            res.status(200).json(result.value)
        })
    }

    static DeleteTvSeries(req, res){
        const id = req.params.id
        TvSeries.deleteMovie(id)
        .then(result =>{
            res.status(200).json(result.value)
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

module.exports = Controller