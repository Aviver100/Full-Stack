import express from 'express';
import {UpdateCustomer, creatCustomer} from './controllers/index'
import {Customers} from './controllers/index'

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/api/customers', (req, res) => {
    res.send({Customers});
});

app.post('/api/add-customer', creatCustomer);
app.get('/api/:phone', UpdateCustomer);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});