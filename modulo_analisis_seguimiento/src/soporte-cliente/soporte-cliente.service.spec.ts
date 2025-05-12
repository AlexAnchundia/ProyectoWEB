import { Test, TestingModule } from '@nestjs/testing';
import { SoporteClienteService } from './soporte-cliente.service';

describe('SoporteClienteService', () => {
  let service: SoporteClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoporteClienteService],
    }).compile();

    service = module.get<SoporteClienteService>(SoporteClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
