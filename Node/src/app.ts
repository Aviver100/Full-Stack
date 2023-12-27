import http from 'http';
import fs from 'fs';
import express from 'express';

const port = 4000;
const app = express();

app.use(express.static('public'))

app.listen(port, () =>{
console.log(`my server: ${port}`);
})