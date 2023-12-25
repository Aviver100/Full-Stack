import { rejects } from "assert";
import { error, log } from "console";
import express, { Express, Request, Response } from "express";
import { resolve } from "path";


const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = false ? { name: 'Avi' } : null;
    if (data) {
      console.log(data);
    }
  })
})

promise
  .then((result) => {
  console.log(result);

})
  .catch((error) => {
    console.error('nono');
    console.error(error);
    
  })





