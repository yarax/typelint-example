import _ from 'lodash';

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
      let counters = _.cloneDeep(state.cart.counters);
      counters[action.index] = (counters[action.index] || 0) + action.diff;
      counters[action.index] = counters[action.index] < 0 ? 0 : counters[action.index];
      return {
        ...state,
        cart: {counters}
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
      };
    default:
      return state;
  }
}