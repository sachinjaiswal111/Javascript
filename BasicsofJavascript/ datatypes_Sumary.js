// // Datatypes:- 

// // Primitive:- 
// //: String,Number,Boolean,null,undefined,Symbol,BIG INT


// // Reference type(  Non Primitive)

// //Array,Objects,Functions
// // typeof operator give us object except function which give it function.which is also called object function.

// // dynamically typed: no need to specify data type

// const id=Symbol("123");
// const anotherid=Symbol("123");
// // both are not same symbool is used to assgin unique element.

// const binNumber=1234567893093n;

// // javascript stores in bigint

// const heros=["saktiman", "naagraj","doga"];

// let myobj={
//     name:"sachin",
//     age:22

// }

// const myfunc=function(){
//     console.log("hello world")
// }


//Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

console.log(typeof 100);
console.log(typeof isLoggedIn);
console.log(typeof null );
console.log(typeof 100.3);
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack(Primitive),Heap(Non-primitive)


let gameName="Sachin";
let anothername=gameName;
anothername="sachin kumar" // gameName still not change

let userOne={
    email:"user@google.com",
    upi:"user@ybl"

}
let userTwo=userOne;
// now if we change the user two name then user one is chagne.
userTwo.email="userOne.email";
console.log(userTwo.email);




console.log(anothername);
