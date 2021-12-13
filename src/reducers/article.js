import {
    CREATE_ARTICLE,
    FETCH_ARTICLE
} from "../actions/constant";

const initialState = [];

const article = (state= initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case FETCH_ARTICLE:
            // console.log("payload in reducer fetch");
            // console.log(payload);
            return payload;
        case CREATE_ARTICLE:
            // console.log("payload in reducer create");
            // console.log(payload);
            state.push(payload);
            return state;
        // return payload;
        default:
            return state;
    }
};

export default article;