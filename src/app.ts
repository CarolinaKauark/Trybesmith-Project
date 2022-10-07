import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import loginRouter from './routes/login.routes';
import orderRouter from './routes/order.routes';
import productRouter from './routes/product.routes';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

export default app;
