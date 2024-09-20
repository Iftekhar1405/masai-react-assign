import {createStore} from 'redux'

const initialState = {
    todos: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: Date.now(),  // Generate a unique ID
              title: action.payload,
              status: false,  // New todos start as incomplete
            },
          ],
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, status: !todo.status } : todo
          ),
        };
      default:
        return state;
    }
  };


const store = createStore(reducer);

export default store;

  

  