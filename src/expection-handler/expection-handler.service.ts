import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpectionHandlerService {
  getHello(): string {
    return 'Hello World!';
  }
}
