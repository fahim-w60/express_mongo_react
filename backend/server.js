import express from 'express';
import dotenv from 'dotenv';
const port = 5000;
import connectDB from './config/db.js';

connectDB();

dotenv.config();


import productdRoute from './routes/productRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

const app = express();

app.get('/', (req,res) => {
    res.send('Api Is Running..');
})


app.use('/api/products',productdRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(port,() => console.log(`server running....`));