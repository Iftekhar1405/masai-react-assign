import axios from 'axios';

export const fetchCoffees = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_COFFEE_REQUEST' });
    try {
      const response = await axios.get('https://66f00c84f2a8bce81be4e2dc.mockapi.io/coffee');
      const coffees = response.data;
      dispatch({ type: 'FETCH_COFFEE_SUCCESS', payload: coffees });
    } catch (error) {
      dispatch({ type: 'FETCH_COFFEE_FAILURE', payload: error.message });
    }
  };
};
