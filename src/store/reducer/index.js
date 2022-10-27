import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import currentBuy from './currentBuy';

export default combineReducers({
  shoppingCart,
  currentBuy,
});
