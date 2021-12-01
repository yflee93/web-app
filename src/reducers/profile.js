const profile = (state={}, action) => {
  switch (action.type) {
    case 'get-current-profile':
      return action.profile;
    case 'edit-profile':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default profile;