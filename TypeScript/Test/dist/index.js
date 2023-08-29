"use strict";
let timer = document.querySelector('.time');
let list = document.querySelector('.history');
let start = document.querySelector('.start');
let stp = document.querySelector('.stop');
let time = 0;
// Interval = setInterval(timeformat, 1000);
function timeformat() {
    time++;
    let minutes = Math.floor(time / 60);
    let min = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = Math.ceil(time % 60);
    let sec = seconds < 10 ? `0${seconds}` : seconds;
    timer.innerHTML = `${min}:${sec}`;
}
let his = [];
let Interval;
start.addEventListener('click', () => {
    Interval = setInterval(timeformat, 1000);
});
stp.addEventListener('click', () => {
    clearInterval(Interval);
    let currentTime = timer.innerHTML;
    his.push(currentTime + `\n`);
    list.innerText = `${his}`;
});
