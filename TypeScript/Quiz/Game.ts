class Player {
    constructor(public Player: string, public Scores: string | null) { }
}

let Players: Player[] = [];

const savedPlayers = localStorage.getItem("PlayersList");
if (savedPlayers) {
    Players = JSON.parse(savedPlayers);
}

let enterPopup = document.querySelector('.main__entername') as HTMLElement;
let menu = document.querySelector('.main__menu') as HTMLElement;
let EnterName = document.querySelector('.EnterName') as HTMLInputElement;
let GameDIV = document.querySelector('.main__game') as HTMLInputElement;
let Easy = document.querySelector('.Easy') as HTMLDivElement;
let Medium = document.querySelector('.Medium') as HTMLDivElement;
let Hard = document.querySelector('.Hard') as HTMLDivElement;
let question = document.querySelector('.main__game__question') as HTMLDivElement;
let option1 = document.querySelector('.op1') as HTMLDivElement;
let option2 = document.querySelector('.op2') as HTMLDivElement;
let option3 = document.querySelector('.op3') as HTMLDivElement;
let option4 = document.querySelector('.op4') as HTMLDivElement;
let optionsButtons = document.querySelectorAll('.option') as NodeList;

EnterName.addEventListener('click', saveName);
let newName;

function saveName() {
    newName = (document.querySelector('.inputName') as HTMLInputElement).value;
    let newPlayer: Player = {
        Player: newName,
        Scores: null,
    }
    Players.push(newPlayer);
    localStorage.setItem("PlayersList", JSON.stringify(Players));
    let name = document.querySelector('.name') as HTMLElement;
    name.innerText = `Hello ${newName}`;
    enterPopup.style.display = "none";
    menu.style.display = "inline-block";
}

let dataEasy = JSON.parse(localStorage.getItem("questionsEasy")!);
let dataMedium = JSON.parse(localStorage.getItem("questionsMedium")!);
let dataHard = JSON.parse(localStorage.getItem("questionsHard")!);
let levelGame: string;

Easy.addEventListener('click', () => {
    levelGame = "EasyLevel",
        StartGame(levelGame);
});

Medium.addEventListener('click', () => {
    levelGame = "MediumLevel",
        StartGame(levelGame);
});
Hard.addEventListener('click', () => {
    levelGame = "HardLevel",
        StartGame(levelGame);
});

let i = 0;
let data = new Array<Question>;

function StartGame(levelGame: string) {
    if (levelGame == "EasyLevel") {
        data = dataEasy;
    } else if (levelGame == "MediumLevel") {
        data = dataMedium
    } else if (levelGame == "HardLevel") {
        data = dataHard
    }

    GameDIV.style.display = "inline-block"
    Menu.style.display = "none";
    updateQuestion();

    optionsButtons.forEach(button => button.addEventListener('click', () => {
        let ButtonsArray = Array.from(optionsButtons)
        let buttonClicked = button;
        let selected = ButtonsArray.indexOf(event?.target);
        let correctButton = ButtonsArray[data[i].correctAnswer];

        
        if (i < data.length -1) {
            i++
            updateQuestion();
        }
        cheker(selected, data[i].correctAnswer, buttonClicked, correctButton);
    }))
}

function updateQuestion() {
    question.innerText = data[i].question;
    option1.innerText = data[i].answersArray[0];
    option2.innerText = data[i].answersArray[1];
    option3.innerText = data[i].answersArray[2];
    option4.innerText = data[i].answersArray[3];

    option1.style.backgroundColor = 'rgb(225, 214, 243)';
    option2.style.backgroundColor = 'rgb(225, 214, 243)';
    option3.style.backgroundColor = 'rgb(225, 214, 243)';
    option4.style.backgroundColor = 'rgb(225, 214, 243)';
}

function cheker(selected: number, correct: number, button: any, correctButton: Node) {
    if (selected == correct) {
        console.log('BINGO');
        button.style.backgroundColor = 'green';
    }
    else {
        console.log('NONO')
        button.style.backgroundColor = 'red';
        correctButton.style.backgroundColor = 'green'
    }
}

let easyButton = document.querySelector('.Easy') as HTMLDivElement;
let MediumButton = document.querySelector('.Medium') as HTMLDivElement;
let HardButton = document.querySelector('.Hard') as HTMLDivElement;
let Menu = document.querySelector('.main__menu') as HTMLDivElement;
let game = document.querySelector('.main__game') as HTMLDivElement;

function selectLevel() {
    Menu.style.display = "none";
    game.style.display = "inline-block";
}
