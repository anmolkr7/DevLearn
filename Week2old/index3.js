const express = require('express')
var bodyParser=require('body-parser')
const app = express()
const port = 3002

//middleware are way for you to capture requests.Any request that comes to express server first goes to middleware
//now these perform some logic on request and then these can accept the request and send it to app.get or reject it
//One of the use case of middleware is for authenticatiom
/*function middleware1(req,res,next){
    console.log("from inside middleware "+req.headers.counter);
    next(); //sends the control goes from here to handlefirstrequest
    //if we dont want to send the control to next function then we can just send a message as:-
    res.send("Error from middleware");
}
app.use(middleware1)      //this has to be below the function that we want to call
*/
//lot of middlewares available as library is next js

app.use(bodyParser.json()) //it adds a middleware to request workflow that extracts the body before the request goes to respective handler

function calculateSum(counter)
{
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum=sum+i;
    }
    return sum;  
}
function calculateMul(counter)
{
    var mul=1;
    for(var i=1;i<=counter;i++){
        mul=mul*i;
    }
    return mul;
}
function handleFirstRequest(req,res){
    /*console.log(req.headers);  
    var counter=req.headers.counter;  //getting counter from headers
 //headers are the second way to send data.
 // to send custom headers we need to use postman we cannot do it from url bar 
    var calculatedSum=calculateSum(counter);
    var answer="The sum is "+calculatedSum;
    res.send(answer);*/





    //*************     BODY IS THE THIRD WAY TO GIVE DATA TO BACKEND
    //console.log(req.body);  this will give us an error before because express doest not support this out of the box but people have built
    //external libraries so that we can extract body called body parser and we need to install it
   /* console.log(req.body);
    var counter=req.body.counter;
    var calculatedSum=calculateSum(counter);
    var answer="The sum is "+calculatedSum;
    res.send(answer);*/






    //*****RESPONSE FROM SERVER-STATUS CODE, HEADERS,BODY*****
    //1.STATUS CODE
    //res.send then express responds with default 200 status code 
    /*var counter=req.body.counter; 
    if(counter<1000000)
    {
        var calculatedSum=calculateSum(counter);
        var answer="The sum is "+calculatedSum;
        res.send(answer);
    }
    else
    { 
        res.status(411).send("Very high input")
    }*/



    //2.RESPONSE BODY:  HTML,JSON,SIMPLE TEXT
    /*var counter=req.body.counter; 
    var calculatedSum=calculateSum(counter);
    var calculatedMul=calculateMul(counter);
    var answerObject={
        sum:calculatedSum,
        mul:calculatedMul
    }
    res.status(200).send(answerObject)*/
    //Here it sending back json(.ie javascript object notation. in previous above code we were sending plain text)

}


//Now we will see about html response
/*function givePage(req,res)
{
    res.send(`<head>
    <title>
        Hello from page
    </title>
    </head>
    <body>
    <b>
        hi there
    </b>
    </body>`)
}
//app.get('/handlesum', handleFirstRequest)
app.get('/',givePage)*/



app.post('/handlesum',handleFirstRequest)
function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port, started) 
 