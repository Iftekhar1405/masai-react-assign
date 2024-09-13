
import { useState } from 'react'
import './App.css'

function App() {
  const [todos,setTodos] = useState([])
  return (
    <>
    <AddTodo todos={todos} setTodos={setTodos}/>
  <TodoList todos={todos}/>
      </>
  )
}

export default App

const TodoList = ({todos}) => {
  
  return(<>
  { todos.map((todo,index) => (
    <TodoItem todo={todo} key={index}/>
  ))

  }
  </>)
}

const TodoItem = ({todo}) => {

  return<div style={{backgroundColor:'aqua', padding:'10px',margin:'20px',width:'80vw'}}>
  <h3>{todo}</h3>
  </div>
}

const AddTodo = ({todos,setTodos}) => {
  const [todo,setTodo] = useState('')

  const handleSubmit = () => {
    setTodos([...todos,todo])
    setTodo('')
  }
  

return(
  <>
  <input type="text" value={todo} onChange={(event)=>setTodo(event.target.value)} />
  <button onClick={handleSubmit}>Add</button>
  </>
)
}