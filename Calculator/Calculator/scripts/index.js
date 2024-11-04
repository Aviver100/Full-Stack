let sum = Number(0);
let a = Number(0);
let b = Number(0);
var calcHistory = [];

window.onload = btnClick;

function btnAction(event) {
    let btn = event.target;
    let clickedButton = btn.innerText;

    if (clickedButton != "C" && clickedButton != "=" && clickedButton != "+") {
        document.getElementById("screen").innerText += clickedButton;
    }
}

function btnClick() {
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener('click', btnAction);
    });
}

function plus() {
    a = Number(document.getElementById("screen").innerText);
    calcHistory.push(a)
    console.log(calcHistory);
    cleanScreen();
}

function division() {
    a = Number(document.getElementById("screen").innerText);
    calcHistory.push(a)
    console.log(calcHistory);
    cleanScreen();
}

function equals() {
    a = Number(document.getElementById("screen").innerText);
    calcHistory.push(a)
    calcHistory.forEach((el)=> sum += el);
    console.log(calcHistory);
    document.getElementById("screen").innerText = sum;
}

function cleanScreen() {
    document.getElementById("screen").innerText = "";
}





