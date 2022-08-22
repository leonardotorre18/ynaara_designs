import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import { BrowserRouter as Router } from "react-router-dom";
import NotificationProvider from './components/containers/NotificationProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <NotificationProvider>
      <App />
    </NotificationProvider>
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
