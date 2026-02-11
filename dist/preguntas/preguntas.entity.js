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
exports.Preguntas = void 0;
const generic_entity_1 = require("../generic/generic.entity");
const typeorm_1 = require("typeorm");
const cuestionarios_entity_1 = require("../cuestionarios/cuestionarios.entity");
let Preguntas = class Preguntas extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Preguntas.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Preguntas.prototype, "id_cuestionario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cuestionarios_entity_1.Cuestionarios, cuestionario => cuestionario.preguntas),
    (0, typeorm_1.JoinColumn)({ name: 'id_cuestionario', referencedColumnName: 'id_cuestionario' }),
    __metadata("design:type", cuestionarios_entity_1.Cuestionarios)
], Preguntas.prototype, "cuestionario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Preguntas.prototype, "num_pregunta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Preguntas.prototype, "pregunta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Preguntas.prototype, "respuesta_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Preguntas.prototype, "respuesta_2", void 0);
Preguntas = __decorate([
    (0, typeorm_1.Entity)()
], Preguntas);
exports.Preguntas = Preguntas;
//# sourceMappingURL=preguntas.entity.js.map