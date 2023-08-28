let timer: HTMLElement = document.querySelector('.time')!;
let start: HTMLElement = document.querySelector('.start')!;
let stp: HTMLElement = document.querySelector('.stop')!;

let time = 0;
let Interval: number = setInterval(timeformat, 1000);


function timeformat(){
    let minutes = Math.floor(time / 60);
    let min = minutes < 10 ? `0${minutes}` : minutes
    let seconds = Math.ceil(time % 60);
    let sec = seconds < 10 ? `0${seconds}` : seconds
    time++;
   
    timer.innerHTML = `${min}:${sec}`;
}



// setInterval(timerr, 1000);

// function timerr(){

// for (let seconds = 0; seconds < 60; seconds++) {
//         let minutes = 0;
//         // seconds = 0;
//         minutes++
//     }
//     timer.innerHTML = `${minutes}:${seconds}`;
// }