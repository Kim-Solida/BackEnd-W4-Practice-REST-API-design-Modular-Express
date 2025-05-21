import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController.js';
import validatrUser from '../middleware/validateUser.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/', validatrUser, createUser);
router.get('/:id', updateUser);
router.get('/:id', deleteUser);

export default router;