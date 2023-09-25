class User {
    constructor(public id: number, public user: string, public fname: string, public lname: string, public password: string, public email: string) {
    }
}

let users: User[] = [];
let id: number = 1;

function register(event: Event) {
    event.preventDefault();

    let user = document.querySelector('#user') as HTMLInputElement;
    let userVal = user.value;
    let fname = document.querySelector('#fname') as HTMLInputElement;
    let fnameVal = fname.value;
    let lname = document.querySelector('#lname') as HTMLInputElement;
    let lnameVal = lname.value;
    let pass = document.querySelector('#pass') as HTMLInputElement;
    let passVal = pass.value;
    let confpass = document.querySelector('#confpass') as HTMLInputElement;
    let confpassVal = confpass.value;
    let email = document.querySelector('#email') as HTMLInputElement;
    let emailVal = email.value;

    let newUser: User = {
        id: id++,
        user: userVal,
        fname: fnameVal,
        lname: lnameVal,
        password: passVal,
        email: emailVal,
    };
    
    let tooltipPass = document.querySelector('.tooltipEmail') as HTMLElement;

    if(passVal != confpassVal){
        tooltipPass.style.visibility = "visible";
    }

    const chekUser = users.some(x => x.user === userVal);
    const chekEmail = users.some(x => x.email === emailVal);
    let tooltipUser = document.querySelector('.tooltipUser') as HTMLElement;
    let tooltipEmail = document.querySelector('.tooltipEmail') as HTMLElement;
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


document.onload = JSON.parse(localStorage.getItem("key")!);

let myform = document.querySelector('#regForm') as HTMLFormElement;
myform.addEventListener('submit', register);

function showregistr() {
    let reg = document.querySelector('.register') as HTMLElement;
    reg.style.display = "block";
    let login = document.querySelector('.login') as HTMLElement;
    login.style.display = "none";
}

function login(){

}