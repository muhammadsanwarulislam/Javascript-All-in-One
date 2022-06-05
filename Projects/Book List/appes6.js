class Book {
    constructor(title, author, isbn) {
        this.title      = title
        this.author     = author
        this.isbn       = isbn
    }
}

class UI {
    addBookList(book) {
        const list = document.getElementById('book-list')
        //Create element
        const row = document.createElement('tr')
        //Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `
        list.appendChild(row)
    }

    showAlert(message, className) {
        //Create Div
        const div = document.createElement('div')
        //Add class
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        //Get parent 
        const container = document.querySelector('.container')
        //Get form
        const form = document.querySelector('#book-form')
        container.insertBefore(div,form)

        //Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000)
    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove()
        }
    }

    clearFields() {
        document.getElementById('title').value  = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value   = ''
    }
}

//Event listeners for add book
document.getElementById('book-form').addEventListener('submit',function(e){
    //Get form values
    const title     = document.getElementById('title').value,
           author   = document.getElementById('author').value,
           isbn     = document.getElementById('isbn').value

    //Instantiate Book
    const book = new Book(title, author, isbn)
    //Instantiate Book
    const ui = new UI()
    if(title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error')
    }else {
        //Add book to list
        ui.addBookList(book)
        //Show success alert
        ui.showAlert('Created successfully done','success')
        //Clear field value
        ui.clearFields()
    }

    e.preventDefault()
})

//Event listner for delete
document.getElementById('book-list').addEventListener('click', function(e) {
    //Instantiate Book
    const ui = new UI()
    //Delete book
    ui.deleteBook(e.target)
    ui.showAlert('Created successfully done','success')
    e.preventDefault()
})