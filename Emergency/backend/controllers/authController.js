import bcrypt from 'bcrypt';
import UserModel from '../models/userSchema.js'
import jwt from 'jsonwebtoken'

// import mongoose from 'mongoose';

export async function registerUser(req, res) {
    const {
        name,
        email,
        password
    } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.status(500).json({
            message: "Error inserting user",
            error: error.message
        });
    }
}


export async function login(req, res) {
    try {
        //find the user by email
        const user = await UserModel.findOne({email: req.body.email})
        if(!user){
            return res.status(404).json({message: "Email not found"});
        }
        //compare password with mongo
        const passwordCheck = await bcrypt.compare(req.body.password, user.password);
        if(!passwordCheck){
            return res.status(400).json({message: "Password does not match"});
        }
        const token = jwt.sign({
            userId: user._id,
            userEmail: user.email,
        },
            "RANDOM-TOKEN",
            {expiresIn: "24h"}
        );

        res.status(200).send({message: "Login successful", name: user.name, email: user.email, token})
    } catch (error) {
        res.status(500).json({
            message: "Error Logging in",
            error: error.message
        })
    }
}
export async function logout() {
        cookies.remove("TOKEN", {path:"/"})
}
export async function getUsers() {
        try {
            const users = await UserModel.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({
                message: "Error fetching users",
                error:error.message
            });
        }
}