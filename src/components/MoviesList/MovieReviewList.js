import React, {useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import MovieReviewListItem from "./MovieReviewListItem";
import {fetchAllMovies} from "../../services/movieService";

const selectAllMovies = (state) => state.movies;

const MoviesReviewList = () => {
  const movies = useSelector(selectAllMovies);
  const dispatch = useDispatch();

  useEffect(() => fetchAllMovies(dispatch), []);
  return (
      <div>
        <ul className="list-group">
          {
            movies.map(movie =>
                <MovieReviewListItem key={movie.id} movie={movie}/>)
          }
        </ul>
      </div>
  )
}

export default MoviesReviewList;