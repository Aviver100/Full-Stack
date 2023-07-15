const ILage = 18;
const USAage = 21;

var age: string | null = prompt("Enter your age:") ;
if(age){
    var  agesum = parseInt(age || "0");
    // console.log(age);
    if(agesum < ILage){
        console.log("NO!")
    }
    if(agesum > ILage && agesum < USAage){
        console.log("yes in israel, no amreica")
    }
    if(agesum > USAage){
        console.log("YES!")
    }



}
