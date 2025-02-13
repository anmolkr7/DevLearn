const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course,User}=require("../db")
const jwt=require("jsonwebtoken");
const {JWT_SECRET }= require("../config");
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"Admin created successfully"
    })
});

router.post('/signin', async(req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    const user=await User.find({
        username,
        password
    })
    if(user){
    const token=jwt.sign({
        username
    },JWT_SECRET);
    res.json({
        token
    })
}
else{
    res.status(411).json({
        message:"Wrong username and password"
    })
}
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
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

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;