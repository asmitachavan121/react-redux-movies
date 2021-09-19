import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import React from "react";
import Pagination from "./components/pagination";
import moviesData from "./services/movies";
import genreList, { IGenre } from "./services/genres";
import Movies from "./components/movies";
import _ from "lodash";
import NavBar from "./components/navBar";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieDetails from "./components/movieDetails"

moviesData.forEach((movie, index) => (movie.id = index));
function App() {
  
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
