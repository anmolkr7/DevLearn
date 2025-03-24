import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
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