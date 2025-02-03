//MongoDB - NoSQL database
/*
In each DB,it lets you create tables(collections)
In each table , it lets you dump JSON data
It is schema-less
It scales well and is decent choice for most of the usecases
*/


/*
How does the backend connect to the database?
:-Mongoose lets you connect to your database
*/

/*
Assignment:-
1. /signup - where they give us username password and first name and put it in the
database provided someone with this username does not already exist
2. /signin -check whether this user actually exists in database and if
their password is correct and if it is return them back a jwt or else stop them
3. /user - here we expect a header where the user sends the jwt they got,
then we match it and hit the database get all the users and return it
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");  //Loads the Mongoose package.
const jwtPassword = "123456";

/*
mongoose.connect(
  "your_mongo_url",
);
*/

//OR
//Note:- After copying connection string make sure to add the database name after .net/
mongoose.connect("mongodb+srv://anmolkr7:mongodb952@cluster0.qyhdh.mongodb.net/users_app")  //returns a promise
  .then(() => {
    console.log("MongoDB Connected Successfully!");  //if promise resolved
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);  //if promise rejected
  });

/*
mongoose.model is a function that creates a Mongoose model.
The second argument passed to mongoose.model is an object that defines the structure 
(or schema) of the data you want to store in MongoDB.This schema tells Mongoose how 
the documents in the users collection should look.
*/
const User = mongoose.model("User", {
  name: String,
  email: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  // should check in the database
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);