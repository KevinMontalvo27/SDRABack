import { GenericEntity } from 'src/generic/generic.entity';
import { Preguntas } from '../preguntas/preguntas.entity';
import { AlumnosCuestionarios } from 'src/alumnos_cuestionarios/alumnos_cuestionarios.entity';
export declare class Cuestionarios extends GenericEntity {
    id: number;
    id_cuestionario: number;
    id_profesor: number;
    nombre: string;
    descripcion: string;
    preguntas: Preguntas[];
    alumnosCuestionarios: AlumnosCuestionarios[];
}
