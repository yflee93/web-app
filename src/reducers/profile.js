import {GET_CURRENT_PROFILE, PROFILE_ERROR, EDIT_PROFILE, CLEAR_PROFILE} from "../actions/constant";

const initialState = {
    profiles: null,
    loading: true,
    error: {}
}

const profile = (state= initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_CURRENT_PROFILE:
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
        default:
            return state;
    }
};

export default profile;

