import { Module } from '@nestjs/common';
import { DotacionService } from './dotacion.service';
import { DotacionController } from './dotacion.controller';

@Module({
  controllers: [DotacionController],
  providers: [DotacionService],
})
export class DotacionModule {}
