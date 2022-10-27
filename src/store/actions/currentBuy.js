import actionTypes from './actionTypes';

export const setBuy = (product) => ({
  type: actionTypes.SET_BUY,
  payload: product,
});

export const clearBuy = () => ({
  type: actionTypes.CLEAR_BUY,
  payload: {},
});
