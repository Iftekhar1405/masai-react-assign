import { useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const initialState = { theme: 'dark' };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'light':
        return { theme: 'light' };
      case 'dark':
        return { theme: 'dark' };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className={state.theme}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={() =>
            dispatch({ type: state.theme === 'dark' ? 'light' : 'dark' })
          }
        >
          Current theme is {state.theme} (Click to Toggle)
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
