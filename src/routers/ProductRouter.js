import express from 'express';
import { deleteProductById, findAllProducts, findProductByObjectId, findProductByPid, saveProduct, updateProduct } from '../controllers/ProductController.js';
import { verifyToken } from '../middlewares/VerifyToken.js';

const productRouter=express.Router();

productRouter.post('/products',saveProduct);
productRouter.get('/products',findAllProducts);
productRouter.get('/products/:pid',findProductByPid);
productRouter.get('/products/object-id/:id',findProductByObjectId);
productRouter.put('/products/update/:id',updateProduct);
productRouter.delete('/products/:id',deleteProductById);

export default productRouter;