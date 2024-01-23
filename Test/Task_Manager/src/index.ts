import express from 'express';
import { DeleteTask, GetTask, GetTasks, UpdateTask, creatTask } from './controllers/index'
import { Tasks } from './controllers/index'
import { addTaskValidation } from './validation/taskFormValidation';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/api/tasks', (req, res) => {
    res.send({ Tasks });
});

app.post('/api/add-task', addTaskValidation, creatTask);
app.get('/api/:id', GetTask);
app.patch('/api/:id', UpdateTask);
app.delete('/api/:id', DeleteTask);
app.get('/api/tasks', GetTasks);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});