/*
As we can tell by now that anyone can send requests to our backend
They can just go to postman and send a request
how do we ensure that this user has access to a certain resource?

Dumb Solution: Ask the user to send username and password in all 
requests as headers

Slightly better way:-
1. Give the user back a token upon signup/signin. This token get stored in a
local storage in browser and it is public
2.Ask the user to send back the token in all future requests
3. When the user logs out,ask the user to forgte the token(or revoke it from the backend)
*/

/*
Before we get to authentication we need to talk about a few things
1. Hashing
🔹 Hashing is the process of converting an input (like a password) into a 
fixed-length string using a hash function.
🔹 It IS ONE WAY, meaning you CANNOT REVERSE the hash to get the original 
password.

Why Hash Passwords?
If you store passwords in plain text, an attacker who gains access to the 
database can see them. Instead, store only the hashed password, so even if 
an attacker steals it, they cannot directly use it.

How Hashing Works in Authentication
🛠️ Step 1: User Registers
User enters a password (e.g., "mypassword").
The server hashes it before storing:
Hash("mypassword") → "$2a$10$9fv8a9skg... (hashed value)"
Only the hashed password is stored in the database.

🛠️ Step 2: User Logs In
The user enters their password ("mypassword").
The server hashes the entered password and compares it to the stored hash.
If they match, authentication succeeds!



2.Salting
:-Adding Extra Security
:-Salting is a process of adding a random value to passwords before hashing to prevent rainbow table attacks.

Without Salt:
Hash("password123") → "5f4dcc3b5aa765d61d8327deb882cf99"
Hash("password123") → "5f4dcc3b5aa765d61d8327deb882cf99" (same hash!)
🚨 If two users have the same password, their hashes are identical → weak security.

With Salt:
Hash("password123" + "randomSalt1") → "a7s8d9f7g..."
Hash("password123" + "randomSalt2") → "b8f7d9e6h..."
✅ Even if two users have the same password, their hashes are different.

🔹 Most modern hashing functions (bcrypt, Argon2) automatically handle salting.
*/
   
/*
3.Encryption
Encryption is the process of converting plaintext data into an unreadable 
format (ciphertext) to protect it from unauthorized access. 
It IIS TWO WAY i.e CAN BE REVERSED using a decryption key.

4.JSON Web Tokens
It takes JSON as input
Its neither of encryption or hashing(its technically a digital signature)
Anyone can see the original output given the signature
Signature can be verified only using the password

A JWT consists of three parts, separated by dots (.):
HEADER.PAYLOAD.SIGNATURE

Example JWT Token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJ1c2VyIiwiaWF
0IjoxNjUwMDAwMDAwfQ.N6TqVRoRtGyOZT7h6ZZi2QGyW1gR07kZnY_Y5Y8nG7Q
🔹 Header → Specifies the algorithm used for signing (e.g., HS256).
🔹 Payload → Contains user information (e.g., userId, role).
🔹 Signature → Verifies the integrity of the token.

How JWT Works in Authentication
1️⃣ User logs in → Sends credentials (email/password).
2️⃣ Server verifies credentials → Creates a JWT.
3️⃣ JWT is sent to the client → Stored in local storage or cookies.
4️⃣ Client includes JWT in requests → As an Authorization header.
5️⃣ Server validates JWT → Grants or denies access.

5. Local Storage
JWTs are stateless (no server-side session storage needed).

Local Storage is a browser storage API that allows websites to store key-value 
pairs in a user’s browser persistently (even after the browser is closed).

✔ Persistent storage (Data remains after page reloads and browser restarts)
✔ Stores up to 5MB per origin (More than cookies)
✔ Accessible only from JavaScript
✔ Works in all modern browsers
✔ No expiration time (Unless manually cleared)   -IMPORTANT


It is place in your browser where you can store some data like:
Atuhentication tokens
User language preference
User theme preference
*/