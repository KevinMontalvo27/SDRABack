import { Repository } from 'typeorm';
import { Cuestionarios } from './cuestionarios.entity';
import { GenericService } from 'src/generic/generic.service';
export declare class CuestionariosService extends GenericService<Cuestionarios> {
    private readonly cuestionariosRepository;
    constructor(cuestionariosRepository: Repository<Cuestionarios>);
    findByIdCuestionario(idCuestionario: number): Promise<Cuestionarios[]>;
}
