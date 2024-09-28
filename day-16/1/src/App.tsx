
import { useState } from 'react'
import './App.css'

function App() {

  const [name,setName] = useState<string>('')
  const [email,setEmail] = useState<string>('')
  const [rating,setRating] = useState<number>(0.0)
  const [feedback,setFeedback] = useState<string>('')

  const handleSubmit = () => {
    if(name.length>2,email.length>5,feedback.length>10){
    confirm(`
      your name is ${name}
      your email is ${email}
      your given rating is ${rating}
      your given feedback  is ${feedback}
      `)}
      else{
        alert('fillll the whole form')
      }
  }
  return (
    <>
     <form onSubmit={handleSubmit}>

      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='name' />
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' />
      <input type="number" value={rating} onChange={(e)=>setRating(e.target.value)} placeholder='rating' />
      <input type="text" value={feedback} onChange={(e)=>setFeedback(e.target.value)} placeholder='feedback' />

    <button type='submit'>Submit</button>

     </form>
    </>
  )
}

export default App
