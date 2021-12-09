import axios from 'axios';
import {DELETE_REVIEW, PROFILE_ERROR} from "./constant";

const URI = 'http://localhost:4000/api/review';

export const deleteReview = async (dispatch, review_id, movie_id, author_id) => {
    try {
        await axios.delete(`${URI}/${review_id}/${movie_id}/${author_id}`);
        dispatch({
            type: DELETE_REVIEW,
            payload: review_id
        });
    }
    catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
};