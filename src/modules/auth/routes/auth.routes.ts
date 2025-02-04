import express from 'express';
import { container } from '../../../common/di-container';
import { AuthController } from '../controllers/auth.controller';

const authRouter = express.Router();
const authController = container.get<AuthController>(AuthController);

authRouter.post('/register', authController.register.bind(authController));

export default authRouter;
