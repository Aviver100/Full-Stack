"use strict";
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
// let editbtn = document.querySelector('.edit') as HTMLButtonElement;
// editbtn.addEventListener('click', editBook);
// editbtn.setAttribute('type', 'button');
// editbtn.textContent = 'עריכה';
let Books = [];
let MyLibrary = document.querySelector('#MyLibrary');
function addBook() {
    let title = document.querySelector('.title');
    let titleVal = title === null || title === void 0 ? void 0 : title.value;
    let author = document.querySelector('.author');
    let authorVal = author === null || author === void 0 ? void 0 : author.value;
    let genre = document.querySelector('.genre');
    let genreVal = genre === null || genre === void 0 ? void 0 : genre.value;
    let date = document.querySelector('.date');
    let dateVal = date === null || date === void 0 ? void 0 : date.value;
    let imgUrl = document.querySelector('.imgUrl');
    let imgUrlVal = imgUrl === null || imgUrl === void 0 ? void 0 : imgUrl.value;
    let img = document.createElement('img');
    img.src = `${imgUrlVal}`;
    img.style.height = '100px';
    img.style.width = '80px';
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    let editbtn = document.createElement('button');
    // editbtn.setAttribute('type', 'button');
    editbtn.setAttribute('class', 'edit');
    editbtn.textContent = 'עריכה';
    let newBook = {
        title: titleVal,
        author: authorVal,
        genre: genreVal,
        date: dateVal,
        imgUrl: imgUrlVal,
    };
    Books.push(newBook);
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
        // col7.innerText = `89`;
        col7.appendChild(editbtn);
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
    editbtn.addEventListener('click', () => {
        let editbtns = MyLibrary.querySelectorAll('.edit');
        for (let i = 0; i <= editbtns.length; i++) {
            editbtns[i].onclick = function () {
                console.log(i);
            };
        }
    });
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
            }
        }
    }
}
// function editBook(){
//     let editbuttons = MyLibrary.querySelectorAll('button[class="button"]') as NodeListOf<HTMLButtonElement>;  
//     console.log(editbuttons.length);
//     console.log('465');
//         }
