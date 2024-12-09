import express from 'express';

import { authenticateUser } from '../middleware/authenticateUser.js';
import { createProjectPost, getProjectPost } from '../controller/project.controller.js';


const router = express.Router();



router.post('/create-project',authenticateUser,createProjectPost)
router.get('/get-project/:userId',getProjectPost)
export default router