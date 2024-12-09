import express from 'express';

import { authenticateUser } from '../middleware/authenticateUser.js';
import { createUserInfoSkill,getUserInfoSkills } from '../controller/skill.controller.js';


const router = express.Router();



router.post('/create-skill',authenticateUser,createUserInfoSkill)
router.get('/get-skill/:userId',getUserInfoSkills)

export default router