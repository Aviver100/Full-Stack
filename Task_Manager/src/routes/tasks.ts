import express from 'express';
import { deleteTask, getTasks, updateTask, creatTask } from '../controllers';
import { addTaskValidation } from '../validation/taskFormValidation';

const router = express.Router();


// app.get('/api/tasks', (req, res) => {res.send({ Tasks });});

// app.post('/api/add-task', addTaskValidation, creatTask);
// app.get('/api/tasks/:id', GetTask);
// app.patch('/api/:id', UpdateTask);
// app.delete('/api/:id', DeleteTask);
// app.get('/api/tasks', GetTasks);

// when directed to these routes -> /api/tasks

router.post("/add", addTaskValidation, creatTask)   // Creat
    .get("", getTasks)                          // Read
    .get("/:id", getTasks)                      // Read By ID 
    .patch("/:id", updateTask)                  // Update
    .delete("/:id", deleteTask)                 // Delete

    export default router;