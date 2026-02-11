import { GenericEntity } from "src/generic/generic.entity";
import { Materia } from "src/materias/materias.entity";
import { Temas } from "./temas.entity";
export declare class Unidades extends GenericEntity {
    id: number;
    id_materia: number;
    nombre: string;
    descripcion: string;
    numero_unidad: number;
    materia: Materia;
    temas: Temas[];
}
