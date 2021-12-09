import {GET_PROFILES} from "../actions/constant";

const initialState = {
    profiles: null,
    loading: true,
    error: {}
}

const profiles = (state= initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        default:
            return state;
    }
};

export default profiles;