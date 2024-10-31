import { Tasks } from "../models/tasks.model";
import { Itasks } from "../interface/index.interface";

const createATask = async (taskData: Itasks) => {
    const newTask = new Tasks(taskData);
    return newTask.save();
};

const getTasks = async () => {
    return await Tasks.find()
        .populate('opportunity')
        .populate('assigned_to');
    ;
};

const getTasksByOpportunity = async (opportunity_id: string) => {
    return await Tasks.findById({ opportunity_id });
};

const updateATask = async (id: string, updateData: Partial<Itasks>) => {
    return await Tasks.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteATask = async (id: string) => {
    return await Tasks.findByIdAndDelete(id);
};


export { createATask, getTasksByOpportunity, updateATask, deleteATask, getTasks };
