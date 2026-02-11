import { Grupos } from '../grupos/grupos.entity';
import { GenericEntity } from 'src/generic/generic.entity';
export declare class Carreras extends GenericEntity {
    id: number;
    id_carrera: string;
    nombre: string;
    grupos: Grupos[];
}
