// src/alumnos_cuestionarios/alumnos_cuestionarios.entity.ts

import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { Alumnos } from 'src/alumnos/alumnos.entity';
import { Cuestionarios } from 'src/cuestionarios/cuestionarios.entity';

@Entity('alumnos_cuestionarios')
export class AlumnosCuestionarios extends GenericEntity {
  // Ya NO necesitas declarar id, created, deleted, update
  // Vienen de GenericEntity

  @Column({ type: 'int' })
  nro_cuenta: number;

  @Column({ type: 'int' })
  id_cuestionario: number;

  @Column({ type: 'boolean', default: false })
  completado: boolean;

  @Column({ type: 'datetime', nullable: true })
  fecha_completado: Date;

  // Relaciones
  @ManyToOne(() => Alumnos, alumno => alumno.alumnosCuestionarios)
  @JoinColumn({ name: 'nro_cuenta' })
  alumno: Alumnos;

  @ManyToOne(() => Cuestionarios, cuestionario => cuestionario.alumnosCuestionarios)
  @JoinColumn({ name: 'id_cuestionario' })
  cuestionario: Cuestionarios;
}