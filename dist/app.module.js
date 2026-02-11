"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const setup_service_1 = require("./setup/setup.service");
const typeorm_1 = require("@nestjs/typeorm");
const alumnos_module_1 = require("./alumnos/alumnos.module");
const carreras_module_1 = require("./carreras/carreras.module");
const cuestionarios_module_1 = require("./cuestionarios/cuestionarios.module");
const grupos_module_1 = require("./grupos/grupos.module");
const grupos_asignados_module_1 = require("./grupos_asignados/grupos_asignados.module");
const inventario_de_felder_module_1 = require("./inventario_de_felder/inventario_de_felder.module");
const perfil_final_inventario_de_felder_module_1 = require("./perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.module");
const preguntas_module_1 = require("./preguntas/preguntas.module");
const profesor_module_1 = require("./profesor/profesor.module");
const estrategias_ense_anza_module_1 = require("./estrategias_ense\u00F1anza/estrategias_ense\u00F1anza.module");
const materias_module_1 = require("./materias/materias.module");
const administrador_module_1 = require("./administrador/administrador.module");
const config_1 = require("@nestjs/config");
const unidades_module_1 = require("./unidades/unidades.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const alumnos_cuestionarios_module_1 = require("./alumnos_cuestionarios/alumnos_cuestionarios.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: setup_service_1.DatabaseSetUp
            }),
            alumnos_module_1.AlumnosModule,
            carreras_module_1.CarrerasModule,
            cuestionarios_module_1.CuestionariosModule,
            grupos_module_1.GruposModule,
            grupos_asignados_module_1.GruposAsignadosModule,
            inventario_de_felder_module_1.InventarioDeFelderModule,
            perfil_final_inventario_de_felder_module_1.PerfilFinalInventarioDeFelderModule,
            preguntas_module_1.PreguntasModule,
            profesor_module_1.ProfesorModule,
            estrategias_ense_anza_module_1.EstrategiaEnsenanzaModule,
            materias_module_1.MateriasModule,
            administrador_module_1.AdministradorModule,
            unidades_module_1.UnidadesModule,
            cloudinary_module_1.CloudinaryModule,
            alumnos_cuestionarios_module_1.AlumnosCuestionariosModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map