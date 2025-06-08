import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncuestaSatisfaccionModule } from './encuesta-satisfaccion/encuesta-satisfaccion.module';
import { IncidenteModule } from './incidente/incidente.module';
import { LogSistemaModule } from './log-sistema/log-sistema.module';
import { ReporteUsoModule } from './reporte-uso/reporte-uso.module';
import { SoporteClienteModule } from './soporte-cliente/soporte-cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoporteCliente } from './soporte-cliente/entities/soporte-cliente.entity';
import { ReporteUso } from './reporte-uso/entities/reporte-uso.entity';
import { LogSistema } from './log-sistema/entities/log-sistema.entity';
import { Incidente } from './incidente/entities/incidente.entity';
import { EncuestaSatisfaccion } from './encuesta-satisfaccion/entities/encuesta-satisfaccion.entity';
import { AuthModule } from './auth/auth.module';
import { EncuestaSatisfaccionController } from './encuesta-satisfaccion/encuesta-satisfaccion.controller';
import { Alquiler } from './entity/alquiler.entity';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/entities/cliente.entity';

@Module({
  imports: [
    EncuestaSatisfaccionModule,
    IncidenteModule,
    LogSistemaModule,
    ReporteUsoModule,
    SoporteClienteModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-us-east-2.pooler.supabase.com',
      port: 6543,
      username: 'postgres.pjegypemewddlxpgnvoy',
      password: '123123',
      database: 'postgres',
      entities: [SoporteCliente, ReporteUso, LogSistema, Incidente, EncuestaSatisfaccion, Alquiler, Cliente
      ],
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        } }
      }),
    AuthModule,
    ClienteModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
