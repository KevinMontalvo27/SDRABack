import { GenericEntity } from "src/generic/generic.entity";
import { Materia } from "src/materias/materias.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Temas } from "./temas.entity";


@Entity()
export class Unidades extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    id_materia: number;

    @Column({ type: 'varchar' })
    nombre: string;

    @Column({ type: 'varchar' })
    descripcion: string;

    @Column({ type: 'int' })
    numero_unidad: number;

    //Relacion con Materia
    @ManyToOne(() => Materia, materia => materia.unidades)
    @JoinColumn({ name: 'id_materia', referencedColumnName: 'id' })
    materia: Materia;

    //Relacion con Temas
    @OneToMany(() => Temas, tema => tema.unidad)
    temas: Temas[];


}