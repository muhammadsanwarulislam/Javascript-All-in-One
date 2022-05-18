//Listen for submit
document.getElementById('n-series-form').addEventListener('submit',function(e){
    addUpTo()
    e.preventDefault()
})

function addUpTo(){
    //UI vars
    const number            = document.getElementById('num')
    const resultOfNSeries   = document.getElementById('total-summation')

    const principal        = parseInt(number.value)
    const summationOfN     = principal * (principal+1) /2

    resultOfNSeries.value  = summationOfN

    console.log(summationOfN)
}

//Add up to number slower
// function addUpTo(n){
//     let total = 0

//     for(let i=1; i<=n; i++)
//         total += i

//     return total
// }

// let t1 = performance.now()
// console.log(addUpTo(1000000000))
// let t2 = performance.now()
// console.log(`Time Elapsed : ${t2 - t1} seconds`)

//Add up to faster
// function addUpTo(n){
//     return n * (n +1) /2
// }

// let t1 = performance.now()
// console.log(addUpTo(1000000000))
// let t2 = performance.now()
// console.log(`Time Elapsed : ${t2 - t1} seconds`)



