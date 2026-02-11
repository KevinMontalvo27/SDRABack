import { Repository } from 'typeorm';
import { AlumnosCuestionarios } from './alumnos_cuestionarios.entity';
export declare class AlumnosCuestionariosService {
    private alumnosCuestionariosRepository;
    constructor(alumnosCuestionariosRepository: Repository<AlumnosCuestionarios>);
    asignarCuestionario(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios>;
    obtenerCuestionariosAlumno(nroCuenta: number): Promise<AlumnosCuestionarios[]>;
    marcarCompletado(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios>;
    verificarCompletado(nroCuenta: number, idCuestionario: number): Promise<boolean>;
    obtenerAsignacion(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios>;
    resetearCuestionario(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios>;
    obtenerEstadisticasCuestionario(idCuestionario: number): Promise<{
        total: number;
        completados: number;
        pendientes: number;
        porcentajeCompletado: number;
    }>;
}
