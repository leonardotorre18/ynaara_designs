import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import showMenuCart from './showMenuCart';
import currentBuy from './currentBuy';
// import allProducts from './allProducts'

export default combineReducers({
  shoppingCart,
  showMenuCart,
  currentBuy,
  // allProducts,
});
