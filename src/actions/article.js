import axios from 'axios';
import {DELETE_ARTICLE, PROFILE_ERROR} from "./constant";

const URI = 'http://localhost:4000/api/article';

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