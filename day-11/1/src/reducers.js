import { combineReducers } from 'redux';

const initialState = {
  data: null,
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  example: exampleReducer,
});
