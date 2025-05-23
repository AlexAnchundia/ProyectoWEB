import { Test, TestingModule } from '@nestjs/testing';
import { ReporteUsoController } from './reporte-uso.controller';
import { ReporteUsoService } from './reporte-uso.service';

describe('ReporteUsoController', () => {
  let controller: ReporteUsoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporteUsoController],
      providers: [ReporteUsoService],
    }).compile();

    controller = module.get<ReporteUsoController>(ReporteUsoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
