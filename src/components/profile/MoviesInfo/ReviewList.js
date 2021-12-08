import React from "react";
import {useSelector} from "react-redux";
import ReviewListItem from "./ReviewListItem";

const ReviewList = () => {
    const {profiles} = useSelector(state => state.profile);
    if (profiles == null) {
        return null;
    }
    const {reviews} = profiles;
    return (
        <div>
            <ul className="list-group">
                {
                    reviews && reviews.length > 0 && reviews.map(review =>
                        <ReviewListItem key={review._id} review={review}/>)
                }
            </ul>
        </div>
    )
}

export default ReviewList;