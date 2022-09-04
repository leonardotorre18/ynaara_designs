import actionTypes from "./actionTypes"

export const setBuy = (product) => {
  return {
    type: actionTypes.SET_BUY,
    payload: product
  }
}

export const clearBuy = () => {
  return {
    type: actionTypes.CLEAR_BUY,
    payload: {}
  }
}
