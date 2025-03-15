// Imndiatly INvoked Function Expressions (IIFE)
// Not need to call 
(function chai(){
    console.log(`DB CONNECTED`)
    // this named as named iife
})(); // this prentheis for call function and ; for stop excution other wise othe iife function at bottom not run

// this also works for arrow function

((name)=>{
    // this name as unanemd iffe
    console.log(`DB CONNECTED TWO ${name}`)
})('sachin')

