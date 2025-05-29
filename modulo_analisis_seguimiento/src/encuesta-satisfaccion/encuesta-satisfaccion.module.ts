import { Module } from '@nestjs/common';
import { EncuestaSatisfaccionService } from './encuesta-satisfaccion.service';
import { EncuestaSatisfaccionController } from './encuesta-satisfaccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncuestaSatisfaccion } from './entities/encuesta-satisfaccion.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([EncuestaSatisfaccion])],
  exports: [ TypeOrmModule ],
  controllers: [EncuestaSatisfaccionController],
  providers: [EncuestaSatisfaccionService],
})
export class EncuestaSatisfaccionModule {}
