import React from "react";
import { useQuery} from "@apollo/client";
import { Series } from "../queries/series/querySeries";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom"

export default function GetSeries() {
    const { data } = useQuery(Series);
  
    console.log(data);
    return (
      <div class="container">
        <h1>Series</h1>
        <div class="row">
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