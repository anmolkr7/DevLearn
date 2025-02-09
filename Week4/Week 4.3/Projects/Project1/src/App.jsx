import { useState } from 'react'
/*
useState is a React Hook that allows functional components to have state (previously, 
only class components had state).
It helps store and update dynamic data in a React component.
*/
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


/*
App is a React functional component that acts as the main entry point of your app.
In React, components are functions that return JSX (HTML-like syntax).
The function must return a single JSX element (or a fragment <></>).
*/
function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
  )
}

//This exports the App component so it can be used in other files 
// (like main.jsx or index.js).
//In a Vite project, App is typically imported and rendered in main.jsx:
export default App
