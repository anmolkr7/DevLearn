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
  but react re renders second header (i.e Kumar) as well

  You want to minimise the number of re-renders to make a highly optimal react app
  Solution:  
  1. Create a new component and push the state down in it and here return the button along with that one 
  header.
  Tip:-If there are multiple components that need to use a state variable,then find their Lowest 
  common ancestor and store it there instead of storing the state in root component(i.e App)
  See solution:- https://gist.github.com/anmolkr7/c287901f9574296e5c983c11a2bf48e5

  2. React.memo
  Let's you skip re-rendering a component when its props are unchanged
  Solution:- https://gist.github.com/anmolkr7/2b3c17ebd62684ebf1a21f5dde672203 must see
  */
 
 /*
 Use {} whenever you want to embed JavaScript in JSX.
🔹 Without {}, React treats it as plain text.
🔹 JSX requires {} for dynamic values, but not for static strings.
 */
  return (
      <div>
        <button onClick={updateTitle}>Update the title of Header 1</button>
        <Header title={title}></Header>
        <Header title={"Kumar"}></Header>
      </div>
  )
  
}
/*
SEE ABOUT WRAPPER COMPONENTS AND TRY TO RUN IT SOMEWHERE TO VISUALISE
https://gist.github.com/anmolkr7/3aa2f70b0948e66e4f2adc341090ef30
*/
function Header(props){
  return(
    <div>
      {props.title}
    </div>
  )
}

export default App

