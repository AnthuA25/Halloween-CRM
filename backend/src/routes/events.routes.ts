import express, { Router } from 'express';
import { createEventHandler,getEventsHandler,getEventHandler,updateEventHandler,deleteEventHandler } from '../controllers/events.controller';
import { authMiddleware, isAdmin, isCollaborator } from '../middleware/auth.middleware';

const eventsRouter: Router = express.Router();

eventsRouter.post('/', authMiddleware, isAdmin, createEventHandler);
eventsRouter.get('/', authMiddleware, isCollaborator, getEventsHandler) 
eventsRouter.get('/:id', authMiddleware, isCollaborator, getEventHandler) 
eventsRouter.put('/:id', authMiddleware, isAdmin, updateEventHandler)
eventsRouter.delete('/:id', authMiddleware, isAdmin, deleteEventHandler)

export { eventsRouter };