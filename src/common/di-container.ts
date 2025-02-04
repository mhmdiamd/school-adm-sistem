import { Container } from 'inversify';
import { TYPES } from './types';
import { IAuthRepository } from '../modules/auth/interfaces/auth.repository.interface';
import { AuthRepository } from '../modules/auth/repositories/auth.repository';
import { IAuthService } from '../modules/auth/interfaces/auth.service.interface';
import { AuthService } from '../modules/auth/services/auth.service';
import { AuthController } from '../modules/auth/controllers/auth.controller';

const container = new Container();

// Bind service
container.bind<IAuthService>(TYPES.AuthService).to(AuthService);
// Bind Repository
container.bind<IAuthRepository>(TYPES.AuthRepository).to(AuthRepository);
// Bind controller
container.bind<AuthController>(AuthController).toSelf();

export { container };
