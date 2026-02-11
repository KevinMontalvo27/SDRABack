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
exports.MateriasController = void 0;
const common_1 = require("@nestjs/common");
const generic_controller_1 = require("../generic/generic.controller");
const materias_service_1 = require("./materias.service");
let MateriasController = class MateriasController extends generic_controller_1.GenericController {
    constructor(materiasService) {
        super(materiasService);
        this.materiasService = materiasService;
    }
    async getMateriasByGrupo(grupo) {
        return this.materiasService.findMateriasByGrupo(grupo);
    }
    async getMateriasByProfesor(id_profesor) {
        return this.materiasService.findMateriasByProfesor(id_profesor);
    }
};
__decorate([
    (0, common_1.Get)('grupo/:grupo'),
    __param(0, (0, common_1.Param)('grupo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MateriasController.prototype, "getMateriasByGrupo", null);
__decorate([
    (0, common_1.Get)('profesor/:id_profesor'),
    __param(0, (0, common_1.Param)('id_profesor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MateriasController.prototype, "getMateriasByProfesor", null);
MateriasController = __decorate([
    (0, common_1.Controller)('materias'),
    __metadata("design:paramtypes", [materias_service_1.MateriasService])
], MateriasController);
exports.MateriasController = MateriasController;
//# sourceMappingURL=materias.controller.js.map