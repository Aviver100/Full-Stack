import express from 'express';
import cors from 'cors';
import {registerUser, getUsers, login, freeEndpoint, authEndpoint} from './controllers/authController.js'
import connectToMongo from './controllers/mongoConnect.js'
import auth from './auth.js'
import { insertMember } from './controllers/groupController.js';
const app = express();

app.use(cors()); 
app.use(express.json());

connectToMongo();

app.post("/insertuser", registerUser);
app.post("/insertmember", insertMember);
app.post("/login", login);
app.get("/getUsers", getUsers);
app.get("/test", (req, res)=>{
    res.json({message: 'server is runing'});
});
app.get("/auth-endpoint", auth, authEndpoint);
app.get("/free-endpoint", freeEndpoint);


app.listen(3001, () => {
    console.log('server is runing');

});