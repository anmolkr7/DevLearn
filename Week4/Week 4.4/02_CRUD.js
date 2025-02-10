/*
User.create(document, callback);
Here:
document: The object containing user data.
callback (optional): A function to handle the result

User.create({
  username: "JohnDoe",
  email: "johndoe@example.com",
  password: "securepass123"
});

The callback is missing in your example.
If a callback is not provided, Mongoose will return a Promise, so you 
should use .then().catch() or await.
✅ All create operations in Mongoose return a Promise if you don’t pass 
a callback function
*/



/*
✅All read operations in Mongoose return a Promise
1️⃣ find() → Get Multiple Documents
Retrieves all matching documents.
const users = await User.find(); // Get all users

Example: Find All Users
const users = await User.find();
console.log(users);
✅ Returns an array of user objects.

Find Users with a Condition
const users = await User.find({ age: { $gte: 18 } });
✅ Finds users where age is greater than or equal to 18.

2️⃣ findOne() → Get a Single Document
Retrieves one document (first match).
const user = await User.findOne({ email: "john@example.com" });
✅ Returns one user object or null if not found.



3️⃣ findById() → Get by ID
Retrieves a document by its _id.
const user = await User.findById("65c234d3d5a9f4a77b8e9b12");
✅ Returns one user object or null if ID is invalid.



4️⃣ select() → Get Specific Fields
Used to fetch only certain fields to improve performance.
const user = await User.findOne({ email: "john@example.com" }).select("username email");
✅ Returns only username and email.

5️⃣ limit() → Limit Number of Results
Used to restrict the number of documents returned.
const users = await User.find().limit(5); // Get only 5 users

6️⃣ sort() → Sort Data
Sorts results in ascending (1) or descending (-1) order.
const users = await User.find().sort({ age: -1 }); // Sort by age (descending)

7️⃣ skip() → Pagination
Used with .limit() for pagination.
const users = await User.find().skip(10).limit(5); // Skip first 10, get next 5 users

8️⃣ where() → Advanced Queries
Allows complex conditions using .where().
const users = await User.where("age").gte(18).lte(30); // Age between 18 and 30

9️⃣ exists() → Check if Data Exists
Returns true if a document exists.
const exists = await User.exists({ email: "john@example.com" });
console.log(exists); // { _id: '65c234d3d5a9f4a77b8e9b12' } OR null
*/


/*
Just like read and create operations, all update operations return a Promise

Method	            Updates Multiple?	Returns Updated Doc?
updateOne()	            ❌ No	            ❌ No
updateMany()	        ✅ Yes	            ❌ No
findOneAndUpdate()	    ❌ No	            ✅ Yes
findByIdAndUpdate()	    ❌ No	            ✅ Yes
replaceOne()	        ❌ No	            ❌ No
save()	                ❌ No	            ✅ Yes


findOneAndUpdate() → Find & Update (Returns Updated Doc)
Finds a single document, updates it, and returns the updated document.

const user = await User.findOneAndUpdate(
  { username: "JohnDoe" },
  { $set: { age: 30 } },
  { new: true } // `new: true` returns updated doc
);
console.log(user);
🔹 Without { new: true }, it returns the old document.
*/


/*
Just like read, create, and update operations, all delete operations return a Promise
Method	            Deletes Multiple?	Returns Deleted Doc?
deleteOne()	            ❌ No	            ❌ No
deleteMany()	        ✅ Yes	            ❌ No
findOneAndDelete()	    ❌ No	            ✅ Yes
findByIdAndDelete()	    ❌ No	            ✅ Yes
*/