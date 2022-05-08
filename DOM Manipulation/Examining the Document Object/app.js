let val
val = document
val = document.all
val = document.all[0]
val = document.head
val = document.body
val = document.domain
val = document.contentType
val = document.URL

val = document.forms
val = document.forms[0].id
val = document.forms[0].method

val = document.scripts[2].getAttribute('src')

//Get single element
// val = document.getElementById('task-title').id

//Change Style
// val = document.getElementById('task-title').style.background = '#333'
// val = document.getElementById('task-title').style.color = '#fff'

//Change content
// val = document.getElementById('task-title').textContent = 'Task of task'
// val = document.getElementById('task-title').innerText = 'Task'
// val = document.getElementById('task-title').innerHTML = '<span>hello</span>'


// val = document.querySelector('.collection').getElementsByClassName('collection-item')[0].textContent = 'Hello'

let scripts = document.scripts
let scriptArr = Array.from(scripts)

// scriptArr.forEach(function(script){
//   console.log(script.getAttribute('src'))
// })


console.log(val)