var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var carlist = /** @class */ (function () {
    function carlist(maker, model, year, china) {
        this.maker = maker,
            this.model = model,
            this.year = year,
            this.china = china;
    }
    carlist.prototype.describe = function () {
        console.log("maker: " + this.maker + " model: " + this.model + " year:" + this.year + " China: " + this.china);
    };
    return carlist;
}());
var sunroof = /** @class */ (function (_super) {
    __extends(sunroof, _super);
    function sunroof() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sunroof.prototype.CheckSunroof = function () {
        console.log("sunroof");
    };
    return sunroof;
}(carlist));
var car7 = new sunroof('nissan', "tida", 2008, true);
var car8 = new carlist("mazda", "cx5 ", 555, true);
car7.CheckSunroof();
car8.describe();
// car7.red();
var animal = /** @class */ (function () {
    function animal(name, color, legs) {
        this.name = name;
        this.color = color;
        this.legs = legs;
    }
    return animal;
}());
var spider = new animal("Spider", "Black", 8);
console.log(spider);
function Avi() {
    throw new Error("Function not implemented.");
}
