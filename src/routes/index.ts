import { Application } from 'express';
import authRouter from '../modules/auth/auth.routes';

export const RegisterRoutes = (app: Application): void => {
  app.use('/api/auth', authRouter);
};
