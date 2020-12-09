import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { EditMovie } from "../queries/movie/mutationMovie";
import { GetAll, MovieById } from "../queries/movie/queryMovie";
import { useParams, useHistory } from "react-router-dom"

export default function UpdateMovie() {
    const {id} = useParams()
    const history = useHistory()
    const [input, setInput] = useState({
        title: "",
        overview: "",
        poster_path: "",
        popularity: 0,
        tags: [],
    });
    const [editMovie] = useMutation(EditMovie, {
        refetchQueries: [{ query: GetAll }],
    });
    

    useQuery(MovieById,{
        variables:{
            _id: id
        },
        onCompleted: data =>{
            console.log(data)
            setInput({
                title: data.movieById.title,
                overview: data.movieById.overview,
                poster_path: data.movieById.poster_path,
                popularity: data.movieById.popularity,
                tags: data.movieById.tags
            })
        }
    })
    

  function handleInput(e) {
    let name = e.target.name;
    let value = e.target.value;
    setInput({
      ...input,
      [name]: name === "tags" ? [value] : value,
      [name]: name === "popularity" ? +value : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    editMovie({
      variables: {
        _id: id,
        title: input.title,
        overview: input.overview,
        poster_path: input.poster_path,
        popularity: input.popularity,
        tags: input.tags,
      },
    });
    history.push('/')
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e) => handleInput(e)}
            name="title"
            id="title"
            aria-describedby="emailHelp"
            defaultValue={input.title}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Overview</label>
          <input
            type="text"
            onChange={(e) => handleInput(e)}
            name="overview"
            title="overview"
            class="form-control"
            id="exampleInputPassword1"
            defaultValue={input.overview}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Poster Path</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => handleInput(e)}
            name="poster_path"
            id="poster_path"
            defaultValue={input.poster_path}
          />
        </div>
        <div class="form-group">
          <label>Popularity</label>
          <input
            type="number"
            class="form-control"
            onChange={(e) => handleInput(e)}
            name="popularity"
            id="popularity"
            defaultValue={input.popularity}
          />
          </div>
          <div class="form-group">
          <label>tags</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => handleInput(e)}
            name="tags"
            id="tags"
            defaultValue={input.tags}
          />
          </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
