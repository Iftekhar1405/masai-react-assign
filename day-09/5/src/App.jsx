import React, { useReducer } from 'react';

const initialState = {
  name: '',
  establishment_year: '',
  address: {
    building: '',
    street: '',
    city: {
      name: '',
      locality: {
        pinCode: '',
        landmark: ''
      }
    },
    state: '',
    coordinates: { latitude: '', longitude: '' }
  },
  courses_offered: []
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'SET_NESTED_FIELD':
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          [action.subField]: action.value
        }
      };
    case 'SET_CITY_FIELD':
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            [action.field]: action.value
          }
        }
      };
    case 'SET_LOCALITY_FIELD':
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              [action.field]: action.value
            }
          }
        }
      };
    case 'SET_COORDINATES':
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            [action.field]: action.value
          }
        }
      };
    case 'ADD_COURSE':
      return {
        ...state,
        courses_offered: [...state.courses_offered, action.course]
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleFieldChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleNestedFieldChange = (e) => {
    const { name, value, dataset } = e.target; // dataset is used to access subfield information
    const subField = dataset.subField || name;
    dispatch({ type: 'SET_NESTED_FIELD', field: dataset.field, subField, value });
  };

  const handleCityFieldChange = (e) => {
    dispatch({ type: 'SET_CITY_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleLocalityFieldChange = (e) => {
    dispatch({ type: 'SET_LOCALITY_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleCoordinateChange = (e) => {
    dispatch({ type: 'SET_COORDINATES', field: e.target.name, value: e.target.value });
  };

  const addCourse = (course) => {
    dispatch({ type: 'ADD_COURSE', course });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleFieldChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="establishment_year"
        value={state.establishment_year}
        onChange={handleFieldChange}
        placeholder="Establishment Year"
      />

      {/* Address */}
      <input
        type="text"
        name="building"
        value={state.address.building}
        onChange={handleNestedFieldChange}
        data-field="address"
        placeholder="Building"
      />
      <input
        type="text"
        name="street"
        value={state.address.street}
        onChange={handleNestedFieldChange}
        data-field="address"
        placeholder="Street"
      />
      <input
        type="text"
        name="name"
        value={state.address.city.name}
        onChange={handleCityFieldChange}
        placeholder="City Name"
      />
      <input
        type="text"
        name="pinCode"
        value={state.address.city.locality.pinCode}
        onChange={handleLocalityFieldChange}
        placeholder="Pin Code"
      />
      <input
        type="text"
        name="landmark"
        value={state.address.city.locality.landmark}
        onChange={handleLocalityFieldChange}
        placeholder="Landmark"
      />

      {/* Coordinates */}
      <input
        type="text"
        name="latitude"
        value={state.address.coordinates.latitude}
        onChange={handleCoordinateChange}
        placeholder="Latitude"
      />
      <input
        type="text"
        name="longitude"
        value={state.address.coordinates.longitude}
        onChange={handleCoordinateChange}
        placeholder="Longitude"
      />

      {/* Add a course */}
      <button type="button" onClick={() => addCourse('New Course')}>
        Add Course
      </button>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
