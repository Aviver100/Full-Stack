let fname = "Avi";
let lname = "vertsman"
let email = "Avi.vertsman1@gmail.com";
let phone = 526828734;

let names = {firstname: "Avi", lastname: "Vertsman"}

console.log(fname + " " + lname);
console.log(email);
console.log('0' + phone);
console.log(names.firstname);

// let yourage:string | null = prompt("Enter a number:");

let phonenum = prompt("enter your phone");
if (phonenum) {
    let newphone = parseInt(phonenum);


    if (!Number.isNaN(newphone)) {
        console.log("Yes")
    }
    else {
        console.log("NO")
    }

}
