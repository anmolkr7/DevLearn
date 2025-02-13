const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
     // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    //token is : Bearer alsnlaherohaasljn so we need to extract token
    const words=token.split(" "); //separates token into array ["Bearer","askdjbaks"]
    const jwtToken=words[1];
    const decodedvalue=jwt.verify(jwtToken,JWT_SECRET);
    if(decodedvalue.username){
        next();
    }
    //Why didnt we check in the database for verification for username existence
    //Jwt saves us a database call
    else
    {
        res.status(403).json({
            msg:"You are not authenticated"
        })
    }
}

module.exports = userMiddleware;