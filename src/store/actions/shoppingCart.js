import actionTypes from "./actionTypes"

export const addToCart = (id, name, size, price, count, img) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id,
      name,
      size,
      price,
      count,
      img,
    }
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