const SelectLevel = document.querySelector('#level') as HTMLSelectElement;
const MyTable = document.querySelector('.MyTable') as HTMLTableElement;
const alertselect = document.querySelector('.pleaseSelect') as HTMLElement;
let selectlvl = document.querySelector('.menu__pleaseSelect') as HTMLElement;

let questionID = 0;

class Question {
    constructor(
        public questionID: number,
        public question: string,
        public option1: string,
        public option2: string,
        public option3: string,
        public option4: string
    ) { }
}

let questionsEasy: Question[] = [];
let questionsMedium: Question[] = [];
let questionsHard: Question[] = [];

function AddQuestion(event: Event) {

    // const chekduplicate = questionsEasy.some(x => x.question === question);
    event.preventDefault();

    const question = (document.querySelector('.question') as HTMLTextAreaElement).value;
    const option1 = (document.querySelector('.option1') as HTMLTextAreaElement).value;
    const option2 = (document.querySelector('.option2') as HTMLTextAreaElement).value;
    const option3 = (document.querySelector('.option3') as HTMLTextAreaElement).value;
    const option4 = (document.querySelector('.option4') as HTMLTextAreaElement).value;

    const newQuestion: Question = {
        questionID: questionID++,
        question,
        option1,
        option2,
        option3,
        option4,
    };
    // if (question != '' || !chekduplicate) {
    if (question != '') {

        const selectedValue = SelectLevel.value;

        if (selectedValue == 'Easy') {
            questionsEasy.push(newQuestion);
            localStorage.setItem('questionsEasy', JSON.stringify(questionsEasy));
            selectlvl.style.display = 'none';
        } else if (selectedValue == 'Medium') {

            questionsMedium.push(newQuestion);
            localStorage.setItem('questionsMedium', JSON.stringify(questionsMedium));
            selectlvl.style.display = 'none';
        } else if (selectedValue == 'Hard') {

            questionsHard.push(newQuestion);
            localStorage.setItem('questionsHard', JSON.stringify(questionsHard));
            selectlvl.style.display = 'none';
        } else if (selectedValue == 'Select') {

            console.log('Please select a level');
            selectlvl.style.display = 'block';
        }
        if (selectedValue != 'Select') {

            const checkbox = document.createElement('input') as HTMLInputElement;
            checkbox.setAttribute('type', 'checkbox');

            const editbtn = document.createElement('button') as HTMLButtonElement;
            editbtn.setAttribute('class', 'edit');
            editbtn.textContent = 'Edit';

            const cancelbtn = document.createElement('button') as HTMLButtonElement;
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

            col1.appendChild(checkbox);
            col1.appendChild(editbtn);
            col1.appendChild(cancelbtn);
            col2.innerText = `${option4}`;
            col3.innerText = `${option3}`;
            col4.innerText = `${option2}`;
            col5.innerText = `${option1}`;
            col6.innerText = `${question}`;
            col7.innerText = `${questionID}`;
            col8.innerText = `${questionID}`;
        }
    }
    else {
        console.log('please select level');
    }
    myform.reset();
}

const myform = document.querySelector('.Myform') as HTMLFormElement;
myform.addEventListener('submit', AddQuestion);

SelectLevel.addEventListener('change', () => {
    const selectedValue = SelectLevel.value;
    if (selectedValue != 'select') {
        loadata(selectedValue);
    }
});

function loadata(selectedValue: string) {

    let data;

    if (selectedValue == 'Easy') {
        let rowCount = MyTable.rows.length;
        for (let i = rowCount - 1; i > 0; i--) {
            MyTable.deleteRow(i);
        }
        data = localStorage.getItem("questionsEasy")
    } else if (selectedValue == 'Medium') {
        let rowCount = MyTable.rows.length;
        for (let i = rowCount - 1; i > 0; i--) {
            MyTable.deleteRow(i);
        }
        data = localStorage.getItem("questionsMedium")

    } else if (selectedValue == 'Hard') {
        let rowCount = MyTable.rows.length;
        for (let i = rowCount - 1; i > 0; i--) {
            MyTable.deleteRow(i);
        }
        data = localStorage.getItem("questionsHard")
    }

    if (data) {
        const questions = JSON.parse(data) as Question[];
        questionsHard = JSON.parse(data);
        questions.forEach((question) => {
            // Create HTML elements for loaded questions and add them to the table
            const checkbox = document.createElement('input') as HTMLInputElement;
            checkbox.setAttribute('type', 'checkbox');

            const editbtn = document.createElement('button') as HTMLButtonElement;
            editbtn.setAttribute('class', 'edit');
            editbtn.textContent = 'Edit';
            editbtn.addEventListener('click', EditQuestion);


            const cancelbtn = document.createElement('button') as HTMLButtonElement;
            cancelbtn.setAttribute('class', 'cancel');
            cancelbtn.textContent = 'Cancel';

            const deletebtn = document.createElement('button') as HTMLButtonElement;
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
            col1.appendChild(checkbox);
            col2.appendChild(editbtn);
            col2.appendChild(deletebtn);
            col2.appendChild(cancelbtn);
            // col1.innerText = `${question.questionID}`;
        });
    }
}
let editbtn = document.querySelector('.edit') as HTMLButtonElement;
let canceltbtn = document.querySelector('.cancel') as HTMLButtonElement;


// editbtn.addEventListener('click', log);

function EditQuestion() {
    for (let i = 0; i < MyTable.rows.length; i++) {
        MyTable.rows[i].onclick = function () {
            console.log(i);
            const row = this as HTMLTableRowElement;
            let question = (document.querySelector('.question') as HTMLTextAreaElement).value = row.cells[1].innerHTML;
            let option1 = (document.querySelector('.option1') as HTMLTextAreaElement).value = row.cells[2].innerHTML;
            let option2 = (document.querySelector('.option2') as HTMLTextAreaElement).value = row.cells[3].innerHTML;
            let option3 = (document.querySelector('.option3') as HTMLTextAreaElement).value = row.cells[4].innerHTML;
            let option4 = (document.querySelector('.option4') as HTMLTextAreaElement).value = row.cells[5].innerHTML;
        }
    }
}

function DeleteQuestion() {
    for (let i = 0; i < MyTable.rows.length; i++) {
        let checkboxs = MyTable.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
        MyTable.rows[i].onclick = function () {
            console.log(i);
            MyTable.deleteRow(i);
            for (let i = checkboxs.length - 1; i >= 0; i--) {
                if (checkboxs[i].checked) {
                    let selectedValue = SelectLevel.value;
                    if (selectedValue == 'Easy') {
                        questionsEasy.splice(i, 1);
                        MyTable.deleteRow(i + 1);
                        let mystorage = JSON.stringify(questionsEasy);
                    localStorage.setItem("questionsEasy", mystorage);
                    }
                    else if (selectedValue == 'Medium') {
                        questionsMedium.splice(i, 1);
                        MyTable.deleteRow(i + 1);
                    }else if (selectedValue == 'Hard') {
                        questionsHard.splice(i, 1);
                        MyTable.deleteRow(i + 1);
                    }
                    // let mystorage = JSON.stringify(Books);
                    // localStorage.setItem("key", mystorage);
                }
            }
            // let selectedValue = SelectLevel.value;
            // if (selectedValue == 'Easy') {
            //     questionsEasy.splice(i);
            //     localStorage.splice(i, 1);
            // } else if (selectedValue == 'Medium') {

            //     questionsMedium.splice(i, 1);
            // } else if (selectedValue == 'Hard') {

            //     questionsHard.splice(i, 1);
            // }
        }
    }
}

