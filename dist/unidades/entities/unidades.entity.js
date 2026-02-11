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
exports.Unidades = void 0;
const generic_entity_1 = require("../../generic/generic.entity");
const materias_entity_1 = require("../../materias/materias.entity");
const typeorm_1 = require("typeorm");
const temas_entity_1 = require("./temas.entity");
let Unidades = class Unidades extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Unidades.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Unidades.prototype, "id_materia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Unidades.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Unidades.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Unidades.prototype, "numero_unidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => materias_entity_1.Materia, materia => materia.unidades),
    (0, typeorm_1.JoinColumn)({ name: 'id_materia', referencedColumnName: 'id' }),
    __metadata("design:type", materias_entity_1.Materia)
], Unidades.prototype, "materia", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => temas_entity_1.Temas, tema => tema.unidad),
    __metadata("design:type", Array)
], Unidades.prototype, "temas", void 0);
Unidades = __decorate([
    (0, typeorm_1.Entity)()
], Unidades);
exports.Unidades = Unidades;
//# sourceMappingURL=unidades.entity.js.map