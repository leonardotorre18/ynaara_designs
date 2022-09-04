import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import showMenuCart from './showMenuCart';
import currentBuy from './currentBuy';

export default combineReducers({
  shoppingCart,
  showMenuCart,
  currentBuy,
});
