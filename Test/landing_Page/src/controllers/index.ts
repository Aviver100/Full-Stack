import express from 'express';
import { customer } from '../modules/customer';

export let Customers: customer[] = [];

export function creatCustomer(req: express.Request, res: express.Response) {
    let newCustomer: customer = req.body;
    Customers.push(newCustomer)
    res.send(Customers)
    // console.log(`user with the name: ${newCustomer.Name} added!`);

}

export function UpdateCustomer(req: express.Request, res: express.Response) {
    let PhoneToUpdate = req.params.phone;
    let foundPhone = Customers.find(user => user.phone === PhoneToUpdate);
    if (!foundPhone) {
        res.status(404).send('Customer not found');
    } else if (req.body.name) {
        foundPhone.name = req.body.name;
        foundPhone.email = req.body.email;
        foundPhone.phone = req.body.phone;
        res.send(foundPhone);
    }
}
export function GetCustomer(req: express.Request, res: express.Response) {
    let PhoneToUpdate = req.params.phone;
    let foundPhone = Customers.find(user => user.phone === PhoneToUpdate);
    if (!foundPhone) {
        res.status(404).send('Customer not found');
    } else{
        res.send(foundPhone);
    }
}

export function DeleteCustomer(req: express.Request, res: express.Response) {
    let PhoneToUpdate = req.params.phone;
    let foundPhone = Customers.findIndex(user => user.phone === PhoneToUpdate);
    if (!foundPhone) {
        res.status(404).send('Customer not found');
    } else {
        console.log(foundPhone);
        Customers.splice(foundPhone, 1);
        res.send(foundPhone); 
    }
}