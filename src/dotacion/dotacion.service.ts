import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateDotacionDto } from './dto/create-dotacion.dto';
import { UpdateDotacionDto } from './dto/update-dotacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dotacion } from './entities/dotacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DotacionService {
  constructor(
    @InjectRepository(Dotacion)
    private dotacionRepository: Repository<Dotacion>,
  ) {}

  async create(createDotacionDto: CreateDotacionDto) {
    try {
      const newDotacion = this.dotacionRepository.create(createDotacionDto);
      return await this.dotacionRepository.save(newDotacion);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error creating dotacion',
        error.message,
      );
    }
  }

  async findAll() {
    try {
      return await this.dotacionRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        'Error fetching dotaciones',
        error.message,
      );
    }
  }

  async findOne(id: number) {
    try {
      const dotacion = await this.dotacionRepository.findOne({
        where: { id },
      });
      if (!dotacion) {
        throw new NotFoundException(`Dotacion with ID ${id} not found`);
      }
      return dotacion;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Error fetching dotacion',
        error.message,
      );
    }
  }

  async update(id: number, updateDotacionDto: UpdateDotacionDto) {
    try {
      const updateResult = await this.dotacionRepository.update(
        id,
        updateDotacionDto,
      );
      if (updateResult.affected === 0) {
        throw new NotFoundException(`Dotacion with ID ${id} not found`);
      }
      return await this.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Error updating dotacion',
        error.message,
      );
    }
  }

  async remove(id: number) {
    try {
      const deleteResult = await this.dotacionRepository.delete(id);
      if (deleteResult.affected === 0) {
        throw new NotFoundException(`Dotacion with ID ${id} not found`);
      }
      return { message: `Dotacion with ID ${id} successfully deleted` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Error deleting dotacion',
        error.message,
      );
    }
  }
}
