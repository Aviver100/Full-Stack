var fname = "Avi";
var lname = "vertsman";
var email = "Avi.vertsman1@gmail.com";
var phone = 526828734;
var names = { firstname: "Avi", lastname: "Vertsman" };
console.log(fname + " " + lname);
console.log(email);
console.log('0' + phone);
console.log(names.firstname);
// let yourage:string | null = prompt("Enter a number:");
var phonenum = prompt("enter your phone");
if (phonenum) {
    var newphone = parseInt(phonenum);
    if (!Number.isNaN(newphone)) {
        console.log("Yes");
    }
    else {
        console.log("NO");
    }
}
