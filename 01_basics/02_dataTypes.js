"use strict";//which tells that we are using the newer versionm of js
//alert(3+3) we are using the node js not browser

//console.log(3+3) console.log("vamsi")//our code will give error because of less readiability

console.log(3+3) ;console.log("vamsi")//will run because the code know the line has stopped
console.log(3+            3) //it will run because js removes the code spaces
//but this wrong practice the readability should be high

/*
the datatypes we have are
1.numbers 2=>2^53
2.BigInt
3.string=""
4.bool=true/false
5.undefined for variable whose value is not defined
6.null ->standalone value
7.symbol->unique
these are primitive datatypes*/
 
let name="vamsi"
let age =20
let logIn=true
let email;
let temperature=null;
console.log(typeof "vamsi");
console.log(typeof name);
//This tells you that VS Code recognizes name as a deprecated browser global it not an error
console.log(typeof undefined);//undefined
console.log(typeof null);//object


