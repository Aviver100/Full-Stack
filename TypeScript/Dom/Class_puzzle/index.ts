// let newTd = document.querySelector(`td`);
// addEventListener(`click`, (x) =>
// (newTd as HTMLElement).style.backgroundColor = `blue`);

let tds = document.querySelector(`td`)!;

function click(event: MouseEvent) {
    let clicked = event.target as HTMLElement;
    console.log(clicked);
}
tds.addEventListener(`click`, click);