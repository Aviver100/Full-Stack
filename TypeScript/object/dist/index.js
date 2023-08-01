var user1 = {
    firstName: "Avi",
    lastName: "Vertsman",
    age: 26,
    phone: 972526828734
};
var user2 = {
    firstName: "Moshe",
    lastName: "Levi",
    age: 24,
    phone: 972526829438
};
console.log(user1);
console.log(user2);
function printuser(user) {
    console.log("firstname: " + user.firstName, "lastname: " + user.lastName, "age: " + user.age, "phone: " + user.phone);
}
function CreatNewUser(firstName, lastName, age, phone) {
    var newuser = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        phone: phone,
        fullname: function () {
            return "" + this.firstName + " " + ("" + this.lastName);
        }
    };
    return newuser;
}
var user3 = CreatNewUser("Avi", "Vertsman", 26, 972526828734);
printuser(user1);
console.log(user3.fullname());
var car1 = {
    maker: "mazda",
    model: "cx5",
    year: 2016
};
function printcarDetailes(car) {
    console.log("maker: " + car.maker, "Model: " + car.model, "Year: " + car.year);
}
function CreatNewCar(maker, model, year) {
    var newcar = {
        maker: maker,
        model: model,
        year: year
    };
    return newcar;
}
var car2 = CreatNewCar("Toyota", "Corola", 2015);
var car3 = CreatNewCar("Honda", "Civic", 2018);
printcarDetailes(car2);
printcarDetailes(car3);
