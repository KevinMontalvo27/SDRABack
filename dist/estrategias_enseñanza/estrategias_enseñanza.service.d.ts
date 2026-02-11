import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { Grupos } from 'src/grupos/grupos.entity';
export declare class EstrategiaEnsenanzaService extends GenericService<EstrategiaEnsenanza> {
    private perfilFinalRepository;
    private gruposRepository;
    constructor(perfilFinalRepository: Repository<PerfilFinalInventarioDeFelder>, estrategiaEnsenanzaRepository: Repository<EstrategiaEnsenanza>, gruposRepository: Repository<Grupos>);
    generarEstrategia(nroCuenta: number): Promise<PerfilFinalInventarioDeFelder>;
    calcularYGuardarModaParaGrupo(numGrupo: number): Promise<void>;
}
