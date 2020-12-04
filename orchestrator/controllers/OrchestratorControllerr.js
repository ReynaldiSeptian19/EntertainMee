const baseURLMovie = process.env.BASEURLMOVIE || 'http://localhost:3001/movies'
const baseURLTvSeries = process.env.BASEURLTVSERIES || 'http://localhost:3002/TvSeries'
const Redis = require('ioredis')
const axios = require('axios')
const redis = new Redis()

class Controller{
    static async EntertainMe(req, res){
        try{
            const Movie = await redis.get('movies')
            const TvSeries = await redis.get('tvSeries')
            if(Movie && TvSeries){
                res.status(200).json(JSON.parse(Movie, TvSeries))
            }
            else{
                const responseMovie = await axios({
                    method: 'GET',
                    url: baseURLMovie
                })
                const resposeTvSeries = await axios({
                    method: 'GET',
                    url: baseURLTvSeries
                })
                res.status(200).json({
                    movies: responseMovie.data,
                    TvSeries: resposeTvSeries.data
                })
            }
        }
        catch (err){
             console.log(err)
        }
    }
}

module.exports = Controller