import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dotacion' })
export class Dotacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  cargo: string;

  @Column()
  fechaIngreso: Date;

  @Column()
  fechaRetiro: Date;

  @Column()
  estado: string;

  @Column()
  observaciones: string;
}
