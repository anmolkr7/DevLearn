import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
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

Solution:- State Management
*/


