import { gql } from '@apollo/client'

export const GetAll = gql`
query getAll{
    movies{
        _id
        title
        overview
        poster_path
        popularity
        tags
    }
    series{
        _id
        title
        overview
        poster_path
        popularity
        tags
    }
}
` 


export const Movies = gql`
    query movies{
        movies{
            _id
            title
            overview
            poster_path
            popularity
            tags
        }
    }
` 

export const MovieById = gql`
    query movieById($_id: ID!){
        movieById(_id: $_id){
            _id
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`