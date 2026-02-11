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
exports.EstrategiaEnsenanzaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const generic_service_1 = require("../generic/generic.service");
const estrategias_ense_anza_entity_1 = require("./estrategias_ense\u00F1anza.entity");
const perfil_final_inventario_de_felder_entity_1 = require("../perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity");
const grupos_entity_1 = require("../grupos/grupos.entity");
let EstrategiaEnsenanzaService = class EstrategiaEnsenanzaService extends generic_service_1.GenericService {
    constructor(perfilFinalRepository, estrategiaEnsenanzaRepository, gruposRepository) {
        super(estrategiaEnsenanzaRepository);
        this.perfilFinalRepository = perfilFinalRepository;
        this.gruposRepository = gruposRepository;
    }
    async generarEstrategia(nroCuenta) {
        const perfil = await this.perfilFinalRepository.findOne({ where: { nro_cuenta: nroCuenta } });
        if (!perfil) {
            throw new Error('Perfil no encontrado');
        }
        const estilosAprendizaje = {
            activo_reflexivo: perfil.activo_reflexivo.charAt(perfil.activo_reflexivo.length - 1),
            sensorial_intuitivo: perfil.sensorial_intuitivo.charAt(perfil.sensorial_intuitivo.length - 1),
            visual_verbal: perfil.visual_verbal.charAt(perfil.visual_verbal.length - 1),
            secuencial_global: perfil.secuencial_global.charAt(perfil.secuencial_global.length - 1),
        };
        const estrategiaEnseñanza = {
            ee1: 0,
            ee2: 0,
            ee3: 0,
            ee4: 0,
        };
        if (estilosAprendizaje.activo_reflexivo === 'A') {
            estrategiaEnseñanza.ee1 = 1;
        }
        else {
            estrategiaEnseñanza.ee1 = 2;
        }
        if (estilosAprendizaje.sensorial_intuitivo === 'A') {
            estrategiaEnseñanza.ee2 = 3;
        }
        else {
            estrategiaEnseñanza.ee2 = 4;
        }
        if (estilosAprendizaje.visual_verbal === 'A') {
            estrategiaEnseñanza.ee3 = 5;
        }
        else {
            estrategiaEnseñanza.ee3 = 6;
        }
        if (estilosAprendizaje.secuencial_global === 'A') {
            estrategiaEnseñanza.ee4 = 7;
        }
        else {
            estrategiaEnseñanza.ee4 = 8;
        }
        await this.perfilFinalRepository.update({ nro_cuenta: nroCuenta }, {
            ee1: { id: estrategiaEnseñanza.ee1 },
            ee2: { id: estrategiaEnseñanza.ee2 },
            ee3: { id: estrategiaEnseñanza.ee3 },
            ee4: { id: estrategiaEnseñanza.ee4 }
        });
        return perfil;
    }
    async calcularYGuardarModaParaGrupo(numGrupo) {
        const perfiles = await this.perfilFinalRepository.find({
            where: { grupo: numGrupo },
            relations: ['ee1', 'ee2', 'ee3', 'ee4'],
        });
        const estrategiasFrecuencia = {};
        perfiles.forEach((perfil) => {
            if (perfil.ee1 && perfil.ee1.id) {
                estrategiasFrecuencia[perfil.ee1.id.toString()] = (estrategiasFrecuencia[perfil.ee1.id.toString()] || 0) + 1;
            }
            if (perfil.ee2 && perfil.ee2.id) {
                estrategiasFrecuencia[perfil.ee2.id.toString()] = (estrategiasFrecuencia[perfil.ee2.id.toString()] || 0) + 1;
            }
            if (perfil.ee3 && perfil.ee3.id) {
                estrategiasFrecuencia[perfil.ee3.id.toString()] = (estrategiasFrecuencia[perfil.ee3.id.toString()] || 0) + 1;
            }
            if (perfil.ee4 && perfil.ee4.id) {
                estrategiasFrecuencia[perfil.ee4.id.toString()] = (estrategiasFrecuencia[perfil.ee4.id.toString()] || 0) + 1;
            }
        });
        const estrategiasOrdenadas = Object.keys(estrategiasFrecuencia).sort((a, b) => estrategiasFrecuencia[b] - estrategiasFrecuencia[a]);
        const estrategiasModa = estrategiasOrdenadas.slice(0, 4).map(Number);
        await this.gruposRepository.update({ grupo: numGrupo }, {
            ee1: { id: estrategiasModa[0] || null },
            ee2: { id: estrategiasModa[1] || null },
            ee3: { id: estrategiasModa[2] || null },
            ee4: { id: estrategiasModa[3] || null },
        });
    }
};
EstrategiaEnsenanzaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(perfil_final_inventario_de_felder_entity_1.PerfilFinalInventarioDeFelder)),
    __param(1, (0, typeorm_1.InjectRepository)(estrategias_ense_anza_entity_1.EstrategiaEnsenanza)),
    __param(2, (0, typeorm_1.InjectRepository)(grupos_entity_1.Grupos)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EstrategiaEnsenanzaService);
exports.EstrategiaEnsenanzaService = EstrategiaEnsenanzaService;
//# sourceMappingURL=estrategias_ense%C3%B1anza.service.js.map