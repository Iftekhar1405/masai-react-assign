import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'  // Make sure it's not a named import
import logger from 'redux-logger';
import { coffeeReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk, logger];  // Use 'thunk.default' to handle this issue in Vite

const store = createStore(
  coffeeReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
