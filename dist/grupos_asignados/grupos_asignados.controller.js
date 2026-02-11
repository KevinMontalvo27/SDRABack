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
exports.GruposAsignadosController = void 0;
const common_1 = require("@nestjs/common");
const grupos_asignados_service_1 = require("./grupos_asignados.service");
const grupos_asignados_entity_1 = require("./grupos_asignados.entity");
const generic_controller_1 = require("../generic/generic.controller");
let GruposAsignadosController = class GruposAsignadosController extends generic_controller_1.GenericController {
    constructor(gruposAsignadosService) {
        super(gruposAsignadosService);
        this.gruposAsignadosService = gruposAsignadosService;
    }
    async findAll() {
        return this.gruposAsignadosService.find();
    }
    async create(entity) {
        return this.gruposAsignadosService.create(entity);
    }
    async findByProfesorId(idProfesor) {
        return this.gruposAsignadosService.findAllByProfesorId(idProfesor);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GruposAsignadosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [grupos_asignados_entity_1.GruposAsignados]),
    __metadata("design:returntype", Promise)
], GruposAsignadosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('id_profesor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GruposAsignadosController.prototype, "findByProfesorId", null);
GruposAsignadosController = __decorate([
    (0, common_1.Controller)('grupos_asignados'),
    __metadata("design:paramtypes", [grupos_asignados_service_1.GruposAsignadosService])
], GruposAsignadosController);
exports.GruposAsignadosController = GruposAsignadosController;
//# sourceMappingURL=grupos_asignados.controller.js.map