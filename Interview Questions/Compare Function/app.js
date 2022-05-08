/*
    The sort() method sorts an array alphabetically
    By default, the sort() function sorts values as strings.
    You can fix this by providing a compare function to sort a array with numbers
*/

//Define array
const numbers = [20,21,45,5,70,100]

let val
val = numbers.sort(function(x,y){
    return x-y
})


//Output
console.log(val)
// console.log(numbers)