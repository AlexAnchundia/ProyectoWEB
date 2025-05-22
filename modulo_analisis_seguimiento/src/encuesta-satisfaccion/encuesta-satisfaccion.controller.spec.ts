import { Test, TestingModule } from '@nestjs/testing';
import { EncuestaSatisfaccionController } from './encuesta-satisfaccion.controller';
import { EncuestaSatisfaccionService } from './encuesta-satisfaccion.service';

describe('EncuestaSatisfaccionController', () => {
  let controller: EncuestaSatisfaccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncuestaSatisfaccionController],
      providers: [EncuestaSatisfaccionService],
    }).compile();

    controller = module.get<EncuestaSatisfaccionController>(EncuestaSatisfaccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
