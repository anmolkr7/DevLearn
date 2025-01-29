function logResponseBody(jsonBody)
{
    console.log(jsonBody);
}

/*function callbackFn(result)
{
    console.log(result)
}*/
//this will log(i.e. print) some complex thing but we have to extract body out from it


function callbackFn(result){
    //TO ACCESS THE BODY WELL USE result.json() but this an async function which returns a promise
    //therefore we'll have to use .then
    result.json().then(logResponseBody)// we used .json as long as the thing which we have returned is json and in our case here it is
    
}
var sendObj={
    method:"GET"
}; 
fetch("http://localhost:3003/handlesum?counter=4",sendObj).then(callbackFn)
//fetch lets us send http request or talk to http server while express is library that helps creates http server