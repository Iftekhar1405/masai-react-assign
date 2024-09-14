
import { Children, createContext, useContext, useState } from 'react'
import './App.css'

const TodoContext = createContext()

const TodoProvider = ({children}) => {
  const [todos,setTodos] = useState([])

  return(
    <TodoContext.Provider value={{todos,setTodos}}>

      {children}
    </TodoContext.Provider>
  )

}

function App() {
  return (
    <TodoProvider>
    <AddTodo />
  <TodoList />
      </TodoProvider>
  )
}

export default App

const TodoList = () => {

  const {todos} = useContext(TodoContext)
  
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

const AddTodo = () => {
  const {todos,setTodos} = useContext(TodoContext)
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