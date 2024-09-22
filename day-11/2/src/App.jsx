import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffees } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const { loading, coffees, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchCoffees());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Coffee List</h1>
      <ul>
        {coffees.map(coffee => (
          <li key={coffee.id}>{coffee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
