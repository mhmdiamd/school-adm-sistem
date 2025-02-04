import { z } from 'zod';

export const registerValidation = z.object({
  first_name: z.string({ required_error: 'Name is required' }),
  last_name: z.optional(z.string({ required_error: 'Name is required' })),
  email: z.string({ required_error: 'email is required' }),
  password: z.string({ required_error: 'password is required' }),
});

export const loginValidation = z.object({
  email: z.string({ required_error: 'email is required' }),
  password: z.string({ required_error: 'password is required' }),
});
