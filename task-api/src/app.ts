import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import taskRoutes from './routes/taskRoutes';
import mongoose from 'mongoose';

const connectionString: string = 'mongodb://localhost:27017/taskDB';
mongoose.set('strictQuery', false);
mongoose.connect(connectionString).then(
    () => console.log('database connection successful!'), 
    err => console.log('Error connecting to the database', err));

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cors = require('cors');
app.use(cors());

// routes
app.use('/api/tasks', taskRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

app.listen(4000);