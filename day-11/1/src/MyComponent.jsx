import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyComponent = () => {
  const dispatch = useDispatch();
  
  // Optionally, select some state from the Redux store
  const data = useSelector(state => state.example.data);

  const handleClick = () => {
    // Dispatch an action with type and payload
    dispatch({ 
      type: 'EXAMPLE_ACTION', 
      payload: { message: 'Hello from MyComponent' }
    });
  };

  return (
    <div>
      <h1>My Redux Component</h1>
      <button onClick={handleClick}>Dispatch Action</button>
      {data && (
        <div>
          <h3>Current Data in Store:</h3>
          <p>{data.message}</p>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
