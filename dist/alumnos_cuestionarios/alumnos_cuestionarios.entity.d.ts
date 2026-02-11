import { GenericEntity } from 'src/generic/generic.entity';
import { Alumnos } from 'src/alumnos/alumnos.entity';
import { Cuestionarios } from 'src/cuestionarios/cuestionarios.entity';
export declare class AlumnosCuestionarios extends GenericEntity {
    nro_cuenta: number;
    id_cuestionario: number;
    completado: boolean;
    fecha_completado: Date;
    alumno: Alumnos;
    cuestionario: Cuestionarios;
}
