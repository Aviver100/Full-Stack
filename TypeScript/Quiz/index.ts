let easybutton = document.querySelector('.easy') as HTMLElement;
let mediumbutton = document.querySelector('.medium') as HTMLElement;
let hardbutton = document.querySelector('.hard') as HTMLElement;

easybutton.addEventListener('click', () => {
    easybutton.style.backgroundColor = 'red';
    mediumbutton.style.backgroundColor = '#4070F4';
    hardbutton.style.backgroundColor = '#4070F4';
})
mediumbutton.addEventListener('click', () => {
    easybutton.style.backgroundColor = '#4070F4';
    mediumbutton.style.backgroundColor = 'red';
    hardbutton.style.backgroundColor = '#4070F4';
})
hardbutton.addEventListener('click', () => {
    easybutton.style.backgroundColor = '#4070F4';
    mediumbutton.style.backgroundColor = '#4070F4';
    hardbutton.style.backgroundColor = 'red';
})
class Question {
    constructor(public questionID: number, public question: string, public option1: string, public option2: string, public option3: string, public option4: string) {
    }
}
let questionID = +1;

let questionsEasy: Question[] = [];
let questionsMedium: Question[] = [];
let questionsHard: Question[] = [];

function AddQuestion(event: Event) {
    event.preventDefault();
    let question = document.querySelector('.question') as HTMLTextAreaElement;
    let questionVal = question.value;
    let option1 = document.querySelector('.option1') as HTMLTextAreaElement;
    let option1Val = option1?.value;
    let option2 = document.querySelector('.option2') as HTMLTextAreaElement;
    let option2Val = option2?.value;
    let option3 = document.querySelector('.option3') as HTMLTextAreaElement;
    let option3Val = option3?.value;
    let option4 = document.querySelector('.option4') as HTMLTextAreaElement;
    let option4Val = option4?.value;

    let newQuestion: Question = {
        questionID: questionID + 1,
        questionVal: question,
        option1Val: option1,
        option2Val: option2,
        option3Val: option3,
        option4Val: option4,
    }
    localStorage.setItem("questionsEasy", JSON.stringify(questionsEasy));

    console.log(newQuestion);

}

const myform = document.querySelector('.Myform') as HTMLFormElement;
myform.addEventListener('submit', AddQuestion)