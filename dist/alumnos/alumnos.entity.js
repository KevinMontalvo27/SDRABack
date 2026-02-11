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
exports.Alumnos = void 0;
const generic_entity_1 = require("../generic/generic.entity");
const typeorm_1 = require("typeorm");
const alumnos_cuestionarios_entity_1 = require("../alumnos_cuestionarios/alumnos_cuestionarios.entity");
let Alumnos = class Alumnos extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Alumnos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Alumnos.prototype, "nro_cuenta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Alumnos.prototype, "contrase\u00F1a", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Alumnos.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Alumnos.prototype, "apellido_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Alumnos.prototype, "apellido_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Alumnos.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Alumnos.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alumnos_cuestionarios_entity_1.AlumnosCuestionarios, alumnosCuestionarios => alumnosCuestionarios.alumno),
    __metadata("design:type", Array)
], Alumnos.prototype, "alumnosCuestionarios", void 0);
Alumnos = __decorate([
    (0, typeorm_1.Entity)()
], Alumnos);
exports.Alumnos = Alumnos;
//# sourceMappingURL=alumnos.entity.js.map