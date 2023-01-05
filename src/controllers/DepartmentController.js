import { StatusCodes } from "http-status-codes";
import { Department } from "../models/DepartmentModel.js";

export async function saveDepartment(request,response){
    try {
        const department=new Department(request.body);
        const d=await department.save();
        response.status(StatusCodes.CREATED).json(d)
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error saving department'})
    }
}

export async function findAllDepartments(request,response){
    try {
        const departments=await Department.find()
        response.status(StatusCodes.OK).json(departments);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error fetching departments'})
    }   
}