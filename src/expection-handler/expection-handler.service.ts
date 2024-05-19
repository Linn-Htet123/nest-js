import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpectionHandlerService {
  getHello(): string {
    return 'Hello World!';
  }

  getError(): Error {
    throw new Error('testing error');
  }
}
