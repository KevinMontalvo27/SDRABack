import { InventarioDeFelder } from './inventario_de_felder.entity';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { RespuestasCompactadasDto } from './dto/respuestas_compactadas.dto';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { EstrategiaEnsenanzaService } from 'src/estrategias_enseñanza/estrategias_enseñanza.service';
import { AlumnosCuestionariosService } from 'src/alumnos_cuestionarios/alumnos_cuestionarios.service';
export declare class InventarioDeFelderService extends GenericService<InventarioDeFelder> {
    private readonly InventarioDeFelderRepository;
    private readonly perfilFinalRepository;
    private readonly estrategiaEnseñanzaService;
    private readonly alumnosCuestionariosService;
    constructor(InventarioDeFelderRepository: Repository<InventarioDeFelder>, perfilFinalRepository: Repository<PerfilFinalInventarioDeFelder>, estrategiaEnseñanzaService: EstrategiaEnsenanzaService, alumnosCuestionariosService: AlumnosCuestionariosService);
    findEstadoEncuesta(numAlumno: number): Promise<InventarioDeFelder[]>;
    saveResultadoEncuesta(resultadoEncuestaDto: RespuestasCompactadasDto): Promise<InventarioDeFelder>;
    savePerfilfinal(resultadoEncuestaDto: RespuestasCompactadasDto): Promise<PerfilFinalInventarioDeFelder>;
}
