import actionTypes from "../actions/actionTypes";

const shoppingCart = (state = [], action) => {

  switch (action.type) {
    
    case actionTypes.ADD_TO_CART:
      return state.some((e) => e.id === action.payload.id && e.size === action.payload.size)

        ? state.map(e => e.id === action.payload.id && e.size === action.payload.size
          ? { ...e, count: parseInt(e.count) + parseInt(action.payload.count) }
          : e)
        : [
          ...state,
          action.payload,
        ];
    case actionTypes.RESET_CART:
      return [];

    case actionTypes.DELETE_TO_CART:
      return state.filter(e => e.id !== action.payload.id || e.size !== action.payload.size);

    default:
      return state;
  }

}

export default shoppingCart;
