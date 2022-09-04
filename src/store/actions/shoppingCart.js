import actionTypes from "./actionTypes"

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product
  }
}

export const resetCart = () => {
  return {
    type: actionTypes.RESET_CART,
    payload: {},
  }
}
export const deleteToCart = (id, size) => {
  return {
    type: actionTypes.DELETE_TO_CART,
    payload: {
      id, 
      size,
    }
  }
} 