import { GenericEntity } from 'src/generic/generic.entity';
import { Profesor } from 'src/profesor/profesor.entity';
import { EstrategiaEnsenanza } from 'src/estrategias_enseñanza/estrategias_enseñanza.entity';
export declare class PerfilFinalInventarioDeFelder extends GenericEntity {
    id: number;
    nro_cuenta: number;
    grupo: number;
    activo_reflexivo: string;
    sensorial_intuitivo: string;
    visual_verbal: string;
    secuencial_global: string;
    ee1: Partial<EstrategiaEnsenanza>;
    ee2: Partial<EstrategiaEnsenanza>;
    ee3: Partial<EstrategiaEnsenanza>;
    ee4: Partial<EstrategiaEnsenanza>;
    profesor: Profesor;
}
