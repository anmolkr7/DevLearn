const express = require('express')
const app = express()
const port = 3002

function calculateSum(counter)
{
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;  
}
function handleFirstRequest(req,res){
    var counter=req.query.counter; //getting counter from query
    console.log(req.query.counter2);
    console.log(req.query.counter3);
    var calculatedSum=calculateSum(counter);
    var answer="The sum is "+calculatedSum;
    res.send(answer);
}
function createUser(req,res){
    res.send("Hello ji");
}
app.get('/handlesum', handleFirstRequest)
app.post('/createuser',createUser)
//we cannot send post requests from browser/url bar because url bar ALWAYSSSSS take GET requests and there is no GET request for createuser
//therefore for post requests we will use Postman
function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port, started) //keeps host ready for incoming requests

 