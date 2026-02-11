"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alumnos_entity_1 = require("./alumnos.entity");
const alumnos_controller_1 = require("./alumnos.controller");
const alumnos_service_1 = require("./alumnos.service");
const alumnos_cuestionarios_module_1 = require("../alumnos_cuestionarios/alumnos_cuestionarios.module");
let AlumnosModule = class AlumnosModule {
};
AlumnosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([alumnos_entity_1.Alumnos]), alumnos_cuestionarios_module_1.AlumnosCuestionariosModule],
        controllers: [alumnos_controller_1.AlumnosController],
        providers: [alumnos_service_1.AlumnosService],
    })
], AlumnosModule);
exports.AlumnosModule = AlumnosModule;
//# sourceMappingURL=alumnos.module.js.map