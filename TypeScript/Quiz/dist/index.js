"use strict";
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
let questionsEasy = [];
let questionsMedium = [];
let questionsHard = [];
function AddQuestion(event) {
    event.preventDefault();
    const question = document.querySelector('.question').value;
    const option1 = document.querySelector('.option1').value;
    const option2 = document.querySelector('.option2').value;
    const option3 = document.querySelector('.option3').value;
    const option4 = document.querySelector('.option4').value;
    const newQuestion = {
        questionID: questionID++,
        question,
        option1,
        option2,
        option3,
        option4,
    };
    if (question != '') {
        const selectedValue = SelectLevel.value;
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
            col6.innerText = `${question.option1}`;
            col5.innerText = `${question.option2}`;
            col4.innerText = `${question.option3}`;
            col3.innerText = `${question.option4}`;
            col2.appendChild(editbtn);
            col1.appendChild(deletebtn);
        });
    }
}
function EditQuestion() {
    for (let i = 0; i < MyTable.rows.length; i++) {
        MyTable.rows[i].onclick = function () {
            const row = this;
            let getIDstring = row.cells[0].innerHTML;
            let getID = parseFloat(getIDstring);
            const findID = questionsEasy.findIndex((x) => x.questionID === getID);
            console.log(getID);
            if (findID) {
                console.log('BINGO');
                // console.log(getID);
                // questionsEasy[findID].option1 = (document.querySelector('.question') as HTMLTextAreaElement).value
            }
            else {
                console.log('nono');
            }
            let question = document.querySelector('.question').value = row.cells[1].innerHTML;
            let option1 = document.querySelector('.option1').value = row.cells[2].innerHTML;
            let option2 = document.querySelector('.option2').value = row.cells[3].innerHTML;
            let option3 = document.querySelector('.option3').value = row.cells[4].innerHTML;
            let option4 = document.querySelector('.option4').value = row.cells[5].innerHTML;
            let editbtn = document.querySelector('.edit');
            // MyTable.rows[i].style.backgroundColor = "green";
            // MyTable.rows[i].classList.toggle("selected");
            // let myrows = MyTable.querySelectorAll('tr');
            // myrows.forEach(x => {
            //     if (!x.classList.contains("selected")) {
            //         // x.style.backgroundColor = 'yellow';
            //     }
            //     else{
            //         x.classList.remove("selected");
            //         // x.style.backgroundColor = 'red';
            //     }
            // })
        };
    }
    canceltbtn.style.display = "inline-block";
    updatebtn.style.display = "inline-block";
    savebtn.style.display = "none";
}
const SelectLevel = document.querySelector('#level');
const MyTable = document.querySelector('.MyTable');
const alertselect = document.querySelector('.pleaseSelect');
let selectlvl = document.querySelector('.menu__pleaseSelect');
let editbtn = document.querySelector('.edit');
let canceltbtn = document.querySelector('.Cancel');
let savebtn = document.querySelector('.Save');
let updatebtn = document.querySelector('.Update');
updatebtn.addEventListener('click', UpdateQuestion);
let questionID = 0;
const myform = document.querySelector('.Myform');
myform.addEventListener('submit', AddQuestion);
SelectLevel.addEventListener('change', () => {
    const selectedValue = SelectLevel.value;
    if (selectedValue != 'select') {
        loadata(selectedValue);
    }
});
canceltbtn.addEventListener('click', () => {
    savebtn.style.display = "inline-block";
    updatebtn.style.display = "none";
    canceltbtn.style.display = "none";
});
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
let EasyStorage = JSON.stringify(questionsEasy);
let MediumStorage = JSON.stringify(questionsMedium);
let HardStorage = JSON.stringify(questionsHard);
function UpdateQuestion() {
    for (let i = 0; i < MyTable.rows.length; i++) {
        MyTable.rows[i].onclick = function () {
            const row = this;
            let getIDstring = row.cells[0].innerHTML;
            let getID = parseFloat(getIDstring);
            const findID = questionsEasy.findIndex((x) => x.questionID === getID);
            console.log(getID);
            if (findID) {
                console.log('BINGO');
            }
            else {
                console.log('nono');
            }
        };
    }
    canceltbtn.style.display = "none";
    updatebtn.style.display = "none";
    savebtn.style.display = "inline-block";
}
