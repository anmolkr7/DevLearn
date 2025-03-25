import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function data() {
      const response = await axios.get("http://localhost:8080/todos"); //make sure to run this locally
      if (loading) setLoading(false); // ✅ Only set `loading` false once
    }
    data();
    const interval = setInterval(data, n * 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [n]);
  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos(5);
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </div>
  );
}
function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
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

3.Browser functionality related hooks

a.) useIsOnline hook
-> Create a hook that returns true or false based on whether the user is online
for this we need to make use of event listeners
See:- https://gist.github.com/anmolkr7/d3ff7ca6e12fcdfd897ee5a51e55af33

b.) useMousePointer Hook
-> Create a hook that returns you the current mouse pointer position/coordinates 
See:-  https://gist.github.com/anmolkr7/424ce53090d9cc5c276b2780d1c3632b


4. useDebounce Hook
The useDebounce hook is useful when you want to delay updating a value until 
after a certain period of inactivity. This is commonly used for optimizing 
search inputs, API calls, and event handling.
So,Create a hook that debounces a value given the value that needs to be debounced
and the interval at which the value should be debounced.
See:- https://gist.github.com/anmolkr7/c15c8df2eedea2082119f334428aaf41

*/


