"use strict";
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let genre = document.querySelector('.genre');
let date = document.querySelector('.date');
let imgUrl = document.querySelector('.imgUrl');
let img = document.createElement('img');
class Book {
    constructor(title, author, genre, date, imgUrl) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.date = date;
        this.imgUrl = imgUrl;
    }
}
let save = document.querySelector('.save');
save.addEventListener('click', () => {
    addBook();
});
let nobooks = document.querySelector('#nobooks');
let Delete = document.querySelector('#delete');
Delete.addEventListener('click', deleteBook);
let Books = [];
let MyLibrary = document.querySelector('#MyLibrary');
function addBook() {
    let titleVal = title === null || title === void 0 ? void 0 : title.value;
    let authorVal = author === null || author === void 0 ? void 0 : author.value;
    let genreVal = genre === null || genre === void 0 ? void 0 : genre.value;
    let dateVal = date === null || date === void 0 ? void 0 : date.value;
    let imgUrlVal = imgUrl === null || imgUrl === void 0 ? void 0 : imgUrl.value;
    img.src = `${imgUrlVal}`;
    img.style.height = '100px';
    img.style.width = '80px';
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    let editbtn = document.createElement('button');
    editbtn.setAttribute('class', 'edit');
    editbtn.textContent = 'עריכה';
    editbtn.addEventListener('click', editBook);
    let cancelbtn = document.createElement('button');
    cancelbtn.setAttribute('class', 'cancel');
    cancelbtn.textContent = 'ביטול';
    cancelbtn.addEventListener('click', canceledit);
    cancelbtn.style.display = 'none';
    let newBook = {
        title: titleVal,
        author: authorVal,
        genre: genreVal,
        date: dateVal,
        imgUrl: imgUrlVal,
    };
    if (titleVal != '') {
        Books.push(newBook);
    }
    title.value = '',
        author.value = '',
        genre.value = '',
        date.value = '',
        imgUrl.value = '';
    if (titleVal != '') {
        let newrow = MyLibrary.insertRow(-1);
        let col7 = newrow.insertCell(0);
        let col1 = newrow.insertCell(0);
        let col2 = newrow.insertCell(0);
        let col3 = newrow.insertCell(0);
        let col4 = newrow.insertCell(0);
        let col5 = newrow.insertCell(0);
        let col6 = newrow.insertCell(0);
        col1.appendChild(checkbox);
        col7.appendChild(editbtn);
        col7.appendChild(cancelbtn);
        col3.innerText = `${dateVal}`;
        col4.innerText = `${genreVal}`;
        col5.innerText = `${authorVal}`;
        col6.innerText = `${titleVal}`;
        if (imgUrlVal != '') {
            col2.appendChild(img);
        }
    }
    if (Books.length >= 0) {
        nobooks.style.display = "none";
    }
    let mystorage = JSON.stringify(Books);
    localStorage.setItem("key", mystorage);
    let mystorageses = JSON.stringify(Books);
    sessionStorage.setItem("key", mystorageses);
}
;
function deleteBook() {
    let checkboxs = MyLibrary.querySelectorAll('input[type="checkbox"]');
    if (Books.length == 0) {
        nobooks.style.display = "block";
    }
    else {
        for (let i = checkboxs.length - 1; i >= 0; i--) {
            if (checkboxs[i].checked) {
                Books.splice(i, 1);
                MyLibrary.deleteRow(i + 1);
                let mystorage = JSON.stringify(Books);
                localStorage.setItem("key", mystorage);
            }
        }
    }
}
function editBook(event) {
    let editbuttons = MyLibrary.querySelectorAll('button[class="edit"]');
    for (let i = 0; i < editbuttons.length; i++) {
        title.value = `${Books[i].title}`;
        author.value = `${Books[i].author}`;
        genre.value = `${Books[i].genre}`;
        date.value = `${Books[i].date}`;
        imgUrl.value = `${Books[i].imgUrl}`;
        let cancelbtn = document.querySelector('.cancel');
        let editbtn = document.querySelector('.edit');
        cancelbtn.style.display = 'inline-block';
        if (cancelbtn.style.display = 'inline-block') {
            editbtn.style.display = 'none';
        }
    }
}
function canceledit() {
    let cancelbuttons = MyLibrary.querySelectorAll('button[class="edit"]');
    for (let i = 0; i < cancelbuttons.length; i++) {
        title.value = '';
        author.value = '';
        genre.value = '';
        date.value = '';
        imgUrl.value = '';
        let cancelbtn = document.querySelector('.cancel');
        let editbtn = document.querySelector('.edit');
        cancelbtn.style.display = 'none';
        editbtn.style.display = 'inline-block';
    }
}
function loadata() {
    let data = localStorage.getItem("key");
    if (data) {
        Books = JSON.parse(data);
        let MyLibrary = document.querySelector('#MyLibrary');
        Books.forEach((book) => {
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            let editbtn = document.createElement('button');
            editbtn.setAttribute('class', 'edit');
            editbtn.textContent = 'עריכה';
            editbtn.addEventListener('click', editBook);
            let cancelbtn = document.createElement('button');
            cancelbtn.setAttribute('class', 'cancel');
            cancelbtn.textContent = 'ביטול';
            cancelbtn.addEventListener('click', canceledit);
            cancelbtn.style.display = 'none';
            const newrow = MyLibrary.insertRow(-1);
            let col7 = newrow.insertCell(0);
            let col1 = newrow.insertCell(0);
            let col2 = newrow.insertCell(0);
            let col3 = newrow.insertCell(0);
            let col4 = newrow.insertCell(0);
            let col5 = newrow.insertCell(0);
            let col6 = newrow.insertCell(0);
            col1.appendChild(checkbox);
            col7.appendChild(editbtn);
            col7.appendChild(cancelbtn);
            col3.innerText = book.date;
            col4.innerText = book.genre;
            col5.innerText = book.author;
            col6.innerText = book.title;
        });
    }
}
loadata();
