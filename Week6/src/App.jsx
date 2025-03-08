import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("My name is abc")
  function updateTitle(){
    setTitle("My name is "+Math.random())
  }
  /*
  A re-render menas that
  1.React did some work to calculate what all should update in this component
  2. The component actually got called 
  3.The inspector shows you a bouding box around the component

  It happens when 
  1. A state variable that is being used inside a component changes
  2. A parent component re-render triggers all children re-rendering

  Carefully understand 2. point
  here, clicking on update title only first header should get re render as its state is changing
  but react re render second header (i.e Kumar) as well

  You want to minimise the number of re-renders to make a highly optimal react app
  Solution: React.memo
  */
  return (
      <div>
        <button onClick={updateTitle}>Update the title of Header 1</button>
        <Header title={title}></Header>
        <Header title={"Kumar"}></Header>
      </div>
  )
}
function Header(props){
  return(
    <div>
      {props.title}
    </div>
  )
}

export default App
