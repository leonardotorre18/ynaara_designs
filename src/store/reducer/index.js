import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import showMenuCart from './showMenuCart';

export default combineReducers({
  shoppingCart,
  showMenuCart
});
