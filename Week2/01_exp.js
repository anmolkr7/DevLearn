const express= require("express");//this library has to be brought from internet to our machine
const app = express()
//The express() function is used to create an instance of an Express application, 
//which you can use to define routes and middlewares. 
const port = 3000
//A port is the communication endpoint that your application uses to listen for incoming 
//network requests. It's essentially a numbered "door" on your computer or server where 
//the application is accessible.
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/message',(req,res)=>{
    //headers,body,query parameters
    res.send("Naacho be")
})
app.post('/conversation',(req,res)=>{
    res.send({
        msg:"2+2=4"
    })
})
/*
This route listens for GET requests at the root (/) path and 
sends back "Hello World!" as the response.
Syntax:-app.get(path, middleware1, middleware2, ..., finalHandler);
path:The URL or route that the server listens to. For example, /, /about, /users/:id, etc.
callbacks:
1. funnctions e.g middlewares
2. A function that handles the incoming request and sends the response. 
It takes three arguments: req (request), res (response), and next 
(a function to pass control to the next middleware).

The order of req (request) and res (response) parameters matters in 
Express route handlers.

When a user makes a GET request to a specific URL or 
endpoint, the server responds with a result, such as HTML, JSON, or other data.
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
/*
This starts a server and listens on port 3000. When the server is up, it logs a 
message to the console confirming that the server is running.
Syntax:-app.listen(port, [hostname], [backlog], [callback])
1.port (required): The port number on which the server will listen for 
incoming requests (e.g., 3000, 8080).
2.hostname (optional): The hostname or IP address the server will bind to. 
By default, it listens on localhost (127.0.0.1).
3.backlog (optional): The maximum number of connections allowed in the connection queue.
4.callback (optional): A callback function that gets executed when the 
server is successfully listening on the specified port.

TO STOP LISTENING PRESS CTRL+C IN THE TERMINAL

Once the server starts, open your browser and 
go to http://localhost:3000/. You should see "Hello World!" displayed.
*/


/*
localhost refers to the local machine (the computer you're working on) when accessing 
network resources. It’s a hostname that represents your own computer in the context of 
networking.
When you run a web server (like your Express app) on your machine and 
access http://localhost, you're essentially accessing a service running on your own 
computer.
localhost is typically mapped to the IP address 127.0.0.1, which is the loopback address 
that refers to your computer itself.
When you type http://localhost:3000 in a browser, you're telling the browser to connect 
to your own computer (specifically to port 3000) to access the server running there.
Loopback: The loopback address allows your computer to communicate with itself, which 
is useful for development and testing before deploying applications to the internet.
*/
  
 
 