import { Module } from '@nestjs/common';
import { LogSistemaService } from './log-sistema.service';
import { LogSistemaController } from './log-sistema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogSistema } from './entities/log-sistema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogSistema])],
  exports: [TypeOrmModule],
  controllers: [LogSistemaController],
  providers: [LogSistemaService],
})
export class LogSistemaModule { }
