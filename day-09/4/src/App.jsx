import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  const initial = {email:'',
    password:'',
    isVisible:false
  }
  const reducer = (state,action) => {
    switch (action.type){
      case 'email':
      case 'password':
        return {
          ...state,
          ...action.payload
        }
        case 'isVisible':
          return {...state, isVisible:true}
    }
  }

  const [state,dispatch] = useReducer(reducer,initial)


  return (
    <>
      <input type="email" id='email' value={state.email} onChange={(e)=> dispatch({type : e.target.id,
        payload:{[e.target.id] : e.target.value}
      })} />
      <input type="password" id='password' value={state.password} onChange={(e)=> dispatch({type : e.target.id,
        payload:{[e.target.id] : e.target.value}
      })} />
      {state.email.length > 0 && state.password.length > 0 ? 
      <button onClick={()=> dispatch({type:'isVisible'})}>submit</button>
      :<p>no data found</p>}
      {state.isVisible && <p>
        email : {state.email} <br/>
        password : {state.password}
        </p>}
    </>
  )
}

export default App
