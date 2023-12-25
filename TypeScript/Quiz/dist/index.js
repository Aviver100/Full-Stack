"use strict";
let SelectLevel = document.querySelector('#level');
let MyTable = document.querySelector('.MyTable');
let alertselect = document.querySelector('.pleaseSelect');
let selectlvl = document.querySelector('.menu__pleaseSelect');
let editbtn = document.querySelector('.edit');
let canceltbtn = document.querySelector('.Cancel');
let savebtn = document.querySelector('.Save');
let updatebtn = document.querySelector('.Update');
updatebtn.addEventListener('click', UpdateQuestion);
let myform = document.querySelector('.Myform');
let correctAnswer;
let questionID = 0;
let radio1 = document.querySelector('.radio1');
let radio2 = document.querySelector('.radio2');
let radio3 = document.querySelector('.radio3');
let radio4 = document.querySelector('.radio4');
class Question {
    constructor(questionID, question, answersArray, correctAnswer) {
        this.questionID = questionID;
        this.question = question;
        this.answersArray = answersArray;
        this.correctAnswer = correctAnswer;
    }
}
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
    let answersArray = [option1, option2, option3, option4];
    // let correctAnswer:number;
    if (radio1.checked == true) {
        console.log('radio1');
        correctAnswer = 0;
        // console.log(correctAnswer);
    }
    else if (radio2.checked == true) {
        console.log('radio2');
        correctAnswer = 1;
    }
    else if (radio3.checked == true) {
        console.log('radio3');
        correctAnswer = 2;
    }
    else if (radio4.checked == true) {
        console.log('radio4');
        correctAnswer = 3;
    }
    const newQuestion = {
        questionID: questionID++,
        question,
        answersArray,
        correctAnswer
    };
    if (question != '') {
        let selectedValue = SelectLevel.value;
        if (selectedValue == 'Easy') {
            questionsEasy.push(newQuestion);
            localStorage.setItem('questionsEasy', JSON.stringify(questionsEasy));
            selectlvl.style.display = 'none';
        }
        else if (selectedValue == 'Medium') {
            questionsMedium.push(newQuestion);
            localStorage.setItem('questionsMedium', JSON.stringify(questionsMedium));
            selectlvl.style.display = 'none';
        }
        else if (selectedValue == 'Hard') {
            questionsHard.push(newQuestion);
            localStorage.setItem('questionsHard', JSON.stringify(questionsHard));
            selectlvl.style.display = 'none';
        }
        else if (selectedValue == 'Select') {
            selectlvl.style.display = 'block';
        }
        if (selectedValue != 'Select') {
            const editbtn = document.createElement('button');
            editbtn.setAttribute('class', 'edit');
            editbtn.textContent = 'Edit';
            editbtn.addEventListener('click', EditQuestion);
            const deletebtn = document.createElement('button');
            deletebtn.setAttribute('class', 'delete');
            deletebtn.textContent = 'Delete';
            deletebtn.addEventListener('click', DeleteQuestion);
            const cancelbtn = document.createElement('button');
            cancelbtn.setAttribute('class', 'cancel');
            cancelbtn.textContent = 'Cancel';
            const newrow = MyTable.insertRow(-1);
            const col1 = newrow.insertCell(0);
            const col2 = newrow.insertCell(0);
            const col3 = newrow.insertCell(0);
            const col4 = newrow.insertCell(0);
            const col5 = newrow.insertCell(0);
            const col6 = newrow.insertCell(0);
            const col7 = newrow.insertCell(0);
            const col8 = newrow.insertCell(0);
            col1.appendChild(deletebtn);
            col2.appendChild(editbtn);
            col3.innerText = `${option4}`;
            col4.innerText = `${option3}`;
            col5.innerText = `${option2}`;
            col6.innerText = `${option1}`;
            col7.innerText = `${question}`;
            col8.innerText = `${questionID}`;
        }
    }
    myform.reset();
}
function loadata(selectedValue) {
    let data;
    if (selectedValue == 'Easy') {
        let rowCount = MyTable.rows.length;
        for (let i = rowCount - 1; i > 0; i--) {
            MyTable.deleteRow(i);
        }
        data = localStorage.getItem("questionsEasy");
    }
    else if (selectedValue == 'Medium') {
        let rowCount = MyTable.rows.length;
        for (let i = rowCount - 1; i > 0; i--) {
            MyTable.deleteRow(i);
        }
        data = localStorage.getItem("questionsMedium");
    }
    else if (selectedValue == 'Hard') {
        let rowCount = MyTable.rows.length;
        for (let i = rowCount - 1; i > 0; i--) {
            MyTable.deleteRow(i);
        }
        data = localStorage.getItem("questionsHard");
    }
    if (data) {
        const questions = JSON.parse(data);
        questionsHard = JSON.parse(data);
        questions.forEach((question) => {
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            const editbtn = document.createElement('button');
            editbtn.setAttribute('class', 'edit');
            editbtn.textContent = 'Edit';
            editbtn.addEventListener('click', EditQuestion);
            const cancelbtn = document.createElement('button');
            cancelbtn.setAttribute('class', 'cancel');
            cancelbtn.textContent = 'Cancel';
            const deletebtn = document.createElement('button');
            deletebtn.setAttribute('class', 'delete');
            deletebtn.textContent = 'Delete';
            deletebtn.addEventListener('click', DeleteQuestion);
            const newrow = MyTable.insertRow(-1);
            const col1 = newrow.insertCell(0);
            const col2 = newrow.insertCell(0);
            const col3 = newrow.insertCell(0);
            const col4 = newrow.insertCell(0);
            const col5 = newrow.insertCell(0);
            const col6 = newrow.insertCell(0);
            const col7 = newrow.insertCell(0);
            const col8 = newrow.insertCell(0);
            col8.innerText = `${question.questionID}`;
            col7.innerText = `${question.question}`;
            col6.innerText = `${question.answersArray[0]}`;
            col5.innerText = `${question.answersArray[1]}`;
            col4.innerText = `${question.answersArray[2]}`;
            col3.innerText = `${question.answersArray[3]}`;
            col2.appendChild(editbtn);
            col1.appendChild(deletebtn);
        });
    }
}
let getID;
function EditQuestion() {
    let selectedValue = SelectLevel.value;
    let selectedArray;
    if (selectedValue == 'Easy') {
        selectedArray = questionsEasy;
    }
    else if (selectedValue == 'Medium') {
        selectedArray = questionsMedium;
    }
    else if (selectedValue == 'Hard') {
        selectedArray = questionsHard;
    }
    let rows = MyTable.querySelector('tr');
    for (i = 0; i > MyTable.rows.length; i++) {
        // rows[i].
    }
    // let questionToEdit = selectedArray?.find(x => x.questionID === questionID)
    console.log(selectedValue);
    canceltbtn.style.display = "inline-block";
    updatebtn.style.display = "inline-block";
    savebtn.style.display = "none";
}
function DeleteQuestion() {
    for (let i = 0; i < MyTable.rows.length; i++) {
        MyTable.rows[i].onclick = function () {
            console.log(i);
            MyTable.deleteRow(i);
            let selectedValue = SelectLevel.value;
            if (selectedValue == 'Easy') {
                questionsEasy.splice(i, 1);
                localStorage.setItem("questionsEasy", EasyStorage);
            }
            else if (selectedValue == 'Medium') {
                localStorage.setItem("questionsMedium", MediumStorage);
                questionsMedium.slice(i, 1);
            }
            else if (selectedValue == 'Hard') {
                localStorage.setItem("questionsHard", HardStorage);
                questionsHard.slice(i, 1);
            }
        };
    }
}
function UpdateQuestion() {
    for (let i = 0; i < MyTable.rows.length; i++) {
        MyTable.rows[i].onclick = function () {
        };
    }
    let selectedValue = SelectLevel.value;
    if (selectedValue == 'Easy') {
        let IDtoUpdate = questionsEasy.findIndex((x) => x.questionID == getID);
        console.log('EasyToUpdate');
        questionsEasy[IDtoUpdate].question = document.querySelector('.question').value;
        questionsEasy[IDtoUpdate].answersArray[0] = document.querySelector('.option1').value;
        questionsEasy[IDtoUpdate].answersArray[1] = document.querySelector('.option2').value;
        questionsEasy[IDtoUpdate].answersArray[2] = document.querySelector('.option3').value;
        questionsEasy[IDtoUpdate].answersArray[3] = document.querySelector('.option4').value;
        localStorage.setItem('questionsEasy', JSON.stringify(questionsEasy));
        console.log(questionsEasy[IDtoUpdate].answersArray[3]);
    }
    else if (selectedValue == 'Medium') {
        console.log('MediumToUpdate');
    }
    else if (selectedValue == 'Hard') {
        let IDtoUpdate = questionsHard.findIndex((x) => x.questionID == getID);
        questionsEasy[IDtoUpdate].question = document.querySelector('.question').value;
        questionsEasy[IDtoUpdate].answersArray[0] = document.querySelector('.option1').value;
        questionsEasy[IDtoUpdate].answersArray[1] = document.querySelector('.option2').value;
        questionsEasy[IDtoUpdate].answersArray[2] = document.querySelector('.option3').value;
        questionsEasy[IDtoUpdate].answersArray[3] = document.querySelector('.option4').value;
        localStorage.setItem('questionsHard', JSON.stringify(questionsHard));
        console.log('HardToUpdate');
        // localStorage.setItem("questionsHard", HardStorage);
    }
    canceltbtn.style.display = "none";
    updatebtn.style.display = "none";
    savebtn.style.display = "inline-block";
}
myform.addEventListener('submit', AddQuestion);
SelectLevel.addEventListener('change', () => {
    let selectedValue = SelectLevel.value;
    myform.reset();
    if (selectedValue != 'select') {
        loadata(selectedValue);
    }
});
canceltbtn.addEventListener('click', () => {
    savebtn.style.display = "inline-block";
    updatebtn.style.display = "none";
    canceltbtn.style.display = "none";
});
let EasyStorage = JSON.stringify(questionsEasy);
let MediumStorage = JSON.stringify(questionsMedium);
let HardStorage = JSON.stringify(questionsHard);
