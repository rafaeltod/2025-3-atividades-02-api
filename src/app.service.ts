import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { status: string; version: string; title: string } {
    return {
      status: 'online',
      version: '0.0.1',
      title: 'api de tarefas de infoweb 2025',
    };
  }
}
