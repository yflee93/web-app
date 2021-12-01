import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";
import {useDispatch} from "react-redux";


const MovieReviewListItem = ({movie}) => {
  const dispatch = useDispatch();

  const {
    id,
    name,
    poster,
  } = movie;

  // update movie rating
  const updateRatingHandler = (newRating) => {
    console.log(newRating);
  };

  return (
      <li className="list-group-item">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-4">
              <img src={poster}
                   alt="movie_poster"
                   className="img-fluid movie-poster"/>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div>
                  <p className="card-text d-inline-block">Rating</p>
                  <span className=" ms-2 d-inline-block align-middle">
                    <ReactStars
                      count={5}
                      onChange={updateRatingHandler}
                      size={24}
                      activeColor="#ffd700"
                      /></span>
                </div>
                <label htmlFor="reviews"
                       className="form-label">Reviews: </label>
                <textarea className="form-control"
                          id="reviews" rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
      </li>
  )
}

export default MovieReviewListItem;