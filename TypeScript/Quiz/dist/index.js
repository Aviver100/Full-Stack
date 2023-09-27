"use strict";
let SelectLevel = document.querySelector('#level');
let MyTable = document.querySelector('.MyTable');
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
    let newrow = MyTable.insertRow(-1);
    let col1 = newrow.insertCell(0);
    let col2 = newrow.insertCell(0);
    let col3 = newrow.insertCell(0);
    let col4 = newrow.insertCell(0);
    let col5 = newrow.insertCell(0);
    let col6 = newrow.insertCell(0);
    // col1.appendChild(checkbox);
    col1.innerText = `${option4}`;
    col2.innerText = `${option3}`;
    col3.innerText = `${option2}`;
    col4.innerText = `${option1}`;
    col5.innerText = `${question}`;
    col6.innerText = `${questionID}`;
    console.log(newQuestion);
}
const myform = document.querySelector('.Myform');
myform.addEventListener('submit', AddQuestion);
