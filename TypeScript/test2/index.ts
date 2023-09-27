let text = document.querySelector("#myText") as HTMLInputElement;
let button = document.querySelector("#myButton") as HTMLButtonElement;
let t = document.querySelector("#t") as HTMLElement;

button.addEventListener("click", () =>{
    t.innerText = text.value
});
