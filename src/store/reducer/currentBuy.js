import actionTypes from "../actions/actionTypes";

// const initialstate = {
//   id: 1,
//   name: "Blusa Estampada",
//   size: 'S',
//   price: 5,
//   count: 1,
//   img: "assets/img/img1.jpg",
// }

const currentBuy = (state = {}, action) => {

  switch (action.type) {
    
    case actionTypes.SET_BUY:
      return action.payload;
    
    case actionTypes.CLEAR_BUY:
      console.log(action)
      return {};

    default:
      return state;
  }

}

export default currentBuy;
