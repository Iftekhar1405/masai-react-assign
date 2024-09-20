import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const [title, setTitle] = useState('');  // Manage the input title
  const todos = useSelector((state) => state.todos);  // Get todos from Redux store
  const dispatch = useDispatch();  // Dispatch actions to Redux store

  // Handle adding a new todo
  const addTodo = () => {
    if (title.trim()) {
      dispatch({ type: 'ADD_TODO', payload: title });
      setTitle('');  // Clear input after adding a todo
    }
  };

  // Handle toggling the status of a todo
  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>
            {todo.title}
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.status ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
