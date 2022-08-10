export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  RESET_CART: 'RESET_CART',
  TOGGLE_MENU_CART: 'TOGGLE_MENU_CART',
  DELETE_TO_CART: 'DELETE_TO_CART',
};

export const AddToCart = (id, name, size, price, count) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id,
      name,
      size,
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

export const ToggleMenuCart = () => {
  return {
    type: actionTypes.TOGGLE_MENU_CART,
    payload: {}
  }
}

export const DeleteToCart = (id) => {
  return {
    type: actionTypes.DELETE_TO_CART,
    payload: {
      id
    }
  }
} 