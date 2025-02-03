import { ErrorResponse } from './base-response';

export const createErrorResponse = (
  message: string,
  errorCode: number = 400,
  error?: string,
  details?: string,
): ErrorResponse => {
  return new ErrorResponse(message, errorCode, error, details);
};
