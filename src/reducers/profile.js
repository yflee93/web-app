import {
    GET_CURRENT_PROFILE,
    GET_OTHER_PROFILE,
    PROFILE_ERROR,
    EDIT_PROFILE,
    CLEAR_PROFILE,
    DELETE_REVIEW,
    DELETE_ARTICLE
} from "../actions/constant";

const initialState = {
    profiles: null,
    loading: true,
    error: {}
}

const profile = (state= initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_CURRENT_PROFILE:
        case GET_OTHER_PROFILE:
        case EDIT_PROFILE:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                loading: true,
                profiles: null
            }
        case DELETE_REVIEW:
            let new_reviews = [];
            new_reviews = state.profiles &&
                state.profiles.reviews.filter(rid=> rid._id !== payload);
            return {
                ...state,
                loading: false,
                profiles: {
                    ...state.profiles,
                    reviews: new_reviews
                }
            }
        case DELETE_ARTICLE:
            let new_articles = [];
            new_articles = state.profiles &&
                state.profiles.articles.filter(aid=> aid._id !== payload);
            return {
                ...state,
                loading: false,
                profiles: {
                    ...state.profiles,
                    articles: new_articles
                }
            }
        default:
            return state;
    }
};

export default profile;

