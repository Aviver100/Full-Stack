// import {creatCustomer} from '../src/controllers/index'
import express from 'express';
let CustomersList = document.querySelector('.CustomersList') as HTMLDivElement;

// let name = (document.querySelector('name') as HTMLInputElement).value;
// let email = (document.querySelector('email') as HTMLInputElement).value;
// let phone = (document.querySelector('phone') as HTMLInputElement).value;
// creatCustomer(name, email, phone)

const handleSubmit = async (ev) => {
    try {
        let name = (document.querySelector('name') as HTMLInputElement).value;
        let email = (document.querySelector('email') as HTMLInputElement).value;
        let phone = (document.querySelector('phone') as HTMLInputElement).value;


    } catch (error) {

    }
}
function save(req:express.Request, res:express.Response){
    
}