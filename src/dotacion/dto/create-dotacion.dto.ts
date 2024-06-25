import {
  IsString,
  IsDate,
  IsNotEmpty,
  Length,
  IsOptional,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDotacionDto {
  @IsString()
  @IsNotEmpty({ message: "El campo 'nombre' es requerido" })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: "El campo 'nombre' sólo acepta letras y espacios en blanco",
  })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: "El campo 'apellido' es requerido" })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: "El campo 'apellido' sólo acepta letras y espacios en blanco",
  })
  apellido: string;

  @IsString()
  @IsNotEmpty({ message: "El campo 'cargo' es requerido" })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: "El campo 'cargo' sólo acepta letras y espacios en blanco",
  })
  cargo: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty({ message: "El campo 'fechaIngreso' es requerido" })
  fechaIngreso: Date;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  fechaRetiro: Date;

  @IsString()
  @IsNotEmpty({ message: "El campo 'estado' es requerido" })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: "El campo 'estado' sólo acepta letras y espacios en blanco",
  })
  estado: string;

  @IsString()
  @IsOptional()
  observaciones: string;
}
