import { Module } from '@nestjs/common';
import { EncuestaSatisfaccionService } from './encuesta-satisfaccion.service';
import { EncuestaSatisfaccionController } from './encuesta-satisfaccion.controller';

@Module({
  controllers: [EncuestaSatisfaccionController],
  providers: [EncuestaSatisfaccionService],
})
export class EncuestaSatisfaccionModule {}
