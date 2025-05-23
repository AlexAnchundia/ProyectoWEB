import { Test, TestingModule } from '@nestjs/testing';
import { SoporteClienteController } from './soporte-cliente.controller';
import { SoporteClienteService } from './soporte-cliente.service';

describe('SoporteClienteController', () => {
  let controller: SoporteClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoporteClienteController],
      providers: [SoporteClienteService],
    }).compile();

    controller = module.get<SoporteClienteController>(SoporteClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
