import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function useTodos(n){
  const [todos,setTodos]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    async function data(){
      const response=await axios.get("http://localhost:8080/todos");//make sure to run this locally
      if (loading) setLoading(false); // ✅ Only set `loading` false once
    }
    data();
    const interval=setInterval(data,n*1000)
    return () => clearInterval(interval); // Cleanup on unmount
  },[n])
  return {todos,loading};
}

function App() {
  const {todos,loading}=useTodos(5);
  if(loading)
    return(<div>Loading...</div>)

  return (
    <div>
      {todos.map(todo=> <Track todo={todo}/>)}
    </div>
  )
}
function Track({todo})
{
  return(
    <div>
      {todo.title}
      <br/>
      {todo.description}
    </div>
  )
}

export default App
/*
Custom Hooks in React allow you to extract reusable logic from components, making your code 
more modular and readable. They are simply JavaScript functions that use 
built-in React Hooks (like useState, useEffect, useContext, etc.) inside them.

📖 Creating a Custom Hook
A custom hook follows the naming convention of starting with use (e.g., useFetch, useCounter).
*/ 

/*
1. Data fetching hooks can be used to encapsulate all the logic to fetch the data from your backend
See:- https://gist.github.com/anmolkr7/87b9621ffec574eaaa3c7685e34577cb

2.Auto Refreshing Hook
If you want to keep pollinh the backend every n seconds? n needs to passed in as an input to the hook
See:- https://gist.github.com/anmolkr7/937f50a999f1ef782dd2662290c66090
*/

