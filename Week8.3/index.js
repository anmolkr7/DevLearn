//Axios vs Fetch
/*
Both Axios and Fetch API are used for making HTTP requests in JavaScript, but they have some key differences. Here's a detailed comparison:

🔥 Axios vs Fetch API: Key Differences
Feature	                Axios	                                 Fetch API
Ease of Use	            Easier syntax, automatic                 Requires manual JSON parsing (res.json())
                        JSON response parsing	            

Error Handling	        Automatically rejects on HTTP errors	 Only rejects on network failure, requires checking res.ok manually

Default Headers	        Automatically sets headers like          Need to set headers manually
                        Content-Type: application/json	

Request Cancellation	Supports request cancellation            Uses AbortController, but requires more setup
                        via AbortController	

Timeout Handling	    Built-in timeout support	             No built-in timeout (requires setTimeout workaround)

Interceptors	        Allows modifying requests/responses      No built-in interceptors
                        globally	

Browser Compatibility	Works in both browsers and Node.js	     Browser-native, but requires node-fetch in Node.js

File Uploads	        Supports multipart/form-data easily	     More manual setup needed

Performance	            Slightly larger bundlesize(~5kb gzip)	 Lighter (native API)

*/

const axios=require("axios");
async function main()
{
    const response=await axios.get("http://localhost:8080/todos");
    console.log(response.data);
}
main();