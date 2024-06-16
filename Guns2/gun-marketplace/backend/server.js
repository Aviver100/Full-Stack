// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import passportConfig from './config/passport.js';
import userRoutes from './routes/users.js';
import itemRoutes from './routes/items.js';

const app = express();

mongoose.connect('mongodb://localhost:27017/gun-marketplace', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport); // Initialize passport with configuration

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
