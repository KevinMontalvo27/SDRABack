import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AlumnosCuestionarios } from 'src/alumnos_cuestionarios/alumnos_cuestionarios.entity';
@Entity()
export class Alumnos extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  nro_cuenta: number;

  @Column({ type: 'varchar' })
  contraseña: string;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  apellido_1: string;

  @Column({ type: 'varchar' })
  apellido_2: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date | null;

  @Column({ type: 'int' })
  grupo: number;

    @OneToMany(() => AlumnosCuestionarios, alumnosCuestionarios => alumnosCuestionarios.alumno)
    alumnosCuestionarios: AlumnosCuestionarios[];
}
