import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
/*
Hooks are functions that let you use state and lifecycle features in functional components without 
writing class components.
Before Hooks, only class components could manage state and lifecycle. Hooks allow: 
✅ Managing state in functional components.
✅ Running side effects (like API calls, event listeners).
✅ Reusing logic across components via custom hooks.




Side Effects in React
In React, a side effect is any operation that affects something outside the 
function's scope. Rendering should be pure (without side effects), so React 
provides useEffect to handle them.
A function in React should return JSX without modifying anything outside its 
scope.
However, sometimes we need to perform actions after rendering, such as:
✅ Fetching data from an API
✅ Updating the DOM manually
✅ Setting up timers (setTimeout, setInterval)
✅ Subscribing to events (e.g., window.addEventListener)
✅ Interacting with local storage or session storage
These are side effects, because they interact with the outside world.


*/
function App() {
  const [selectedid, setId] = useState(1)

  return (
      <div>
        <button onClick={()=>setId(1)}>1</button>
        <button onClick={()=>setId(2)}>2</button>
        <button onClick={()=>setId(3)}>3</button>
        <button onClick={()=>setId(4)}>4</button>
        <Todo id={selectedid} />
      </div>
  )
}
function Todo({id})
{
  const [todo,setTodo]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/todo?id=${id}`)
    .then(response=>{
      setTodo(response.data.todo)
    })
  },[id])
  return(
    <div>
      Id:{id}
      <h1>
      {todo.title}
      </h1>
      <h4>
        {todo.description}
      </h4>
    </div>
  )
}

export default App
