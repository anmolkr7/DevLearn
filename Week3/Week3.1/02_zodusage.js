/*
How can you do better input validation?
:-This is where zod comes into picture
Zod is a powerful TypeScript-first VALIDATION LIBRARY that also works 
well in JavaScript. It allows you to define schemas for input 
validation, making data validation clean, declarative, and type-safe.

npm install zod
*/
const express = require('express');
const zod=require('zod')
const app = express();
const PORT = 3007;
app.use(express.json())

/*
Defining zod schema based on the expected input from user
Say we are expecting name ,email and password. Hence:

const schema = zod.object({
  name: zod.string().min(3, "Name must be at least 3 characters"),
  email: zod.string().email(),
  password: zod.string().min(6, "Password must be at least 6 characters"),
});
*/

/*
Say we are expecting an array of numbers so we will define a schema as below
for input validation
*/

const schema=zod.array(zod.number());

app.get('/health-checkup', (req, res) => {
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    /*
    the safeParse method is used to validate data against a schema without
    throwing an error. Instead of throwing an exception if validation 
    fails, IT RETURNS AN OBJECT that contains the validation result.

    
    How safeParse Works
    1.If the data validates successfully, safeParse RETURN AN OBJECT WITH A
    SUCCESS:TRUE PROPERTY and the parsed data under the data property.
    2.If the data fails validation, it returns an object with a 
    SUCCESS:FALSE PROPERTY and an error object that contains details 
    about the validation errors.

    Property	        Type	    Description
    response.success	boolean	    true if validation passed, false if it failed.
    response.data	    object	    The valid data if success is true.
    response.error	    ZodError	The validation errors if success is false.
    */
    if(!response.success)
    {
        res.status(411).json(
            response.error
        )
    }
    else{
        res.send({response})
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port PORT`);
});
