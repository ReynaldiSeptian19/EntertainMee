import { gql } from "@apollo/client";

export const AddMovie = gql`
mutation addMovie(
    $title: String
    $overview: String
    $poster_path: String
    $popularity: Float
    $tags: [String]
    ) {
        addMovie(
            title: $title
            overview: $overview
            poster_path: $poster_path
            popularity: $popularity
            tags: $tags
        ) {
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`;

export const EditMovie = gql`
mutation editMovie(
    $_id: ID!
    $title: String
    $overview: String
    $poster_path: String
    $popularity: Float
    $tags: [String]
    ) {
        editMovie(
            _id: $_id
            title: $title
            overview: $overview
            poster_path: $poster_path
            popularity: $popularity
            tags: $tags
        ) {
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`;

export const DeleteMovie = gql`
    mutation deleteMovie(
        $_id: ID!
    ){
        deleteMovie(
            _id: $_id
        ){
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`;
