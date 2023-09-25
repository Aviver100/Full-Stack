var User = /** @class */ (function () {
    function User(id, user, fname, lname, password, email) {
        this.id = id;
        this.user = user;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
        this.email = email;
    }
    return User;
}());
var users = [];
var id = 1;
function register(event) {
    event.preventDefault();
    var user = document.querySelector('#user');
    var userVal = user.value;
    var fname = document.querySelector('#fname');
    var fnameVal = fname.value;
    var lname = document.querySelector('#lname');
    var lnameVal = lname.value;
    var pass = document.querySelector('#pass');
    var passVal = pass.value;
    var confpass = document.querySelector('#confpass');
    var confpassVal = confpass.value;
    var email = document.querySelector('#email');
    var emailVal = email.value;
    var newUser = {
        id: id++,
        user: userVal,
        fname: fnameVal,
        lname: lnameVal,
        password: passVal,
        email: emailVal
    };
    var tooltipPass = document.querySelector('.tooltipEmail');
    if (passVal != confpassVal) {
        tooltipPass.style.visibility = "visible";
    }
    var chekUser = users.some(function (x) { return x.user === userVal; });
    var chekEmail = users.some(function (x) { return x.email === emailVal; });
    var tooltipUser = document.querySelector('.tooltipUser');
    var tooltipEmail = document.querySelector('.tooltipEmail');
    if (!chekUser) {
        console.log('lodome');
        users.push(newUser);
        tooltipUser.style.visibility = "hidden";
    }
    else {
        console.log('dome');
        tooltipUser.style.visibility = "visible";
    }
    if (!chekEmail) {
        console.log('lodome');
        tooltipEmail.style.visibility = "hidden";
        users.push(newUser);
    }
    else {
        console.log('dome');
        tooltipEmail.style.visibility = "visible";
    }
    localStorage.setItem("users", JSON.stringify(users));
    user.value = '';
    fname.value = '';
    lname.value = '';
    pass.value = '';
    confpass.value = '';
    email.value = '';
    console.log(newUser);
}
document.onload = JSON.parse(localStorage.getItem("key"));
var myform = document.querySelector('#regForm');
myform.addEventListener('submit', register);
function showregistr() {
    var reg = document.querySelector('.register');
    reg.style.display = "block";
    var login = document.querySelector('.login');
    login.style.display = "none";
}
function login() {
}
