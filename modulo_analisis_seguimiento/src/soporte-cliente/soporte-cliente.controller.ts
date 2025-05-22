import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoporteClienteService } from './soporte-cliente.service';
import { CreateSoporteClienteDto } from './dto/create-soporte-cliente.dto';
import { UpdateSoporteClienteDto } from './dto/update-soporte-cliente.dto';

@Controller('soporte-cliente')
export class SoporteClienteController {
  constructor(private readonly soporteClienteService: SoporteClienteService) {}

  @Post()
  create(@Body() createSoporteClienteDto: CreateSoporteClienteDto) {
    return this.soporteClienteService.create(createSoporteClienteDto);
  }

  @Get()
  findAll() {
    return this.soporteClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soporteClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoporteClienteDto: UpdateSoporteClienteDto) {
    return this.soporteClienteService.update(+id, updateSoporteClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soporteClienteService.remove(+id);
  }
}
