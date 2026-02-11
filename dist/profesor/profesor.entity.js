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
exports.Profesor = void 0;
const typeorm_1 = require("typeorm");
const generic_entity_1 = require("../generic/generic.entity");
const perfil_final_inventario_de_felder_entity_1 = require("../perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity");
const class_transformer_1 = require("class-transformer");
let Profesor = class Profesor extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Profesor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Profesor.prototype, "id_profesor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profesor.prototype, "nombre_profesor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Profesor.prototype, "nro_empleado", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profesor.prototype, "contra", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profesor.prototype, "estrategia_preferida", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Profesor.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profesor.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.profesor),
    (0, typeorm_1.JoinColumn)({ name: 'grupo', referencedColumnName: 'grupo' }),
    __metadata("design:type", Array)
], Profesor.prototype, "perfilesFinales", void 0);
Profesor = __decorate([
    (0, typeorm_1.Entity)()
], Profesor);
exports.Profesor = Profesor;
//# sourceMappingURL=profesor.entity.js.map