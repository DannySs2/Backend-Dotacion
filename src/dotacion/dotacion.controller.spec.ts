import { Test, TestingModule } from '@nestjs/testing';
import { DotacionController } from './dotacion.controller';
import { DotacionService } from './dotacion.service';

describe('DotacionController', () => {
  let controller: DotacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DotacionController],
      providers: [DotacionService],
    }).compile();

    controller = module.get<DotacionController>(DotacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
