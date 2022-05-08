//Create element
const li = document.createElement('li')
//Add class
li.className = 'collection-item'
//Add attribute
li.setAttribute('title','new item')
//Add text node and append

//Create new element
const link = document.createElement('a')
//Add class
link.className = 'delete-item secondary-content'
//Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'
//Append link into li
li.appendChild(link)
li.appendChild(document.createTextNode('hello'))
//Append li as child to ul
document.querySelector('ul.collection').appendChild(li)


console.log(li)