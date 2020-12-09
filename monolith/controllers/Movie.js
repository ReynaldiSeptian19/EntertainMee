const Movie = require('../model/Movie')

class Controller {
    static FindAllMovie(req, res){
        Movie.findAll()
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    static FindONeMovie(req, res){
        const id = req.params.id
        Movie.findOne(id)
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    static AddMovie(req, res){
        const data= {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tags: req.body.tags
        }
        Movie.addMovie(data)
        .then(result => {
            res.status(201).json(result.ops[0])
        })
        .catch(err =>[
            console.log(err)
        ])
    }

    static UpdateMovie(req, res){
        const id = req.params.id
        const data= {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tags: req.body.tags
        }
        Movie.updateMovie(id, data)
        .then(result =>{
            res.status(200).json(result.value)
        })
    }

    static DeleteMovie(req, res){
        const id = req.params.id
        Movie.deleteMovie(id)
        .then(result =>{
            res.status(200).json(result.value)
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

module.exports = Controller