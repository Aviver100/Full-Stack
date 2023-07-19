var car1 = {
    maker: "mazda",
    model: "cx5",
    year: "2015",
    milage: 500,
    fuel_consumption: 50
};
function FuelCalculate() {
    var sum = car1.milage / car1.fuel_consumption;
    console.log(sum);
}
FuelCalculate();
