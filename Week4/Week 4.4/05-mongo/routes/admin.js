const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin}=require("../db");
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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;