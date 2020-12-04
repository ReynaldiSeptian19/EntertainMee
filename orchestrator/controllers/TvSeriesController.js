const Redis = require('ioredis')
const axios = require('axios')
const redis = new Redis()
const baseURL = process.env.BASEURL || 'http://localhost:3002'

class Controller {

    static async FindAllTvSeries (req, res) {
        try {
            const tvSeries = await redis.get('tvSeries')
            if(tvSeries) {
                res.status(200).json(JSON.parse(tvSeries))
            }
            else {
                const response = await axios({
                    method: 'GET',
                    url: `${baseURL}/TvSeries`
                })
                const setRedis = await redis.set('tvSeries', JSON.stringify(response.data))
                res.status(200).json(response.data)
            }
        }
        catch (err) {
            console.log(err)
        }
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

    static async AddTvSeries(req, res){
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
                url: `${baseURL}/TvSeries`,
                data: data
            })
            res.status(201).json(response.data)
            const del = await redis.del('tvSeries')
        }
        catch(err){
            console.log(err)
        }
    }

    static async UpdateTvSeries(req, res){
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
                url: `${baseURL}/TvSeries/${id}`,
                data: data
            })
            res.status(200).json(response.data)
            const del = await redis.del('tvSeries')
        }
        catch(err){
            console.log(err)
        }
    }

    static async DeleteTvSeries(req,res){
        try{
            const id = req.params.id
            const response = await axios({
                method: 'DELETE',
                url: `${baseURL}/TvSeries/${id}`
            })
            res.status(200).json(response.data)
            const del = await redis.del("tvSeries")
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = Controller