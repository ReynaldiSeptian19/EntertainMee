import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { GetAll } from "../queries/movie/queryMovie";
import { AddMovie } from "../queries/movie/mutationMovie";
import { useHistory } from "react-router-dom"

export default function CreateMovie() {
  const history = useHistory()
  const [addMovie] = useMutation(AddMovie,{
    refetchQueries: [{ query: GetAll }],
  });

  const [input, setInput] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: 0,
    tags: [],
  });
  console.log(input)

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
    addMovie({
      variables: {
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
    <div class="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="form-group" >
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e) => handleInput(e)}
            name="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Overview</label>
          <input
            type="text"
            onChange={(e) => handleInput(e)}
            name="overview"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label>Poster Path</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => handleInput(e)}
            name="poster_path"
          />
        </div>
        <div class="form-group">
          <label>Popularity</label>
          <input
            type="number"
            class="form-control"
            onChange={(e) => handleInput(e)}
            name="popularity"
          />
          </div>
          <div class="form-group">
          <label>tags</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => handleInput(e)}
            name="tags"
          />
          </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
