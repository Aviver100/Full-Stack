import { log } from 'console';
import express  from 'express';
import fs from 'fs';
import process from 'process';

const app = express();
const port = 4000;

console.log(process.cwd);
app.get('/', (req, res) => {
    res.sendFile("./index.html", {
        root: process.cwd
    }, (err) => {
        if(err){
            console.log("Error Express");
        }
    });
});

app.listen(port, () => {
console.log(`listen to port: ${port}`);
})


