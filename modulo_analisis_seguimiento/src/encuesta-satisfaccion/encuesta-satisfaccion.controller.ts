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
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { EncuestaSatisfaccionService } from './encuesta-satisfaccion.service';
import { CreateEncuestaSatisfaccionDto } from './dto/create-encuesta-satisfaccion.dto';
import { UpdateEncuestaSatisfaccionDto } from './dto/update-encuesta-satisfaccion.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Encuesta Satisfacción') 
@ApiBearerAuth() 
@UseGuards(JwtAuthGuard)
@Controller('encuesta-satisfaccion')
export class EncuestaSatisfaccionController {
  constructor(
    private readonly encuestaSatisfaccionService: EncuestaSatisfaccionService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear una encuesta de satisfacción' })
  @ApiResponse({ status: 201, description: 'Encuesta creada exitosamente' })
  create(@Body() createEncuestaSatisfaccionDto: CreateEncuestaSatisfaccionDto) {
    return this.encuestaSatisfaccionService.create(createEncuestaSatisfaccionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las encuestas de satisfacción' })
  @ApiResponse({ status: 200, description: 'Listado obtenido correctamente' })
  findAll() {
    return this.encuestaSatisfaccionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una encuesta por ID' })
  @ApiResponse({ status: 200, description: 'Encuesta obtenida correctamente' })
  @ApiResponse({ status: 404, description: 'Encuesta no encontrada' })
  findOne(@Param('id') id: string) {
    return this.encuestaSatisfaccionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una encuesta por ID' })
  @ApiResponse({ status: 200, description: 'Encuesta actualizada correctamente' })
  @ApiResponse({ status: 404, description: 'Encuesta no encontrada' })
  update(
    @Param('id') id: string,
    @Body() updateEncuestaSatisfaccionDto: UpdateEncuestaSatisfaccionDto,
  ) {
    return this.encuestaSatisfaccionService.update(+id, updateEncuestaSatisfaccionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una encuesta por ID' })
  @ApiResponse({ status: 200, description: 'Encuesta eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'Encuesta no encontrada' })
  remove(@Param('id') id: string) {
    return this.encuestaSatisfaccionService.remove(+id);
  }
}
