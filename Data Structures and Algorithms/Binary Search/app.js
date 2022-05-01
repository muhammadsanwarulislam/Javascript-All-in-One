function binarySearch(array, n){
    var lowIndex = 0, highIndex = array.length - 1

    while(lowIndex <= highIndex){
        var middleIndex = Math.floor((lowIndex + highIndex)/2)
        
        if(array[middleIndex] == n){
            return middleIndex
        }else if(n > array[middleIndex]){
            lowIndex = middleIndex
        }else{
            highIndex = middleIndex
        }
    }
    return -1
    
}

console.log(binarySearch([1,2,3,4,5,6,8,11,15,16],15))


