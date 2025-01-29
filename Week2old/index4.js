
const express = require('express')
var bodyParser=require('body-parser')
const app = express()
const port = 3003
//just like browser and postman interact with out node js process;
//HERE WE ARE LEARNING THAT ONE NODEJS PROCESS CAN SEND OR INTERACT WITH ANOTHER SERVER THAT ITSELF COULD BE SOME NODEJS PROCESS
//WELL RUN THIS CODE IN A TERMINAL AND USE ITS ROUTE IN"secondprocess.js" by using fetch and display the json body
function calculateSum(counter)
{
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum=sum+i;
    }
    return sum;  
}
function handleFirstRequest(req,res){
    var counter=req.query.counter;
    var calculatedSum=calculateSum(counter);
    var answerObject={
        sum:calculatedSum,
    };
    res.send(answerObject);
}
app.get('/handlesum',handleFirstRequest)
function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port, started)   