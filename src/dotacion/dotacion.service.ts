import { Injectable } from '@nestjs/common';
import { CreateDotacionDto } from './dto/create-dotacion.dto';
import { UpdateDotacionDto } from './dto/update-dotacion.dto';

@Injectable()
export class DotacionService {
  create(createDotacionDto: CreateDotacionDto) {
    return 'This action adds a new dotacion';
  }

  findAll() {
    return `This action returns all dotacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dotacion`;
  }

  update(id: number, updateDotacionDto: UpdateDotacionDto) {
    return `This action updates a #${id} dotacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} dotacion`;
  }
}
