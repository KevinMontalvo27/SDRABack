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
exports.Cuestionarios = void 0;
const generic_entity_1 = require("../generic/generic.entity");
const typeorm_1 = require("typeorm");
const preguntas_entity_1 = require("../preguntas/preguntas.entity");
const alumnos_cuestionarios_entity_1 = require("../alumnos_cuestionarios/alumnos_cuestionarios.entity");
let Cuestionarios = class Cuestionarios extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cuestionarios.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Cuestionarios.prototype, "id_cuestionario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Cuestionarios.prototype, "id_profesor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Cuestionarios.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Cuestionarios.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => preguntas_entity_1.Preguntas, pregunta => pregunta.cuestionario),
    (0, typeorm_1.JoinColumn)({ name: 'id_cuestionario' }),
    __metadata("design:type", Array)
], Cuestionarios.prototype, "preguntas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alumnos_cuestionarios_entity_1.AlumnosCuestionarios, alumnosCuestionarios => alumnosCuestionarios.cuestionario),
    __metadata("design:type", Array)
], Cuestionarios.prototype, "alumnosCuestionarios", void 0);
Cuestionarios = __decorate([
    (0, typeorm_1.Entity)()
], Cuestionarios);
exports.Cuestionarios = Cuestionarios;
//# sourceMappingURL=cuestionarios.entity.js.map