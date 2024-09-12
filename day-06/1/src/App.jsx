
import { useRef } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const inputField = useRef(null)

  useEffect(()=>{
    inputField.current.focus()
  },[])

  const handleClick=()=>{
    inputField.current.style.backgroundColor = 'white'
    inputField.current.style.color = 'black'
  }

  return (
    <>
      <input type="text" ref={inputField} onClick={handleClick} />
    </>
  )
}

export default App
