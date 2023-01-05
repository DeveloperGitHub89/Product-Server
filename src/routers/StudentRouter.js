import express from 'express';
import { saveStudent } from '../controllers/StudentController.js';

const studentRouter=express.Router();

studentRouter.post('/students',saveStudent);

export default studentRouter;