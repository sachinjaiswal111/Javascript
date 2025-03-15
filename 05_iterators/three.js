// // for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for(const nums of arr){
//     console.log(nums);
// }

// const greetings ="Hello world!"

// for (const char of greetings) {
//     console.log(`Each char is ${char}`)
// }

// // maps

const map = new Map()
map.set('IN','India')
map.set('USA', 'United States of America')
map.set('FR','France')
map.set('IN','India')// dupicate not allowed

console.log(map);

for(const [key,value]of map){
    console.log(key,':- ',value);
}

for(const key of map){
    console.log(key);
}
// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key,value] of myObject) { // not iterable

    
// }

