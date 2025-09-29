import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { status: string; version: string; title: string } {
    return {
      status: 'success',
      version: '1.0',
      title: 'Hello World!'
    };
  }
}
