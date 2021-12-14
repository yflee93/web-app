import React from "react";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";

const ReviewList = ({reviews}) => {
    return(
        <>
            <div className="list-group pe-0">
                {
                    reviews.map((review) => {
                        if (review){
                            return(
                                <>
                                    <Link to={`/profile/${review.author}`} className="list-group-item content-list-group-item">
                                        <div className="row ps-3">
                                            Rating: {review.rating}
                                        </div>
                                        <div className="row">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={review.rating}
                                                isHalf={true}
                                                edit={false}
                                            />
                                        </div>
                                        <div className="row ps-3">
                                            Title: {review.title}
                                        </div>
                                        <div className="row ps-3">
                                            {review.content}
                                        </div>
                                    </Link>
                                </>
                            );
                        }
                        else{
                            return(<></>);
                        }
                    })
                }
            </div>
        </>
    );
};

export default ReviewList;