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
exports.InventarioDeFelderController = void 0;
const common_1 = require("@nestjs/common");
const generic_controller_1 = require("../generic/generic.controller");
const inventario_de_felder_entity_1 = require("./inventario_de_felder.entity");
const inventario_de_felder_service_1 = require("./inventario_de_felder.service");
const respuestas_compactadas_dto_1 = require("./dto/respuestas_compactadas.dto");
let InventarioDeFelderController = class InventarioDeFelderController extends generic_controller_1.GenericController {
    constructor(inventarioDeFelderService) {
        super(inventarioDeFelderService);
        this.inventarioDeFelderService = inventarioDeFelderService;
    }
    async findAll() {
        return this.inventarioDeFelderService.find();
    }
    async create(entity) {
        return this.inventarioDeFelderService.create(entity);
    }
    async estadoEncuesta(numAlumno) {
        return this.inventarioDeFelderService.findEstadoEncuesta(numAlumno);
    }
    async saveResultadoEncuesta(respuestasCompactadasDto) {
        await this.inventarioDeFelderService.saveResultadoEncuesta(respuestasCompactadasDto);
        const perfil = await this.inventarioDeFelderService.savePerfilfinal(respuestasCompactadasDto);
        return {
            message: 'Encuesta completada exitosamente',
            perfil
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventarioDeFelderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventario_de_felder_entity_1.InventarioDeFelder]),
    __metadata("design:returntype", Promise)
], InventarioDeFelderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('alumno/:nroCuenta'),
    __param(0, (0, common_1.Param)('nroCuenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InventarioDeFelderController.prototype, "estadoEncuesta", null);
__decorate([
    (0, common_1.Post)('resultado-encuesta'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [respuestas_compactadas_dto_1.RespuestasCompactadasDto]),
    __metadata("design:returntype", Promise)
], InventarioDeFelderController.prototype, "saveResultadoEncuesta", null);
InventarioDeFelderController = __decorate([
    (0, common_1.Controller)('inventario-de-felder'),
    __metadata("design:paramtypes", [inventario_de_felder_service_1.InventarioDeFelderService])
], InventarioDeFelderController);
exports.InventarioDeFelderController = InventarioDeFelderController;
//# sourceMappingURL=inventario_de_felder.controller.js.map