export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  RESET_CART: 'RESET_CART',
};

export const AddToCart = (id, price, count) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id,
      price,
      count,
    }
  }
}

export const ResetCart = () => {
  return {
    type: actionTypes.RESET_CART,
    payload: {}
  }
}
