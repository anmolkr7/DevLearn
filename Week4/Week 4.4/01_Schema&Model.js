/*
const UserSchema = new mongoose.Schema({...})
Defines a schema (blueprint) for the User collection.
Specifies the structure of documents stored in MongoDB.
*/

/*
In .Schema, we pass an object where each key-value pair defines a field (property) and its 
configuration.
 Keys → Field names (e.g., title, price).
Values → are either:
A data type directly (String, Number).
OR an object with multiple constraints ({ type: String, required: true, unique: true }).
*/
const UserSchema=new mongoose.Schema({
  email:String,  //email:{type:String,required:true,unique:true}
  password:String,  
  purchasedCourses:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Course'
}]
});
/*
1.purchasedCourses is an array of ObjectIds.
2.mongoose.Schema.Types.ObjectId means that each element in the array is a reference to another 
document in a different collection.
3.ref: 'Course' links this field to the Course model.
4.This creates a relationship where a User can purchase multiple Course documents.

*/
const CourseSchema=new mongoose.Schema({
    title:String,
    price:5999
});
const User=mongoose.model('User',UserSchema);
/*
mongoose.model('User', UserSchema);
Converts UserSchema into a Mongoose model called "User".
This creates a MongoDB collection named "users" (Mongoose automatically pluralizes the name).
*/
const Course=mongoose.model('Course',CourseSchema);

/*
1.Feature	    mongoose.Schema	                                mongoose.model
2.Purpose	    Creates a blueprint for documents	            Creates a MongoDB collection based on the schema
3.Direct DB     ❌ No, just defines structure	               ✅ Yes, used for CRUD operations
Interaction?	
4.Syntax	    const schema = new mongoose.Schema({...})	    const Model = mongoose.model("CollectionName", schema)

Final Understanding
✅ .Schema = Defines Structure (Like a Class in OOP)
✅ .model = Creates a Collection (Like an Object of That Class)
*/
