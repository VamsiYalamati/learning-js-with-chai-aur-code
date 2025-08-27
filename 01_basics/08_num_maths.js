const score=400
console.log(score);

const balance=new Number(500)
console.log( balance)

//difference in the first you will get the number 
//but in the secound the output is number:balance
console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(balance.toString().substring(0,2))

const otherNumber=123.834
console.log(otherNumber.toPrecision(3))//hover on the function to see the return type

let hunderds=1000000
console.log(hunderds.toLocaleString())//us system
console.log(hunderds.toLocaleString('en-IN'))//indian system

// +++++++++++maths++++++++++++++
console.log(Math);//m capital bro
console.log(Math.abs(-4))
console.log(Math.round(4.234))
console.log(Math.ceil(4.234))
console.log(Math.floor(4.234))

console.log(Math.min(4.234,23,2135,2135,235345,22356346))

console.log(Math.random())//value between 0 to 1
console.log(Math.random()*10+1)//values >=1 <=10
console.log((Math.random()*10)+1)//more readability

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min))//vimp to get this idea








