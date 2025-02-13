const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course, User}=require("../db")
const jwt=require("jsonwebtoken");
const JWT_SECRET = require("../index");
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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;