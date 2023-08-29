let timer: HTMLElement = document.querySelector('.time')!;
let list: HTMLElement = document.querySelector('.history')!;
let start: HTMLElement = document.querySelector('.start')!;
let stp: HTMLElement = document.querySelector('.stop')!;

let time = 0;

// Interval = setInterval(timeformat, 1000);

function timeformat(){
    time++;
    let minutes = Math.floor(time / 60);
    let min = minutes < 10 ? `0${minutes}` : minutes
    let seconds = Math.ceil(time % 60);
    let sec = seconds < 10 ? `0${seconds}` : seconds
    
    timer.innerHTML = `${min}:${sec}`;
}

let his:any = [];

let Interval:number;
start.addEventListener('click', () =>{
Interval = setInterval(timeformat, 1000);
});

stp.addEventListener('click', () =>{
clearInterval(Interval);
let currentTime = timer.innerHTML;
his.push(currentTime + `\n`)
list.innerText = `${his}`
});

