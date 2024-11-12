let seconds = minutes = hours = 0;
let runCounter;
let countStatus = null
let countHistory = [];
let timerIsRun = false;

function counter() {
    let myScreen = document.getElementById("screen");
    seconds += 1;
    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
        if (minutes >= 60) {
            minutes = 0
            hours += 1;
        }
    }
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes
    let displayHours = hours < 10 ? '0' + hours : hours
    myScreen.innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}


function start() {
    if (timerIsRun == false) {
        if (countStatus == "stop") {
            runCounter = setInterval(counter, 1000);
        } else if (countStatus == "reset") {
            seconds = minutes = hours = 0;
            runCounter = setInterval(counter, 1000);
        } else {
            runCounter = setInterval(counter, 1000);
        }
        countStatus = "start"
    } else {
        console.log(`timer is run`);
    }
    timerIsRun = true;
}

function stop() {
    let currentTime = document.getElementById("screen").innerText;
    let myScreen = document.getElementById("screen");
    clearInterval(runCounter);
    console.log(currentTime);
    myScreen.innerText = currentTime;
    countStatus = "stop";
    timerIsRun = false;
}

function reset() {
    countStatus = "reset";
    clearInterval(runCounter);
    document.getElementById("screen").innerText = "00:00:00";
    timerIsRun = false;
}

function lap() {
    if (timerIsRun == true) {
        let currentTime = document.getElementById("screen").innerText;
        countHistory.push(currentTime)
        let list = document.getElementById("lapList");
        let li = document.createElement("li");
        li.innerText = `Lap ${countHistory.length}: ${currentTime}`;
        list.appendChild(li)
    } else {
        console.log(`timer is not run`);
    }
}