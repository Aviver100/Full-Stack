import createServer from './index';
import mongoose from 'mongoose';

const app = createServer();
const port = 3001;

async function conectToMongo() {
    await mongoose.connect('mongodb://localhost:27017/tasksdb');
}
conectToMongo();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});