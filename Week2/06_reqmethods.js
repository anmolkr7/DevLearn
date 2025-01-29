const user={
    name:"John",
    kidneys:[{
        healthy:false
    }]
}
const users=[user]
const express = require('express');
const app = express();
const PORT = 3003;
app.use(express.json())
//GET:- USER CAN CHECK HOW MANY KIDNEYS THEY HAVE AND THEIR HEALTH
app.get('/', (req, res) => {
    const johnkidneys=users[0].kidneys;
    const numberofkidneys=johnkidneys.length;
    let numberofhealthykidneys=0
    for(let i=0;i<numberofkidneys;i++)
    {
        if(johnkidneys[i].healthy==true)
            numberofhealthykidneys++;
    }
    res.json({
        numberofkidneys,
        numberofhealthykidneys
    })
});


// //POST:- USER CAN ADD A NEW unhealthy KIDNEY
app.post('/', (req, res) => {
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"Done"
    })
});


// //PUT: USER CAN REPLACE A KIDNEY or replace all kidneys to healthy
app.put('/', (req, res) => {
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true
    }   
    res.json({msg:"Replaced all kidneys with healthy ones"})    
});


// //DELETE:- USER CAN REMOVE(not replace) Unhealthy KIDNEY
app.delete('/', (req, res) => {
    const newkidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidneys
    res.json({
        msg:"Done"
    })
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

