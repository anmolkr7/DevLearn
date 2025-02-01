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
