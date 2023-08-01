interface user{
    firstName:string;
    lastName:string;
    age?:number;
    phone?:number;
    fullname?: Function;
}

let user1:user = {
    firstName: `Avi`,
    lastName: `Vertsman`,
    age: 26,
    phone: 972526828734,
}

let user2:user = {
    firstName: `Moshe`,
    lastName: `Levi`,
    age: 24,
    phone: 972526829438,
}

console.log(user1);
console.log(user2);

function printuser(user:user){
    console.log(
        `firstname: ${user.firstName}`,
        `lastname: ${user.lastName}`,
        `age: ${user.age}`,
        `phone: ${user.phone}`,
        );
        
    }
    
    function CreatNewUser(firstName:string,lastName:string,age?:number,phone?:number){
        let newuser = {
            firstName:firstName,
            lastName:lastName,
            age:age,
            phone:phone,
            fullname(){
                return `${this.firstName}` + ` ` + `${this.lastName}`
            }
    }
    return newuser
}

let user3 = CreatNewUser( `Avi`, `Vertsman`, 26, 972526828734);

printuser(user1);
console.log(user3.fullname());




interface car{
    maker:string,
    model:string,
    year:number,
}

let car1:car = {
maker: `mazda`,
model: `cx5`,
year: 2016,
}

function printcarDetailes(car:car){
    console.log(
        `maker: ${car.maker}`,
        `Model: ${car.model}`,
        `Year: ${car.year}`,
    );
}

function CreatNewCar(maker:string, model:string, year:number){
    let newcar = {
        maker: maker,
        model: model,
        year: year
    }
    return newcar
}

let car2 = CreatNewCar(`Toyota`, `Corola`, 2015);
let car3 = CreatNewCar(`Honda`, `Civic`, 2018);

printcarDetailes(car2);
printcarDetailes(car3);
