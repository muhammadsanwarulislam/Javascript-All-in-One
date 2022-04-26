let val;

//string to number
val = Number('6');
val = Number(true);
val = Number(false);
val = Number("hello");

//number to string
val = String(10);
// val = (100).toString();
val = String(true);
val = String(new Date());

//output
console.log(val);
console.log(typeof val);
console.log(val.length);     //lenght will be count only string 
// console.log(val.toFixed());

const value1 = (10).toString();
const value2 = 20;
const sum = value1+value2

console.log(sum);
console.log(typeof sum);