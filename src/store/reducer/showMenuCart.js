import actionTypes from "../actions/actionTypes";

const showMenuCart = (state = false, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU_CART:
      return !state;
  
    default:
      return state;
  }
}

export default showMenuCart;