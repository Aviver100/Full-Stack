let SelectLevel = document.querySelector('#level') as HTMLSelectElement;
let MyTable = document.querySelector('.MyTable') as HTMLTableElement;
let alertselect = document.querySelector('.pleaseSelect') as HTMLElement;

SelectLevel.addEventListener('change', () => {
    let selectedValue = SelectLevel.value
    if (selectedValue == 'easy') {
        console.log('easy');
    }
    else if (selectedValue == 'medium') {
        console.log('medium');
    }
    else if (selectedValue == 'hard') {
        console.log('hard');
    }
})

class Question {
    constructor(public questionID: number, public question: string, public option1: string, public option2: string, public option3: string, public option4: string) {
    }
}
let questionID = 1;

let questionsEasy: Question[] = [];
let questionsMedium: Question[] = [];
let questionsHard: Question[] = [];

function AddQuestion(event: Event) {
    event.preventDefault();
    let question = (document.querySelector('.question') as HTMLTextAreaElement).value;
    let option1 = (document.querySelector('.option1') as HTMLTextAreaElement).value;
    let option2 = (document.querySelector('.option2') as HTMLTextAreaElement).value;
    let option3 = (document.querySelector('.option3') as HTMLTextAreaElement).value;
    let option4 = (document.querySelector('.option4') as HTMLTextAreaElement).value;

    let newQuestion: Question = {
        questionID: questionID++,
        question,
        option1,
        option2,
        option3,
        option4,
    }
    let selectedValue = SelectLevel.value

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

    let checkbox = document.createElement('input') as HTMLInputElement;
    checkbox.setAttribute('type', 'checkbox');

    let editbtn = document.createElement('button') as HTMLButtonElement;
    editbtn.setAttribute('class', 'edit');
    editbtn.textContent = 'Edit';

    let cancelbtn = document.createElement('button') as HTMLButtonElement;
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

const myform = document.querySelector('.Myform') as HTMLFormElement;
myform.addEventListener('submit', AddQuestion)

let editbtn = document.querySelector('.edit') as HTMLButtonElement;
let canceltbtn = document.querySelector('.cancel') as HTMLButtonElement;



function editQuestion() {
    let cancelbtn = document.querySelector('.cancel') as HTMLButtonElement;
        let editbtn = document.querySelector('.edit') as HTMLButtonElement;

        cancelbtn.style.display = 'inline-block';

        if (cancelbtn.style.display = 'inline-block') {
            editbtn.style.display = 'none';
        }
    }
