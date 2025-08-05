import express from 'express';
import { registerUser, getAllUsers } from '../controllers/userController.js';
import { verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.get('/users', verifyAdmin, getAllUsers);

export default router;
