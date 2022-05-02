function swap(array, index1, index2){
    var tmp = array[index1]
    array[index1] = array[index2]
    array[index2] = tmp
    console.log(array)
}

swap([1,2,3,4,5,6],2,3)

//output
// [1,2,4,3,5,6]



