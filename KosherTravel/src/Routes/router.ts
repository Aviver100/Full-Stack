import express from 'express';

const router = express.Router();

router.post("/add", TaskValidation, creatTask)  // Creat
    // .get("/", getTasks)                         // Read
    // .get("/:id", getTask)                       // Read By ID 
    // .patch("/:id", TaskValidation, updateTask)  // Update
    // .delete("/:id", deleteTask)                 // Delete

export default router;