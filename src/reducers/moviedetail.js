import initialState from '../components/movieDetail/exampleMovieDetail.json'
import {FETCH_MOVIE_DETAIL} from "../actions/constant";

const moviedetail = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case FETCH_MOVIE_DETAIL:
            return {
                ...state,
                ...payload
            };
        default:
            return(state);
    }
};

export default moviedetail;