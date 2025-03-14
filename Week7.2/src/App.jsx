import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count.jsx";
/*
PROBLEM WITH CONTEXT API:-
See:- https://gist.github.com/anmolkr7/00b62f63c2b67889206261dd454b44d0 
OR REFER TO WEEK 7.1 App.jsx

Now upon clicking either increase or decrease the count state changes due to setCount 
causing a re-render of <App />. 
Since <CountContext.Provider> is inside <App />, it gets a new value on every state update.

This means:
Every consumer of CountContext will re-render → ✅ Expected for <CountRender/> and <Buttons/>
But <Count/> also re-renders → 🛑 Even though it doesn’t use CountContext
Why?
Because when the App component re-renders, it also re-renders its children.
Context itself doesn't cause re-renders, but every component consuming it will re-render when the value changes.
Even non-consuming components re-render if their parent re-renders.

Conclusion:-
We use contextAPI just to make syntax clearer and get rid of prop drilling.
We dont use it to make rendering more performant.

Solution:- State Management Libraries (eg.Recoil,Zustand,Redux)
*/

/*
From now onwards what we will do is we will create our components in a different folder
and also define our states in another folder say called "store" or whatever name you wish

npm install recoil

Atoms:-
Atoms are the fundamental units of state management. 
IMPORTANT:-Think of them like React state (useState) but globally accessible.
Multiple components can subscribe to the same atom.
The value of an atom persists even if the component using it unmounts.
If an atom's value updates, only components using that atom will re-render.

Atoms are created using the atom function from Recoil.
See folder store/atoms/count.jsx

Now here in App.jsx we'll replace every count/setcount with recoil logic

1.useRecoilState is a Recoil hook that allows you to read and update the value of an 
atom. It works similarly to React's useState but for global state management.
Syntax:- const [state, setState] = useRecoilState(atom);
state: The current value of the atom.
setState: A function to update the atom's value.

2.useRecoilValue is a Recoil hook that allows you to read the value of an atom or 
selector without modifying it.
Syntax:- const value = useRecoilValue(atomOrSelector);
value: current value of atom or selector

3.useSetRecoilState is a Recoil hook that allows you to update the value of an atom or 
selector without reading it.
Syntax:- const setState = useSetRecoilState(atomOrSelector);
setState(newValue): Directly sets a new value.
setState((prev) => newValue): Updates based on the previous value.


RecoilRoot is a required component that provides the Recoil state context to your 
application. All Recoil-related components (atoms, selectors, and hooks) must be 
inside a RecoilRoot.
Without RecoilRoot, using Recoil hooks (useRecoilState, useRecoilValue, etc.) 
will throw an error.
Think of it like React’s Context.Provider but for Recoil state! 🚀

NOTE:-IF YOU KNOW THAT A STATE VALUE NEEDS TO DEFINED AND USED INSIDE THE SAME COMPONENT AND
NOT ANYWHERE ELSE THEN NO NEED TO CREATE ATOM FOR IT AND MAKING USING OF RECOIL LOGIC

*/
function App() {
  
  return (
      <div>
        <RecoilRoot>
          <Count />
        </RecoilRoot>
      </div>
  )
}
function Count()
{
  console.log("rendered")
  return(
    <div>
       <CountRender/>
       <Buttons  />
    </div>
  )
}
function CountRender()
{
  //This component just needs the value of count. so what shall we use?
  const count=useRecoilValue(countAtom)
  return(
    <div>
      Count:{count}
    </div>
  )
}
function Buttons()
{
  //This need only setcount to update the value. So
  const setCount=useSetRecoilState(countAtom)
  const iseven=useRecoilValue(evenSelector);
  return(
    <div>
      <button onClick={()=>{
        setCount(prevCount=>prevCount+1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(prevCount=>prevCount-1)
      }}>Decrease</button>
      {iseven && <p>It is even</p>}
    </div>

  )
}
export default App

/*
Selectors
selectors are commonly used to extract, transform, and compute derived state from a 
state management library. 
A selector is a pure function that computes derived state from atoms or other selectors.
As we did for atoms we can do the same for selectors i.e in store folder we create another
file for selectors.


Async Selectors in Recoil
Async selectors in Recoil are used when you need to fetch asynchronous data 
(e.g., API calls, database queries) while keeping state management efficient.

Use async selectors when:
1.Fetching data from an API.
2.Querying a database (e.g., Firebase, MongoDB).
3.Performing asynchronous computations.
SEE GPT FOR FURTHER INFO IF NEEDED

*/


