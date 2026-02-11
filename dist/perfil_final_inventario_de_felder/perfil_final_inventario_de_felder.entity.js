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
exports.PerfilFinalInventarioDeFelder = void 0;
const typeorm_1 = require("typeorm");
const generic_entity_1 = require("../generic/generic.entity");
const profesor_entity_1 = require("../profesor/profesor.entity");
const estrategias_ense_anza_entity_1 = require("../estrategias_ense\u00F1anza/estrategias_ense\u00F1anza.entity");
let PerfilFinalInventarioDeFelder = class PerfilFinalInventarioDeFelder extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PerfilFinalInventarioDeFelder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], PerfilFinalInventarioDeFelder.prototype, "nro_cuenta", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], PerfilFinalInventarioDeFelder.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], PerfilFinalInventarioDeFelder.prototype, "activo_reflexivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], PerfilFinalInventarioDeFelder.prototype, "sensorial_intuitivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], PerfilFinalInventarioDeFelder.prototype, "visual_verbal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], PerfilFinalInventarioDeFelder.prototype, "secuencial_global", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estrategias_ense_anza_entity_1.EstrategiaEnsenanza, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ee1', referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], PerfilFinalInventarioDeFelder.prototype, "ee1", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estrategias_ense_anza_entity_1.EstrategiaEnsenanza, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ee2', referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], PerfilFinalInventarioDeFelder.prototype, "ee2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estrategias_ense_anza_entity_1.EstrategiaEnsenanza, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ee3', referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], PerfilFinalInventarioDeFelder.prototype, "ee3", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estrategias_ense_anza_entity_1.EstrategiaEnsenanza, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ee4', referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], PerfilFinalInventarioDeFelder.prototype, "ee4", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profesor_entity_1.Profesor, profesor => profesor.perfilesFinales),
    __metadata("design:type", profesor_entity_1.Profesor)
], PerfilFinalInventarioDeFelder.prototype, "profesor", void 0);
PerfilFinalInventarioDeFelder = __decorate([
    (0, typeorm_1.Entity)()
], PerfilFinalInventarioDeFelder);
exports.PerfilFinalInventarioDeFelder = PerfilFinalInventarioDeFelder;
//# sourceMappingURL=perfil_final_inventario_de_felder.entity.js.map