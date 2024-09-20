
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const counter = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>dispatch({type:'inc'})}> Increase</button>
      <button onClick={()=>dispatch({type:'dec'})}> Decrease</button>
    </>
  )
}

export default App
