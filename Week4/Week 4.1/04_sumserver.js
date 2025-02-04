const express = require('express');
const cors=require('cors')
const app = express();
const PORT = 3000;
app.use(cors())
app.get('/sum', (req, res) => {
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    const sum=a+b;
    res.send(sum.toString());
});

app.listen(PORT, () => {
    console.log(`Server is running on port PORT`);
});