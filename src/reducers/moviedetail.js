import initialState from '../components/movieDetail/exampleMovieDetail.json'

const moviedetail = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch-movie-detail':
            return action.movieDetail;
        default:
            return(state);
    }
};

export default moviedetail;