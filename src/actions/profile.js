import axios from 'axios';
import {
    GET_CURRENT_PROFILE,
    PROFILE_ERROR,
    EDIT_PROFILE,
} from "./constant";

const URI = 'http://localhost:4000/api/profile'

export const getCurrentProfile = async (dispatch) => {
    try {
        const res = await axios.get(URI);
        dispatch({
            type: GET_CURRENT_PROFILE,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const updateCurrentProfile = async (dispatch, {bio, name, location}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, bio, location});
    try {
        const res = await axios.post(URI, body, config);
        dispatch({
            type: EDIT_PROFILE,
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