"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var addBookForm = document.getElementById('addBookForm');
var searchBookForm = document.getElementById('searchBookForm');
var bookList = document.getElementById('bookList');
var searchResults = document.getElementById('searchResults');
var saveTableBtn = document.getElementById('saveTableBtn');
addBookForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var isbnInput = document.getElementById('isbn');
  var isbn = isbnInput.value.trim();
  isbnInput.value = '';
  fetchBookByISBN(isbn);
});
searchBookForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var searchQueryInput = document.getElementById('searchQuery');
  var searchQuery = searchQueryInput.value.trim();
  searchQueryInput.value = '';
  searchBooksByName(searchQuery);
});
saveTableBtn.addEventListener('click', function () {
  saveTableLocally();
});

function fetchBookByISBN(isbn) {
  fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:".concat(isbn)).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.totalItems > 0) {
      var book = data.items[0].volumeInfo;
      addBookToTable(book.title, book.authors ? book.authors.join(', ') : 'לא ידוע', isbn);
    } else {
      alert('ספר לא נמצא!');
    }
  })["catch"](function (error) {
    console.error(error);
    alert('אירעה שגיאה בעת גיבוב נתוני הספר.');
  });
}

function searchBooksByName(searchQuery) {
  fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(searchQuery)).then(function (response) {
    return response.json();
  }).then(function (data) {
    displaySearchResults(data.items);
  })["catch"](function (error) {
    console.error(error);
    alert('אירעה שגיאה בעת גיבוב תוצאות החיפוש.');
  });
}

function displaySearchResults(books) {
  searchResults.innerHTML = '';

  if (books && books.length > 0) {
    var resultsList = document.createElement('ul');
    books.forEach(function (book) {
      var title = book.volumeInfo.title || 'לא ידוע';
      var authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'לא ידוע';
      var isbn = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : '';
      var listItem = document.createElement('li');
      var addButton = document.createElement('button');
      addButton.textContent = 'הוסף לרשימת הספרים';
      addButton.addEventListener('click', function () {
        addBookToTable(title, authors, isbn);
      });
      listItem.innerHTML = "<strong>".concat(title, "</strong> \u05DE\u05D0\u05EA ").concat(authors, " (ISBN: ").concat(isbn, ")");
      listItem.appendChild(addButton);
      resultsList.appendChild(listItem);
    });
    searchResults.appendChild(resultsList);
  } else {
    searchResults.textContent = 'לא נמצאו תוצאות.';
  }
}

function addBookToTable(title, author, isbn) {
  var row = bookList.insertRow(-1);
  var titleCell = row.insertCell(0);
  var authorCell = row.insertCell(1);
  var isbnCell = row.insertCell(2);
  var statusCell = row.insertCell(3);
  var borrowerNameCell = row.insertCell(4);
  var borrowerPhoneCell = row.insertCell(5);
  var actionCell = row.insertCell(6);
  titleCell.textContent = title;
  authorCell.textContent = author;
  isbnCell.textContent = isbn;
  statusCell.textContent = "זמין";
  borrowerNameCell.textContent = "";
  borrowerPhoneCell.textContent = "";
  var borrowButton = document.createElement('button');
  borrowButton.textContent = statusCell.textContent === "זמין" ? "השאל" : "החזר";
  borrowButton.addEventListener('click', function () {
    if (statusCell.textContent === "זמין") {
      var borrowerName = prompt("הכנס את שם המשתמש:");
      var borrowerPhone = prompt("הכנס את מספר הטלפון של המשתמש:");

      if (borrowerName && borrowerPhone) {
        statusCell.textContent = "הושאל";
        borrowerNameCell.textContent = borrowerName;
        borrowerPhoneCell.textContent = borrowerPhone;
        borrowButton.textContent = "החזר";
      }
    } else if (statusCell.textContent === "הושאל") {
      var returnConfirmation = confirm("הספר הזה מושאל כרגע. האם ברצונך להחזירו?");

      if (returnConfirmation) {
        statusCell.textContent = "זמין";
        borrowerNameCell.textContent = "";
        borrowerPhoneCell.textContent = "";
        borrowButton.textContent = "השאל";
      }
    }
  });
  actionCell.appendChild(borrowButton);
  var filter = document.getElementById('searchInput').value.toLowerCase();

  if (title.toLowerCase().includes(filter)) {
    row.style.display = '';
  } else {
    row.style.display = 'none';
  }
}

function saveTableLocally() {
  var tableData = Array.from(bookList.rows).map(function (row) {
    var _row$cells = _slicedToArray(row.cells, 3),
        titleCell = _row$cells[0],
        authorCell = _row$cells[1],
        isbnCell = _row$cells[2];

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
  var tableData = JSON.parse(localStorage.getItem('bookTable'));

  if (tableData && tableData.length > 0) {
    tableData.forEach(function (book) {
      addBookToTable(book.title, book.author, book.isbn);
    });
  }
}

function returnBook(button) {
  var row = button.parentNode.parentNode;
  var statusCell = row.cells[3];
  var borrowerNameCell = row.cells[4];
  var borrowerPhoneCell = row.cells[5];
  var actionCell = row.cells[6];
  statusCell.textContent = "זמין";
  borrowerNameCell.textContent = "";
  borrowerPhoneCell.textContent = "";
  actionCell.innerHTML = '<button onclick="borrowBook(this)">השאל</button>';
}

function searchBooks() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toLowerCase();
  var table = document.getElementById('bookList');
  var rows = table.getElementsByTagName('tr');

  for (var i = 1; i < rows.length; i++) {
    var title = rows[i].cells[0].textContent.toLowerCase();

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
  var addManuallyForm = document.getElementById('addManuallyForm');
  addManuallyForm.style.display = 'block';
}

function addManually(event) {
  event.preventDefault(); // מנע את שליחת הטופס

  var titleInput = document.getElementById('titleInput');
  var authorInput = document.getElementById('authorInput');
  var isbnInput = document.getElementById('isbnInput');
  var title = titleInput.value;
  var author = authorInput.value;
  var isbn = isbnInput.value; // הוסף את הספר לטבלה

  addBookToTable(title, author, isbn); // אפס את שדות הטופס

  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = ''; // הסתר את טופס ההוספה הידנית

  var addManuallyForm = document.getElementById('addManuallyForm');
  addManuallyForm.style.display = 'none';
}

loadTableFromLocal();