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
exports.PerfilFinalInventarioDeFelderController = void 0;
const common_1 = require("@nestjs/common");
const generic_controller_1 = require("../generic/generic.controller");
const perfil_final_inventario_de_felder_entity_1 = require("./perfil_final_inventario_de_felder.entity");
const perfil_final_inventario_de_felder_service_1 = require("./perfil_final_inventario_de_felder.service");
let PerfilFinalInventarioDeFelderController = class PerfilFinalInventarioDeFelderController extends generic_controller_1.GenericController {
    constructor(perfilFinalInventarioDeFelderService) {
        super(perfilFinalInventarioDeFelderService);
        this.perfilFinalInventarioDeFelderService = perfilFinalInventarioDeFelderService;
    }
    async findAll() {
        return this.perfilFinalInventarioDeFelderService.find();
    }
    async create(entity) {
        return this.perfilFinalInventarioDeFelderService.create(entity);
    }
    async findByGrupoId(idGrupos) {
        const ids = idGrupos.split(',').map(Number);
        return this.perfilFinalInventarioDeFelderService.findByGrupoIds(ids);
    }
    async findByAlumnoId(idAlumno) {
        const ids = idAlumno.split(',').map(Number);
        return this.perfilFinalInventarioDeFelderService.findByAlumnoIds(ids);
    }
    async findByNumAlumno(numAlumno) {
        return this.perfilFinalInventarioDeFelderService.findResultadoAlumno(numAlumno);
    }
    async findModaEstrategiasBynumGrupo(numGrupo) {
        return this.perfilFinalInventarioDeFelderService.findModaEstrategiasByNumGrupo(numGrupo);
    }
    async recomendarObjetosParaTema(nroCuenta, idTema) {
        return this.perfilFinalInventarioDeFelderService.recomendarObjetosParaTema(Number(nroCuenta), Number(idTema));
    }
    test(filtros) {
        return this.find(filtros);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PerfilFinalInventarioDeFelderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder]),
    __metadata("design:returntype", Promise)
], PerfilFinalInventarioDeFelderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('id_grupo/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerfilFinalInventarioDeFelderController.prototype, "findByGrupoId", null);
__decorate([
    (0, common_1.Get)('id_alumno/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerfilFinalInventarioDeFelderController.prototype, "findByAlumnoId", null);
__decorate([
    (0, common_1.Get)('alumno/:numCuenta'),
    __param(0, (0, common_1.Param)('numCuenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PerfilFinalInventarioDeFelderController.prototype, "findByNumAlumno", null);
__decorate([
    (0, common_1.Get)('moda_estrategias/:num_grupo'),
    __param(0, (0, common_1.Param)('num_grupo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PerfilFinalInventarioDeFelderController.prototype, "findModaEstrategiasBynumGrupo", null);
__decorate([
    (0, common_1.Get)('recomendacion/:nroCuenta/tema/:idTema'),
    __param(0, (0, common_1.Param)('nroCuenta')),
    __param(1, (0, common_1.Param)('idTema')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PerfilFinalInventarioDeFelderController.prototype, "recomendarObjetosParaTema", null);
__decorate([
    (0, common_1.Post)('test'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PerfilFinalInventarioDeFelderController.prototype, "test", null);
PerfilFinalInventarioDeFelderController = __decorate([
    (0, common_1.Controller)('perfil-final-inventario-de-felder'),
    __metadata("design:paramtypes", [perfil_final_inventario_de_felder_service_1.PerfilFinalInventarioDeFelderService])
], PerfilFinalInventarioDeFelderController);
exports.PerfilFinalInventarioDeFelderController = PerfilFinalInventarioDeFelderController;
//# sourceMappingURL=perfil_final_inventario_de_felder.controller.js.map