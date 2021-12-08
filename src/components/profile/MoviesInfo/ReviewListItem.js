import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";
import {useDispatch, useSelector} from "react-redux";


const ReviewListItem = ({review}) => {
    return (
        <li className="list-group-item">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-4">
                        <img src={review.uri}
                             alt="movie_poster"
                             className="img-fluid movie-poster"/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{review.title}</h5>
                            <div>
                                <p className="card-text d-inline-block">My Rating</p>
                                <span className=" ms-2 d-inline-block align-middle">
                    <ReactStars
                        count={5}
                        value={review.rating}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                        isHalf={true}
                    /></span>

                            </div>
                            <p>{review.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ReviewListItem;