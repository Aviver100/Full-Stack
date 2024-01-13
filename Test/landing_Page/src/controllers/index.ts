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
    console.log(PhoneToUpdate);
    let foundPhone = Customers.find(user => user.phone === PhoneToUpdate);
    console.log(foundPhone);
    if (foundPhone) {
        res.send(foundPhone)
    } else {
        res.status(404).send('Customer not found');
    }
    
}

