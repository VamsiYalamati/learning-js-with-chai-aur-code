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
