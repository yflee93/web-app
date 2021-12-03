import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteMovie, likeMovie} from "../../services/movieService";


const MovieListItem = ({movie}) => {
  const profile = useSelector((state => state.profile))
  const dispatch = useDispatch();

  const {
    name,
    poster,
    year,
    description
  } = movie;

  // delete movies
  const deleteMovieClickHandler = () => {
    deleteMovie(dispatch, movie);
  }

  // add the movie to favorite movies list when click heart
  const likeMovieClickHandler = () => {
    likeMovie(dispatch, movie);
  }


  return (
      <li className="list-group-item">
        <div className="card mb-3 movie-list-item-container">
          <div className="row g-0">
            <div className="col-4">
              <img src={poster}
                   alt="movie_poster"
                   className="img-fluid movie-poster"/>
              {(profile.userType === "general") ?
                  <i className="far fa-bookmark movie-list-bookmark"></i> :
                  (profile.userType === "reviewer") ?
                      <i className="far fa-bookmark movie-list-bookmark"></i> :
                      (profile.userType === "admin") ?
                          <i className="far fa-bookmark movie-list-bookmark"></i> : ''}
            </div>
            <div className="col-8">
              {(profile.userType === "general") ?
                  <i className="fas fa-times text-white-50 fa-pull-right"
                     onClick={deleteMovieClickHandler}></i> :
                  (profile.userType === "reviewer") ?
                      <i className="fas fa-times text-white-50 fa-pull-right"
                         onClick={deleteMovieClickHandler}></i> :
                      (profile.userType === "admin") ?
                          <i className="fas fa-times text-white-50 fa-pull-right"
                             onClick={deleteMovieClickHandler}></i> : ''}
              <div className="card-body">
                <h5 className="card-title">{name}
                  {movie.liked ? (<span className="fs-6 ms-2">
                        <i className="fas fa-heart"
                           style={{color: movie.liked ? 'red' : 'white'}}
                           onClick={likeMovieClickHandler}></i>
                      </span>) : (<span className="fs-6 ms-2">
                        <i className="far fa-heart"
                           onClick={likeMovieClickHandler} ></i></span>)}

               {/* {(profiles.userType === ("general" || "admin")) ?
                    ({movie.liked ? (<span className="fs-6 ms-2">
                        <i className="far fa-heart"
                           style={{color: movie.liked ? 'red' : 'white'}}
                           onClick={likeMovieClickHandler}></i>
                      </span>) : (<span className="fs-6 ms-2">
                        <i className="far fa-heart"
                           onClick={likeMovieClickHandler}></i></span>)}) : ''}*/}
                  {(profile.userType === ("general" || "admin")) ?
                      (<span className="fs-6">
                        <i className="far fa-thumbs-up ms-3"></i>
                      </span>) : ''}
                </h5>
                <p className="card-text text-white-50">{year}</p>
                <p className="card-text movie-list-description">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }

export default MovieListItem;