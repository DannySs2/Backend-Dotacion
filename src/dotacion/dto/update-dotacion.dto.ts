import { PartialType } from '@nestjs/mapped-types';
import { CreateDotacionDto } from './create-dotacion.dto';

export class UpdateDotacionDto extends PartialType(CreateDotacionDto) {}
