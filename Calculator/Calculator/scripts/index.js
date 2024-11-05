let runningTotal = Number(0);
let currentNumber = Number(0);
let lastOperator = null;

window.onload = btnClick;

function btnAction(event) {
    let btn = event.target;
    let clickedButton = btn.innerText;
    if (!["C", "=", "+", "/", "*", "-", "."].includes(clickedButton)) {
        document.getElementById("screen").innerText += clickedButton;
    }
}

function btnClick() {
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener('click', btnAction);
    });
}

function plus() {
    currentNumber = Number(document.getElementById("screen").innerText);
    if (runningTotal == 0) {
        runningTotal = currentNumber;
    } else if (lastOperator = "equals") {
        runningTotal = currentNumber;
    } else {
        runningTotal = runningTotal + currentNumber;
    }
    lastOperator = "add";
    cleanScreen();
}

function multiplication() {
    currentNumber = Number(document.getElementById("screen").innerText);
    if (runningTotal == 0) {
        runningTotal = currentNumber;
    } else if (lastOperator = "equals") {
        runningTotal = currentNumber;
    } else {
        runningTotal = runningTotal * currentNumber;
    }
    lastOperator = "multiplication";
    cleanScreen();
}

function division() {
    currentNumber = Number(document.getElementById("screen").innerText);
    if (runningTotal == 0) {
        runningTotal = currentNumber;
    } else if (lastOperator = "equals") {
        runningTotal = currentNumber;
    } else {
        runningTotal = runningTotal / currentNumber;
    }
    lastOperator = "division";
    cleanScreen();
}

function subtraction() {
    currentNumber = Number(document.getElementById("screen").innerText);
    if (runningTotal == 0) {
        runningTotal = currentNumber;
    } else if (lastOperator = "equals") {
        runningTotal = currentNumber;
    } else {
        runningTotal = runningTotal - currentNumber;
    }
    lastOperator = "subtraction";
    cleanScreen();
}

function equals() {
    currentNumber = Number(document.getElementById("screen").innerText);
    if (lastOperator == "add") {
        runningTotal = runningTotal + currentNumber;
    } else if (lastOperator == "division") {
        runningTotal = runningTotal / currentNumber;
    } else if (lastOperator == "multiplication") {
        runningTotal = runningTotal * currentNumber;
    } else if (lastOperator == "subtraction") {
        runningTotal = runningTotal - currentNumber;
    } else {
        runningTotal = currentNumber
    }
    document.getElementById("screen").innerText = runningTotal;
    lastOperator = "equals";
}

function cleanScreen() {
    document.getElementById("screen").innerText = "";
}