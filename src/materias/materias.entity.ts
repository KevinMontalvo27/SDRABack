import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { Profesor } from 'src/profesor/profesor.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { Unidades } from 'src/unidades/entities/unidades.entity';

@Entity()
export class Materia extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_profesor: string;

  @Column()
  nombre: string;

  //Relacion con unidades
  @OneToMany(() => Unidades, unidad => unidad.materia)
  unidades: Unidades[];

  @Column({ type: 'int', nullable: true })
  grupo: number;

}
