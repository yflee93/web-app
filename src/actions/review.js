import axios from 'axios';
import {DELETE_REVIEW, PROFILE_ERROR, FETCH_REVIEW, CREATE_REVIEW} from "./constant";

const URI = process.env.NODE_ENV === 'development' ?
    'http://localhost:4000/api/review':
    'https://web-app-final.herokuapp.com/api/review';

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

export const fetchReview = async (dispatch, movie_id) => {
    try {
        const res = await axios.get(`${URI}/${movie_id}`);
        dispatch({
            type: FETCH_REVIEW,
            payload: res.data
        });
    }
    catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
};

export const postReview = async (dispatch, movieId, reviewInfo) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify(reviewInfo);
    console.log("body");
    console.log(body);
    try {
        const res = await axios.post(`${URI}/${movieId}`, body, config);
        console.log("res.data");
        console.log(res.data);
        dispatch({
            type: CREATE_REVIEW,
            payload: res.data
        })
    }

    catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}