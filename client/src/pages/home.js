import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GetAll } from "../queries/movie/queryMovie";
import { DeleteMovie } from "../queries/movie/mutationMovie";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useQuery(GetAll);

  console.log(data);
  const [deleteMovie] = useMutation(DeleteMovie, {
    refetchQueries: [{ query: GetAll }],
  });

  function handleDelete(id) {
    deleteMovie({
      variables: {
        _id: id,
      },
    });
  }

  return (
    <div class="container">
      <h1>Movies</h1>
      <div class="row">
        <Fade cascade duration={1500}>
          {data?.movies.map((movie) => {
            return (
              <div class="col">
                <div class="card-deck">
                  <div class="card"  style={{ width: "230px" }}>
                    <img
                      src={movie.poster_path}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "300px" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{movie.title}</h5>
                      <p class="card-text">{movie.overview}</p>
                      <p class="card-text">
                        <small class="text-muted">
                          Rating: {movie.popularity}
                        </small>
                      </p>
                      <Link to={`/detailMovie/${movie._id}`}>
                        <button className="btn btn-primary mr-4">
                          Detail
                        </button>
                        </Link>
                      <button className='ml-4 btn' onClick={() => handleDelete(movie._id)}>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-trash-fill"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                          />
                        </svg>
                      </button>
                      <Link to={`/editMovie/${movie._id}`}>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-pencil-fill"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
      <h1 class="mt-5">TvSeries</h1>
      <div class="row ">
        <Fade cascade duration={1500}>
          {data?.series.map((serie) => {
            return (
              <div class="col">
                <div class="card-deck">
                  <div class="card"   style={{ width: "230px" }}>
                    <img
                      src="https://images-ext-1.discordapp.net/external/BCWQvceyi_XEbvn0I0f5RtIpBGd0wEXPP0gusl_-3-Q/https/image.tmdb.org/t/p/w600_and_h900_bestv2/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg?width=200&height=300"
                      class="card-img-top"
                      alt="..."
                      style={{ height: "300px" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{serie.title}</h5>
                      <p class="card-text">{serie.overview}</p>
                      <p class="card-text">
                        <small class="text-muted">
                          Rating: {serie.popularity}
                        </small>
                      </p>
                      <Link to={`/detailSeries/${serie._id}`}>
                        <button className="btn btn-primary">Detail</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
}
