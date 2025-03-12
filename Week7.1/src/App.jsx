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
PROP DRILLING IN REACT
Passing props is a great way to explicitly pipe data through your UI tree to the 
components that use it.

But passing props can become verbose and inconvenient when you need to pass some 
prop deeply through the tree, or if many components need the same prop. The nearest 
common ancestor could be far removed from the components that need data, and 
lifting state up that high can lead to a situation called “prop drilling”.

Wouldn’t it be great if there were a way to “teleport” data to the components in 
the tree that need it without passing props? With React’s context feature, there is!
 
*/