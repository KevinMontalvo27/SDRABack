import { GenericEntity } from 'src/generic/generic.entity';
import { Unidades } from 'src/unidades/entities/unidades.entity';
export declare class Materia extends GenericEntity {
    id: number;
    id_profesor: string;
    nombre: string;
    unidades: Unidades[];
    grupo: number;
}
