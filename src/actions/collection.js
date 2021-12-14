import axios from 'axios';
import {EDIT_PROFILE, FETCH_COLLECTION, PROFILE_ERROR} from "./constant";

const MOVIE_API = 'https://api.themoviedb.org/3/movie';
const API_KEY = "6ecbcc32f1691bbd0ef5826095745798";
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';

const URI = process.env.NODE_ENV === 'development' ?
    'http://localhost:4000/api/profile':
    'https://web-app-final.herokuapp.com/api/profile'

export const fetchCollections = async (dispatch, favorite, bookmark, recommend) => {
    try {
        let favorites = [];
        let bookmarks = [];
        let recommends = [];
        for (let mid of favorite) {
            let URL = `${MOVIE_API}/${mid.toString()}?api_key=${API_KEY}`;
            const res = await axios.get(URL, {transformRequest: (data, headers) => {
                    delete headers.common['x-auth-token'];
                    return data;
                }
            });
            const {
                id, poster_path, title, release_date, overview
            } = res.data;
            favorites.push(
                {
                    id,
                    title,
                    release_date,
                    overview,
                    poster_path: `${IMG_PREFIX}${poster_path}`
                }
            );
        }

        for (let mid of bookmark) {
            let URL = `${MOVIE_API}/${mid.toString()}?api_key=${API_KEY}`;
            const res = await axios.get(URL, {transformRequest: (data, headers) => {
                    delete headers.common['x-auth-token'];
                    return data;
                }
            });
            const {
                id, poster_path, title, release_date, overview
            } = res.data;
            bookmarks.push(
                {
                    id,
                    title,
                    release_date,
                    overview,
                    poster_path: `${IMG_PREFIX}${poster_path}`
                }
            );
        }

        for (let mid of recommend) {
            let URL = `${MOVIE_API}/${mid.toString()}?api_key=${API_KEY}`;
            const res = await axios.get(URL, {transformRequest: (data, headers) => {
                    delete headers.common['x-auth-token'];
                    return data;
                }
            });
            const {
                id, poster_path, title, release_date, overview
            } = res.data;
            recommends.push(
                {
                    id,
                    title,
                    release_date,
                    overview,
                    poster_path: `${IMG_PREFIX}${poster_path}`
                }
            );
        }
        dispatch(
            {
                type: FETCH_COLLECTION,
                payload: {
                    favorites, bookmarks, recommends
                }
            }
        )
    } catch(err) {
        console.log(err);
    }
};

export const deleteCollection = async (dispatch, id, screen, author_id) => {
    try {
        const res = await axios.delete(`${URI}/${id}/${screen}/${author_id}`);

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

export const addCollection = async (dispatch, id, screen, author_id) => {
    try {
        const res = await axios.post(`${URI}/${id}/${screen}/${author_id}`);

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



