import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DotacionService } from './dotacion.service';
import { CreateDotacionDto } from './dto/create-dotacion.dto';
import { UpdateDotacionDto } from './dto/update-dotacion.dto';

@Controller('dotacion')
export class DotacionController {
  constructor(private readonly dotacionService: DotacionService) {}

  @Post()
  create(@Body() createDotacionDto: CreateDotacionDto) {
    return this.dotacionService.create(createDotacionDto);
  }

  @Get()
  findAll() {
    return this.dotacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dotacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDotacionDto: UpdateDotacionDto) {
    return this.dotacionService.update(+id, updateDotacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dotacionService.remove(+id);
  }
}
