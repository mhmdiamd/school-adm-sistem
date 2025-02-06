import { AppError } from './app-error';

export class ConflictError extends AppError {
  constructor(message: string = 'Conflict Error', _details?: any) {
    super(409, message);
  }
}
