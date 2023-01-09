import express, { Request, Response } from 'express';
import userHandlerRoute from './userHandler';
import productHandlerRoute from './productHandler';
import orderHandlerRoute from './orderHandler';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.status(200).send('main api route');
});

routes.use('/users', userHandlerRoute);
routes.use('/products', productHandlerRoute);
routes.use('/orders', orderHandlerRoute);

export default routes;
