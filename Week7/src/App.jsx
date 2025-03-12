import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './pages/Landing'
import { Dashboard } from './pages/Dashboard'
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
  return (
    <div>
      <div>
        Hi This is the topbar and it remains fixed for every route
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
/*
Now say we want to improvise our logic.
We create two buttons and clicking on them takes us to landing page and
dashboard page respectively
Solution:- https://gist.github.com/anmolkr7/81ca2d707a578e58e664df114b3ba496

But the above solution way is a wrong way using window.location.href
Page Reload	      ✅ Reloads the page	
Routing Type	    ❌ Full page reload (like traditional websites)	
History Stack	    ❌ Replaces the current page	
Performance	      ❌ Slower (because of reload)	
Best Use Case	    When a hard refresh is needed (e.g., logging out)
This is against react's single page application. IT is like traditional website loading all
the bundles again to client side from the server
*/

/*
Correct way:-
useNavigate is a hook from react-router-dom
useNavigate is the preferred way for navigation in React Router as it enables smooth 
client-side transitions without reloading.

CAAREEFULLLL
useNavigate cannot be used outside BrowserRouter. So to solve this issue
we will wrap the logic (useNavigate and button thing that calls navigate) inside
a component and then place this component inside BrowserRouter
Solution:- https://gist.github.com/anmolkr7/9aabce03097a52fffeefdcc6ad4478e3
*/

/*
LAZY LOADING
Lazy loading is a technique used to dynamically load components only when needed, 
reducing the initial bundle size and improving performance.

React provides React.lazy() for component-based lazy loading, and it works well with 
React Router for route-based lazy loading.

IMPORTANT:-
1.React requires a fallback UI when using React.lazy(), otherwise, it will throw an error.
2.a lazy-loaded component has to be wrapped in <Suspense>.

Why <Suspense>?
1.<Suspense> ensures proper handling of the lazy-loaded component.
2.Prevents crashes when React tries to render the component before loading is complete.
Code:- https://gist.github.com/anmolkr7/c4c40e8eedea5ea5b434cdff0bb05efe
*/


