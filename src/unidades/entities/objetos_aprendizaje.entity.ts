import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { Temas } from './temas.entity';
import { EstiloObjeto } from './estilo_objeto.entity';

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

    // Relación con Tema
    @ManyToOne(() => Temas)
    @JoinColumn({ name: 'id_tema', referencedColumnName: 'id' })
    tema: Temas;
        // Relación con EstiloObjeto
    @ManyToOne(() => EstiloObjeto, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'id_type', referencedColumnName: 'id' })
    estiloObjeto: EstiloObjeto;
}