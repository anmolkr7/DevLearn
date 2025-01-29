/*
Headers are key-value pairs that provide metadata about the request.
Types of Headers Sent by the Browser
1. General Headers
Headers that apply to the overall request, regardless of its type.
2. Request-Specific Headers
Headers that depend on the type of request (GET, POST, etc.).
3. Authentication and Cookies
Headers that handle security and user sessions.
Authorization: Used to send credentials for authentication (e.g., Bearer tokens or
basic auth).
Cookie: Contains cookies previously set by the server. Helps maintain sessions or 
user-specific preferences.
*/
const express=require('express')
const app=express()
const port=3001
app.post('/',(req,res)=>{
    //console.log(req.headers)
    console.log(req.headers["authorization"])//Acessing a specific header sent by browser to server
    console.log(req.headers.authorization)
    res.send("Hello from headers")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
/*So in postman basically if i am sending a header by creating it inside postman 
and assigning it a key then it means that browser is sending a header to the server(my codebase)
and it gets logged in my terminal
When you send a request with a header in Postman, you're simulating what a browser or 
any HTTP client would do. The server receives this header as part of the request, 
and you can log or access it in your terminal or code. 
*/

/*
Postman Sends a Request:
1.When you add a header (e.g., Authorization: Bearer token123) in Postman, 
it gets included in the HTTP request sent to your server.
2.Headers provide additional information to the server, like authentication tokens, 
content type, custom metadata, etc.

Express Server Receives the Request:
The server receives the request, including the headers, and you can access them using req.headers in your route handler.
*/
