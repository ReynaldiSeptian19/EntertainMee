import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./config/client";

import Home from "./pages/home";
import Movie from "./pages/movie"
import Series from "./pages/series"
import Favourite from "./pages/favorite"
import DetailMovie from "./pages/detailMovie"
import DetailSeries from "./pages/detailSeries"
import CreateMovie from "./pages/addform";
import UpdateMovie from "./pages/editform";
import Animation from "./pages/animation";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={'/'}>
          <a class="navbar-brand" href="#">
            EntertainMe
          </a>
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <Link to={'/movie'}>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Movie
                </a>
              </li>
                </Link>
                <Link to={'/series'}>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Series
                </a>
              </li>
              </Link>
              <Link to={'/favourite'}>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  My-Favourites
                </a>
              </li>
              </Link>
              <Link to={'/addMovie'}>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Add Movie
                </a>
              </li>
              </Link>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/favourite">
            <Favourite />
          </Route>
          <Route path="/detailmovie/:id">
            <DetailMovie />
          </Route>
          <Route path="/detailSeries/:id">
            <DetailSeries />
          </Route>
          <Route path="/addMovie">
            <CreateMovie />
          </Route>
          <Route path="/editMovie/:id">
            <UpdateMovie />
          </Route>
          <Route path="/animation">
            <Animation />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
