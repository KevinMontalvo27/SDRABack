import { GenericEntity } from 'src/generic/generic.entity';
import { Temas } from './temas.entity';
import { EstiloObjeto } from './estilo_objeto.entity';
export declare class ObjetosAprendizaje extends GenericEntity {
    id: number;
    id_tema: number;
    id_type: number;
    nombre: string;
    descripcion: string;
    contenido: string;
    cloudinary_public_id: string;
    tema: Temas;
    estiloObjeto: EstiloObjeto;
}
