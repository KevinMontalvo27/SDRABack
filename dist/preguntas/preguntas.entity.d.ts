import { GenericEntity } from 'src/generic/generic.entity';
import { Cuestionarios } from '../cuestionarios/cuestionarios.entity';
export declare class Preguntas extends GenericEntity {
    id: number;
    id_cuestionario: number;
    cuestionario: Cuestionarios;
    num_pregunta: number;
    pregunta: string;
    respuesta_1: string;
    respuesta_2: string;
}
