// // const tinderUser=new Object();
// const tinderUser={};

// tinderUser.id="123abc"
// tinderUser.name="Sammy"
// tinderUser.isLoggedIn=false



// // console.log(tinderUser);

// const regularUser={
//     email:"sachin@google.com",
//     fullname:{
//         userfullname:{
//             firstname:"sachin",
//             lastname:"kumar"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);

// const obj={
//     1:"a",
//     2:"b"
// }
// const obj1={
//     3:"a",
//     4:"b"
// }
// // const obj2={obj,obj1}// this form object in object
// // // console.log(obj2)

// // const obj3=Object.assign({},obj,obj1);

// const obj3={...obj,...obj1};
// // console.log(obj3)

// const users=[
//     {
//         id:1,
//         email:"s@gmail.com",
//     },
//     {

//     }
// ]
// console.log(users[0].email)
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));// return all the key in a array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("isLoggedIn"))// check the property

// // see more function manually





const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"sachin"
}
const {courseInstructor:ins} = course;

console.log(ins);

// use

const navbar=({company})=>{

}


// {
//     "name":"sachin",
//    "coursename":"js in hindi",
//     "price":"free"
// }


