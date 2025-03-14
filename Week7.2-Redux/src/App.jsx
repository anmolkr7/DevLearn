import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import store from './redux/store'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from './redux/slices/counterSlice'
import { Provider } from 'react-redux'
/*
npm install @reduxjs/toolkit react-redux

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

Step I followed:
1. Create counter slice in counterSlice.js file inside redux/slices
import createslice and export actions and reducer
2.Configure the slice(s) into one universal store inside redux/store.js
import configurestore from reduxtoolkit and reducer from counterSlice.js
3.Inside App.jsx
You'll need to import tore(containing all reducers of different slices)
You'll need to import the actions that you exported in CounterSlice.js
You'll need to import the Provider from reduxtoolkit
You'll need to import the function useSelector and useDispatch from reduxtoolkit
*/
function App() {
  return (
      <div>
        <Count />
      </div>
  )
}
function Count()
{
  return(
    <div>
      <Provider store={store}>
        <CountRenderer/>
        <Buttons/>
      </Provider>
    </div>
  )
}
function CountRenderer()
{
  /*
  useSelector is a hook from react-redux that allows React components to access specific 
  parts of the Redux store.
  const data = useSelector((state) => state.sliceName.property);

  Accessing multiple properties through object destructuring
  const { count, isLoading } = useSelector((state) => state.counter);

  Use useSelector whenever you need to read data from Redux state inside a component.
✅ Read state from Redux store.
✅ Automatically updates the component when state changes.
✅ Prevents unnecessary re-renders by only selecting the needed part of the state.
  */
  const count=useSelector((state)=>state.counter.count)
  return(
    <div>
      Count:{count}
    </div>
  )
}
function Buttons()
{
  /*
  useDispatch is a hook from react-redux that allows you to send actions to the Redux store to 
  update the state.
  const dispatch = useDispatch();
  dispatch(action);

  When to Use useDispatch?
✅ When you need to update the Redux store.
✅ When calling an action from a slice.
✅ When making API requests (with async thunks).
  */
  const dispatch=useDispatch();
  return(
    <div>
      <button onClick={()=>dispatch(increment())}>Increase</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button>
    </div>
  )
}
export default App

/*
Redux is synchronous by default. To handle async operations (like API calls), we use 
middleware like Redux Thunk

Redux Thunk Middleware
It allows action creators to return functions instead of plain objects, 
enabling delayed or conditional dispatching.

Step 1: Create an Async Thunk

import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});
The first argument "data/fetchData" is the action type.
The second argument is an async function that fetches data.


Step 2: Handle Async Actions in a Slice

import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchDataThunk"; // Import the async thunk
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No normal reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default dataSlice.reducer;

What is builder.addCase in Redux Toolkit?
builder.addCase is a method used inside extraReducers in Redux Toolkit to handle specific 
actions, especially for async operations created with createAsyncThunk.
Instead of writing multiple case statements like in traditional Redux, builder.addCase 
allows you to handle different states (pending, fulfilled, rejected) in a structured way.


Step 3: Configure the Store
After exporting dataSlice.reducer, we need to add it to the Redux store.

📌 Create store.js


import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"; // Import the reducer

const store = configureStore({
  reducer: {
    data: dataReducer, // Register the reducer
  },
});
export default store;

Step 4: Provide the Store to React
Now, wrap your entire React app with the Redux Provider.

Step 5: Use fetchData in a Component
Now, we can dispatch the async action in a React component.

📌 Create DataComponent.js


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./fetchDataThunk"; // Import async thunk

const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data); // Get state

  useEffect(() => {
    dispatch(fetchData()); // Dispatch async action on mount
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default DataComponent;

*/


/*
See RTK QUERY and useSelector in redux toolkit

*/
