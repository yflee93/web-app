import {FETCH_COLLECTION} from "../actions/constant";

const initialState= {
    loading: true,
    favorites: [],
    bookmarks: [],
    recommends: []
}

const collection = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case FETCH_COLLECTION:
            return {
                ...state,
                loading: false,
                ...payload
            }
        default:
            return state;
    }
};

export default collection;