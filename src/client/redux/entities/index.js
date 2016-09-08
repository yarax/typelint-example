const initialState = {
  pets: []
};

export default (state = initialState, action) => {
  if (action.type === 'NEW_ENTITY') {
    const newObj = {};
    newObj[action.entityName] = action.entity;
    return {
      ...state,
      ...newObj
    };
  }
  return state;
};