//dates
let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())//gives only date time is avoided
console.log(myDate.toISOString())//default
console.log(myDate.toLocaleDateString())//8/27/2025
console.log(typeof myDate);//object

let myCreatedDate=new Date(2025,0,24)//jan=0
console.log(myCreatedDate.toLocaleDateString())
let myCreatedDate2=new Date(2025,0,24,5,3)
console.log(myCreatedDate2.toLocaleString())
let myCreatedDate3=new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString())


let myTimeStamp=Date.now()
console.log(myTimeStamp)//millisecounds from the 1970
console.log(myCreatedDate3.getTime())//millisecounds to this date
console.log(Math.floor(Date.now()/1000))//finds the number of secounds

let mycurrent=new Date()
console.log(mycurrent.getFullYear());
console.log(mycurrent.getMonth());

//we can customize the methods simply write the method and hover it
mycurrent.toLocaleString( 'default',{weekday= 'narrow'})








