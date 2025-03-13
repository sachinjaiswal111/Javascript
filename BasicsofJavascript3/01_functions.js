function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("N");
}
// sayMyName();

// function sum(num1,num2){ //not gona return any value
//     console.log(num1+num2);
// }

function sum(num1,num2){
    let result=num1+num2;
    return result;
    console.log("I am here") // this is not reachable;
}

const result=sum(3,5); 
// console.log("Result : ", result);

function loginUserMessage(username='sachin'){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("sachin"))

console.log(loginUserMessage())//return undfined

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"sachin",
    prices:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is  ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,600,300]

function returnSecondVal(getArray){
    return getArray[2];
}
console.log(returnSecondVal(myNewArray));



