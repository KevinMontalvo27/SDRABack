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
exports.Grupos = void 0;
const typeorm_1 = require("typeorm");
const carreras_entity_1 = require("../carreras/carreras.entity");
const generic_entity_1 = require("../generic/generic.entity");
const estrategias_ense_anza_entity_1 = require("../estrategias_ense\u00F1anza/estrategias_ense\u00F1anza.entity");
let Grupos = class Grupos extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Grupos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Grupos.prototype, "id_grupo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Grupos.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Grupos.prototype, "id_carrera", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carreras_entity_1.Carreras, carrera => carrera.grupos),
    (0, typeorm_1.JoinColumn)({ name: 'id_carrera', referencedColumnName: 'id_carrera' }),
    __metadata("design:type", carreras_entity_1.Carreras)
], Grupos.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estrategias_ense_anza_entity_1.EstrategiaEnsenanza, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ee1', referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], Grupos.prototype, "ee1", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estrategias_ense_anza_entity_1.EstrategiaEnsenanza, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ee2', referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], Grupos.prototype, "ee2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estrategias_ense_anza_entity_1.EstrategiaEnsenanza, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ee3', referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], Grupos.prototype, "ee3", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estrategias_ense_anza_entity_1.EstrategiaEnsenanza, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ee4', referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], Grupos.prototype, "ee4", void 0);
Grupos = __decorate([
    (0, typeorm_1.Entity)()
], Grupos);
exports.Grupos = Grupos;
//# sourceMappingURL=grupos.entity.js.map