const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()

const baseURLMovie = process.env.BASEURLMOVIE || 'http://localhost:3001/movies'
const baseURLTvSeries = process.env.BASEURLTVSERIES || 'http://localhost:3002/TvSeries'

const resolvers = {
    Query:{
        movies: async () =>{
            try{
                // console.log('try')
                const movies = await redis.get('movies')
                if(movies){
                    // console.log('if')
                    return JSON.parse(movies)
                }else{
                    // console.log('else')
                    const {data} = await axios({
                        method: 'GET',
                        url: `${baseURLMovie}`
                    })
                    await redis.set('movies', JSON.stringify(data))
                    return data
                }
            }
            catch(err){
                console.log(err.message)
            }
        },
        series: async () =>{
            try{
                const series = await redis.get('series')
                if(series){
                    return JSON.parse(series)
                }else{
                    const {data} = await axios({
                        method: 'GET',
                        url: `${baseURLTvSeries}`
                    })
                    const setredis = await redis.set('series', JSON.stringify(data))
                    return data
                }
            }
            catch(err){
                console.log(err)
            }
        },
        movieById: async(parent, args) =>{
            const _id = args._id
            const {data} = await axios.get(`${baseURLMovie}/${_id}`)
            return data
        },
        seriesById: async(parent, args) =>{
            const _id = args._id
            const {data} = await axios.get(`${baseURLTvSeries}/${_id}`)
            return data
        }
    },
    Mutation:{
        addMovie: async(parent,args) =>{
            console.log(args)
            const {data} = await axios.post(baseURLMovie,args)
            await redis.del('movies')
            return data
        },
        addSeries: async(parent,args) =>{
            console.log(args)
            const {data} = await axios.post(baseURLTvSeries,args)
            await redis.del('series')
            return data
        },
        editMovie: async(parent,args) =>{
            const id = args._id
            const payload = {title: args.title, overview:args.overview, poster_path:args.poster_path, popularity:args.popularity, tags:args.tags}
            const {data} = await axios.put(`${baseURLMovie}/${id}`,payload)
            await redis.del('movies')
            return data
        },
        editSeries: async(parent,args) =>{
            const id = args._id
            const payload = {title: args.title, overview:args.overview, poster_path:args.poster_path, popularity:args.popularity, tags:args.tags}
            const {data} = await axios.put(`${baseURLTvSeries}/${id}`,payload)
            await redis.del('series')
            return data
        },
        deleteMovie: async(parent,args) =>{
            const id = args._id
            const {data} = await axios.delete(`${baseURLMovie}/${id}`)
            await redis.del('movies')
            return data
        },
        deleteSeries: async(parent,args) =>{
            const id = args._id
            const {data} = await axios.delete(`${baseURLTvSeries}/${id}`)
            await redis.del('series')
            return data
        }
    }
}

module.exports = resolvers