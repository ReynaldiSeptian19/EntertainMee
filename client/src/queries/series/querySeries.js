import { gql } from '@apollo/client'

export const Series = gql`
    query series{
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

export const SeriesById = gql`
    query seriesById($_id: ID!){
        seriesById(_id: $_id){
            _id
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`