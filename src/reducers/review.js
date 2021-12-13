

import {
    CREATE_REVIEW,
    FETCH_REVIEW
} from "../actions/constant";

const initialState = [];

const review = (state= initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case FETCH_REVIEW:
            // console.log("payload in reducer fetch");
            // console.log(payload);
            return payload;
        case CREATE_REVIEW:
            // console.log("payload in reducer create");
            // console.log(payload);
            state.push(payload);
            return state;
        // return payload;
        default:
            return state;
    }
};

export default review;