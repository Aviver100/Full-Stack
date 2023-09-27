let title = document.querySelector('.title') as HTMLInputElement;
let author = document.querySelector('.author') as HTMLInputElement;
let genre = document.querySelector('.genre') as HTMLInputElement;
let date = document.querySelector('.date') as HTMLInputElement;
let imgUrl = document.querySelector('.imgUrl') as HTMLInputElement;
let img = document.createElement('img') as HTMLImageElement;

class Book {
    static date: string;
    constructor(public title: string, public author: string, public genre: string, public date: string, public imgUrl?: string) {
    }
}

let save = document.querySelector('.save') as HTMLButtonElement;
save.addEventListener('click', () => {
    addBook();
});

let nobooks = document.querySelector('#nobooks') as HTMLElement;
let Delete = document.querySelector('#delete') as HTMLElement;
Delete.addEventListener('click', deleteBook)

let Books: Book[] = [];

let MyLibrary = document.querySelector('#MyLibrary') as HTMLTableElement;

function addBook() {
    let titleVal = title?.value;
    let authorVal = author?.value;
    let genreVal = genre?.value;
    let dateVal = date?.value;
    let imgUrlVal = imgUrl?.value;

    img.src = `${imgUrlVal}`;
    img.style.height = '100px';
    img.style.width = '80px';

    let checkbox = document.createElement('input') as HTMLInputElement;
    checkbox.setAttribute('type', 'checkbox');

    let editbtn = document.createElement('button') as HTMLButtonElement;
    editbtn.setAttribute('class', 'edit');
    editbtn.textContent = 'עריכה';
    editbtn.addEventListener('click', editBook);

    let cancelbtn = document.createElement('button') as HTMLButtonElement;
    cancelbtn.setAttribute('class', 'cancel');
    cancelbtn.textContent = 'ביטול';
    cancelbtn.addEventListener('click', canceledit);
    cancelbtn.style.display = 'none';

    let newBook: Book = {
        title: titleVal,
        author: authorVal,
        genre: genreVal,
        date: dateVal,
        imgUrl: imgUrlVal,
    };
    if (titleVal != '') {
        Books.push(newBook)
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

};

function deleteBook() {
    let checkboxs = MyLibrary.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
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

function editBook(event: MouseEvent) {
    let editbuttons = MyLibrary.querySelectorAll('button[class="edit"]') as NodeListOf<HTMLButtonElement>;
    
    for (let i = 0; i < editbuttons.length; i++) {

        title.value = `${Books[i].title}`;
        author.value = `${Books[i].author}`;
        genre.value = `${Books[i].genre}`;
        date.value = `${Books[i].date}`;
        imgUrl.value = `${Books[i].imgUrl}`;

        let cancelbtn = document.querySelector('.cancel') as HTMLButtonElement;
        let editbtn = document.querySelector('.edit') as HTMLButtonElement;

        cancelbtn.style.display = 'inline-block';

        if (cancelbtn.style.display = 'inline-block') {
            editbtn.style.display = 'none';
        }
    }
}



function canceledit() {
    let cancelbuttons = MyLibrary.querySelectorAll('button[class="edit"]') as NodeListOf<HTMLButtonElement>;
    for (let i = 0; i < cancelbuttons.length; i++) {
        title.value = '';
        author.value = '';
        genre.value = '';
        date.value = '';
        imgUrl.value = '';
        let cancelbtn = document.querySelector('.cancel') as HTMLButtonElement;
        let editbtn = document.querySelector('.edit') as HTMLButtonElement;
        cancelbtn.style.display = 'none';
        editbtn.style.display = 'inline-block';
    }
}

function loadata() {
    let data = localStorage.getItem("key");

    if (data) {
        Books = JSON.parse(data);
        let MyLibrary = document.querySelector('#MyLibrary') as HTMLTableElement;
        Books.forEach((book) => {
            let checkbox = document.createElement('input') as HTMLInputElement;
            checkbox.setAttribute('type', 'checkbox');

            let editbtn = document.createElement('button') as HTMLButtonElement;
            editbtn.setAttribute('class', 'edit');
            editbtn.textContent = 'עריכה';
            editbtn.addEventListener('click', editBook);

            let cancelbtn = document.createElement('button') as HTMLButtonElement;
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
        })
    }
}
loadata();

