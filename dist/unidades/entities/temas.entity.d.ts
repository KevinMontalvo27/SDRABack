import { GenericEntity } from "src/generic/generic.entity";
import { Unidades } from "./unidades.entity";
export declare class Temas extends GenericEntity {
    id: number;
    id_unidad: number;
    nombre: string;
    descripcion: string;
    numero_tema: number;
    unidad: Unidades;
    subtemas: string[];
}
