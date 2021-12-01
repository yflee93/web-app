const profiles = (state) => state.profile;

const movies = (state =[], action) => {
  switch (action.type) {
    case 'fetch-all-movies':
      return (
          action.movies
      );
    case 'delete-movie':
      return state.filter(movie => movie.id !== action.movie.id);
    case 'like-movie':
      return (
          state.map(movie => {
            if (movie.id === action.movie.id) {
              if (movie.liked === true) {
                movie.liked = false;
                profiles.favorites--;
              } else {
                movie.liked = true;
                profiles.favorites++;
              }
              return movie;
            } else {
              return movie;
            }
          })
      );
    default:
      return state;
  }
};

export default movies;