// singleton:- from with constructor
// Object.create

// object literals

const mySym=Symbol("key1");
const jsUser= {
    name:"Sachin",
    "full name":"Sachin kumar",
    [mySym]:"mykey1",
    age:20,
    location:"Delhi",
    email:"2301010366.@krmu",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsUser.email);// when value is string not work
// console.log(jsUser["email"]);// you have pass string
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]); // now it use symbool for excess

// jsUser.email="sachin@chatgpt.com";// changeing value of key
// console.log(jsUser.email)

// // Object.freeze(jsUser); // lock the value;
// jsUser.email="sachin@mycrosoft.com";
// console.log(jsUser.email)// not changed;

jsUser.greeting=function(){ // adding function to the oject
    console.log("hello js user");
 }
// console.log(jsUser.greeting);// return refferce of function not excute
// console.log(jsUser.greeting());// excute the funciton

jsUser.greetingTwo=function(){ // adding function to the oject
    console.log(`hello js user ,${this.name} `);
 }
 console.log(jsUser.greeting())
 console.log(jsUser.greetingTwo());