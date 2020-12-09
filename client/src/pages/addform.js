import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { GetAll } from "../queries/movie/queryMovie";
import { AddMovie } from "../queries/movie/mutationMovie";
import { useHistory } from "react-router-dom"
import Select from "react-select"

export default function CreateMovie() {
  const history = useHistory()
  const [tag, setTag] = useState([])
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

  useEffect(()=>{
    let currentTag
    if(tag){
      currentTag = tag.map(e => e.value)
    }
    setInput({...input, tags: currentTag})
  }, [tag])

  // console.log(input)
  const options = [
    { value: 'Action', label: 'Action'},
    { value: 'Biography', label: 'Biography'},
    { value: 'Comedy', label: 'Comedy'},
    { value: 'Romance', label: 'Romance'},
    { value: 'Horror', label: 'Horror'},
    { value: 'Drama', label: 'Drama'},
    { value: 'Fiction', label: 'Fiction'},
    { value: 'Colossal', label: 'Colossal'},
    { value: 'Fantasy', label: 'Fantasy'},
    { value: 'Animation', label: 'Animation'}
]


  function handleInput(e) {
    let name = e.target.name;
    let value = e.target.value;
    setInput({
      ...input,
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
          <Select
            isMulti
            name="tags"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(tag) => setTag(tag)} 
          />
          </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
