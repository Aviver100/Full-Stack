import jwt from 'jsonwebtoken';

export default async function auth (req, res, next) {
    try {
        const token = await req.headers.authorization.split(" ")[1];
        const decodeToken = await jwt.verify(token, "RANDOM-TOKEN");
        const user = await decodeToken;
        req.user = user;        
        next();
    } catch (error) {
        res.status(401).json({
            error: new Error("Invalid request!")
        });
    }
}