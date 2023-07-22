interface car{
    maker: string,
    model: string,
    year: string,
    milage: number,
    fuel_consumption: number,
}

let car1:car = {
    maker: "mazda",
    model: "cx5",
    year: "2015",
    milage: 500,
    fuel_consumption: 50,

}


function FuelCalculate(){
    let sum = car1.milage / car1.fuel_consumption
    console.log(sum);
}

FuelCalculate()

