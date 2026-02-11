"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioDeFelderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const inventario_de_felder_entity_1 = require("./inventario_de_felder.entity");
const inventario_de_felder_service_1 = require("./inventario_de_felder.service");
const inventario_de_felder_controller_1 = require("./inventario_de_felder.controller");
const perfil_final_inventario_de_felder_entity_1 = require("../perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity");
const alumnos_cuestionarios_module_1 = require("../alumnos_cuestionarios/alumnos_cuestionarios.module");
let InventarioDeFelderModule = class InventarioDeFelderModule {
};
InventarioDeFelderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([inventario_de_felder_entity_1.InventarioDeFelder, perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder]), alumnos_cuestionarios_module_1.AlumnosCuestionariosModule],
        providers: [inventario_de_felder_service_1.InventarioDeFelderService],
        controllers: [inventario_de_felder_controller_1.InventarioDeFelderController]
    })
], InventarioDeFelderModule);
exports.InventarioDeFelderModule = InventarioDeFelderModule;
//# sourceMappingURL=inventario_de_felder.module.js.map