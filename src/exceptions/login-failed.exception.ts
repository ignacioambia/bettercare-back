import { HttpException, HttpStatus } from '@nestjs/common';

export class LoginFailedException extends HttpException {
  constructor(message: string = 'Login failed') {
    super(message, HttpStatus.FORBIDDEN);
  }
}
