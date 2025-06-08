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
import { IncidenteService } from './incidente.service';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Incidentes')
@ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('incidente')
export class IncidenteController {
  constructor(private readonly incidenteService: IncidenteService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo incidente' })
  @ApiResponse({ status: 201, description: 'Incidente creado exitosamente' })
  create(@Body() createIncidenteDto: CreateIncidenteDto) {
    return this.incidenteService.create(createIncidenteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los incidentes' })
  @ApiResponse({ status: 200, description: 'Lista de incidentes' })
  findAll() {
    return this.incidenteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un incidente por ID' })
  @ApiResponse({ status: 200, description: 'Incidente encontrado' })
  @ApiResponse({ status: 404, description: 'Incidente no encontrado' })
  findOne(@Param('id') id: string) {
    return this.incidenteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un incidente por ID' })
  @ApiResponse({ status: 200, description: 'Incidente actualizado' })
  @ApiResponse({ status: 404, description: 'Incidente no encontrado' })
  update(@Param('id') id: string, @Body() updateIncidenteDto: UpdateIncidenteDto) {
    return this.incidenteService.update(+id, updateIncidenteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un incidente por ID' })
  @ApiResponse({ status: 200, description: 'Incidente eliminado' })
  @ApiResponse({ status: 404, description: 'Incidente no encontrado' })
  remove(@Param('id') id: string) {
    return this.incidenteService.remove(+id);
  }
}
