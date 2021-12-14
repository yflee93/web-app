import React from "react";
import ReactStars from "react-rating-stars-component";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview} from "../../../actions/review";
import {useNavigate} from "react-router";

const ReviewListItem = ({review, owns}) => {
    const {_id, author, originalId} = review;
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const deleteReviewClickHandler = () => {
        deleteReview(dispatch, _id, 1, author);
    }
    const navigate = useNavigate();
    return (
        <li className="list-group-item">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-4">
                        <img src={review.poster}
                             alt="movie_poster"
                             className="img-fluid"
                             onClick={()=>{
                                 navigate(`/details/${originalId}`);
                             }}/>
                    </div>
                    <div className="col-8">
                        {
                            owns  && (
                                <i className="fas fa-2x fa-times text-white-50 fa-pull-right"
                                   onClick={deleteReviewClickHandler} />
                            )
                        }
                        {
                            (!owns && (user && user.type === 'admin')) && (
                                <i className="fas fa-2x fa-user-shield text-danger float-end"
                                   onClick={deleteReviewClickHandler} />
                            )
                        }

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