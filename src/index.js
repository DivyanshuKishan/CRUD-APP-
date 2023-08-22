import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, compose} from 'redux'
import { Provider } from 'react-redux';
//import {configureStore} from '@reduxjs/toolkit';
//import UserReducer from './store/useReducer'
// const store = configureStore({
//   reducer: {
//     users: UserReducer
//   }
// })
import rootReducer from './service/Reducer/index'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </React.StrictMode>
);