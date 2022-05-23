import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCartMoviesSelector } from "../../redux-manager/Movies/selectors";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

function Movies() {
  const movies = useSelector(getCartMoviesSelector);
  return (
    <ul className="movies">
      {movies &&
        movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem {...movie} />
          </li>
        ))}
    </ul>
  );
}

export default Movies;
