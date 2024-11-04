let sum = Number(0);
let a = Number(0);
let b = Number(0);
var calcHistory = [];

function btnAction(event) {
    let btn = event.target;
    let clickedButton = btn.innerText;

    // console.log(clickedButton);
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
    // console.log(calcHistory);
    cleanScreen();
}

function equals() {
    // b = Number(document.getElementById("screen").innerText);
    calcHistory.forEach((el)=> sum += el);
    
    document.getElementById("screen").innerText = sum;
}

function cleanScreen() {
    document.getElementById("screen").innerText = "";
}





