//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sachin"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website); // this give error because this unable to acess func two scope

    two();
}
// one();

if(true){
    const username="sachin"
    if(username==="sachin"){
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website); this give error because of scope it not reach website


}
// console.log(username); error



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

addone(5);// this not give error 
function addone(num){
    return num+1;
}

// addTwo(5);// this give error 
const addTwo=function(num){
    return num+2;
}
