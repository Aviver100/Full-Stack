const addBookForm = document.getElementById('addBookForm');
const searchBookForm = document.getElementById('searchBookForm');
const bookList = document.getElementById('bookList');
const searchResults = document.getElementById('searchResults');
const saveTableBtn = document.getElementById('saveTableBtn');

addBookForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const isbnInput = document.getElementById('isbn');
    const isbn = isbnInput.value.trim();

    isbnInput.value = '';

    fetchBookByISBN(isbn);
});

searchBookForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchQueryInput = document.getElementById('searchQuery');
    const searchQuery = searchQueryInput.value.trim();

    searchQueryInput.value = '';

    searchBooksByName(searchQuery);
});

saveTableBtn.addEventListener('click', function () {
    saveTableLocally();
});

function fetchBookByISBN(isbn) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(response => response.json())
        .then(data => {
            if (data.totalItems > 0) {
                const book = data.items[0].volumeInfo;

                addBookToTable(book.title, book.authors ? book.authors.join(', ') : 'לא ידוע', isbn);
            } else {
                alert('ספר לא נמצא!');
            }
        })
        .catch(error => {
            console.error(error);
            alert('אירעה שגיאה בעת גיבוב נתוני הספר.');
        });
}

function searchBooksByName(searchQuery) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data.items);
        })
        .catch(error => {
            console.error(error);
            alert('אירעה שגיאה בעת גיבוב תוצאות החיפוש.');
        });
}

function displaySearchResults(books) {
    searchResults.innerHTML = '';

    if (books && books.length > 0) {
        const resultsList = document.createElement('ul');

        books.forEach(book => {
            const title = book.volumeInfo.title || 'לא ידוע';
            const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'לא ידוע';
            const isbn = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : '';

            const listItem = document.createElement('li');
            const addButton = document.createElement('button');
            addButton.textContent = 'הוסף לרשימת הספרים';

            addButton.addEventListener('click', function () {
                addBookToTable(title, authors, isbn);
            });

            listItem.innerHTML = `<strong>${title}</strong> מאת ${authors} (ISBN: ${isbn})`;
            listItem.appendChild(addButton);
            resultsList.appendChild(listItem);
        });

        searchResults.appendChild(resultsList);
    } else {
        searchResults.textContent = 'לא נמצאו תוצאות.';
    }
}

function addBookToTable(title, author, isbn) {
    const row = bookList.insertRow(-1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const isbnCell = row.insertCell(2);
    const statusCell = row.insertCell(3);
    const borrowerNameCell = row.insertCell(4);
    const borrowerPhoneCell = row.insertCell(5);
    const actionCell = row.insertCell(6);

    titleCell.textContent = title;
    authorCell.textContent = author;
    isbnCell.textContent = isbn;
    statusCell.textContent = "זמין";
    borrowerNameCell.textContent = "";
    borrowerPhoneCell.textContent = "";

    const borrowButton = document.createElement('button');
    borrowButton.textContent = statusCell.textContent === "זמין" ? "השאל" : "החזר";

    borrowButton.addEventListener('click', function () {
        if (statusCell.textContent === "זמין") {
            const borrowerName = prompt("הכנס את שם המשתמש:");
            const borrowerPhone = prompt("הכנס את מספר הטלפון של המשתמש:");

            if (borrowerName && borrowerPhone) {
                statusCell.textContent = "הושאל";
                borrowerNameCell.textContent = borrowerName;
                borrowerPhoneCell.textContent = borrowerPhone;
                borrowButton.textContent = "החזר";
            }
        } else if (statusCell.textContent === "הושאל") {
            const returnConfirmation = confirm("הספר הזה מושאל כרגע. האם ברצונך להחזירו?");

            if (returnConfirmation) {
                statusCell.textContent = "זמין";
                borrowerNameCell.textContent = "";
                borrowerPhoneCell.textContent = "";
                borrowButton.textContent = "השאל";
            }
        }
    });

    actionCell.appendChild(borrowButton);

    const filter = document.getElementById('searchInput').value.toLowerCase();
    if (title.toLowerCase().includes(filter)) {
        row.style.display = '';
    } else {
        row.style.display = 'none';
    }
}


function saveTableLocally() {
    const tableData = Array.from(bookList.rows).map(row => {
        const [titleCell, authorCell, isbnCell] = row.cells;
        return {
            title: titleCell.textContent,
            author: authorCell.textContent,
            isbn: isbnCell.textContent
        };
    });

    localStorage.setItem('bookTable', JSON.stringify(tableData));
    alert('טבלת הספרים נשמרה באופן מקומי.');
}

function loadTableFromLocal() {
    const tableData = JSON.parse(localStorage.getItem('bookTable'));

    if (tableData && tableData.length > 0) {
        tableData.forEach(book => {
            addBookToTable(book.title, book.author, book.isbn);
        });
    }
}

function returnBook(button) {
    const row = button.parentNode.parentNode;
    const statusCell = row.cells[3];
    const borrowerNameCell = row.cells[4];
    const borrowerPhoneCell = row.cells[5];
    const actionCell = row.cells[6];

    statusCell.textContent = "זמין";
    borrowerNameCell.textContent = "";
    borrowerPhoneCell.textContent = "";
    actionCell.innerHTML = '<button onclick="borrowBook(this)">השאל</button>';
}

function searchBooks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('bookList');
    const rows = table.getElementsByTagName('tr');
  
    for (let i = 1; i < rows.length; i++) {
      const title = rows[i].cells[0].textContent.toLowerCase();
  
      if (title.includes(filter)) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  
    input.value = '';
  }
  

function handleSearch(event) {
    if (event.key === 'Enter') {
      searchBooks();
      event.preventDefault();
    }
  }

  function showAddManuallyForm() {
    const addManuallyForm = document.getElementById('addManuallyForm');
    addManuallyForm.style.display = 'block';
  }
  
  function addManually(event) {
    event.preventDefault(); // מנע את שליחת הטופס
  
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const isbnInput = document.getElementById('isbnInput');
  
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;
  
    // הוסף את הספר לטבלה
    addBookToTable(title, author, isbn);
  
    // אפס את שדות הטופס
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
  
    // הסתר את טופס ההוספה הידנית
    const addManuallyForm = document.getElementById('addManuallyForm');
    addManuallyForm.style.display = 'none';
  }
  
  
  
loadTableFromLocal();
