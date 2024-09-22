import { createStore, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';
import rootReducer from './reducers'; 

const actionTypeLogger = store => next => action => {
  console.log('Action Type:', action.type);
  return next(action);
};

const payloadLogger = store => next => action => {
  if (action.payload) {
    console.log('Payload:', action.payload);
  }
  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, actionTypeLogger, payloadLogger)
);

export default store;
