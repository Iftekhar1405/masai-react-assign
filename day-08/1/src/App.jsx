import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Home</h1>
     <Link to='/users'>
     <button >users</button>
     </Link>
     <Link to='/login'><button>login</button></Link>
    </>
  )
}

export default App
