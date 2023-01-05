import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    pid:{type:Number, required:true, unique:true},
    name:{type:String, required:true },
    price:{type:Number, required:true},
    description:{type:String, required:true},
    customers:[{type:mongoose.Schema.Types.ObjectId,
        ref:'customer'}]
});
export const Product=mongoose.model('product',productSchema);
