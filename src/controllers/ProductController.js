import { Product } from "../models/ProductModel.js";
import {StatusCodes} from 'http-status-codes';

export async function saveProduct(request,response){
    try {
        const product=new Product(request.body);
        const savedProduct=await product.save();
        response.status(StatusCodes.CREATED).json(savedProduct);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in saving product'});
    }
}

export async function findAllProducts(request,response){
    try {
        const products=await Product.find();
        response.status(StatusCodes.OK).json(products);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in fetching products'});
    }
}

export async function findProductByPid(request,response){
    try {
        const product=await Product.findOne({pid:request.params.pid});
        response.status(StatusCodes.OK).json(product);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in fetching products'});
    }
}

export async function findProductByObjectId(request, response){
    try {
        const product=await Product.findById(request.params.id)
        response.status(StatusCodes.OK).json(product)
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in fetching product'});
    }
}

export async function deleteProductById(request, response){
    try {
        await Product.findByIdAndDelete(request.params.id);
        response.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in deleting product'});
    }
}

export async function updateProduct(request, response){
    try {
        await Product.findByIdAndUpdate(request.params.id,request.body);
        response.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in updating product'});
    }
}

