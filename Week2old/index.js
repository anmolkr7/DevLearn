const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req,res){
    res.send("Hello World");
}
app.get('/handlesum', handleFirstRequest)//purpose is to wait for incoming request and whenever it comes then call the function 
//handlesum is basically the route on which we want the handleFirstRequest to be called
app.get('/handlesum1',handleFirstRequest)
//handlesum1 route will also call the same function and display the output
//IMP-if we run localhost:3000/ then we wont get desired output as there is no '/' route for it
function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port, started) //keeps host ready for incoming requests

 