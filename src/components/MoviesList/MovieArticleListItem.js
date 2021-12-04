import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteMovie } from "../../services/movieService";

const MovieArticleListItem = ({movie}) => {
  const profile = useSelector((state => state.profile))
  const dispatch = useDispatch();

  const {
    name,
    poster,
  } = movie;

  // delete movies
  const deleteMovieClickHandler = () => {
    deleteMovie(dispatch, movie);
  }

  return (
      <li className="list-group-item">
        <div className="card mb-3 movie-list-item-container">
          <div className="row g-0">
            <div className="col-4">
              <img src={poster}
                   alt="movie_poster"
                   className="img-fluid movie-poster"/>
              {(profile.userType === ("general" || "admin")) ?
                  <i className="far fa-bookmark movie-list-bookmark"></i> : ''}
            </div>
            <div className="col-8">
              {(profile.userType === ("general" || "admin")) ?
                  <i className="fas fa-times text-white-50 fa-pull-right"
                     onClick={deleteMovieClickHandler}></i> : ''}
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-title">Article by the reviewer</p>
              </div>
            </div>
          </div>
        </div>
      </li>
  )
}

export default MovieArticleListItem;