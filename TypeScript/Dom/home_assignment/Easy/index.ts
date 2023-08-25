let box: HTMLElement = document.querySelector('.box')!;

box.addEventListener(`mouseover`, (event) =>
    box.style.backgroundColor = `red`);
box.addEventListener(`mouseout`, (event) =>
box.style.backgroundColor = `initial`);

document.addEventListener(`keydown`,(event: KeyboardEvent) => {
    let press = event.key;
    console.log(press);
})

