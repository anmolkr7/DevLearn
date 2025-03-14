import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
Redux is a state management library for JavaScript apps. It helps manage global 
state in a predictable way, especially in large applications.

1.Why Use Redux Toolkit Instead of Traditional Redux?
2.Less Code: Traditional Redux requires writing separate reducers, actions, and types. 
RTK combines them into slices.
3.Better Performance: Uses Immer.js internally, making state updates faster and immutable.
4.Built-in Middleware: Includes Redux Thunk for async operations.

1️⃣ Store (Global State)
Think of Redux as a giant warehouse storing your app's state.
A store holds the entire global state of the application.

2️⃣ Actions (What to Do?)
Actions are instructions that tell Redux what needs to change in the state.
Example: { type: 'INCREMENT' } tells Redux to increase a counter.

3️⃣ Reducers (How to Do It?)
A reducer is a function that takes the current state and an action, then returns the new state.
Example: A counter reducer increases/decreases a number in state.

4️⃣ Dispatch (Triggering an Action)
A function that sends an action to Redux.
Example: dispatch({ type: 'INCREMENT' }) tells Redux to update the counter.

What is a Slice in Redux Toolkit?
A slice is a feature-specific piece of the Redux store.
✅ It combines the reducer and actions into one file.
✅ Each slice manages one part of the state (e.g., counterSlice, authSlice).
Why use slices?
🔹 Reduces the need to manually create actions and reducers separately.
🔹 Automatically generates action creators (increment, decrement).

IMPORTANT:-
configureStore combines all slices and creates the Redux store (the single source of truth for your app).
Why Do We Need configureStore?
1️⃣ A Redux app usually has multiple slices (e.g., counterSlice, authSlice). configureStore combines them into one store.
2️⃣ It automatically adds middleware (like Redux Thunk for async actions).
3️⃣ It enables Redux DevTools, making debugging easier.

📌 Redux Hooks (useSelector & useDispatch)
Redux provides React hooks for interacting with the store.
1️⃣ useSelector (Read State)
Used to access data from the Redux store.
const count = useSelector((state) => state.counter.count);
👉 This gets the count value from the counter slice.

2️⃣ useDispatch (Modify State)
Used to send an action to Redux.
const dispatch = useDispatch();
dispatch(increment());
👉 This calls the increment action to update the state.

Structure to follow and import as necessary
/src
 ├── /redux          # Redux-related files
 │   ├── store.js    # Central Redux store configuration (It combines multiple reducers)
 │   ├── /slices     # Folder for Redux slices
 │   │   ├── counterSlice.js
 │   │   ├── authSlice.js
 │   │   ├── themeSlice.js  # (Other features if needed)
 ├── /components     # React components
 │   ├── Counter.js
 │   ├── Auth.js
 ├── App.js          # Main App component
 ├── index.js        # React entry point (wraps App with Provider)

VERY IMPORTANT:- Any component that uses Redux hooks (useSelector, useDispatch) must be inside 
the <Provider> component to access the Redux store along with the value store as a prop
*/
function App() {
  return (
      <div>
        
      </div>
  )
}

export default App
