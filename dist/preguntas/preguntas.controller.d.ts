import { GenericController } from 'src/generic/generic.controller';
import { Preguntas } from './preguntas.entity';
import { PreguntasService } from './preguntas.service';
export declare class PreguntasController extends GenericController<Preguntas, PreguntasService> {
    private readonly preguntasService;
    constructor(preguntasService: PreguntasService);
    findAll(): Promise<Preguntas[]>;
    create(entity: Preguntas): Promise<import("typeorm").InsertResult>;
    preguntasByIdCuestionario(idCuestionario: number): Promise<Preguntas[]>;
}
