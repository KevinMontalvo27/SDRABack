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
exports.AlumnosCuestionarios = void 0;
const typeorm_1 = require("typeorm");
const generic_entity_1 = require("../generic/generic.entity");
const alumnos_entity_1 = require("../alumnos/alumnos.entity");
const cuestionarios_entity_1 = require("../cuestionarios/cuestionarios.entity");
let AlumnosCuestionarios = class AlumnosCuestionarios extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], AlumnosCuestionarios.prototype, "nro_cuenta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], AlumnosCuestionarios.prototype, "id_cuestionario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AlumnosCuestionarios.prototype, "completado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AlumnosCuestionarios.prototype, "fecha_completado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumnos_entity_1.Alumnos, alumno => alumno.alumnosCuestionarios),
    (0, typeorm_1.JoinColumn)({ name: 'nro_cuenta' }),
    __metadata("design:type", alumnos_entity_1.Alumnos)
], AlumnosCuestionarios.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cuestionarios_entity_1.Cuestionarios, cuestionario => cuestionario.alumnosCuestionarios),
    (0, typeorm_1.JoinColumn)({ name: 'id_cuestionario' }),
    __metadata("design:type", cuestionarios_entity_1.Cuestionarios)
], AlumnosCuestionarios.prototype, "cuestionario", void 0);
AlumnosCuestionarios = __decorate([
    (0, typeorm_1.Entity)('alumnos_cuestionarios')
], AlumnosCuestionarios);
exports.AlumnosCuestionarios = AlumnosCuestionarios;
//# sourceMappingURL=alumnos_cuestionarios.entity.js.map