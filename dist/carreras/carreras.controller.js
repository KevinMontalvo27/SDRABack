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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrerasController = void 0;
const common_1 = require("@nestjs/common");
const carreras_service_1 = require("./carreras.service");
const carreras_entity_1 = require("./carreras.entity");
const generic_controller_1 = require("../generic/generic.controller");
let CarrerasController = class CarrerasController extends generic_controller_1.GenericController {
    constructor(carrerasService) {
        super(carrerasService);
        this.carrerasService = carrerasService;
    }
    async findAll() {
        return this.carrerasService.find();
    }
    async create(entity) {
        return this.carrerasService.create(entity);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carreras_entity_1.Carreras]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "create", null);
CarrerasController = __decorate([
    (0, common_1.Controller)('carreras'),
    __metadata("design:paramtypes", [carreras_service_1.CarrerasService])
], CarrerasController);
exports.CarrerasController = CarrerasController;
//# sourceMappingURL=carreras.controller.js.map