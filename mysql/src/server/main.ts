import express from 'express';
import router from './routes/routes';
import ViteExpress from "vite-express";

const app = express();

app.use("/api/films", router);

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
