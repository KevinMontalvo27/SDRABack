"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unidades_entity_1 = require("./entities/unidades.entity");
const temas_entity_1 = require("./entities/temas.entity");
const objetos_aprendizaje_entity_1 = require("./entities/objetos_aprendizaje.entity");
const unidades_controller_1 = require("./controllers/unidades.controller");
const unidades_service_1 = require("./services/unidades.service");
const temas_controller_1 = require("./controllers/temas.controller");
const temas_service_1 = require("./services/temas.service");
const objeto_aprendizaje_controller_1 = require("./controllers/objeto-aprendizaje.controller");
const objetos_aprendizaje_service_1 = require("./services/objetos-aprendizaje.service");
const estilo_objeto_controller_1 = require("./controllers/estilo-objeto.controller");
const estilo_objeto_service_1 = require("./services/estilo-objeto.service");
const estilo_objeto_entity_1 = require("./entities/estilo_objeto.entity");
const cloudinary_module_1 = require("../cloudinary/cloudinary.module");
let UnidadesModule = class UnidadesModule {
};
UnidadesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([unidades_entity_1.Unidades, temas_entity_1.Temas, objetos_aprendizaje_entity_1.ObjetosAprendizaje, estilo_objeto_entity_1.EstiloObjeto]),
            cloudinary_module_1.CloudinaryModule],
        controllers: [unidades_controller_1.UnidadesController, temas_controller_1.TemasController, objeto_aprendizaje_controller_1.ObjetosAprendizajeController, estilo_objeto_controller_1.EstiloObjetoController],
        providers: [unidades_service_1.UnidadesService, temas_service_1.TemasService, objetos_aprendizaje_service_1.ObjetosAprendizajeService, estilo_objeto_service_1.EstiloObjetoService],
        exports: [unidades_service_1.UnidadesService, temas_service_1.TemasService, objetos_aprendizaje_service_1.ObjetosAprendizajeService, estilo_objeto_service_1.EstiloObjetoService],
    })
], UnidadesModule);
exports.UnidadesModule = UnidadesModule;
//# sourceMappingURL=unidades.module.js.map