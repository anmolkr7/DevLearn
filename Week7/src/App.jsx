import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*
Single Page Application
A Single Page Application (SPA) in React is a web application that dynamically updates the 
content of a single HTML page, instead of loading new pages from the server. SPAs improve 
performance by handling routing and rendering on the client side using JavaScript.

THE ENTIRE JAVASCRIPT BUNDLE IS LOADED INITIALLY.

1.Client-Side Routing: React uses libraries like React Router to update the URL and 
render components dynamically without reloading the page.
2.Virtual DOM: React updates only the necessary parts of the UI efficiently, leading 
to a smooth user experience.
3.State Management: Data flow is handled using React Context, Redux, or Zustand for 
managing global state.
4.API Calls & Data Fetching: SPAs use fetch() or libraries like Axios, React Query, 
or SWR to get data from a backend (often via REST APIs or GraphQL).

Disadvantages of SPAs
❌ SEO Challenges – Since content loads dynamically, search engines may struggle to 
index pages (can be solved with Server-Side Rendering (SSR) via Next.js). (To be studied later)
❌ Initial Load Time – The entire JavaScript bundle loads initially, which can slow down 
the first render.
*/

/*
Client-Side Bundle
The client-side bundle refers to the JavaScript, CSS, and other assets that are downloaded 
to the browser when a React application is loaded. It contains everything needed to render 
the UI and handle interactions on the client side.
*/

/*
Client-Side Routing
What is Client-Side Routing?
In a traditional website, navigating between pages reloads the entire HTML document 
from the server.
In React (SPA), client-side routing updates the content dynamically without a full-page 
reload.

How It Works in React
React Router listens to URL changes and renders components accordingly.
The browser does not make a new request to the server for each page change.
This results in faster transitions and a smoother UX.
*/

function App() {
  const [count, setCount] = useState(0)
  return (
      <div>
      </div>
  )
}

export default App
