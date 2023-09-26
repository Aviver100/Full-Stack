"use strict";
let SelectLevel = document.querySelector('#level');
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
    console.log(newQuestion);
}
const myform = document.querySelector('.Myform');
myform.addEventListener('submit', AddQuestion);
