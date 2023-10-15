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
    constructor(questionID, question, answersArray, correctAnswer
    // public option1: string,
    // public option2: string,
    // public option3: string,
    // public option4: string
    ) {
        this.questionID = questionID;
        this.question = question;
        this.answersArray = answersArray;
        this.correctAnswer = correctAnswer;
    }
}
// class answers {
//     constructor(
//         public option1: string,
//         public option2: string,
//         public option3: string,
//         public option4: string
//     ) { }
// }
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
        // option1,
        // option2,
        // option3,
        // option4,
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
    // if (radio1.checked == true) {
    //     console.log('radio1');
    //     correctAnswer = 1;
    // } else if (radio2.checked == true) {
    //     console.log('radio2');
    //     correctAnswer = 2;
    // }
    // else if (radio3.checked == true) {
    //     console.log('radio3');
    //     correctAnswer = 3;
    // }
    // else if (radio4.checked == true) {
    //     console.log('radio4');
    //     correctAnswer = 4;
    // }
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
    for (let i = 0; i < MyTable.rows.length; i++) {
        MyTable.rows[i].onclick = function () {
            const row = this;
            let getIDstring = row.cells[0].innerHTML;
            getID = parseFloat(getIDstring);
            const findID = questionsEasy.findIndex((x) => x.questionID === getID);
            // console.log(getID);
            if (questionsEasy[getID].correctAnswer == 0 || questionsMedium[getID].correctAnswer == 0 || questionsHard[getID].correctAnswer == 0) {
                radio1.checked = true;
                console.log(getID);
            }
            else if (questionsEasy[getID].correctAnswer == 1 || questionsMedium[getID].correctAnswer == 1 || questionsHard[getID].correctAnswer == 1) {
                radio2.checked = true;
            }
            else if (questionsEasy[getID].correctAnswer == 2 || questionsMedium[getID].correctAnswer == 2 || questionsHard[getID].correctAnswer == 2) {
                radio3.checked = true;
            }
            else if (questionsEasy[getID].correctAnswer == 3 || questionsMedium[getID].correctAnswer == 3 || questionsHard[getID].correctAnswer == 3) {
                radio4.checked = true;
            }
            if (findID) {
                // console.log('BINGO');
                // console.log(getID);
                // questionsEasy[findID].option1 = (document.querySelector('.question') as HTMLTextAreaElement).value
            }
            else {
                // console.log('nono');
            }
            document.querySelector('.question').value = row.cells[1].innerHTML;
            document.querySelector('.option1').value = row.cells[2].innerHTML;
            document.querySelector('.option2').value = row.cells[3].innerHTML;
            document.querySelector('.option3').value = row.cells[4].innerHTML;
            document.querySelector('.option4').value = row.cells[5].innerHTML;
            document.querySelector('.edit');
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
    let selectedValue = SelectLevel.value;
    if (selectedValue == 'Easy') {
        const IDtoUpdate = questionsEasy.findIndex((x) => x.questionID == getID);
        console.log('EasyToUpdate');
        questionsEasy[IDtoUpdate].question = document.querySelector('.question').value;
        questionsEasy[IDtoUpdate].answersArray[0] = document.querySelector('.option1').value;
        questionsEasy[IDtoUpdate].answersArray[1] = document.querySelector('.option2').value;
        questionsEasy[IDtoUpdate].answersArray[2] = document.querySelector('.option3').value;
        questionsEasy[IDtoUpdate].answersArray[3] = document.querySelector('.option4').value;
        localStorage.setItem('questionsEasy', JSON.stringify(questionsEasy));
    }
    else if (selectedValue == 'Medium') {
        console.log('MediumToUpdate');
        // } else if (selectedValue == 'Hard' && IDtoUpdate) {
        //     questionsHard[getID].question = (document.querySelector('.question') as HTMLTextAreaElement).value;
        //     questionsHard[getID].option1 = (document.querySelector('.option1') as HTMLTextAreaElement).value;
        //     questionsHard[getID].option2 = (document.querySelector('.option2') as HTMLTextAreaElement).value;
        //     questionsHard[getID].option3 = (document.querySelector('.option3') as HTMLTextAreaElement).value;
        //     questionsHard[getID].option4 = (document.querySelector('.option4') as HTMLTextAreaElement).value;
        // localStorage.setItem("questionsHard", HardStorage);
        // localStorage.setItem('questionsHard', JSON.stringify(questionsHard));
        console.log('HardToUpdate');
        // localStorage.setItem("questionsHard", HardStorage);
    }
    canceltbtn.style.display = "none";
    updatebtn.style.display = "none";
    savebtn.style.display = "inline-block";
}
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
let EasyStorage = JSON.stringify(questionsEasy);
let MediumStorage = JSON.stringify(questionsMedium);
let HardStorage = JSON.stringify(questionsHard);
