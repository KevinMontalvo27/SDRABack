"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GruposModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grupos_entity_1 = require("./grupos.entity");
const grupos_controller_1 = require("./grupos.controller");
const grupos_service_1 = require("./grupos.service");
const estrategias_ense_anza_module_1 = require("../estrategias_ense\u00F1anza/estrategias_ense\u00F1anza.module");
const perfil_final_inventario_de_felder_entity_1 = require("../perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity");
let GruposModule = class GruposModule {
};
GruposModule = __decorate([
    (0, common_1.Module)({
        imports: [estrategias_ense_anza_module_1.EstrategiaEnsenanzaModule, typeorm_1.TypeOrmModule.forFeature([grupos_entity_1.Grupos, perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder])],
        controllers: [grupos_controller_1.GruposController],
        providers: [grupos_service_1.GruposService],
    })
], GruposModule);
exports.GruposModule = GruposModule;
//# sourceMappingURL=grupos.module.js.map