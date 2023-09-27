"use strict";
let SelectLevel = document.querySelector('#level');
let MyTable = document.querySelector('.MyTable');
let alertselect = document.querySelector('.pleaseSelect');
SelectLevel.addEventListener('change', () => {
    let selectedValue = SelectLevel.value;
    if (selectedValue == 'easy') {
        console.log('easy');
    }
    else if (selectedValue == 'medium') {
        console.log('medium');
    }
    else if (selectedValue == 'hard') {
        console.log('hard');
    }
});
class Question {
    constructor(questionID, question, option1, option2, option3, option4) {
        this.questionID = questionID;
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }
}
let questionID = 1;
let questionsEasy = [];
let questionsMedium = [];
let questionsHard = [];
function AddQuestion(event) {
    event.preventDefault();
    let question = document.querySelector('.question').value;
    let option1 = document.querySelector('.option1').value;
    let option2 = document.querySelector('.option2').value;
    let option3 = document.querySelector('.option3').value;
    let option4 = document.querySelector('.option4').value;
    let newQuestion = {
        questionID: questionID++,
        question,
        option1,
        option2,
        option3,
        option4,
    };
    let selectedValue = SelectLevel.value;
    if (selectedValue == 'easy') {
        console.log('easy');
        questionsEasy.push(newQuestion);
        localStorage.setItem("questionsEasy", JSON.stringify(questionsEasy));
    }
    else if (selectedValue == 'medium') {
        console.log('medium');
        questionsMedium.push(newQuestion);
        localStorage.setItem("questionsMedium", JSON.stringify(questionsMedium));
    }
    else if (selectedValue == 'hard') {
        console.log('hard');
        questionsHard.push(newQuestion);
        localStorage.setItem("questionsHard", JSON.stringify(questionsHard));
    }
    else if (selectedValue == 'select') {
        console.log('nono');
        // alertselect.style.display = 'block';
    }
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    let editbtn = document.createElement('button');
    editbtn.setAttribute('class', 'edit');
    editbtn.textContent = 'Edit';
    let cancelbtn = document.createElement('button');
    cancelbtn.setAttribute('class', 'cancel');
    cancelbtn.textContent = 'Cancel';
    let newrow = MyTable.insertRow(-1);
    let col1 = newrow.insertCell(0);
    let col2 = newrow.insertCell(0);
    let col3 = newrow.insertCell(0);
    let col4 = newrow.insertCell(0);
    let col5 = newrow.insertCell(0);
    let col6 = newrow.insertCell(0);
    let col7 = newrow.insertCell(0);
    col1.appendChild(checkbox);
    col1.appendChild(editbtn);
    col1.appendChild(cancelbtn);
    col2.innerText = `${option4}`;
    col3.innerText = `${option3}`;
    col4.innerText = `${option2}`;
    col5.innerText = `${option1}`;
    col6.innerText = `${question}`;
    col7.innerText = `${questionID}`;
    console.log(newQuestion);
}
const myform = document.querySelector('.Myform');
myform.addEventListener('submit', AddQuestion);
let editbtn = document.querySelector('.edit');
let canceltbtn = document.querySelector('.cancel');
function editQuestion() {
    let cancelbtn = document.querySelector('.cancel');
    let editbtn = document.querySelector('.edit');
    cancelbtn.style.display = 'inline-block';
    if (cancelbtn.style.display = 'inline-block') {
        editbtn.style.display = 'none';
    }
}
