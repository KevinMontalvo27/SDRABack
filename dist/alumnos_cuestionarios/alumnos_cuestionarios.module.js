"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosCuestionariosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alumnos_cuestionarios_entity_1 = require("./alumnos_cuestionarios.entity");
const alumnos_cuestionarios_service_1 = require("./alumnos_cuestionarios.service");
const alumnos_cuestionarios_controller_1 = require("./alumnos_cuestionarios.controller");
let AlumnosCuestionariosModule = class AlumnosCuestionariosModule {
};
AlumnosCuestionariosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([alumnos_cuestionarios_entity_1.AlumnosCuestionarios])
        ],
        controllers: [alumnos_cuestionarios_controller_1.AlumnosCuestionariosController],
        providers: [alumnos_cuestionarios_service_1.AlumnosCuestionariosService],
        exports: [alumnos_cuestionarios_service_1.AlumnosCuestionariosService]
    })
], AlumnosCuestionariosModule);
exports.AlumnosCuestionariosModule = AlumnosCuestionariosModule;
//# sourceMappingURL=alumnos_cuestionarios.module.js.map