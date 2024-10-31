import express, { Router } from 'express';
import { createOpportunityHandler, getOpportunitiesHandler,getOpportunityHandler,updateOpportunityHandler,deleteOpportunityHandler} from '../controllers/opportunities.controllers';
import { authMiddleware, isAdmin, isCollaborator } from '../middleware/auth.middleware';

const opportunitiesRouter: Router = express.Router();

opportunitiesRouter.post('/', authMiddleware, isAdmin, createOpportunityHandler);
opportunitiesRouter.get('/', authMiddleware, isCollaborator, getOpportunitiesHandler) 
opportunitiesRouter.get('/:id', authMiddleware, isCollaborator, getOpportunityHandler) 
opportunitiesRouter.put('/:id', authMiddleware, isAdmin, updateOpportunityHandler)
opportunitiesRouter.delete('/:id', authMiddleware, isAdmin, deleteOpportunityHandler)

export { opportunitiesRouter };