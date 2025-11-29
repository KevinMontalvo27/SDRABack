import { Controller, Get, Post, Put, Param, ParseIntPipe, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AlumnosCuestionariosService } from './alumnos_cuestionarios.service';
import { AlumnosCuestionarios } from './alumnos_cuestionarios.entity';

@Controller('alumnos-cuestionarios')
export class AlumnosCuestionariosController {
    constructor(
        private readonly alumnosCuestionariosService: AlumnosCuestionariosService
    ) {}

    /**
     * GET /alumnos-cuestionarios/alumno/:nroCuenta
     * Obtener todos los cuestionarios asignados a un alumno
     */
    @Get('alumno/:nroCuenta')
    async obtenerCuestionariosAlumno(
        @Param('nroCuenta', ParseIntPipe) nroCuenta: number
    ): Promise<AlumnosCuestionarios[]> {
        return this.alumnosCuestionariosService.obtenerCuestionariosAlumno(nroCuenta);
    }

    /**
     * GET /alumnos-cuestionarios/verificar/:nroCuenta/:idCuestionario
     * Verificar si un alumno completó un cuestionario específico
     */
    @Get('verificar/:nroCuenta/:idCuestionario')
    async verificarCompletado(
        @Param('nroCuenta', ParseIntPipe) nroCuenta: number,
        @Param('idCuestionario', ParseIntPipe) idCuestionario: number
    ): Promise<{ completado: boolean }> {
        const completado = await this.alumnosCuestionariosService.verificarCompletado(
            nroCuenta,
            idCuestionario
        );
        return { completado };
    }

    /**
     * GET /alumnos-cuestionarios/asignacion/:nroCuenta/:idCuestionario
     * Obtener detalles de una asignación específica
     */
    @Get('asignacion/:nroCuenta/:idCuestionario')
    async obtenerAsignacion(
        @Param('nroCuenta', ParseIntPipe) nroCuenta: number,
        @Param('idCuestionario', ParseIntPipe) idCuestionario: number
    ): Promise<AlumnosCuestionarios> {
        return this.alumnosCuestionariosService.obtenerAsignacion(nroCuenta, idCuestionario);
    }

    /**
     * POST /alumnos-cuestionarios/asignar
     * Asignar un cuestionario a un alumno
     * Body: { nroCuenta: number, idCuestionario: number }
     */
    @Post('asignar')
    @HttpCode(HttpStatus.CREATED)
    async asignarCuestionario(
        @Body('nroCuenta', ParseIntPipe) nroCuenta: number,
        @Body('idCuestionario', ParseIntPipe) idCuestionario: number
    ): Promise<AlumnosCuestionarios> {
        return this.alumnosCuestionariosService.asignarCuestionario(nroCuenta, idCuestionario);
    }

    /**
     * POST /alumnos-cuestionarios/completar
     * Marcar un cuestionario como completado
     * Body: { nroCuenta: number, idCuestionario: number }
     */
    @Post('completar')
    @HttpCode(HttpStatus.OK)
    async marcarCompletado(
        @Body('nroCuenta', ParseIntPipe) nroCuenta: number,
        @Body('idCuestionario', ParseIntPipe) idCuestionario: number
    ): Promise<AlumnosCuestionarios> {
        return this.alumnosCuestionariosService.marcarCompletado(nroCuenta, idCuestionario);
    }

    /**
     * PUT /alumnos-cuestionarios/resetear/:nroCuenta/:idCuestionario
     * Resetear un cuestionario para permitir repetirlo
     */
    @Put('resetear/:nroCuenta/:idCuestionario')
    async resetearCuestionario(
        @Param('nroCuenta', ParseIntPipe) nroCuenta: number,
        @Param('idCuestionario', ParseIntPipe) idCuestionario: number
    ): Promise<AlumnosCuestionarios> {
        return this.alumnosCuestionariosService.resetearCuestionario(nroCuenta, idCuestionario);
    }

    /**
     * GET /alumnos-cuestionarios/estadisticas/:idCuestionario
     * Obtener estadísticas de un cuestionario
     */
    @Get('estadisticas/:idCuestionario')
    async obtenerEstadisticas(
        @Param('idCuestionario', ParseIntPipe) idCuestionario: number
    ): Promise<{
        total: number;
        completados: number;
        pendientes: number;
        porcentajeCompletado: number;
    }> {
        return this.alumnosCuestionariosService.obtenerEstadisticasCuestionario(idCuestionario);
    }
}