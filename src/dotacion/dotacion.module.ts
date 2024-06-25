import { Module } from '@nestjs/common';
import { DotacionService } from './dotacion.service';
import { DotacionController } from './dotacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dotacion } from './entities/dotacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dotacion])],
  controllers: [DotacionController],
  providers: [DotacionService],
})
export class DotacionModule {}
