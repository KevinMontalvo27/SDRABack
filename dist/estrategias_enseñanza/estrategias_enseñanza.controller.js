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
exports.EstrategiaEnsenanzaController = void 0;
const common_1 = require("@nestjs/common");
const generic_controller_1 = require("../generic/generic.controller");
const estrategias_ense_anza_service_1 = require("./estrategias_ense\u00F1anza.service");
let EstrategiaEnsenanzaController = class EstrategiaEnsenanzaController extends generic_controller_1.GenericController {
    constructor(estrategiaEnsenanzaService) {
        super(estrategiaEnsenanzaService);
        this.estrategiaEnsenanzaService = estrategiaEnsenanzaService;
    }
    async generarEstrategia(nroCuenta) {
        return this.estrategiaEnsenanzaService.generarEstrategia(nroCuenta);
    }
    async saveModaEstrategiasBynumGrupo(numGrupo) {
        return this.estrategiaEnsenanzaService.calcularYGuardarModaParaGrupo(numGrupo);
    }
};
__decorate([
    (0, common_1.Get)('make/:nroCuenta'),
    __param(0, (0, common_1.Param)('nroCuenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstrategiaEnsenanzaController.prototype, "generarEstrategia", null);
__decorate([
    (0, common_1.Get)('save_moda_estrategias/:num_grupo'),
    __param(0, (0, common_1.Param)('num_grupo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstrategiaEnsenanzaController.prototype, "saveModaEstrategiasBynumGrupo", null);
EstrategiaEnsenanzaController = __decorate([
    (0, common_1.Controller)('estrategias-ensenanza'),
    __metadata("design:paramtypes", [estrategias_ense_anza_service_1.EstrategiaEnsenanzaService])
], EstrategiaEnsenanzaController);
exports.EstrategiaEnsenanzaController = EstrategiaEnsenanzaController;
//# sourceMappingURL=estrategias_ense%C3%B1anza.controller.js.map