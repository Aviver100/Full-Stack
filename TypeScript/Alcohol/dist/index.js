var ILage = 18;
var USAage = 21;
var age = prompt("Enter your age:");
if (age) {
    var agesum = parseInt(age);
    // console.log(age);
    if (agesum < ILage) {
        console.log("NO!");
    }
    if (agesum > ILage && agesum < USAage) {
        console.log("yes in israel, no amreica");
    }
    if (agesum > USAage) {
        console.log("YES!");
    }
}
