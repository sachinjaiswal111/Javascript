const user={
    username:"sachin",
    price:999,

    welcomeMessage: function (){
        console.log(`${this.username} , welcome to website`)
        console.log(this)// print whole object in which it is
    }

}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();// return sam greeting 

// console.log(this);// print current context  thsi return empty in node in console tis return window


// function chai(){
//     let username="sachin";
//     console.log(this.username) // return undefined because this works in object

// }
// chai()

// const chai = function (){
//     let username = "sachin"
//     console.log(this.username)// return same error
// }
// chai();


const chai = () => {
    let username="sachin";
    // console.log(this.username);// this is also return undefined
    console.log(this);// this return empty;
}
// chai();

// const addTwo =(num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(3,5))

// const addTwo = (num1,num2) => num1+num2; not need to write return keyword

// const addTwo=(num1,num2) => (num1+num2); // here also not need to write return 
// return when when you use curly brackets

// return object

const addTwo = (num1,num2) => ({username:"sachin"})

console.log(addTwo(3,4))



