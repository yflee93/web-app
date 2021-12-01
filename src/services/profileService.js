const PROFILE_API = 'http://localhost:4000/profile';

export const getCurrentProfile = (dispatch) => {
  fetch(PROFILE_API, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(profile =>
      dispatch({
        type: 'get-current-profile',
        profile
      })
  );
};

export const updateCurrentProfile = (dispatch, payload) => {
  fetch(PROFILE_API, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(profile =>
      dispatch({
        type: 'edit-profile',
        payload: profile
      })
  );
};