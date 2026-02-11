import { Carreras } from '../carreras/carreras.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { EstrategiaEnsenanza } from '../estrategias_enseñanza/estrategias_enseñanza.entity';
export declare class Grupos extends GenericEntity {
    id: number;
    id_grupo: number;
    grupo: number;
    id_carrera: string;
    carrera: Carreras;
    ee1: Partial<EstrategiaEnsenanza>;
    ee2: Partial<EstrategiaEnsenanza>;
    ee3: Partial<EstrategiaEnsenanza>;
    ee4: Partial<EstrategiaEnsenanza>;
}
