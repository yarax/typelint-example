const initialState = {
  error: null,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: action.error
      };
    case 'LOADED':
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
};