/*
Function can also return values, if a function does not return values the value of the function is undefined
*/

// Function without parameter,  a function which make a number square
function square(){
    let num = 2
    return num*2
}
// console.log(square())

// Function without parameter,  a function which make a number square
function square(num){
    return num*2
}
// console.log(square(4))

//Unlimited number of parameters in arrow function
const sumAllNum = (...args) => {
    let sum = 0
    for(const element of args){
        sum += element
    }
    return sum
}
// console.log(sumAllNum(1,2,3,4))

// Function expression
const multiply = function(n) {
    return n * n
  }
  
//   console.log(multiply(2)) // -> 4

/*
  Self Invoking Functions
    Self invoking functions are anonymous functions which do not need to be called to return a value.
*/
const swapNum = (function(array,index1,index2){
    let tmp = array[index1]
    array[index1] = array[index2]
    array[index2] = tmp
    return array
})([10,2,1,6,3],2,3)
console.log(swapNum)