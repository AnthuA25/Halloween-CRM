import express, { Router } from 'express';
import { createTaskHandler, getTasksHandler, getTasksByOpportunityHandler, updateTaskHandler, deleteTaskHandler } from '../controllers/tasks.controllers';
import { authMiddleware, isAdmin, isCollaborator } from '../middleware/auth.middleware';

const tasksRouter: Router = express.Router();

tasksRouter.post('/',authMiddleware, isAdmin, createTaskHandler);
tasksRouter.get('/', authMiddleware, isCollaborator, getTasksHandler)
tasksRouter.get('/:id', authMiddleware, isCollaborator, getTasksByOpportunityHandler)
tasksRouter.put('/:id',authMiddleware, isAdmin, updateTaskHandler)
tasksRouter.delete('/:id',authMiddleware, isAdmin, deleteTaskHandler)

export { tasksRouter }