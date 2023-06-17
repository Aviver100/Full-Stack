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

                addBookToTable(book.title, book.authors ? book.authors.join(', ') : 'Unknown', isbn);
            } else {
                alert('Book not found!');
            }
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred while fetching book data.');
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
            alert('An error occurred while fetching search results.');
        });
}

function displaySearchResults(books) {
    searchResults.innerHTML = '';

    if (books && books.length > 0) {
        const resultsList = document.createElement('ul');

        books.forEach(book => {
            const title = book.volumeInfo.title || 'Unknown';
            const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown';
            const isbn = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : '';

            const listItem = document.createElement('li');
            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Book List';

            addButton.addEventListener('click', function () {
                addBookToTable(title, authors, isbn);
            });

            listItem.innerHTML = `<strong>${title}</strong> by ${authors} (ISBN: ${isbn})`;
            listItem.appendChild(addButton);
            resultsList.appendChild(listItem);
        });

        searchResults.appendChild(resultsList);
    } else {
        searchResults.textContent = 'No results found.';
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
    statusCell.textContent = "Available";
    borrowerNameCell.textContent = "";
    borrowerPhoneCell.textContent = "";

    const borrowButton = document.createElement('button');
    borrowButton.textContent = statusCell.textContent === "Available" ? "Borrow" : "Return";

    borrowButton.addEventListener('click', function () {
        if (statusCell.textContent === "Available") {
            const borrowerName = prompt("הזן את שם השואל:");
            const borrowerPhone = prompt("הזן את מספר הטלפון שלו:");

            if (borrowerName && borrowerPhone) {
                statusCell.textContent = "Borrowed";
                borrowerNameCell.textContent = borrowerName;
                borrowerPhoneCell.textContent = borrowerPhone;
                borrowButton.textContent = "Return";
            }
        } else if (statusCell.textContent === "Borrowed") {
            const returnConfirmation = confirm("This book is currently borrowed. Do you want to return it?");

            if (returnConfirmation) {
                statusCell.textContent = "Available";
                borrowerNameCell.textContent = "";
                borrowerPhoneCell.textContent = "";
                borrowButton.textContent = "Borrow";
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
    alert('Book table saved locally.');
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

    statusCell.textContent = "Available";
    borrowerNameCell.textContent = "";
    borrowerPhoneCell.textContent = "";
    actionCell.innerHTML = '<button onclick="borrowBook(this)">Borrow</button>';
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
    event.preventDefault(); // Prevent form submission
  
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const isbnInput = document.getElementById('isbnInput');
  
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;
  
    // Add the book to the table
    addBookToTable(title, author, isbn);
  
    // Reset the form inputs
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
  
    // Hide the manual add form
    const addManuallyForm = document.getElementById('addManuallyForm');
    addManuallyForm.style.display = 'none';
  }
  
  
  
loadTableFromLocal();