import axios from 'axios';
import {
    GET_CURRENT_PROFILE,
    GET_OTHER_PROFILE,
    PROFILE_ERROR,
    EDIT_PROFILE,
    GET_PROFILES, CLEAR_PROFILE,
} from "./constant";


const URI = process.env.NODE_ENV === 'development' ?
    'http://localhost:4000/api/profile':
    'https://web-app-final.herokuapp.com/api/profile';

const PROFILES_URI = process.env.NODE_ENV === 'development' ?
    'http://localhost:4000/api/profiles':
    'https://web-app-final.herokuapp.com/api/profiles';

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
        },
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


export const getProfileById = async (dispatch, id) => {
    try {
        const res = await axios.get(`${URI}/${id}`);
        dispatch({
            type: GET_OTHER_PROFILE,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const getProfiles = async (dispatch) => {
    try {
        const res = await axios.get(PROFILES_URI);
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const clearProfile = dispatch => {
        dispatch({
            type: CLEAR_PROFILE,
        })
}

