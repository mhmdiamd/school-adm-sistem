import { injectable } from 'inversify';
import { IAuthRepository } from '../interfaces/auth.repository.interface';
import { User } from '@prisma/client';
import { prisma } from '../../../config/prisma';

@injectable()
export class AuthRepository implements IAuthRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
      omit: {
        id: true,
        password: true,
      },
    });

    return user as User;
  }

  async createUser(newUser: User): Promise<User> {
    const user = await prisma.user.create({
      data: newUser,
      omit: {
        id: true,
        password: true,
      },
    });

    return user as User;
  }
}
