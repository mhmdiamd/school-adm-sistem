import { User } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { IAuthService } from '../interfaces/auth.service.interface';
import { TYPES } from '../../../common/types';
import { IAuthRepository } from '../interfaces/auth.repository.interface';
import logger from '../../../common/logger';
import { registerValidation } from '../validation/auth.validatoin';
import { ZodError } from 'zod';
import { convertErrorValidationToList } from '../../../helpers/converter/convertErrorValidationToList';
import { ConflictError } from '../../../common/error-handler/conflict-error';
import { ValidationError } from '../../../common/error-handler/validation-error';

@injectable()
export class AuthService implements IAuthService {
  constructor(
    @inject(TYPES.AuthRepository) private authRepository: IAuthRepository,
  ) {}

  async register(userDto: User): Promise<User> {
    try {
      // validate
      const validated = registerValidation.parse(userDto);

      // Check is user already exist
      const findUser = await this.authRepository.findByEmail(userDto.email);
      if (findUser) {
        logger.error(
          `[Service - register] Error : User already exist => ${JSON.stringify(findUser)}`,
        );
        throw new ConflictError('User already exist');
      }

      // hit db
      const newUser = await this.authRepository.createUser(validated as User);
      logger.info(
        `[Service - register] Success create user with this data ${JSON.stringify(newUser)}`,
      );

      return newUser;
    } catch (error: any) {
      if (error instanceof ZodError) {
        const validationError = convertErrorValidationToList(error);
        logger.error(
          `[Service - register] Validation Error : ${JSON.stringify(validationError)}`,
        );
        throw new ValidationError('Data is invalid', validationError);
      }

      throw error;
    }
  }
}
