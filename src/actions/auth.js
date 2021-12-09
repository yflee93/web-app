import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE
} from "./constant";
import {setAlert} from "./alert";
import setAuthToken from "../utils/setAuthToken";
import {getCurrentProfile} from "./profile";

const AUTH_URI = 'http://localhost:4000/api/auth';
const USER_URI = 'http://localhost:4000/api/users';

//Load User
export const loadUser = async (dispatch) => {
    //Login and register will create a new json web token in localStorage, if jwt is found,
    //we add this token to axios headers by calling setAuthToken();
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get(AUTH_URI);
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }
    catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

//Register User
export const register = async (dispatch, {name, type, code, email, password}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }

    const body = JSON.stringify({name, type, code, email, password});

    try {
        const res = await axios.post(USER_URI, body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        await loadUser(dispatch);
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => setAlert(dispatch, error.msg, 'danger'));
        }
        dispatch({
            type: REGISTER_FAIL,
        })
    }
}

//Login User
export const login = async (dispatch, email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post(AUTH_URI, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        await loadUser(dispatch);
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => setAlert(dispatch, error.msg, 'danger'));
        }
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

// Logout
export const logout = async (dispatch) => {
    dispatch({
        type: LOGOUT
    });
}


