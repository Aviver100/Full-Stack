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

router.get("", getTasks)
    .get("/:id", getTasks)
    .post("", addTaskValidation, creatTask)
    .patch("/:id", updateTask)
    .delete("/:id", deleteTask)

export default router;