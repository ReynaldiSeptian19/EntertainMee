const Redis = require('ioredis')
const axios = require('axios')
const redis = new Redis()
const baseURL = process.env.BASEURL || 'http://localhost:3001'

class Controller {

    static async FindAllMovie (req, res) {
        try {
            const movies = await redis.get('movies')
            if(movies) {
                res.status(200).json(JSON.parse(movies))
            }
            else {
                const response = await axios({
                    method: 'GET',
                    url: `${baseURL}/movies`
                })
                const setRedis = await redis.set('movies', JSON.stringify(response.data))
                res.status(200).json(response.data)
            }
        }
        catch (err) {
            console.log(err)
        }
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

    static async AddMovie(req, res){
        try{
            const data= {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tags: req.body.tags
            }
            const response = await axios({
                method: 'POST',
                url: `${baseURL}/movies`,
                data: data
            })
            res.status(201).json(response.data)
            const del = await redis.del('Movies')
        }
        catch(err){
            console.log(err)
        }
    }

    static async UpdateMovie(req, res){
        try{
            const id = req.params.id
            const data= {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tags: req.body.tags
            }
            const response = await axios({
                method: 'PUT',
                url: `${baseURL}/movies/${id}`,
                data: data
            })
            res.status(200).json(response.data)
            const del = await redis.del('Movies')
        }
        catch(err){
            console.log(err)
        }
    }

    static async DeleteMovie(req,res){
        try{
            const id = req.params.id
            const response = await axios({
                method: 'DELETE',
                url: `${baseURL}/movies/${id}`
            })
            res.status(200).json(response.data)
            const del = await redis.del("Movies")
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = Controller