class Book {
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

// let editbtn = document.querySelector('.edit') as HTMLButtonElement;
// editbtn.addEventListener('click', editBook);

// editbtn.setAttribute('type', 'button');
// editbtn.textContent = 'עריכה';


let Books: Book[] = [];

let MyLibrary = document.querySelector('#MyLibrary') as HTMLTableElement;

function addBook() {
    let title = document.querySelector('.title') as HTMLInputElement;
    let titleVal = title?.value;
    let author = document.querySelector('.author') as HTMLInputElement;
    let authorVal = author?.value;
    let genre = document.querySelector('.genre') as HTMLInputElement;
    let genreVal = genre?.value;
    let date = document.querySelector('.date') as HTMLInputElement;
    let dateVal = date?.value;
    let imgUrl = document.querySelector('.imgUrl') as HTMLInputElement;
    let imgUrlVal = imgUrl?.value;

    let img = document.createElement('img') as HTMLImageElement;
    img.src = `${imgUrlVal}`;
    img.style.height = '100px';
    img.style.width = '80px';

    let checkbox = document.createElement('input') as HTMLInputElement;
    checkbox.setAttribute('type', 'checkbox');
    
    let editbtn = document.createElement('button') as HTMLButtonElement;
    // editbtn.setAttribute('type', 'button');
    editbtn.setAttribute('class','edit');
    editbtn.textContent = 'עריכה';



    let newBook: Book = {
        title: titleVal,
        author: authorVal,
        genre: genreVal,
        date: dateVal,
        imgUrl: imgUrlVal,
    };

    Books.push(newBook)

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


editbtn.addEventListener('click', () =>{
    let editbtns = MyLibrary.querySelectorAll('.edit') as NodeListOf<HTMLButtonElement>;  
    for (let i = 0; i <= editbtns.length; i++) {
        editbtns[i].onclick = function(){
            console.log(i);
            
        }
    }
    
})

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
            }
        }
    }
}

// function editBook(){
//     let editbuttons = MyLibrary.querySelectorAll('button[class="button"]') as NodeListOf<HTMLButtonElement>;  
//     console.log(editbuttons.length);
//     console.log('465');
    
//         }

