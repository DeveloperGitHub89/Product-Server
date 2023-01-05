import mongoose from "mongoose";

const customerSchema=new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    address:{type:String, required:true},
    products:[{type:mongoose.Schema.Types.ObjectId,
        ref:'product'}]
});

export const Customer=mongoose.model('customer', customerSchema);