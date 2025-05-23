import { Test, TestingModule } from '@nestjs/testing';
import { ReporteUsoService } from './reporte-uso.service';

describe('ReporteUsoService', () => {
  let service: ReporteUsoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporteUsoService],
    }).compile();

    service = module.get<ReporteUsoService>(ReporteUsoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
