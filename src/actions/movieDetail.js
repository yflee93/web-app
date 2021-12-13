import {FETCH_MOVIE_DETAIL} from "./constant";

const MOVIE_API = 'https://api.themoviedb.org/3/movie';
const API_KEY = '6ecbcc32f1691bbd0ef5826095745798';

export const fetchMovieDetail = (dispatch, movieId) => {
    // console.log(`${MOVIE_API}/${movieId}?api_key=${API_KEY}&append_to_response=credits,similar`)
    fetch(`${MOVIE_API}/${movieId}?api_key=${API_KEY}&append_to_response=credits,similar`)
        .then(response => {
            response = response.json();
            return response;
        })
        .then(payload => {
            // console.log(payload);
                return dispatch({
                    type: FETCH_MOVIE_DETAIL,
                    payload
                });
            }
        );
}