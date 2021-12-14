import axios from 'axios';
import {DELETE_ARTICLE, PROFILE_ERROR, FETCH_ARTICLE, CREATE_ARTICLE} from "./constant";


const URI = process.env.NODE_ENV === 'development' ?
    'http://localhost:4000/api/article':
    'https://web-app-final.herokuapp.com/api/article'


export const deleteArticle = async (dispatch, article_id, movie_id, author_id) => {
    try {
        await axios.delete(`${URI}/${article_id}/${movie_id}/${author_id}`);
        dispatch({
            type: DELETE_ARTICLE,
            payload: article_id
        });
    }
    catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
};

export const fetchArticle = async (dispatch, movie_id) => {
    try {
        const res = await axios.get(`${URI}/${movie_id}`);
        dispatch({
            type: FETCH_ARTICLE,
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

export const postArticle = async (dispatch, movieId, articleInfo) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify(articleInfo);
    // console.log("body");
    // console.log(body);
    try {
        const res = await axios.post(`${URI}/${movieId}`, body, config);
        console.log("res.data");
        console.log(res.data);
        dispatch({
            type: CREATE_ARTICLE,
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