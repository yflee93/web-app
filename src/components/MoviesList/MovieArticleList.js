import React, {useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import MovieArticleListItem from "./MovieArticleListItem";
import {fetchAllMovies} from "../../services/movieService";

const selectAllMovies = (state) => state.movies;

const MoviesArticleList = () => {
  const movies = useSelector(selectAllMovies);
  const dispatch = useDispatch();

  useEffect(() => fetchAllMovies(dispatch), []);

  return (
      <div>
        <ul className="list-group">
          {
            movies.map(movie =>
                <MovieArticleListItem key={movie.id} movie={movie}/>)
          }
        </ul>
      </div>
  )
}

export default MoviesArticleList;