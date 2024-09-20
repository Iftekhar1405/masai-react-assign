import {createStore} from 'redux'

const initialState = {
    isLoading: false,
    isError: false,
    footballMatches: [],
  };

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'fetching':
            return {
                ...state,
                isLoading:true
            }
        case 'fetch':
            return {
                ...state,
                isLoading : false,
                footballMatches : action.payload
            }
        case 'error':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default :
         return {...state}
    }
}

const store = createStore(reducer)

export default store