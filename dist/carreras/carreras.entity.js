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
exports.Carreras = void 0;
const typeorm_1 = require("typeorm");
const grupos_entity_1 = require("../grupos/grupos.entity");
const generic_entity_1 = require("../generic/generic.entity");
let Carreras = class Carreras extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Carreras.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: 3 }),
    __metadata("design:type", String)
], Carreras.prototype, "id_carrera", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Carreras.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupos_entity_1.Grupos, grupo => grupo.carrera),
    __metadata("design:type", Array)
], Carreras.prototype, "grupos", void 0);
Carreras = __decorate([
    (0, typeorm_1.Entity)()
], Carreras);
exports.Carreras = Carreras;
//# sourceMappingURL=carreras.entity.js.map