"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreguntasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const preguntas_controller_1 = require("./preguntas.controller");
const preguntas_service_1 = require("./preguntas.service");
const preguntas_entity_1 = require("./preguntas.entity");
let PreguntasModule = class PreguntasModule {
};
PreguntasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([preguntas_entity_1.Preguntas])],
        controllers: [preguntas_controller_1.PreguntasController],
        providers: [preguntas_service_1.PreguntasService],
    })
], PreguntasModule);
exports.PreguntasModule = PreguntasModule;
//# sourceMappingURL=preguntas.module.js.map