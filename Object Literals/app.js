//Object
const person = {
    name: "muhammad",
    age: 20,
    address: {
        city: "dhaka",
        postcode: 6511
    },
    hobby: ["music","sports"],
    getAge: function(){
        return 2012 - this.age
    }
}

let val
//Get Specific value
val = person.name
val = person.hobby[0]
val = person.address.city
val = person.getAge()
//Output
// console.log(val)

//Define array
personOne = [
    {
        name: "muhammad",
        age: 29
    }
]

for(let i=0; i<personOne.length; i++){
    console.log(personOne[i].name)
}
