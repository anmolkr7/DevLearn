/*
The body of the request contains data that is sent to the server for processing, 
such as :-
1.form submissions
2.JSON data
3.file uploads.
4.Plain text
*/

/*
const express=require('express')
const app=express()
const port=3002
app.post('/',(req,res)=>{
    console.log(req.body)//This will log undefined because express doesnt parse the data received from browser
    res.send("Hello from body")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

1.You need to use double quotes (") for keys and string values in your JSON object 
because JSON (JavaScript Object Notation) syntax requires it.
In JSON format, both the keys and the string values must be enclosed in double quotes. 
For example:
{
    "name": "John",
    "age": 30
}

2.To fix undefined/parsing, you need to use middleware that tells Express how to parse 
the body of incoming requests.Now the incoming body from server can be of various types
Therefore different middlewares should be used for each of them
a.)Form Data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

IMPORTANT:-b.)Raw data:It is further of different types such as JSON,Javascript,Text,HTML,XML. 
So there are different middlewares for each of them that must be declared BEFORE THE 
ROUTER IS CALLED
app.use(express.json());// Middleware for parsing JSON data
app.use(express.text()); // Middleware for parsing plain text data

c.)Multipart Form Data (for File Uploads) etc

*/

/*
Middleware refers to functions that are executed in the request-response cycle, 
BEFORE THE REQUEST REACHES THE ROUTE HANDLER (or after, depending on the flow). 
They provide a way to modify or process the request, handle errors, or perform other 
tasks like logging, authentication, or data parsing.
*/
const express=require('express')
const app=express()
const port=3002
app.use(express.json()); //this is a middleware that will be called for every route below this line
app.get('/',(req,res)=>{
    //console.log(req.body) this will log the whole body
    console.log(req.body.msg)//this will log the specific key
    //NOTE:- "msg" IS THE KEY THAT I HAVE SENT INSIDE BODY THROUGH POSTMAN
    console.log(req.body.email)
    res.send("Hello from body again")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
