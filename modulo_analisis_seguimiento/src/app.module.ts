import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncuestaSatisfaccionModule } from './encuesta-satisfaccion/encuesta-satisfaccion.module';
import { IncidenteModule } from './incidente/incidente.module';
import { LogSistemaModule } from './log-sistema/log-sistema.module';
import { ReporteUsoModule } from './reporte-uso/reporte-uso.module';
import { SoporteClienteModule } from './soporte-cliente/soporte-cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    EncuestaSatisfaccionModule,
    IncidenteModule,
    LogSistemaModule,
    ReporteUsoModule,
    SoporteClienteModule,
    // postgresql://postgres:[YOUR-PASSWORD]@db.pjegypemewddlxpgnvoy.supabase.co:5432/postgres
    TypeOrmModule.forRoot({
                                                                                                                            
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
