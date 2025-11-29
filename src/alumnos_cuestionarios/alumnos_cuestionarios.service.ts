import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnosCuestionarios } from './alumnos_cuestionarios.entity';

@Injectable()
export class AlumnosCuestionariosService {
    constructor(
        @InjectRepository(AlumnosCuestionarios)
        private alumnosCuestionariosRepository: Repository<AlumnosCuestionarios>,
    ) {}

    /**
     * Asignar un cuestionario a un alumno
     * @param nroCuenta Número de cuenta del alumno
     * @param idCuestionario ID del cuestionario a asignar
     * @returns La asignación creada o existente
     */
    async asignarCuestionario(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios> {
        // Verificar si ya existe la asignación
        const asignacionExistente = await this.alumnosCuestionariosRepository.findOne({
            where: { 
                nro_cuenta: nroCuenta, 
                id_cuestionario: idCuestionario 
            }
        });

        if (asignacionExistente) {
            return asignacionExistente;
        }

        // Crear nueva asignación
        const nuevaAsignacion = this.alumnosCuestionariosRepository.create({
            nro_cuenta: nroCuenta,
            id_cuestionario: idCuestionario,
            completado: false,
            fecha_completado: null
        });

        return this.alumnosCuestionariosRepository.save(nuevaAsignacion);
    }

    /**
     * Obtener todos los cuestionarios asignados a un alumno
     * @param nroCuenta Número de cuenta del alumno
     * @returns Lista de cuestionarios asignados con información del cuestionario
     */
    async obtenerCuestionariosAlumno(nroCuenta: number): Promise<AlumnosCuestionarios[]> {
        return this.alumnosCuestionariosRepository.find({
            where: { nro_cuenta: nroCuenta },
            relations: ['cuestionario'],
            order: { created: 'ASC' }
        });
    }

    /**
     * Marcar un cuestionario como completado
     * @param nroCuenta Número de cuenta del alumno
     * @param idCuestionario ID del cuestionario
     * @returns La asignación actualizada
     */
    async marcarCompletado(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios> {
        const asignacion = await this.alumnosCuestionariosRepository.findOne({
            where: { 
                nro_cuenta: nroCuenta, 
                id_cuestionario: idCuestionario 
            }
        });

        if (!asignacion) {
            throw new NotFoundException(
                `No se encontró asignación para alumno ${nroCuenta} y cuestionario ${idCuestionario}`
            );
        }

        // Solo actualizar si no estaba completado
        if (!asignacion.completado) {
            asignacion.completado = true;
            asignacion.fecha_completado = new Date();
            return this.alumnosCuestionariosRepository.save(asignacion);
        }

        return asignacion;
    }

    /**
     * Verificar si un alumno ha completado un cuestionario específico
     * @param nroCuenta Número de cuenta del alumno
     * @param idCuestionario ID del cuestionario
     * @returns true si está completado, false si no
     */
    async verificarCompletado(nroCuenta: number, idCuestionario: number): Promise<boolean> {
        const asignacion = await this.alumnosCuestionariosRepository.findOne({
            where: { 
                nro_cuenta: nroCuenta, 
                id_cuestionario: idCuestionario 
            }
        });

        return asignacion ? asignacion.completado : false;
    }

    /**
     * Obtener una asignación específica con detalles
     * @param nroCuenta Número de cuenta del alumno
     * @param idCuestionario ID del cuestionario
     * @returns La asignación con relaciones
     */
    async obtenerAsignacion(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios> {
        const asignacion = await this.alumnosCuestionariosRepository.findOne({
            where: { 
                nro_cuenta: nroCuenta, 
                id_cuestionario: idCuestionario 
            },
            relations: ['cuestionario', 'alumno']
        });

        if (!asignacion) {
            throw new NotFoundException(
                `No se encontró asignación para alumno ${nroCuenta} y cuestionario ${idCuestionario}`
            );
        }

        return asignacion;
    }

    /**
     * Resetear un cuestionario (marcarlo como no completado)
     * Útil para permitir que el alumno repita la encuesta
     * @param nroCuenta Número de cuenta del alumno
     * @param idCuestionario ID del cuestionario
     * @returns La asignación actualizada
     */
    async resetearCuestionario(nroCuenta: number, idCuestionario: number): Promise<AlumnosCuestionarios> {
        const asignacion = await this.alumnosCuestionariosRepository.findOne({
            where: { 
                nro_cuenta: nroCuenta, 
                id_cuestionario: idCuestionario 
            }
        });

        if (!asignacion) {
            throw new NotFoundException(
                `No se encontró asignación para alumno ${nroCuenta} y cuestionario ${idCuestionario}`
            );
        }

        asignacion.completado = false;
        asignacion.fecha_completado = null;
        return this.alumnosCuestionariosRepository.save(asignacion);
    }

    /**
     * Obtener estadísticas de un cuestionario específico
     * @param idCuestionario ID del cuestionario
     * @returns Objeto con total, completados y pendientes
     */
    async obtenerEstadisticasCuestionario(idCuestionario: number): Promise<{
        total: number;
        completados: number;
        pendientes: number;
        porcentajeCompletado: number;
    }> {
        const [asignaciones, total] = await this.alumnosCuestionariosRepository.findAndCount({
            where: { id_cuestionario: idCuestionario }
        });

        const completados = asignaciones.filter(a => a.completado).length;
        const pendientes = total - completados;
        const porcentajeCompletado = total > 0 ? (completados / total) * 100 : 0;

        return {
            total,
            completados,
            pendientes,
            porcentajeCompletado: Math.round(porcentajeCompletado * 100) / 100
        };
    }
}