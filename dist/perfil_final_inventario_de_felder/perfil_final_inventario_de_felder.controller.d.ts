import { GenericController } from 'src/generic/generic.controller';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { PerfilFinalInventarioDeFelderService } from './perfil_final_inventario_de_felder.service';
import { ResultadoRecomendacionDto } from './dto/recomendacion.dto';
export declare class PerfilFinalInventarioDeFelderController extends GenericController<PerfilFinalInventarioDeFelder, PerfilFinalInventarioDeFelderService> {
    private readonly perfilFinalInventarioDeFelderService;
    constructor(perfilFinalInventarioDeFelderService: PerfilFinalInventarioDeFelderService);
    findAll(): Promise<PerfilFinalInventarioDeFelder[]>;
    create(entity: PerfilFinalInventarioDeFelder): Promise<import("typeorm").InsertResult>;
    findByGrupoId(idGrupos: string): Promise<PerfilFinalInventarioDeFelder[]>;
    findByAlumnoId(idAlumno: string): Promise<PerfilFinalInventarioDeFelder[]>;
    findByNumAlumno(numAlumno: number): Promise<PerfilFinalInventarioDeFelder[]>;
    findModaEstrategiasBynumGrupo(numGrupo: number): Promise<string[]>;
    recomendarObjetosParaTema(nroCuenta: number, idTema: number): Promise<ResultadoRecomendacionDto>;
    test(filtros?: any): Promise<PerfilFinalInventarioDeFelder[]>;
}
