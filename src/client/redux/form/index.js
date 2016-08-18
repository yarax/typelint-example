import { combineReducers} from 'redux';
const initialValue = {
  cart: {
    counters: [],
    comments: '',
    price: 0
  }
};


export default (state = initialValue, action) => {
  switch (action.type) {
    case 'COUNT':
      const newObj = {counters: []};
      const prevValue = newObj.counters[action.index] || 0;
      newObj.counters[action.index] = prevValue + action.diff;
      console.log(action, state);
      return {
        ...state,
        ...newObj
      };
    case 'COMMENT':
      return {
        ...state,
        comments: action.text
      };
    case 'PRICE':
      return {
        ...state,
        price: action.price
      }
    default:
      return state;
  }
}