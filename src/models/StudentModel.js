import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    roll:{type:Number, required:true},
    name:{type:String, required:true},
    phone:{type:String, required:true},
    marks:{type:Number, required:true},
    dob:{type:Date, required:true},
    department:{type:mongoose.Schema.Types.ObjectId, 
        ref:'department'}
});

export const Student=mongoose.model('student',studentSchema);