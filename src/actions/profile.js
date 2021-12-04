import axios from 'axios';
import {GET_CURRENT_PROFILE, PROFILE_ERROR, EDIT_PROFILE} from "./constant";


// Get current user's profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:4000/api/profile');

    dispatch({
      type: GET_CURRENT_PROFILE,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })

  }
}

export const updateCurrentProfile = (dispatch, payload) => {
  fetch('http://localhost:4000/api/profile', {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(profile =>
      dispatch({
        type: EDIT_PROFILE,
        payload: profile
      })
  );
};