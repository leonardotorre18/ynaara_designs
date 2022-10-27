import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/index';

export default configureStore(
  { reducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
