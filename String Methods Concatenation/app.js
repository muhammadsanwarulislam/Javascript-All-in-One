const firstName = "muhammad"
const lastName  = "Islam"
const str = "hello my name is muhammad"
let cont 
//Concatenation
cont = firstName +' '+ lastName
//concat method for concatenation
cont = firstName.concat(' '+lastName)

//Append
cont = "sanwarul "
cont += "islam"

//Indexof
cont = firstName.indexOf('u');
cont = firstName.lastIndexOf('m');

//CharAt
cont = firstName.charAt(1);
//Get last char
cont = firstName.charAt(firstName.length-1)
//substring()
cont = firstName.substring(0,4)
//slice()
cont = firstName.slice(0,5)
cont = firstName.slice(-3)
//spilt()
cont = str.split(' ');

console.log(cont);
