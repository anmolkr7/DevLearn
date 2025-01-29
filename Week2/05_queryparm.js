/*
Query parameters are key-value pairs that are added to the URL after the question mark 
(?) to pass data to the server. They are often used to filter, sort, or modify the data 
that is being requested. Query parameters are part of the URL and are included in HTTP 
requests when making GET requests.

https://example.com/path?key1=value1&key2=value2
?: Marks the start of the query string.
key1=value1: Represents a key-value pair, where key1 is the parameter name,and value1 is its value.
&: Separates multiple key-value pairs.
*/

const express = require('express');
const app = express();
const PORT = 3002;
app.get('/products', (req, res) => {
   // http://localhost:3002/products?category=electronics&name=fridge   in postman
    console.log(req.query.category)
    console.log(req.query.name)
    res.send('Hello World');
    //res.status(401).send("Hello world")  to send status codes
});
app.listen(PORT, () => {
    console.log(`Server is running on port PORT`);
});

