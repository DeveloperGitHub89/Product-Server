import { StatusCodes } from "http-status-codes";
import { Student } from "../models/StudentModel.js";

export async function saveStudent(request,response){
    try {
        const dob=new Date(request.body.dob);
        request.body['dob']=dob;
        const student=new Student(request.body);
        const s=await student.save();
        response.status(StatusCodes.CREATED).json(s)
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error saving student'})
    }
}