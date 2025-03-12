import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
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

/*
function App() {
  const [count, setCount] = useState(0)
  return (
      <div>
          <Count count={count} setCount={setCount}/>
      </div>
  )
}
function Count({count,setCount})
{
  return(
    <div>
       <CountRender count={count}/>
       <Buttons count={count} setCount={setCount} />
    </div>
  )
}
function CountRender({count})
{
  return(
    <div>
      Count:{count}
    </div>
  )
}
function Buttons({count,setCount})
{
  return(
    <div>
      <button onClick={()=>{
        setCount(prevCount=>prevCount+1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(prevCount=>prevCount-1)
      }}>Decrease</button>
    </div>

  )
}
*/

/*
For the above code we are going to solve the prop drilling
1️⃣ Create Context
A Context is a centralized store for data that components can consume
For this to be done :-
It's recommended to create a separate file for your context 
and then import it where needed. Say I created "context.jsx" file
and then from there i will export the context

2️⃣ Provide Context in a Parent Component
Wrap the part of the component tree where you need access to the shared state.
Wrap it INSIDE A PROVIDER and give it a "value" that needs to get carried on.

3️⃣ Consume Context in Any Component
Now, any child component inside UserContext.Provider can access the data without 
prop drilling.
🔹 useContext is a React Hook that allows components to consume values from a 
Context API provider without prop drilling.
const value = useContext(MyContext);
MyContext is the context object created using createContext().
useContext(MyContext) gives access to the latest value from the nearest 
MyContext.Provider.
*/
function App() {
  const [count, setCount] = useState(0)
  return (
      <div>
        <CountContext.Provider value={count}>
          <Count setCount={setCount}/>
        </CountContext.Provider>
      </div>
  )
}
function Count({setCount})
{
  const count=useContext(CountContext) //CONSUMING CONTEXT INSIDE ANY COMPONENT WHERE THE VALUE IS REQUIRED
  return(
    <div>
       <CountRender/>
       <Buttons count={count} setCount={setCount} />
    </div>
  )
}
function CountRender()
{
  const count=useContext(CountContext); //consuming context here again(see no props passed in parameter)
  return(
    <div>
      Count:{count}
    </div>
  )
}
function Buttons({setCount})
{
  return(
    <div>
      <button onClick={()=>{
        setCount(prevCount=>prevCount+1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(prevCount=>prevCount-1)
      }}>Decrease</button>
    </div>

  )
}
export default App

