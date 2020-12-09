import { favourites } from "../cache/index";
import { Fade } from "react-awesome-reveal";

export default function Favourite() {
  const favourite = favourites();

  return (
    <div className="container">
      <h1>My-Favourites</h1>
      <div class="row">
        <Fade cascade duration={1500}>
          {favourite.map((fav) => {
            return (
              <div class="col">
                <div class="card-deck">
                  <div class="card" style={{ width: "230px" }}>
                    <img
                      src={fav.poster_path}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "300px" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{fav.title}</h5>
                      <p class="card-text">{fav.overview}</p>
                      <p class="card-text">
                        <small class="text-muted">
                          Rating: {fav.popularity}
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
    </div>
  );
}
