// // const coding = ["js","ruby", "java","python","cpp"]

// // const values = coding.forEach((item)=>{
// //     return item;
// // })
// // console.log(values); // it always return undefined;


// // const myNums = [1,2,3,4,5,6,7,8,9,10]

// // let newNums = myNums.filter( (num)=> {
// //     return num>4
// // });
// // console.log(newNums);

// // let newNums = [];

// // myNums.forEach((num)=>{
// //     if(num>4){
// //         newNums.push(num)
// //     }
// // })

// // console.log(newNums)

// const books = [
//     { title: "The Pragmatic Programmer", genre: "Technology", publish: 1999, edition: "1st" },
//     { title: "Atomic Habits", genre: "Self-help", publish: 2018, edition: "1st" },
//     { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: "1st" },
//     { title: "Introduction to Algorithms", genre: "Computer Science", publish: 2009, edition: "3rd" },
//     { title: "Deep Work", genre: "Productivity", publish: 2016, edition: "1st" },
//     { title: "Clean Code", genre: "Technology", publish: 2008, edition: "1st" },
//     { title: "The Lean Startup", genre: "Business", publish: 2011, edition: "1st" },
//     { title: "1984", genre: "Dystopian", publish: 1949, edition: "1st" },
//     { title: "The Subtle Art of Not Giving a F*ck", genre: "Self-help", publish: 2016, edition: "1st" },
//     { title: "Rich Dad Poor Dad", genre: "Finance", publish: 1997, edition: "1st" },
//     { title: "Zero to One", genre: "Business", publish: 2014, edition: "1st" },
//     { title: "Cracking the Coding Interview", genre: "Programming", publish: 2015, edition: "6th" },
//     { title: "Sapiens", genre: "History", publish: 2011, edition: "1st" },
//     { title: "The Psychology of Money", genre: "Finance", publish: 2020, edition: "1st" },
//     { title: "Thinking, Fast and Slow", genre: "Psychology", publish: 2011, edition: "1st" },
//     { title: "The Power of Habit", genre: "Self-help", publish: 2012, edition: "1st" },
//     { title: "Design Patterns", genre: "Technology", publish: 1994, edition: "1st" },
//     { title: "You Don’t Know JS", genre: "Programming", publish: 2014, edition: "1st" },
//     { title: "The Mythical Man-Month", genre: "Technology", publish: 1975, edition: "1st" },
//     { title: "Refactoring", genre: "Technology", publish: 1999, edition: "2nd" },
//     { title: "The Art of War", genre: "Strategy", publish: -500, edition: "1st" },
//     { title: "The Innovator’s Dilemma", genre: "Business", publish: 1997, edition: "1st" },
//     { title: "The 4-Hour Workweek", genre: "Productivity", publish: 2007, edition: "1st" },
//     { title: "Eloquent JavaScript", genre: "Programming", publish: 2018, edition: "3rd" },
//     { title: "The Phoenix Project", genre: "Business", publish: 2013, edition: "1st" },
//     { title: "The DevOps Handbook", genre: "Technology", publish: 2016, edition: "1st" },
//     { title: "The Clean Coder", genre: "Technology", publish: 2011, edition: "1st" },
//     { title: "Algorithms to Live By", genre: "Science", publish: 2016, edition: "1st" },
//     { title: "A Brief History of Time", genre: "Science", publish: 1988, edition: "1st" },
//     { title: "The Code Book", genre: "Science", publish: 1999, edition: "1st" },
//     { title: "The Hard Thing About Hard Things", genre: "Business", publish: 2014, edition: "1st" },
//     { title: "Hooked", genre: "Business", publish: 2014, edition: "1st" },
//     { title: "Don’t Make Me Think", genre: "Design", publish: 2000, edition: "1st" },
//     { title: "Designing Data-Intensive Applications", genre: "Technology", publish: 2017, edition: "1st" },
//     { title: "The Effective Engineer", genre: "Technology", publish: 2015, edition: "1st" },
//     { title: "Grokking Algorithms", genre: "Technology", publish: 2016, edition: "1st" },
//     { title: "Soft Skills", genre: "Career", publish: 2014, edition: "1st" },
//     { title: "The Manager’s Path", genre: "Career", publish: 2017, edition: "1st" },
//     { title: "Code Complete", genre: "Technology", publish: 2004, edition: "2nd" },
//     { title: "The Five Dysfunctions of a Team", genre: "Business", publish: 2002, edition: "1st" },
//     { title: "Measure What Matters", genre: "Business", publish: 2018, edition: "1st" },
//     { title: "The Intelligent Investor", genre: "Finance", publish: 1949, edition: "1st" },
//     { title: "Man’s Search for Meaning", genre: "Psychology", publish: 1946, edition: "1st" },
//     { title: "Meditations", genre: "Philosophy", publish: 180, edition: "1st" },
//     { title: "Extreme Ownership", genre: "Leadership", publish: 2015, edition: "1st" },
//     { title: "The Lean Product Playbook", genre: "Business", publish: 2015, edition: "1st" },
//     { title: "The Principles of Scientific Management", genre: "Business", publish: 1911, edition: "1st" },
//     { title: "The War of Art", genre: "Self-help", publish: 2002, edition: "1st" }
//   ];
  
// // let userBooks = books.filter( (bk) => bk.genre==='History' )

// //  userBooks = books.filter( (bk) => {
// //      return bk.publish >2000 && bk.genre==='Technology'
    
// // })
// // console.log(userBooks);


// let userBooks = books.filter((bk)=>{
//   return bk.genre=='Technology';
// })

// console.log(userBooks);
