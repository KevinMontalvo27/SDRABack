"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosCuestionariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alumnos_cuestionarios_entity_1 = require("./alumnos_cuestionarios.entity");
let AlumnosCuestionariosService = class AlumnosCuestionariosService {
    constructor(alumnosCuestionariosRepository) {
        this.alumnosCuestionariosRepository = alumnosCuestionariosRepository;
    }
    async asignarCuestionario(nroCuenta, idCuestionario) {
        const asignacionExistente = await this.alumnosCuestionariosRepository.findOne({
            where: {
                nro_cuenta: nroCuenta,
                id_cuestionario: idCuestionario
            }
        });
        if (asignacionExistente) {
            return asignacionExistente;
        }
        const nuevaAsignacion = this.alumnosCuestionariosRepository.create({
            nro_cuenta: nroCuenta,
            id_cuestionario: idCuestionario,
            completado: false,
            fecha_completado: null
        });
        return this.alumnosCuestionariosRepository.save(nuevaAsignacion);
    }
    async obtenerCuestionariosAlumno(nroCuenta) {
        return this.alumnosCuestionariosRepository.find({
            where: { nro_cuenta: nroCuenta },
            relations: ['cuestionario'],
            order: { created: 'ASC' }
        });
    }
    async marcarCompletado(nroCuenta, idCuestionario) {
        const asignacion = await this.alumnosCuestionariosRepository.findOne({
            where: {
                nro_cuenta: nroCuenta,
                id_cuestionario: idCuestionario
            }
        });
        if (!asignacion) {
            throw new common_1.NotFoundException(`No se encontró asignación para alumno ${nroCuenta} y cuestionario ${idCuestionario}`);
        }
        if (!asignacion.completado) {
            asignacion.completado = true;
            asignacion.fecha_completado = new Date();
            return this.alumnosCuestionariosRepository.save(asignacion);
        }
        return asignacion;
    }
    async verificarCompletado(nroCuenta, idCuestionario) {
        const asignacion = await this.alumnosCuestionariosRepository.findOne({
            where: {
                nro_cuenta: nroCuenta,
                id_cuestionario: idCuestionario
            }
        });
        return asignacion ? asignacion.completado : false;
    }
    async obtenerAsignacion(nroCuenta, idCuestionario) {
        const asignacion = await this.alumnosCuestionariosRepository.findOne({
            where: {
                nro_cuenta: nroCuenta,
                id_cuestionario: idCuestionario
            },
            relations: ['cuestionario', 'alumno']
        });
        if (!asignacion) {
            throw new common_1.NotFoundException(`No se encontró asignación para alumno ${nroCuenta} y cuestionario ${idCuestionario}`);
        }
        return asignacion;
    }
    async resetearCuestionario(nroCuenta, idCuestionario) {
        const asignacion = await this.alumnosCuestionariosRepository.findOne({
            where: {
                nro_cuenta: nroCuenta,
                id_cuestionario: idCuestionario
            }
        });
        if (!asignacion) {
            throw new common_1.NotFoundException(`No se encontró asignación para alumno ${nroCuenta} y cuestionario ${idCuestionario}`);
        }
        asignacion.completado = false;
        asignacion.fecha_completado = null;
        return this.alumnosCuestionariosRepository.save(asignacion);
    }
    async obtenerEstadisticasCuestionario(idCuestionario) {
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
};
AlumnosCuestionariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alumnos_cuestionarios_entity_1.AlumnosCuestionarios)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlumnosCuestionariosService);
exports.AlumnosCuestionariosService = AlumnosCuestionariosService;
//# sourceMappingURL=alumnos_cuestionarios.service.js.map