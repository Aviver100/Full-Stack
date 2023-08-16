var car = /** @class */ (function () {
    function car(maker, model, year) {
        this.maker = maker;
        this.model = model;
        this.year = year;
    }
    return car;
}());
var toyota = new car("toyota", "corola", 2016);
var mazda = new car("mazda", "cx3", 2021);
var tesla = new car("tesla", "Y", 2023);
var cars = [toyota, mazda, tesla];
var greenbox = document.querySelector(".green-box");
var carlist = cars.map(function (cars) { return "<p>Maker: " + cars.maker + " <br> Model: " + cars.model + " <br> Year: " + cars.year + "</p>"; }).join();
greenbox.innerHTML = carlist;
var bluebox = document.querySelector(".blue-box");
bluebox.innerHTML = "<a>123</a>";
