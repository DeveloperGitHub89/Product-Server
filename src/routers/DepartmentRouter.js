import express from 'express';
import { findAllDepartments, saveDepartment } from 
'../controllers/DepartmentController.js';

const departmentRouter=express.Router();

departmentRouter.post('/departments',saveDepartment);
departmentRouter.get('/departments',findAllDepartments);

export default departmentRouter;