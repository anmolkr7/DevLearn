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

/*
useMemo memoizes (caches) a value to avoid unnecessary recalculations on every render. It is 
useful when computations are expensive (e.g., filtering, sorting, or complex calculations).
https://gist.github.com/anmolkr7/9d8750d2230c71a099a24b826a617179
*/

/*
useCallback caches a function so that it does not get recreated on every render.
It helps optimize performance WHEN PASSING FUNCTIONS AS PROPS TO CHILD COMPONENTS
https://gist.github.com/anmolkr7/cbdba6858dc49f8c3bfa73d16f0c484b
*/

/*
Custom Hooks
A Custom Hook is a JavaScript function in React that allows you to reuse logic across 
multiple components while keeping them clean and maintainable. Custom Hooks follow the 
naming convention useSomething and internally use React hooks like useState, useEffect,
useRef, etc.

Custom Hooks follow the same rules of hooks as built-in hooks:
1.Only call hooks at the top level (not inside loops, conditions, or nested functions).
2.Only call hooks inside React functions (functional components or other hooks).
3.Hooks must start with use to be correctly identified by React.
https://gist.github.com/anmolkr7/0a2b508a9aede4b1918c8a7a92b81354
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
