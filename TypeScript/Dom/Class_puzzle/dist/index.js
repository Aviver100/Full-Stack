"use strict";
// let newTd = document.querySelector(`td`);
// addEventListener(`click`, (x) =>
// (newTd as HTMLElement).style.backgroundColor = `blue`);
let tds = document.querySelector(`td`);
function click(event) {
    let clicked = event.target;
    console.log(clicked);
}
tds.addEventListener(`click`, click);
