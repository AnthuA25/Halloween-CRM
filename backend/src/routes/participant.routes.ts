import { Router } from 'express';
import { createParticipant, getParticipants, getParticipantById, updateParticipant, deleteParticipant } from '../controllers/participants.controller';
import { authMiddleware, isAdmin, isCollaborator } from '../middleware/auth.middleware';

const routerParticipant: Router = Router();

routerParticipant.post('/',authMiddleware, isAdmin, createParticipant);
routerParticipant.get('/', authMiddleware, isCollaborator, getParticipants);
routerParticipant.get('/:id', authMiddleware, isCollaborator, getParticipantById);
routerParticipant.put('/:id',authMiddleware, isAdmin, updateParticipant);
routerParticipant.delete('/:id',authMiddleware, isAdmin, deleteParticipant);

export { routerParticipant };