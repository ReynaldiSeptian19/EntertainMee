const {gql} = require('apollo-server')

const typeDefs = gql`
    type Movie{
        _id: ID
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }

    type Series{
        _id: ID
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }

    type Query {
        movies: [Movie]
        movieById(_id: ID!): Movie
        series: [Series]
        seriesById(_id: ID!): Series
    }

    type Mutation {
        addMovie(
            title: String
            overview: String
            poster_path: String
            popularity: Float
            tags: [String]
        ): Movie

        addSeries(
            title: String
            overview: String
            poster_path: String
            popularity: Float
            tags: [String]
        ): Series

        editMovie(
            _id: ID!
            title: String
            overview: String
            poster_path: String
            popularity: Float
            tags: [String]
        ): Movie

        editSeries(
            _id: ID!
            title: String
            overview: String
            poster_path: String
            popularity: Float
            tags: [String]
        ): Series

        deleteMovie(
            _id: ID!
        ): Movie

        deleteSeries(
            _id: ID!
        ): Series
    }
`

module.exports = typeDefs