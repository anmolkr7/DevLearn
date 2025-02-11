const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course}=require("../db");
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    Admin.create({
        username:username,
        password:password
    })
    .then(function(value){
        if(value)
        {
            res.json({
                msg:"Admin created successfully"
            })
        }
    })
    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imagelink=req.body.imagelink; 
    //zod for input validation
    const newcourse=await Course.create({
        title,
        description,
        price,
        imagelink
    })
    res.json({
        msg:"Course created successfully",
        courseId:newcourse._id
    })
    
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const allcourses=await Course.find({})
    res.json({
        courses:allcourses
    })
});

module.exports = router;