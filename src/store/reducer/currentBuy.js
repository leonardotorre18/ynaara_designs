import actionTypes from '../actions/actionTypes';

const currentBuy = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_BUY:
      return action.payload;

    case actionTypes.CLEAR_BUY:
      return {};

    default:
      return state;
  }
};

export default currentBuy;
