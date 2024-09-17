import express from 'express';
import cors from 'cors';
import {registerUser, getUsers, login} from './controllers/authController.js'
import connectToMongo from './controllers/mongoConnect.js'

const app = express();

app.use(cors());
app.use(express.json());

connectToMongo();

app.post("/insert", registerUser);
app.post("/login", login);
app.get("/getUsers", getUsers);

app.listen(3001, () => {
    console.log('server is runing');

});