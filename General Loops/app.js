//For Loop
// for(let i=0; i < 5; i++){

//     if(i ===2){
//         console.log("This is number : " + i)
//         // continue                         //Guess what will be the output if you use continue or break
//         // break
//     }
//     console.log(i)
// }

//While
// let i=0
// while(i < 5){
//     console.log(i)
//     i++
// }

//Do while

// let i = 0

// do {
//     console.log(i)
//     i++
// }
// while(i < 10)

// const val = ["orange", "apple", "banana"]
// for(let i=0; i < val.length; i++){
//     console.log(val[i])
// }

// for (const key in val) {
//     console.log(val[key])
// }

//MAP
const users = [
    {id : 1, name : 'muhammad'},
    {id : 1, name : 'sanwarul'}
]

const ids = users.map(function(user){
    return user.id
})

console.log(ids)