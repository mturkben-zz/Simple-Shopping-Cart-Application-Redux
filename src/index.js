import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import thunk from "redux-thunk";
import {compose,combineReducers,createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import cardReducers from "./reducers/cardReducers";


const allToMiddleware = compose(
  applyMiddleware(thunk)
)

const rootReducers = combineReducers({
  listReducers:cardReducers
})


const store = createStore(rootReducers,allToMiddleware);


ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);