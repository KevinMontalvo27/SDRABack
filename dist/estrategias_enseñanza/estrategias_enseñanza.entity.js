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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstrategiaEnsenanza = void 0;
const typeorm_1 = require("typeorm");
const perfil_final_inventario_de_felder_entity_1 = require("../perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity");
const generic_entity_1 = require("../generic/generic.entity");
const grupos_entity_1 = require("../grupos/grupos.entity");
let EstrategiaEnsenanza = class EstrategiaEnsenanza extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EstrategiaEnsenanza.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EstrategiaEnsenanza.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], EstrategiaEnsenanza.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee1),
    __metadata("design:type", Array)
], EstrategiaEnsenanza.prototype, "perfilesFinalesEE1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee2),
    __metadata("design:type", Array)
], EstrategiaEnsenanza.prototype, "perfilesFinalesEE2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee3),
    __metadata("design:type", Array)
], EstrategiaEnsenanza.prototype, "perfilesFinalesEE3", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee4),
    __metadata("design:type", Array)
], EstrategiaEnsenanza.prototype, "perfilesFinalesEE4", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupos_entity_1.Grupos, perfilfinal => perfilfinal.ee1),
    __metadata("design:type", Array)
], EstrategiaEnsenanza.prototype, "perfilesGrupoEE1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupos_entity_1.Grupos, perfilfinal => perfilfinal.ee2),
    __metadata("design:type", Array)
], EstrategiaEnsenanza.prototype, "perfilesGrupoEE2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupos_entity_1.Grupos, perfilfinal => perfilfinal.ee3),
    __metadata("design:type", Array)
], EstrategiaEnsenanza.prototype, "perfilesGrupoEE3", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupos_entity_1.Grupos, perfilfinal => perfilfinal.ee4),
    __metadata("design:type", Array)
], EstrategiaEnsenanza.prototype, "perfilesGrupoEE4", void 0);
EstrategiaEnsenanza = __decorate([
    (0, typeorm_1.Entity)()
], EstrategiaEnsenanza);
exports.EstrategiaEnsenanza = EstrategiaEnsenanza;
//# sourceMappingURL=estrategias_ense%C3%B1anza.entity.js.map