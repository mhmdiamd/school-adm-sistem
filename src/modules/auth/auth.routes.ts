import express, { Request, Response } from 'express';
import logger from '../../common/logger';

const authRouter = express.Router();

authRouter.get('/', (req: Request, res: Response) => {
  logger.info('Success get data user registred');
  res.json({
    message: 'tes',
  });
});

export default authRouter;
