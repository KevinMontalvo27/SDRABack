import { GenericEntity } from 'src/generic/generic.entity';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
export declare class Profesor extends GenericEntity {
    id: number;
    id_profesor: number;
    nombre_profesor: string;
    nro_empleado: number;
    contra: string;
    estrategia_preferida: string;
    grupo: number;
    carrera: string;
    perfilesFinales: PerfilFinalInventarioDeFelder[];
}
