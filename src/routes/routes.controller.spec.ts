import { Test, TestingModule } from '@nestjs/testing';

import { RoutesController } from './routes.controller';

describe('RoutesController', () => {
  let controller: RoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutesController],
    }).compile();

    controller = module.get<RoutesController>(RoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await controller.getHello()).toBe('Hello World!');
    });
  });
});
