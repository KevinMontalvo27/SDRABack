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
    descripcion: string;

    @Column({ type: 'int' })
    numero_tema: number;

    //Relacion con Unidades
    @ManyToOne(() => Unidades, unidad => unidad.temas)
    @JoinColumn({ name: 'id_unidad', referencedColumnName: 'id' })
    unidad: Unidades;

    @Column({ 
        type: 'json',
        nullable: false,  
        default: () => "'[]'",  
        transformer: {
            to: (value: string[] | null): string => {
                if (!value || (Array.isArray(value) && value.length === 0)) {
                    return '[]';
                }
                return JSON.stringify(value);
            },
            from: (value: string | null): string[] => {
                if (!value || value === '' || value === 'null') {
                    return [];
                }
                try {
                    return typeof value === 'string' ? JSON.parse(value) : value;
                } catch (error) {
                    console.error('Error parsing subtemas:', error);
                    return [];
                }
            }
        }
    })
    subtemas: string[];
}