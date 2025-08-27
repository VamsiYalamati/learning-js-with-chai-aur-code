let score ="33"
console.log(typeof score)
let scoreInNumber=Number(score)// n capital in number
console.log(typeof scoreInNumber)
console.log(scoreInNumber);

let score2 ="33aa"
console.log(typeof score2)
let scoreInNumber2=Number(score2)
console.log(typeof scoreInNumber2)
console.log(scoreInNumber2);//nan  not a number as a output


let score3 =null
console.log(typeof score3)
let scoreInNumber3=Number(score3)
console.log(typeof scoreInNumber3)
console.log(scoreInNumber3);//0 zero as a output

//for boolean if true then 1 for false 0
// for undefined we will get the nan  



let isBoolean=1;
let numberISBoolean=Boolean(isBoolean);
console.log(numberISBoolean);
//1->true;0->false
//""false
//"vamsi"=>true


let someNumber=33;
let stringNumber=String(someNumber);//s capital in string
console.log(typeof stringNumber)
console.log(stringNumber)