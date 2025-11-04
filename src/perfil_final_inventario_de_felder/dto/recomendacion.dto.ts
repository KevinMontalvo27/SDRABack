import { ObjetosAprendizaje } from 'src/unidades/entities/objetos_aprendizaje.entity';

export class RecomendacionObjetoDto {
    objeto: ObjetosAprendizaje;
    compatibilidad: number;
    estilosCompatibles: string[];
}

export class ResultadoRecomendacionDto {
    mensaje?: string;
    objetos: RecomendacionObjetoDto[];
    totalCompatibles: number;
    estilosEstudiante: string[];
}