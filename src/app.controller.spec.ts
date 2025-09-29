import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return object with status, version and title', () => {
      const result = appController.getHello();
      expect(result).toEqual({
        status: 'success',
        version: '1.0',
        title: 'Hello World!'
      });
    });
  });
});
