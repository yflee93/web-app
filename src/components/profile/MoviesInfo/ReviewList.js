import React, {useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewListItem from "./ReviewListItem";

const ReviewList = () => {
    return (
        <div>
            <ul className="list-group">
                {
                    [{uri: 'https://image.tmdb.org/t/p/w500/2U3LSaZtMk1HFDFhIgpx7idOVk7.jpg', title: 'Titanic', rating:3.6, content:"Hi"},
                        {uri: 'https://image.tmdb.org/t/p/w500//fZ0rzH83nprexRjNn9IQBVDq5rf.jpg', title: 'Titanic2', rating:2.3, content:"I love it"}].map((review, idx) =>
                        <ReviewListItem key={idx} review={review}/>)
                }
            </ul>
        </div>
    )
}

export default ReviewList;