"use strict";
let returnButton = document.querySelector('.return');
let easyButton = document.querySelector('.Easy');
let MediumButton = document.querySelector('.Medium');
let HardButton = document.querySelector('.Hard');
let Menu = document.querySelector('.main__menu');
let game = document.querySelector('.main__game');
let endgame = document.querySelector('.main__endgame');
let playersTable = document.querySelector('.playersTable');
class Player {
    constructor(Player, Scores) {
        this.Player = Player;
        this.Scores = Scores;
    }
}
let Players = [];
const savedPlayers = localStorage.getItem("PlayersList");
if (savedPlayers) {
    Players = JSON.parse(savedPlayers);
}
let enterPopup = document.querySelector('.main__entername');
let menu = document.querySelector('.main__menu');
let EnterName = document.querySelector('.EnterName');
let GameDIV = document.querySelector('.main__game');
let ScoresDiv = document.querySelector('.main__game__score');
let Easy = document.querySelector('.Easy');
let Medium = document.querySelector('.Medium');
let Hard = document.querySelector('.Hard');
let question = document.querySelector('.main__game__question');
let option1 = document.querySelector('.op1');
let option2 = document.querySelector('.op2');
let option3 = document.querySelector('.op3');
let option4 = document.querySelector('.op4');
let optionsButtons = document.querySelectorAll('.option');
EnterName.addEventListener('click', saveName);
let newName;
function saveName() {
    newName = document.querySelector('.inputName').value;
    let newPlayer = {
        Player: newName,
        Scores: 0,
    };
    Players.push(newPlayer);
    localStorage.setItem("PlayersList", JSON.stringify(Players));
    let name = document.querySelector('.name');
    name.innerText = `Hello ${newName}`;
    enterPopup.style.display = "none";
    menu.style.display = "inline-block";
}
let dataEasy = JSON.parse(localStorage.getItem("questionsEasy"));
let dataMedium = JSON.parse(localStorage.getItem("questionsMedium"));
let dataHard = JSON.parse(localStorage.getItem("questionsHard"));
let levelGame;
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
let data = new Array;
let UserScores = 0;
function StartGame(levelGame) {
    if (levelGame == "EasyLevel") {
        data = dataEasy;
    }
    else if (levelGame == "MediumLevel") {
        data = dataMedium;
    }
    else if (levelGame == "HardLevel") {
        data = dataHard;
    }
    CountDown(10);
    GameDIV.style.display = "inline-block";
    Menu.style.display = "none";
    updateQuestion();
    optionsButtons.forEach(button => button.addEventListener('click', () => {
        let ButtonsArray = Array.from(optionsButtons);
        let buttonClicked = button;
        let selected = ButtonsArray.indexOf(event === null || event === void 0 ? void 0 : event.target);
        let correctButton = ButtonsArray[data[i].correctAnswer];
        cheker(selected, data[i].correctAnswer, buttonClicked, correctButton);
        setTimeout(() => {
            if (i < data.length - 1) {
                i++;
                updateQuestion();
            }
            else {
                endGame();
            }
        }, 1000);
    }));
    // setInterval(CountDown, 1000)
}
// setInterval(()=>{
//     for(let i = 10; i > 0; i-- ){
//         if(i==0){
//             console.log('stop');
//         }
//     }
// }, 1000)
let interval;
function CountDown(seconds) {
    let countBox = document.querySelector('.main__game__timer');
    let counter = seconds;
    interval = setInterval(() => {
        countBox.innerHTML = `${counter}`;
        console.log(counter);
        counter--;
        if (counter == 0) {
            i++;
            updateQuestion();
            console.log('Stop');
        }
    }, 1000);
}
function updateQuestion() {
    option1.style.backgroundColor = 'rgb(225, 214, 243)';
    option2.style.backgroundColor = 'rgb(225, 214, 243)';
    option3.style.backgroundColor = 'rgb(225, 214, 243)';
    option4.style.backgroundColor = 'rgb(225, 214, 243)';
    question.innerText = data[i].question;
    option1.innerText = data[i].answersArray[0];
    option2.innerText = data[i].answersArray[1];
    option3.innerText = data[i].answersArray[2];
    option4.innerText = data[i].answersArray[3];
    ScoresDiv.innerText = `${UserScores}`;
    clearInterval(interval);
    CountDown(10);
}
function cheker(selected, correct, button, correctButton) {
    if (selected == correct) {
        console.log('BINGO');
        UserScores += 5;
        button.style.backgroundColor = 'green';
    }
    else {
        console.log('NONO');
        button.style.backgroundColor = 'red';
        correctButton.style.backgroundColor = 'green';
    }
    clearInterval(interval);
    CountDown(10);
}
function endGame() {
    console.log('The Game is Ended');
    let MyPlayer = Players.findIndex((x => x.Player == newName));
    Players[MyPlayer].Scores = UserScores;
    localStorage.setItem("PlayersList", JSON.stringify(Players));
    game.style.display = "none";
    endgame.style.display = "inline-block";
    let PlayersWin = JSON.parse(localStorage.getItem('PlayersList'));
    let row1 = playersTable.insertRow();
    let row2 = playersTable.insertRow();
    let row3 = playersTable.insertRow();
    let row4 = playersTable.insertRow();
    let row5 = playersTable.insertRow();
    let cell1 = row1.insertCell();
    let cell2 = row1.insertCell();
    let cell3 = row2.insertCell();
    let cell4 = row2.insertCell();
    let cell5 = row3.insertCell();
    let cell6 = row3.insertCell();
    let cell7 = row4.insertCell();
    let cell8 = row4.insertCell();
    let cell9 = row5.insertCell();
    let cell10 = row5.insertCell();
    let sortScores = Players.sort(function (a, b) {
        return b.Scores - a.Scores;
    });
    cell1.innerText = `${sortScores[0].Player}`;
    cell2.innerText = `${sortScores[0].Scores}`;
    cell3.innerText = `${sortScores[1].Player}`;
    cell4.innerText = `${sortScores[1].Scores}`;
    cell5.innerText = `${sortScores[2].Player}`;
    cell6.innerText = `${sortScores[2].Scores}`;
    cell7.innerText = `${sortScores[3].Player}`;
    cell8.innerText = `${sortScores[3].Scores}`;
    cell9.innerText = `${sortScores[4].Player}`;
    cell10.innerText = `${sortScores[4].Scores}`;
    console.log(sortScores);
}
returnButton.addEventListener('click', () => {
    location.reload();
});
function selectLevel() {
    Menu.style.display = "none";
    game.style.display = "inline-block";
}
