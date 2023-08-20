"use strict";
class car {
    constructor(maker, model, year, image) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.image = image;
    }
}
let toyota = new car(`toyota`, `corola`, 2016, `https://file.kelleybluebookimages.com/kbb/base/evox/CP/10610/2016-Toyota-Corolla-front_10610_032_2400x1800_040.png`);
let mazda = new car(`mazda`, `cx3`, 2021, `https://api.mazda.co.il/Uploads//New/CX3/360/%D7%97%D7%95%D7%A5/Pure/46G%20%D7%90%D7%A4%D7%95%D7%A8%20%D7%A2%D7%A9%D7%99%D7%A8/CX-3_DKL8_DHECLAD_46G_D0F_EXT_360_24_TransparentPNG_0004.png`);
let tesla = new car(`tesla`, `Y`, 2023, `https://file.kelleybluebookimages.com/kbb/base/evox/CP/52157/2023-Tesla-Model%20Y-front_52157_032_2400x1800_PPSW.png`);
let cars = [toyota, mazda, tesla];
// let imageCar = document.createElement(`img`);
// imageCar.src = `${cars.image}`;
// document.body.appendChild(imageCar);
const greenbox = document.querySelector(`.green-box`);
const carlist = cars.map(cars => `<p>Maker: ${cars.maker} <br> Model: ${cars.model} <br> Year: ${cars.year}</p> <img height="150px" width="200px" src="${cars.image}">`).join(``);
greenbox.innerHTML = carlist;
let div = document.querySelector(`div`);
div.style.left = `250px`;
function ChangeColor(element, color) {
    element.style.backgroundColor = color;
}
