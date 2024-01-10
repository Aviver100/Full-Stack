import express from 'express';
import { customer } from '../modules/customer';

export let Customers:customer[] = [];

export function creatCustomer(req: express.Request, res:express.Response) {
    let newCustomer:customer = req.body;
    Customers.push(newCustomer)
    res.send({Customers})
}