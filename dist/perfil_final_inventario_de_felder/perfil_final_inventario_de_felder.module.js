"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfilFinalInventarioDeFelderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const perfil_final_inventario_de_felder_entity_1 = require("./perfil_final_inventario_de_felder.entity");
const perfil_final_inventario_de_felder_controller_1 = require("./perfil_final_inventario_de_felder.controller");
const perfil_final_inventario_de_felder_service_1 = require("./perfil_final_inventario_de_felder.service");
const grupos_entity_1 = require("../grupos/grupos.entity");
const unidades_module_1 = require("../unidades/unidades.module");
const objetos_aprendizaje_entity_1 = require("../unidades/entities/objetos_aprendizaje.entity");
const estilo_objeto_entity_1 = require("../unidades/entities/estilo_objeto.entity");
let PerfilFinalInventarioDeFelderModule = class PerfilFinalInventarioDeFelderModule {
};
PerfilFinalInventarioDeFelderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder, grupos_entity_1.Grupos, objetos_aprendizaje_entity_1.ObjetosAprendizaje, estilo_objeto_entity_1.EstiloObjeto]), unidades_module_1.UnidadesModule],
        controllers: [perfil_final_inventario_de_felder_controller_1.PerfilFinalInventarioDeFelderController],
        providers: [perfil_final_inventario_de_felder_service_1.PerfilFinalInventarioDeFelderService],
    })
], PerfilFinalInventarioDeFelderModule);
exports.PerfilFinalInventarioDeFelderModule = PerfilFinalInventarioDeFelderModule;
//# sourceMappingURL=perfil_final_inventario_de_felder.module.js.map