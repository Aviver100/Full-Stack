import express from 'express';
import { deleteTask, getTasks, updateTask, creatTask, getTask } from '../controllers';
import { addTaskValidation } from '../validation/taskFormValidation';

const router = express.Router();

router.post("/add", addTaskValidation, creatTask)   // Creat
    .get("/", getTasks)                          // Read
    .get("/:id", getTask)                      // Read By ID 
    .patch("/:id", updateTask)                  // Update
    .delete("/:id", deleteTask)                 // Delete

export default router;