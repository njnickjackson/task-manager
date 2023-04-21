import { Router } from 'express';
import { addTask, deleteTask, editTask, getAllTasks, getTask } from '../controllers/taskController';

const router = Router();

router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/', addTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

export default router;