import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { Grupos } from 'src/grupos/grupos.entity';
export declare class EstrategiaEnsenanza extends GenericEntity {
    id: number;
    titulo: string;
    descripcion: string;
    perfilesFinalesEE1: PerfilFinalInventarioDeFelder[];
    perfilesFinalesEE2: PerfilFinalInventarioDeFelder[];
    perfilesFinalesEE3: PerfilFinalInventarioDeFelder[];
    perfilesFinalesEE4: PerfilFinalInventarioDeFelder[];
    static createQueryBuilder: any;
    perfilesGrupoEE1: Grupos[];
    perfilesGrupoEE2: Grupos[];
    perfilesGrupoEE3: Grupos[];
    perfilesGrupoEE4: Grupos[];
    static createQueryBuilderGrupo: any;
}
