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
import { ReporteUsoService } from './reporte-uso.service';
import { CreateReporteUsoDto } from './dto/create-reporte-uso.dto';
import { UpdateReporteUsoDto } from './dto/update-reporte-uso.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Reportes de Uso') 
@ApiBearerAuth() 
@UseGuards(JwtAuthGuard)
@Controller('reporte-uso')
export class ReporteUsoController {
  constructor(private readonly reporteUsoService: ReporteUsoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo reporte de uso' })
  @ApiResponse({ status: 201, description: 'Reporte de uso creado exitosamente' })
  create(@Body() createReporteUsoDto: CreateReporteUsoDto) {
    return this.reporteUsoService.create(createReporteUsoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los reportes de uso' })
  @ApiResponse({ status: 200, description: 'Lista de reportes de uso' })
  findAll() {
    return this.reporteUsoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un reporte de uso por ID' })
  @ApiResponse({ status: 200, description: 'Reporte de uso encontrado' })
  @ApiResponse({ status: 404, description: 'Reporte de uso no encontrado' })
  findOne(@Param('id') id: string) {
    return this.reporteUsoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un reporte de uso por ID' })
  @ApiResponse({ status: 200, description: 'Reporte de uso actualizado' })
  @ApiResponse({ status: 404, description: 'Reporte de uso no encontrado' })
  update(@Param('id') id: string, @Body() updateReporteUsoDto: UpdateReporteUsoDto) {
    return this.reporteUsoService.update(+id, updateReporteUsoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un reporte de uso por ID' })
  @ApiResponse({ status: 200, description: 'Reporte de uso eliminado' })
  @ApiResponse({ status: 404, description: 'Reporte de uso no encontrado' })
  remove(@Param('id') id: string) {
    return this.reporteUsoService.remove(+id);
  }
}
