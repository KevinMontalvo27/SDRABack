import { GenericController } from 'src/generic/generic.controller';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';
import { EstrategiaEnsenanzaService } from './estrategias_enseñanza.service';
export declare class EstrategiaEnsenanzaController extends GenericController<EstrategiaEnsenanza, EstrategiaEnsenanzaService> {
    private readonly estrategiaEnsenanzaService;
    constructor(estrategiaEnsenanzaService: EstrategiaEnsenanzaService);
    generarEstrategia(nroCuenta: number): Promise<import("../perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity").PerfilFinalInventarioDeFelder>;
    saveModaEstrategiasBynumGrupo(numGrupo: number): Promise<void>;
}
