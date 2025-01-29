const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
/*
In a Node.js application, you typically use the process.env object to access environment 
variables. Environment variables are often used to store configuration settings like the 
port number, database credentials, and other sensitive information.
When you run the app locally without setting the PORT environment variable, it will use 
3000.
In a production environment, if the PORT environment variable is set (e.g., by the 
hosting provider), it will use that port instead of the default 3000.

SO BEFORE RUNNING THE CODE YOU NEED TO TYPE $env:PORT=3002 IN TERMINAL AND THEN RUN
or else by default it will listen on port 3000
*/
app.use(express.json());
app.get('/', (req, res) => {
    console.log(req.body.msg)
    console.log(req.body.email)
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port PORT ${PORT}`);
});