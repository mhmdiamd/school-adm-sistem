import { AppError } from './app-error';

export class ValidationError extends AppError {
  constructor(message: string = 'Validation Error', _details?: any) {
    super(400, message);
  }
}
