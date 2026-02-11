import { GenericEntity } from 'src/generic/generic.entity';
import { AlumnosCuestionarios } from 'src/alumnos_cuestionarios/alumnos_cuestionarios.entity';
export declare class Alumnos extends GenericEntity {
    id: number;
    nro_cuenta: number;
    contraseña: string;
    nombre: string;
    apellido_1: string;
    apellido_2: string;
    fecha_nacimiento: Date | null;
    grupo: number;
    alumnosCuestionarios: AlumnosCuestionarios[];
}
