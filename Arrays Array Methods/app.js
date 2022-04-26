/*We will learn following concept

1.How define arrays more than one
2.Count the array using length
3.How to check array boolean (return)
4.Get single value of array
5.Insert into array
6.Find index of array
7.Add value to end
8.Add value to front
9.Take of value from end
10.Take of value from front
11.Use compare function for sorting
12.Find the number from array*/

//Define arrays
const numbers = [100,23,77,34,56]
const numbersMore = new Array(57,66,50,23)
const fruits = ['apple','banana','orange']
const mix = [33,50,true,undefined,{a:1,b:2},new Date]

let val

//Length count
// val = numbers.length
//Check if array
// val = Array.isArray(numbers)
//Get single value
// val = numbers[0]
// val = numbers[3]
//Insert into array
// numbers[2]=100
//Find index of array
// val = numbers.indexOf(77)


//MUTATING ARRAYS
//Add on to end
// val = numbers.push(21)
//Add on to front
// val = numbers.unshift(80)
//Take of from end
// val = numbers.pop()
//Take of from front
// val = numbers.shift()
//Use to "compare function" to sort
// val = numbers.sort(function(x,y){
//     return x-y
// })
//Find
function under60(num){
    return num<60
}

val = numbers.find(under60)

//Output
console.log(val)
console.log(numbers)
