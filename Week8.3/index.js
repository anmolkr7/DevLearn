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

/*
import axios from "axios";
axios.get("https://api.example.com/data")
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

 */

/*
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));

*/

//AXIOS USING ASYNC AWAIT
import axios from "axios";
    const fetchData = async () => {
        try
        {
        const response = await axios.get("https://api.example.com/data");
        console.log(response.data); // Axios automatically parses JSON
        } 
        catch (error)
        {
        console.error("Axios error:", error.message);
        }
};
fetchData();

//Fetch using async await
/*
const fetchData = async () => {
    try
    {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok)
      {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Parsing JSON
      console.log(data);
    } 
    catch (error) 
    {
      console.error("Fetch error:", error.message);
    }
};
fetchData();
*/

/*
✅ POST Request Using Axios (Async/Await)
const postData = async () => {
  try 
  {
    const response = await axios.post("https://api.example.com/data", {
      name: "John Doe",
      email: "john@example.com",
    });
    console.log("Response:", response.data);
  } 
  catch (error)
  {
    console.error("Error posting data:", error.message);
  }
};
postData();
*/




/*
✅ Axios GET Request with Headers
🟢 GET Request Syntax
axios.get(url, config);
*/
/*
import axios from "axios";
const axiosWithHeaders = async () => {
  try {
    const response = await axios.get("https://api.example.com/data", {
      headers: {
        "Authorization": `Bearer your_token_here`, // Add token here
        "Content-Type": "application/json", // Optional: specify content type
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Axios error:", error.message);
  }
};
axiosWithHeaders();
*/

/*
🔴 POST Request Syntax
axios.post(url, data, config);
*/
/*
✅ Axios POST Request with Headers
const axiosWithHeadersPost = async () => {
  try {
    const response = await axios.post(
      "https://api.example.com/data",
      { 
        name: "John Doe", 
        email: "john@example.com" 
      }, // Request body
      {
        headers: {
          "Authorization": `Bearer your_token_here`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error posting data:", error.message);
  }
};
axiosWithHeadersPost();
*/