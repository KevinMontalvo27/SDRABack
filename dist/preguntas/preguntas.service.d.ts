import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Preguntas } from './preguntas.entity';
export declare class PreguntasService extends GenericService<Preguntas> {
    private readonly preguntasRepository;
    constructor(preguntasRepository: Repository<Preguntas>);
    preguntasByIdCuestionario(idCuestionario: number): Promise<Preguntas[]>;
}
