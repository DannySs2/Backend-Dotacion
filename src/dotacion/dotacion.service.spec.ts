import { Test, TestingModule } from '@nestjs/testing';
import { DotacionService } from './dotacion.service';

describe('DotacionService', () => {
  let service: DotacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DotacionService],
    }).compile();

    service = module.get<DotacionService>(DotacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
