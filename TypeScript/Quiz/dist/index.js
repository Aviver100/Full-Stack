"use strict";
let easybutton = document.querySelector('.easy');
let mediumbutton = document.querySelector('.medium');
let hardbutton = document.querySelector('.hard');
easybutton.addEventListener('click', () => {
    easybutton.style.backgroundColor = 'red';
    mediumbutton.style.backgroundColor = '#4070F4';
    hardbutton.style.backgroundColor = '#4070F4';
});
mediumbutton.addEventListener('click', () => {
    easybutton.style.backgroundColor = '#4070F4';
    mediumbutton.style.backgroundColor = 'red';
    hardbutton.style.backgroundColor = '#4070F4';
});
hardbutton.addEventListener('click', () => {
    easybutton.style.backgroundColor = '#4070F4';
    mediumbutton.style.backgroundColor = '#4070F4';
    hardbutton.style.backgroundColor = 'red';
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
let questionID = +1;
let questionsEasy = [];
let questionsMedium = [];
let questionsHard = [];
function AddQuestion(event) {
    event.preventDefault();
    let question = document.querySelector('.question');
    let questionVal = question.value;
    let option1 = document.querySelector('.option1');
    let option1Val = option1 === null || option1 === void 0 ? void 0 : option1.value;
    let option2 = document.querySelector('.option2');
    let option2Val = option2 === null || option2 === void 0 ? void 0 : option2.value;
    let option3 = document.querySelector('.option3');
    let option3Val = option3 === null || option3 === void 0 ? void 0 : option3.value;
    let option4 = document.querySelector('.option4');
    let option4Val = option4 === null || option4 === void 0 ? void 0 : option4.value;
    let newQuestion = {
        questionID: questionID + 1,
        questionVal: question,
        option1Val: option1,
        option2Val: option2,
        option3Val: option3,
        option4Val: option4,
    };
    localStorage.setItem("questionsEasy", JSON.stringify(questionsEasy));
    console.log(newQuestion);
}
const myform = document.querySelector('.Myform');
myform.addEventListener('submit', AddQuestion);
