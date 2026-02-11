import { EstiloObjeto } from 'src/unidades/entities/estilo_objeto.entity';
import { ObjetosAprendizaje } from 'src/unidades/entities/objetos_aprendizaje.entity';
export declare class RecomendacionObjetoDto {
    objeto: ObjetosAprendizaje;
    estiloObjeto: EstiloObjeto;
    compatibilidad: number;
    estilosCompatibles: string[];
}
export declare class ResultadoRecomendacionDto {
    mensaje?: string;
    objetos: RecomendacionObjetoDto[];
    totalCompatibles: number;
    estilosEstudiante: string[];
}
