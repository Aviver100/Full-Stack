let SelectLevel = document.querySelector('#level') as HTMLSelectElement;

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
        questionID: questionID ++,
        question,
        option1,
        option2,
        option3,
        option4,
    }
        let selectedValue = SelectLevel.value
        if(selectedValue == 'easy'){
            console.log('easy');
            questionsEasy.push(newQuestion);
            localStorage.setItem("questionsEasy", JSON.stringify(questionsEasy));
        }
        else if(selectedValue == 'medium'){
            console.log('medium');
            questionsMedium.push(newQuestion);
            localStorage.setItem("questionsMedium", JSON.stringify(questionsMedium));
        }
        else if(selectedValue == 'hard'){
            console.log('hard');
            questionsHard.push(newQuestion);
            localStorage.setItem("questionsHard", JSON.stringify(questionsHard));
        }
    console.log(newQuestion);

}

const myform = document.querySelector('.Myform') as HTMLFormElement;
myform.addEventListener('submit', AddQuestion)