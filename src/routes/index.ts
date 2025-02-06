import type { Application } from 'express';
import authRouter from '../modules/auth/routes/auth.routes';

export const RegisterRoutes = (app: Application): void => {
  app.use('/api/auth', authRouter);
};
