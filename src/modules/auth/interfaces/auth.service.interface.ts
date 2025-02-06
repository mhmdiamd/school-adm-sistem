import type { User } from '@prisma/client';

export interface IAuthService {
  register(userRegisterDto: User): Promise<User>;
}
