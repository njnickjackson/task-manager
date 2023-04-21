import mongoose, { Document, Schema } from 'mongoose';

interface ITask extends Document {
    title: string,
    completed: boolean
}

const taskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true
    }
});

const Task = mongoose.model<ITask>('Task', taskSchema)

export { ITask, Task };