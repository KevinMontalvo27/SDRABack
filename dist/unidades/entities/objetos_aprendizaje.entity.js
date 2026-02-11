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
exports.ObjetosAprendizaje = void 0;
const typeorm_1 = require("typeorm");
const generic_entity_1 = require("../../generic/generic.entity");
const temas_entity_1 = require("./temas.entity");
const estilo_objeto_entity_1 = require("./estilo_objeto.entity");
let ObjetosAprendizaje = class ObjetosAprendizaje extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ObjetosAprendizaje.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], ObjetosAprendizaje.prototype, "id_tema", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], ObjetosAprendizaje.prototype, "id_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ObjetosAprendizaje.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ObjetosAprendizaje.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ObjetosAprendizaje.prototype, "contenido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], ObjetosAprendizaje.prototype, "cloudinary_public_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => temas_entity_1.Temas),
    (0, typeorm_1.JoinColumn)({ name: 'id_tema', referencedColumnName: 'id' }),
    __metadata("design:type", temas_entity_1.Temas)
], ObjetosAprendizaje.prototype, "tema", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estilo_objeto_entity_1.EstiloObjeto, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_type', referencedColumnName: 'id' }),
    __metadata("design:type", estilo_objeto_entity_1.EstiloObjeto)
], ObjetosAprendizaje.prototype, "estiloObjeto", void 0);
ObjetosAprendizaje = __decorate([
    (0, typeorm_1.Entity)()
], ObjetosAprendizaje);
exports.ObjetosAprendizaje = ObjetosAprendizaje;
//# sourceMappingURL=objetos_aprendizaje.entity.js.map