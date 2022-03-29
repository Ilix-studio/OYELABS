const request = require('request')

function getGoogleHomePage (finalCallBack) {
    request('http://www.google.com', 
    
    (error, response, body) => {
            console.error('error:', error); // Print the error if one occurred
            finalCallBack(error);
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            finalCallBack(null, body);
        });
};
   console.log(getGoogleHomePage((result)=>{
   console.log("RESULT==>",result);
}));