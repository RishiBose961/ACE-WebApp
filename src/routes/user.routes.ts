import express from 'express';
import { loginUser, Profile, registerUser } from '../controller/auth.controller.js';
import { authenticateUser } from '../middleware/authenticateUser.js';


const router = express.Router();


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',authenticateUser,Profile)

export default router