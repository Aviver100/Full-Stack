class carlist {
    maker: string;
    model: string;
    year: number;
    china?: boolean;

    constructor(maker: string, model: string, year: number, china?: boolean) {
        this.maker = maker,
            this.model = model,
            this.year = year,
            this.china = china

    }
    describe() {
        console.log(`maker: ${this.maker} model: ${this.model} year:${this.year} China: ${this.china}`);
    }
}

class sunroof extends carlist {
    CheckSunroof() {
        console.log(`sunroof`);
    }
}


let car7 = new sunroof('nissan', `tida`, 2008, true);
let car8 = new carlist(`mazda`, `cx5 `, 555, true);

car7.CheckSunroof();
car8.describe();
// car7.red();


class animal {
    name: string;
    color: string;
    legs: number;

    constructor(name: string, color: string, legs: number) {
        this.name = name;
        this.color = color;
        this.legs = legs;
    }

}

let spider = new animal(`Spider`, `Black`, 8);
console.log(spider);



function Avi() {
    throw new Error("Function not implemented.");
}

