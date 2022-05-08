/*
    Immediately Invoked Function Expression. A function that is executed right after it is called. example 
*/

let val = (function doubleNumber(num){
    return num*2
})(10)

//Output
console.log(val)
