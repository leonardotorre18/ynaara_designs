import actionTypes from './actionTypes';

export const addToCart = (product) => ({
  type: actionTypes.ADD_TO_CART,
  payload: product,
});

export const resetCart = () => ({
  type: actionTypes.RESET_CART,
  payload: {},
});
export const deleteToCart = (id, size) => ({
  type: actionTypes.DELETE_TO_CART,
  payload: {
    id,
    size,
  },
});
