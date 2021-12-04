import {GET_CURRENT_PROFILE, PROFILE_ERROR, EDIT_PROFILE} from "../actions/constant";

const initialState = {
  profile: null,
  loading: true,
  error: {}
}

const profile = (state= initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_CURRENT_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case EDIT_PROFILE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default profile;