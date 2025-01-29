const express=require('express')
const app=express()
const port=3002
app.post('/',(req,res)=>{
    //console.log(req.body)
    console.log(req.body)
    res.send("Hello from body")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})