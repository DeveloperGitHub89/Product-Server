import mongoose from "mongoose";

const departmentSchema=new mongoose.Schema({
    name:{type:String, required:true, unique:true},
    phone:{type:String, required:true, unique:true},
    block:{type:String, required:true},
    hod:{type:String, required:true}
});

export const Department=mongoose.model('department',
departmentSchema)