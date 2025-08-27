let id=Symbol('123');//s capital
let anotherId=Symbol('123')//s capital
console.log(id===anotherId)

const bigNumber=23462458265345723687n
//here n represent it is BigInt typeof bigint is bigint

//non-primitive (call by reference) array,object,function
// arrays
let myArray=["vamsi","dhanush","teja","azad"];
//objects
let myObj={
    userName:"vamsi",//use of colon not =
    age:12//use of colon not =
}

//function
let myFunction=function(){
    console.log("hello world")
}
console.log(typeof bigNumber)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory 2 twoTypes
// 1.heap(non-primitive)
// 2.stack9(primitive)

let myName="vamsi"
let friendName="dhanush"

console.log(myName);
console.log(friendName);
//copy generated


 let userOne={
    userName:"vamsi",//use of colon not =
    age:12//use of colon not =
 }
 let userTwo=userOne
 userTwo.userName="dhanush";
 console.log(userOne.userName);
console.log(userTwo.userName);

//pointed to the same memory

































