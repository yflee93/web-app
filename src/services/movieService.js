const MOVIE_API = 'http://localhost:4000/movies';

export const fetchAllMovies = (dispatch) => {
  fetch(MOVIE_API)
  .then(response => response.json())
  .then(movies =>
    dispatch({
      type: 'fetch-all-movies',
      movies: movies
    })
  );
};

export const deleteMovie = (dispatch, movie) =>
    fetch(`${MOVIE_API}/${movie.id}`, {
      method: 'DELETE'
    }).then(response => dispatch({
      type: 'delete-movie',
      movie
    })
  );

export const likeMovie = (dispatch, movie) => {
    fetch(`${MOVIE_API}/${movie.id}/like`, {
      method: 'PUT'
    }).then(response =>
        dispatch({
          type: 'like-movie',
          movie
        }));
};