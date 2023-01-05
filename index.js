import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import productRouter from './src/routers/ProductRouter.js';
import departmentRouter from './src/routers/DepartmentRouter.js';
import studentRouter from './src/routers/StudentRouter.js';
import adminRouter from './src/routers/AdminRouter.js';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log('Database connection successful');
}).catch(()=>{
    console.log("Error connecting to Database");
});
app.use(productRouter);
app.use(departmentRouter);
app.use(studentRouter);
app.use(adminRouter)
app.listen(process.env.SERVER_PORT,() => {
    console.log('listening on port ' + process.env.SERVER_PORT);
})