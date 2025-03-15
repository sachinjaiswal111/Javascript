// const myNums=[1,2,3]


// // const total= myNums.reduce(function (acc,currval){

// //     console.log(`acc: ${acc} and currval: ${currval}`);
// //     return acc+ currval
// // },0)  

// // const total = myNums.reduce((accu,currval) => (accu+currval),0)

// console.log(total)

const shoppingCart =[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:3999
    },
    {
        itemName:"Ai course",
        price:9999
    },
    {
        itemName:"App course",
        price:12999
    },
    {
        itemName:"Data Science",
        price:8999
    },
    {
        itemName:"devops",
        price:999
    }
]

let toatal = shoppingCart.reduce((acc,item) => acc+item.price ,0)
console.log(toatal);

