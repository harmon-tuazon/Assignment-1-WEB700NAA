/*
********************************************************************************
* WEB700 – Assignment 1
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Harmon Tuazon Student ID: 165229220 Date: May 15, 2025

********************************************************************************
*/

//Defining get random integer utility function
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}


const serverMethods = ["GET", "GET", "GET", "POST", "GET", "POST"]
const serverRoutes = ["/", "/store", "/store-admin", "/register", "/developer", "/login"]
const serverResponses = ["Home", "Main Storefront", "Manage Products", 
    "Registered New User", "Developed By: Harmon Tuazon hamtuazon@mysenca.ca", "User Logged In"]

const processRequest = (method, route) => {
    //For loop that will look thru the different arrays to see if there is a match
   for ( let i = 0; i < serverRoutes.length; i++) {
        if (serverMethods[i] === method && serverRoutes[i] === route) {
            return `200: ${serverResponses[i]}`;
        }  
   }
   
   //If no match: it will return a 404 error
   return `404: Unable to process ${method} request for ${route}`; 
}


//Defining test request function
const testRequests = () => {
    const testMethods = ["GET", "POST"]
    const testRoutes = ["/", "/store", "/store-admin", "/register", "/developer", "/login", "/notFound1", "/notFound2"]


    const randomRequest = () => {
        //retrive the method and route through randomizing index value by using the getRandInt utility func.
        let randMethod = testMethods[getRandomInt(1)]
        let randRoute = testRoutes[getRandomInt(8)]

        console.log(randMethod, randRoute)

        console.log(processRequest(randMethod,randRoute))    
    }
    
    //this will keep calling the random request function every 1 sec
    setInterval(randomRequest, 1000);
}

testRequests()

