import React from "react";
import Reveal, { Fade, Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
from{
    opacity:0;
    transform: translate3d(-50px,-10px,0)
}

to{
    opacity:1;
    tranform: translate3d(0,0,0)
`;

export default function Animation() {
  const array = [1, 2, 3, 4];
  return (
    <div class="container">
      <h1>Fade Animation</h1>
      <div class="row mb-5">
        <Fade cascade duration={2000}>
        {array.map(() => {
            return (
              <div class="col">
                <div class="card-deck">
                  <div class="card">
                    <img
                      src="https://images-ext-1.discordapp.net/external/BCWQvceyi_XEbvn0I0f5RtIpBGd0wEXPP0gusl_-3-Q/https/image.tmdb.org/t/p/w600_and_h900_bestv2/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg?width=200&height=300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">His Dark Material</h5>
                      <p class="card-text">Actually it's a movie</p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 class="mt-5">Slide Animation</h1>
      <div class="row">
        <Slide cascade duration={2000} direction="up">
          {array.map(() => {
            return (
              <div class="col">
                <div class="card-deck">
                  <div class="card">
                    <img
                      src="https://images-ext-1.discordapp.net/external/BCWQvceyi_XEbvn0I0f5RtIpBGd0wEXPP0gusl_-3-Q/https/image.tmdb.org/t/p/w600_and_h900_bestv2/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg?width=200&height=300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">His Dark Material</h5>
                      <p class="card-text">Actually it's a movie</p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Custom Animation</h1>
      <div>
        <div class="row mt-5">
        <Reveal keyframes={customAnimation} duration={2000} cascade>
          {array.map(() => {
            return (
              <div class="col">
                <div class="card-deck">
                  <div class="card">
                    <img
                      src="https://images-ext-1.discordapp.net/external/BCWQvceyi_XEbvn0I0f5RtIpBGd0wEXPP0gusl_-3-Q/https/image.tmdb.org/t/p/w600_and_h900_bestv2/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg?width=200&height=300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">His Dark Material</h5>
                      <p class="card-text">Actually it's a movie</p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
      </div>
    </div>
  );
}
