// const nickname = "timmy";
// const firstname = "Timothy";

// if ( typeof nickname ===  "string" ){
//     console.log("Good Morning" , nickname)
// }
// else{
//     console.log("Good Morning" , firstname)
// }

const nickname = "TimmyDOG"
const firstname = "timothy"

const user = nickname || firstname //if falsey checks the next statement

console.log(`Good Morning ${user}`);