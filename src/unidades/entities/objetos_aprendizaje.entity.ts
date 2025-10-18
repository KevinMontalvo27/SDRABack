import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { Temas } from './temas.entity';

@Entity()
export class ObjetosAprendizaje extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int'})
    id_tema: number;

    @Column({type: 'int'})
    id_type: number;

    @Column({type: 'varchar'})
    nombre: string;

    @Column({type: 'varchar'})
    descripcion: string;

    @Column({type: 'varchar'})
    contenido: string;

    @Column({ type: 'int', default: 1 })
    orden: number;
}