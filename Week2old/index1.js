const express = require('express')
const app = express()
const port = 3001

function calculateSum(counter)
{
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;  
}
function handleFirstRequest(req,res){
    var counter=req.query.counter; //req.query comes in use here for query parameter
    //VERY IMP:- THE var name is counter because it sud be the same as in url route
    console.log(req.query.counter2);
    console.log(req.query.counter3);
    //counter 2 and 3 will be printed on terminal and not on webpage and to access it we sud write
    //localhost:3001/handlesum?counter=100&counter2=200&counter3=300
    var calculatedSum=calculateSum(counter);
    //console.log(calculatedSum)
    var answer="The sum is "+calculatedSum;
    res.send(answer);
}
app.get('/handlesum', handleFirstRequest)//purpose is to wait for incoming request and whenever it comes then call the function 
//handlesum is basically the route on which we want the handleFirstRequest to be called but it will give
//0 as output because we are using query parameter . To get output we need to write localhost:3000/handlesum?counter=100 (after ? we gave the query parameter that went to our backend to be processed)
app.get('/handlesum1',handleFirstRequest)
//handlesum1 route will also call the same function and display the output
//IMP-if we run localhost:3000/ then we wont get desired output as there is no '/' route for it
function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port, started) //keeps host ready for incoming requests

 