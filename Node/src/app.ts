import { log } from 'console';
import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

interface product {
    name: string,
    price: number
}

const Products:product[] = [];

app.post("/api/product", (req, res)=>{
    const newProduct:product = req.body;
    const index = Products.findIndex(item =>{newProduct.name === item.name})
    if(!index){
        Products.push(newProduct);
        console.log(newProduct);
        res.send({Products})
    }else{
        throw (`the name ${newProduct.name} in use`)
    // }
})
 
app.get("/api/products", (req,res)=>{
    res.send(Products)
})
app.listen(port, ()=>{
    console.log(`server http://loclhost/${port} run`);
    
})

