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
exports.AlumnosCuestionariosController = void 0;
const common_1 = require("@nestjs/common");
const alumnos_cuestionarios_service_1 = require("./alumnos_cuestionarios.service");
let AlumnosCuestionariosController = class AlumnosCuestionariosController {
    constructor(alumnosCuestionariosService) {
        this.alumnosCuestionariosService = alumnosCuestionariosService;
    }
    async obtenerCuestionariosAlumno(nroCuenta) {
        return this.alumnosCuestionariosService.obtenerCuestionariosAlumno(nroCuenta);
    }
    async verificarCompletado(nroCuenta, idCuestionario) {
        const completado = await this.alumnosCuestionariosService.verificarCompletado(nroCuenta, idCuestionario);
        return { completado };
    }
    async obtenerAsignacion(nroCuenta, idCuestionario) {
        return this.alumnosCuestionariosService.obtenerAsignacion(nroCuenta, idCuestionario);
    }
    async asignarCuestionario(nroCuenta, idCuestionario) {
        return this.alumnosCuestionariosService.asignarCuestionario(nroCuenta, idCuestionario);
    }
    async marcarCompletado(nroCuenta, idCuestionario) {
        return this.alumnosCuestionariosService.marcarCompletado(nroCuenta, idCuestionario);
    }
    async resetearCuestionario(nroCuenta, idCuestionario) {
        return this.alumnosCuestionariosService.resetearCuestionario(nroCuenta, idCuestionario);
    }
    async obtenerEstadisticas(idCuestionario) {
        return this.alumnosCuestionariosService.obtenerEstadisticasCuestionario(idCuestionario);
    }
};
__decorate([
    (0, common_1.Get)('alumno/:nroCuenta'),
    __param(0, (0, common_1.Param)('nroCuenta', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnosCuestionariosController.prototype, "obtenerCuestionariosAlumno", null);
__decorate([
    (0, common_1.Get)('verificar/:nroCuenta/:idCuestionario'),
    __param(0, (0, common_1.Param)('nroCuenta', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idCuestionario', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AlumnosCuestionariosController.prototype, "verificarCompletado", null);
__decorate([
    (0, common_1.Get)('asignacion/:nroCuenta/:idCuestionario'),
    __param(0, (0, common_1.Param)('nroCuenta', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idCuestionario', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AlumnosCuestionariosController.prototype, "obtenerAsignacion", null);
__decorate([
    (0, common_1.Post)('asignar'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)('nroCuenta', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('idCuestionario', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AlumnosCuestionariosController.prototype, "asignarCuestionario", null);
__decorate([
    (0, common_1.Post)('completar'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('nroCuenta', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('idCuestionario', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AlumnosCuestionariosController.prototype, "marcarCompletado", null);
__decorate([
    (0, common_1.Put)('resetear/:nroCuenta/:idCuestionario'),
    __param(0, (0, common_1.Param)('nroCuenta', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idCuestionario', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AlumnosCuestionariosController.prototype, "resetearCuestionario", null);
__decorate([
    (0, common_1.Get)('estadisticas/:idCuestionario'),
    __param(0, (0, common_1.Param)('idCuestionario', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnosCuestionariosController.prototype, "obtenerEstadisticas", null);
AlumnosCuestionariosController = __decorate([
    (0, common_1.Controller)('alumnos-cuestionarios'),
    __metadata("design:paramtypes", [alumnos_cuestionarios_service_1.AlumnosCuestionariosService])
], AlumnosCuestionariosController);
exports.AlumnosCuestionariosController = AlumnosCuestionariosController;
//# sourceMappingURL=alumnos_cuestionarios.controller.js.map