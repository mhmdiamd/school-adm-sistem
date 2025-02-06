import { inject, injectable } from 'inversify';
import { TYPES } from '../../../common/types';
import { IAuthService } from '../interfaces/auth.service.interface';
import { NextFunction, Request, Response } from 'express';
import { createSuccessResponse } from '../../../common/response-handler/success-response';
import { User } from '@prisma/client';
import { AppError } from '../../../common/error-handler/app-error';

@injectable()
export class AuthController {
  constructor(@inject(TYPES.AuthService) private authService: IAuthService) {}

  async register(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const userRegisterDto: User = req.body;
    try {
      const user = await this.authService.register(userRegisterDto);
      const successData = createSuccessResponse<User>(user, 'Register success');
      res.status(201).json(successData);
    } catch (err: any) {
      if (err instanceof AppError) {
        res.status(500).json({
          status: 'error',
          message: err.message,
        });
      }

      next(err);
    }
  }
}
