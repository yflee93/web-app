const MOVIE_API = 'https://api.themoviedb.org/3/movie';
const API_KEY = '6ecbcc32f1691bbd0ef5826095745798';

export const fetchMovieDetail = (dispatch, movieId) => {
    fetch(`${MOVIE_API}/${movieId}?api_key=${API_KEY}&append_to_response=credits,similar`)
        .then(response => {
            response = response.json();
            return response;
        })
        .then(movieDetail => {
            return dispatch({
                type: 'fetch-movie-detail',
                movieDetail
            });
        }
    );
}