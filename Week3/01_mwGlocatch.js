/*Use case of middleswares is to do prechecks before actually logic checks in
 e.g:authentication,input validation
 */

/*
1.User needs to send a kidneyId as a query param which should be a number from 1-2
2.user should send a username and password in headers
*/
//UGLY WAY TO DO THIS

/*
const express = require('express');
const app = express();
const PORT = 3006;
app.get('/health-checkup', (req, res) =>{
    const kidneyid=req.query.kidneyid;
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!="anmol" || password!="pass"){
        res.status(400).json({
            msg:"User doesnt exist"
        });
        return; //early return
    }
    if(kidneyid!=1 && kidneyid!=2){
        res.status(400).json({
            msg:"Wrong input"
        });
        return;  //early return
    }
    res.json({msg:"Your kidney is healthy"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port PORT`);
});
*/

/*
Syntax:-app.get(path, middleware1, middleware2, ..., finalHandler);
where each function takes three arguments: req (request), res (response), and next 
(a function to pass control to the next middleware) and each function:-
1.Processes the request
2.Calls next() to pass control to the next function
*/


//BETTERY WAY TO DO IS USING MIDDLEWARES
const express = require('express');
const app = express();
const PORT = 3007;
function userMiddleware(req,res,next){
    const kidneyid=req.query.kidneyid;
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!="anmol" || password!="pass"){
        res.status(403).json({
            msg:"Incorrect Inputs"
        });
    }
    else{
        next(); //passes control to next middleware
    }
};
function kidneymiddleware(req,res,next){
    const kidneyid=req.query.kidneyid;
    const username=req.headers.username;
    const password=req.headers.password;
    if(kidneyid!=1 && kidneyid!=2){
        res.status(403).json({
            msg:"Incorrect Inputs"
        });
    }
    else{
        next(); //passes control to next middleware
    }
};
app.get('/health-checkup', userMiddleware,kidneymiddleware, (req, res) => {
    res.send('Your kidney is healthy');
});

app.listen(PORT, () => {
    console.log(`Server is running on port PORT`);
});


/*
app.use(). It takes middleware as input
app.use(express.json())  //middleware for bodyparsing
This is a middleware for parsing
It will get called for EVERY route that is declared below it.
So, instead of calling the middleware in route as its callback, we can
do this thing.
eg: app.use(userMiddleware) //So this will call usermiddleware for every route below
so now we can remove usermiddleware from app.get callback
*/

/*
Why you need to do input validation?
:- User can enter any thing as input. Suppose we are expecting an array but user
enters some random text. So we need to define many if-elses for various scenarios
or else for a wrong input our backend can get exposed due to the random html
error thrown

Solution:- Middleware called Global catches.
These are PLACED AT THE END OF ALL ROUTES
In Express.js, a global error-catching middleware is used to handle unexpected errors 
across all routes. This prevents your application from crashing due to unhandled errors.

Express allows defining an error-handling middleware using four parameters:
(err, req, res, next)

// Global error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ msg: "Internal Server Error" });
});

Any unhandled error will be caught by this middleware and return a 500 Internal 
Server Error response.
*/







