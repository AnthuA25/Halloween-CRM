import express, { Router } from 'express';
import { createUser, getUser, getUserById, loginUser, updateUser, deleteUser } from '../controllers/user.controller';
import { isAdmin } from '../middleware/auth.middleware';

const routerUser: Router = express.Router();


routerUser.post('/', createUser);
routerUser.get('/', isAdmin,  getUser);
routerUser.get('/:id', getUserById);
routerUser.post('/login', loginUser);
routerUser.put('/:id', updateUser);
routerUser.delete('/:id', deleteUser);

export {routerUser};