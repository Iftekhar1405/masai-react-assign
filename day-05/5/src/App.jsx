import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const timer = useRef(null)
  const [status, setStatus] = useState(false)
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0)
  const [showMousePointer,setShowMousePointer] = useState(false)



  useEffect(() => {
    if (status) {
      timer.current = setInterval(() => { setCount((prev) => prev + 1) }, 1)
    } else clearInterval(timer.current)

  }, [status])



  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.screenX);
      setMouseY(event.screenY)

    };
    if(showMousePointer){
    

    window.addEventListener('mousemove', handleMouseMove);}
    else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showMousePointer]);

  return (
    <>
      
        <button onClick={() => setStatus(() => !status)}>
          click to increase the count automatically {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      <p>Mouse Coordinates: {mouseX}, {mouseY}</p>
      <button onClick={() => setShowMousePointer(prev => !prev)}>
        {showMousePointer ? 'Hide Mouse Pointer Location' : 'Show Mouse Pointer Location'}
      </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
