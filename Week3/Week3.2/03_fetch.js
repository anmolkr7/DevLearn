/*Until now we have sent requests using two ways:Postman and Browser URL bar
There's a third way.
Scenario:- Let's say i ask you to create an simple html page where
1. You can see the names of 10 people
2. You need to make sure you get these data from an API call
Assume someone has created api for you at :-
https://fakerapi.it/api/v1/persons
For this we created index.html file

Basic Syntax:-
fetch(url, options)
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data))   // Handle the data
  .catch(error => console.error("Error:", error)); // Handle errors
Important:-By default it will be a GET request

Making Different Requests
1. GET Request (Default)

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

2. POST Request (Sending Data)

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "My New Post",
    body: "This is the content of the post",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

3. PUT Request (Updating Data)

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Updated Title",
    body: "Updated content",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

4. DELETE Request

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(response => {
    if (response.ok) console.log("Deleted successfully");
    else console.error("Delete failed");
  })
  .catch(error => console.error("Error:", error));


WORKING:-
When you make a Fetch API call, it returns a PROMISE that resolves to a 
RESPONSE OBJECT. This Response object contains information about the HTTP 
response, such as status, headers, and the response body. So, this is the 
reason we use .then() and we know it takes a callback function inside it. This 
callback can be to convert the obtained response into JSON by response.json()
Now this itself returns another PROMISE that resolves into JAVASCRIPT OBJECT.
So this has to be handled by another .then() and the callback inside this will
log the data.
E.g:

fetch("https://jsonplaceholder.typicode.com/posts/1")  //returns a promise that resolves into Response object
  .then(response => response.json()) // Convert response body to JSON and returns another PROMISE that resolves into javascript object
  .then(data => console.log(data))   // Logs the parsed JSON object
  .catch(error => console.error("Error:", error));

As we already know that .then() can be replaced by using async await.
So:-

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();  // Parse JSON
    console.log(data);
}

fetchData();


Key Points About the Response Object
response.ok → true if the request was successful (status 200-299).
response.status → HTTP status code (e.g., 200, 404, 500).
response.json() → Converts the response body to JSON.
response.text() → Converts the response body to plain text.
response.blob() → Converts the response body to binary data (file, image, etc.).
*/