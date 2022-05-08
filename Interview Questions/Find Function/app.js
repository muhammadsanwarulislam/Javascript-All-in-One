/*
    The sort() method sorts an array alphabetically
    By default, the sort() function sorts values as strings.
    You can fix this by providing a compare function to sort a array with numbers
*/

//Define array
const numbers = [10,20,21,45,5,70,100]

let val
//Find
function under70(number){
    return number<70
}
val = numbers.find(under70)

//Output
console.log(val)
// console.log(numbers)