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
import { SoporteClienteService } from './soporte-cliente.service';
import { CreateSoporteClienteDto } from './dto/create-soporte-cliente.dto';
import { UpdateSoporteClienteDto } from './dto/update-soporte-cliente.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Soporte al Cliente') 
@ApiBearerAuth() 
// @UseGuards(JwtAuthGuard)
@Controller('soporte-cliente')
export class SoporteClienteController {
  constructor(private readonly soporteClienteService: SoporteClienteService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una solicitud de soporte' })
  @ApiResponse({ status: 201, description: 'Solicitud de soporte creada' })
  create(@Body() createSoporteClienteDto: CreateSoporteClienteDto) {
    return this.soporteClienteService.create(createSoporteClienteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las solicitudes de soporte' })
  @ApiResponse({ status: 200, description: 'Lista de solicitudes de soporte' })
  findAll() {
    return this.soporteClienteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una solicitud de soporte por ID' })
  @ApiResponse({ status: 200, description: 'Solicitud de soporte encontrada' })
  @ApiResponse({ status: 404, description: 'Solicitud no encontrada' })
  findOne(@Param('id') id: string) {
    return this.soporteClienteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una solicitud de soporte por ID' })
  @ApiResponse({ status: 200, description: 'Solicitud de soporte actualizada' })
  @ApiResponse({ status: 404, description: 'Solicitud no encontrada' })
  update(@Param('id') id: string, @Body() updateSoporteClienteDto: UpdateSoporteClienteDto) {
    return this.soporteClienteService.update(+id, updateSoporteClienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una solicitud de soporte por ID' })
  @ApiResponse({ status: 200, description: 'Solicitud de soporte eliminada' })
  @ApiResponse({ status: 404, description: 'Solicitud no encontrada' })
  remove(@Param('id') id: string) {
    return this.soporteClienteService.remove(+id);
  }
}
