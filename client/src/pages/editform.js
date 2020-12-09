import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { EditMovie } from "../queries/movie/mutationMovie";
import { GetAll, MovieById } from "../queries/movie/queryMovie";
import { useParams, useHistory } from "react-router-dom"
import Select from "react-select"

export default function UpdateMovie() {
    const {id} = useParams()
    const history = useHistory()
    const [tag, setTag] = useState([])
    const [input, setInput] = useState({
        title: "",
        overview: "",
        poster_path: "",
        popularity: 0,
        tags: [],
    });

    const options = [
        { value: 'Action', label: 'Action'},
        { value: 'Animation', label: 'Animation'},
        { value: 'Biography', label: 'Biography'},
        { value: 'Comedy', label: 'Comedy'},
        { value: 'Colossal', label: 'Colossal'},
        { value: 'Drama', label: 'Drama'},
        { value: 'Fantasy', label: 'Fantasy'},
        { value: 'Fiction', label: 'Fiction'},
        { value: 'Horror', label: 'Horror'},
        { value: 'Romance', label: 'Romance'},
    ]

    const [editMovie] = useMutation(EditMovie, {
        refetchQueries: [{ query: GetAll }],
    });

    useEffect(()=>{
        let currentTag
        if(tag){
          currentTag = tag.map(e => e.value)
        }
        setInput({...input, tags: currentTag})
      }, [tag])
    

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
          <Select
            isMulti
            name="tags"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            defaultValue={input.tags}
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
