console.log("2">1)
console.log("02">1)

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
//This difference arises because relational operators convert the operands to numbers,
//  whereas equality with null only matches null or undefined and avoids coercion to number



console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined>=0)//false
//but in undefined every thing will be false

//===strict equality operator
//==loose equality operator

// The === operator in JavaScript is the strict equality operator. It compares two values 
// for equality, but unlike the loose equality operator ==, it does not perform type conversion. 
// This means that for === to return true, both the value and the type of the operands 
// must be exactly the same.else false