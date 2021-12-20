import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";
import {reducer} from "./store/reducer.js";
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {fetchText} from "./store/api-action";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchText());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();