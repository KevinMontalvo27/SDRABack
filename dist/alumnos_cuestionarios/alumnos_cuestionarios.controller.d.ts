import { AlumnosCuestionariosService } from './alumnos_cuestionarios.service';
import { AlumnosCuestionarios } from './alumnos_cuestionarios.entity';
export declare class AlumnosCuestionariosController {
    private readonly alumnosCuestionariosService;
    constructor(alumnosCuestionariosService: AlumnosCuestionariosService);
    obtenerCuestionariosAlumno(nroCuenta: number): Promise<AlumnosCuestionarios[]>;
    verificarCompletado(nroCuenta: number, idCuestionario: number): Promise<{
        completado: boolean;
    }>;
    obtenerAsignacion(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios>;
    asignarCuestionario(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios>;
    marcarCompletado(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios>;
    resetearCuestionario(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios>;
    obtenerEstadisticas(idCuestionario: number): Promise<{
        total: number;
        completados: number;
        pendientes: number;
        porcentajeCompletado: number;
    }>;
}
