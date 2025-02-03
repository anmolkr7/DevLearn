/*
Assignment:-
A website which has 2 endpoints

POST/sigin
Body-{
username:string
password:string
}
Returns a json web token with username encrypted provided user exists in DB

GET/users
Headers-Authorization header
Returns an array of all users if user is signed in(token in correct)
Returns 403 status code if not
*/



const express = require("express");
const jwt = require("jsonwebtoken");
/*
jsonwebtoken is an npm package that allows you to:
1.Create JWT tokens (jwt.sign())
2.Verify and decode JWT tokens (jwt.verify() and jwt.decode())
*/
const jwtPassword = "123456";

const app = express();
app.use(express.json())

//For now we are putting this data into memory and not into database
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
    let exist=false
    for(let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password)
        exist=true
    }
    return exist
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "123456");
  return res.json({
    token,  //Token being sent to client as json response
  });
   /*
    The jwt.sign() function creates a JSON Web Token (JWT), which is used for authentication.
    📌 Breakdown of the function:
    jwt.sign(payload, secretOrPrivateKey, [options, callback])
    payload: The data to be stored inside the token (e.g., { username: username }).
    secretKey: A secret key ("shhhhh") used to digitally sign the token.
    options (optional): Configuration options like the token's expiration time, audience, issuer, etc.
    */
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;  //Get token from request headers (So we'll copy paste the token received from post request in postman)
  try {
    const decoded = jwt.verify(token, jwtPassword);  //verify token
    /*
    jwt.verify(token, secretOrPublicKey, [options, callback])

    jwt.verify() with a callback, you pass a callback function that receives two 
    parameters:
    err: This contains any error that occurred during the verification process.
         If the token is invalid or expired, err will be populated with an error object.
         If the verification is successful, err will be null.
    decoded: This contains the decoded payload of the JWT.

    If the token is valid and correctly verified, decoded will hold the data you encoded when signing the token (e.g., the username).
    If there was an error during verification, decoded will be undefined.
    If the token is valid, it returns the decoded payload (an object containing the original data stored in the token).
    If the token is invalid (expired, tampered, or incorrect secret), it THROWS AN ERROR.
    */
    const username = decoded.username;  //Extract username from decoded token
    // return a list of users other than this username
    res.json({
        users:ALL_USERS.filter(value=>{
            if(value.username==username)
                return false
            else
            return true
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,()=>{
    console.log('Listening on PORT')
})