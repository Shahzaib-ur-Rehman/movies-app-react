import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(shows);
  let moviesRender = "";
  let showsRender = "";
  moviesRender =
    movies.Response === "True" ? (
      <Fragment>
        {movies.Search.map((movie, index) => {
          return <MovieCard key={index} data={movie} />;
        })}
      </Fragment>
    ) : (
      <Fragment>
        {
          <div className="movies-error">
            <h3>{movies.Error}</h3>
          </div>
        }
      </Fragment>
    );

  showsRender =
    shows.Response === "True" ? (
      <Fragment>
        {shows.Search.map((movie, index) => {
          return <MovieCard key={index} data={movie} />;
        })}
      </Fragment>
    ) : (
      <Fragment>
        {
          <div className="movies-error">
            <h3>{shows.Error}</h3>
          </div>
        }
      </Fragment>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movie List</h2>
        <div className="movie-container">{moviesRender}</div>
      </div>
      <div className="show-list">
        <h2>Show List</h2>
        <div className="movie-container">{showsRender}</div>
      </div>
    </div>
  );
};

export default MovieListing;
