import { GenericEntity } from "src/generic/generic.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Unidades } from "./unidades.entity";


@Entity()
export class Temas extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    id_unidad: number;

    @Column({ type: 'varchar' })
    nombre: string;

    @Column({ type: 'varchar' })
    descripcion_tema: string;

    @Column({ type: 'int' })
    numero_tema: number;

    //Relacion con Unidades
    @ManyToOne(() => Unidades, unidad => unidad.temas)
    @JoinColumn({ name: 'id_unidad', referencedColumnName: 'id' })
    unidad: Unidades;
}