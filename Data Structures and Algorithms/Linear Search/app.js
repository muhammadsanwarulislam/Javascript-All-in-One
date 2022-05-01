function linearSearch(array, n){
    for(var i=0; i < array.length; i++){
        if(array[i]==n){
            return true
        }
    }
    return false
}

console.log(linearSearch([1,2,4,7,8],4))




