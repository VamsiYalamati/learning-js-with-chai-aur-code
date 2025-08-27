let name="vamsi"
let age=20
// console.log(name+ age+" value"/)

console.log(`hello my name is ${name} and my age is ${age}`);//string interpolation
//which is nothing but the placeholder so that you can directly inject the variable values
//you need to back thicks not the "" if you use it the js will think it is a string
//console.log(typeof gameName);//string
const gameName=new String("vamsi")
console.log(gameName);
console.log(typeof gameName);//object

console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase())//these all are functions so donot forgot to keep()
//functions can be usedin the both of the declarations
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))
let newString=gameName.substring(0,4)//string contains char 0,1,2,3 but not 4
console.log(newString)
let anotherString=gameName.slice(-5,2)//use of negative values
console.log(anotherString)

// Both indexStart and indexEnd can be negative, which means 
// they count from the end of the string (e.g., -1 is the last character).

let newGameOne="    xyz    "
console.log(newGameOne)
console.log(newGameOne.trim())//removes the blankspace

console.log(newGameOne.trimStart())//removes the blankspace at the starting
console.log(newGameOne.trimEnd())//removes the blankspace at the ending

let url="https://vamsiyalamati%29.com"
// console.log(url.replace(['%29','-'],['v','o']));//error

console.log(url.replace('%29','-').replace('v','o'));//error

console.log(url);//prints original because primitive data type

let splitString="veduyw-skjbkjw-jhwbcjh"

console.log(splitString.split("-"));
