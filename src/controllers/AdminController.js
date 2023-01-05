import { StatusCodes } from "http-status-codes";
import { Admin } from "../models/AdminModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function saveAdmin(request,response){
    try {
        const encryptedPassword=bcrypt.hashSync(request.body.password,12)
        request.body['password'] = encryptedPassword;
        const admin=new Admin(request.body);
        const s=await admin.save();
        response.status(StatusCodes.CREATED).json(s);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error saving admin'});
    }
}

export async function login(request,response){
    try {
        const admin=await Admin.findOne({phone:request.body.phone});
        if (admin) {
            if(bcrypt.compareSync(request.body.password,admin.password)){
                const token=jwt.sign({adminId:admin._id},'hello123')                    
                response.status(StatusCodes.OK).json({token:token})
            }
            else{
                response.status(StatusCodes.BAD_REQUEST).json({message:'Invalid Password'});
            }
        } else {
            response.status(StatusCodes.BAD_REQUEST).json({message:'Phone not found'});
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error in login'});
    }
}
