"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstrategiaEnsenanzaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const estrategias_ense_anza_entity_1 = require("./estrategias_ense\u00F1anza.entity");
const estrategias_ense_anza_controller_1 = require("./estrategias_ense\u00F1anza.controller");
const estrategias_ense_anza_service_1 = require("./estrategias_ense\u00F1anza.service");
const perfil_final_inventario_de_felder_entity_1 = require("../perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity");
const grupos_entity_1 = require("../grupos/grupos.entity");
let EstrategiaEnsenanzaModule = class EstrategiaEnsenanzaModule {
};
EstrategiaEnsenanzaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([estrategias_ense_anza_entity_1.EstrategiaEnsenanza, perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder, grupos_entity_1.Grupos])],
        controllers: [estrategias_ense_anza_controller_1.EstrategiaEnsenanzaController],
        providers: [estrategias_ense_anza_service_1.EstrategiaEnsenanzaService],
        exports: [estrategias_ense_anza_service_1.EstrategiaEnsenanzaService],
    })
], EstrategiaEnsenanzaModule);
exports.EstrategiaEnsenanzaModule = EstrategiaEnsenanzaModule;
//# sourceMappingURL=estrategias_ense%C3%B1anza.module.js.map