import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReporteUsoService } from './reporte-uso.service';
import { CreateReporteUsoDto } from './dto/create-reporte-uso.dto';
import { UpdateReporteUsoDto } from './dto/update-reporte-uso.dto';

@Controller('reporte-uso')
export class ReporteUsoController {
  constructor(private readonly reporteUsoService: ReporteUsoService) {}

  @Post()
  create(@Body() createReporteUsoDto: CreateReporteUsoDto) {
    return this.reporteUsoService.create(createReporteUsoDto);
  }

  @Get()
  findAll() {
    return this.reporteUsoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporteUsoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReporteUsoDto: UpdateReporteUsoDto) {
    return this.reporteUsoService.update(+id, updateReporteUsoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reporteUsoService.remove(+id);
  }
}
