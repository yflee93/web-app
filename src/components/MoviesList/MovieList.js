import React, {useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import MovieListItem from "./MovieListItem";
import {fetchAllMovies} from "../../services/movieService";

const selectAllMovies = (state) => state.movies;

const MoviesList = () => {
  const movies = useSelector(selectAllMovies);
  const dispatch = useDispatch();

  useEffect(() => fetchAllMovies(dispatch), []);

  return (
      <div>
        <ul className="list-group">
          {
            movies.map(movie =>
                <MovieListItem key={movie.id} movie={movie}/>)
          }
        </ul>
      </div>
  )
}

export default MoviesList;