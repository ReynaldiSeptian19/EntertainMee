import React from "react";
import { useQuery } from "@apollo/client";
import { MovieById } from "../queries/movie/queryMovie";
import { useParams } from "react-router-dom";

export default function DetailMovie() {
  const { id } = useParams();

  const { data } = useQuery(MovieById, {
    variables: {
      _id: id,
    },
  });

  return (
    <div>
      <h1>Detail Movie</h1>
      <div class="card mb-3" style={{ width: "540px;" }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={data?.movieById.poster_path} class="card-img" alt="..." style={{height: "400px", width:"300px"}} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Title: {data?.movieById.title}</h5>
              <p class="card-text">
              Overview: {data?.movieById.overview}
              </p>
              <p class="card-text">
              Rating: {data?.movieById.popularity}
              </p>
              <p class="card-text">
              Genre: {data?.movieById.tags.map((tag)=>{
                  return(
                      <p class="card-text">{tag}</p>
                  )
              })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
