import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LogSistemaService } from './log-sistema.service';
import { CreateLogSistemaDto } from './dto/create-log-sistema.dto';
import { UpdateLogSistemaDto } from './dto/update-log-sistema.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Logs del Sistema') 
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('log-sistema')
export class LogSistemaController {
  constructor(private readonly logSistemaService: LogSistemaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo log del sistema' })
  @ApiResponse({ status: 201, description: 'Log creado exitosamente' })
  create(@Body() createLogSistemaDto: CreateLogSistemaDto) {
    return this.logSistemaService.create(createLogSistemaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los logs del sistema' })
  @ApiResponse({ status: 200, description: 'Lista de logs' })
  findAll() {
    return this.logSistemaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un log del sistema por ID' })
  @ApiResponse({ status: 200, description: 'Log encontrado' })
  @ApiResponse({ status: 404, description: 'Log no encontrado' })
  findOne(@Param('id') id: string) {
    return this.logSistemaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un log del sistema por ID' })
  @ApiResponse({ status: 200, description: 'Log actualizado' })
  @ApiResponse({ status: 404, description: 'Log no encontrado' })
  update(@Param('id') id: string, @Body() updateLogSistemaDto: UpdateLogSistemaDto) {
    return this.logSistemaService.update(+id, updateLogSistemaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un log del sistema por ID' })
  @ApiResponse({ status: 200, description: 'Log eliminado' })
  @ApiResponse({ status: 404, description: 'Log no encontrado' })
  remove(@Param('id') id: string) {
    return this.logSistemaService.remove(+id);
  }
}
