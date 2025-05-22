import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncuestaSatisfaccionService } from './encuesta-satisfaccion.service';
import { CreateEncuestaSatisfaccionDto } from './dto/create-encuesta-satisfaccion.dto';
import { UpdateEncuestaSatisfaccionDto } from './dto/update-encuesta-satisfaccion.dto';

@Controller('encuesta-satisfaccion')
export class EncuestaSatisfaccionController {
  constructor(private readonly encuestaSatisfaccionService: EncuestaSatisfaccionService) {}

  @Post()
  create(@Body() createEncuestaSatisfaccionDto: CreateEncuestaSatisfaccionDto) {
    return this.encuestaSatisfaccionService.create(createEncuestaSatisfaccionDto);
  }

  @Get()
  findAll() {
    return this.encuestaSatisfaccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encuestaSatisfaccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncuestaSatisfaccionDto: UpdateEncuestaSatisfaccionDto) {
    return this.encuestaSatisfaccionService.update(+id, updateEncuestaSatisfaccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encuestaSatisfaccionService.remove(+id);
  }
}
