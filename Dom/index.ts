class car {
    maker: string;
    model: string;
    year: number;
    constructor(maker: string ,model: string, year: number){
        this.maker = maker;
        this.model = model;
        this.year = year;
    }
}

let toyota = new car(`toyota`, `corola`, 2016);
let mazda = new car(`mazda`, `cx3`, 2021);
let tesla = new car(`tesla`, `Y`, 2023);

let cars:any[] = [toyota, mazda, tesla];

const greenbox = document.querySelector(`.green-box`)!;

const carlist = cars.map(cars => `<p>Maker: ${cars.maker} <br> Model: ${cars.model} <br> Year: ${cars.year}</p>`).join();

greenbox.innerHTML = carlist;


const bluebox:HTMLElement = document.querySelector(`.blue-box`);
bluebox.innerHTML = `<a>123</a>`