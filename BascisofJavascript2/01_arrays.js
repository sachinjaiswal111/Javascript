// array
// arrat are resizeable in javascript and can be mixed datatype //copy dong shallow copy
// shallow copy= A shallow coppy of an object shares the same refference point
// deep copy=not sharing same refference point
const myArr=[0,1,2,3,4,5];

const myHeros=["saktiman","naagraj"];
// console.log(myArr[0]);
// console.log(myArr.length);


// Array method

// myArr.push(6);// add element at end;
// myArr.push(7);
// myArr.pop();// remove last element;

// myArr.unshift(9);// add element at first
// myArr.shift();// delete element from first

// console.log(myArr.includes(9)); // return true is element is present
// console.log(myArr.indexOf(19));// return index of element if exist else -1;

// const newArr=myArr.join() // return string 

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);

console.log("B ",myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("c ",myArr);

// slice not change the array but splice change the array including last index






