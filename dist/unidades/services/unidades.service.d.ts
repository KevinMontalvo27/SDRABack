import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Unidades } from '../entities/unidades.entity';
export declare class UnidadesService extends GenericService<Unidades> {
    private readonly unidadesRepository;
    constructor(unidadesRepository: Repository<Unidades>);
    findByMateriaId(idMateria: number): Promise<Unidades[]>;
    findWithTemas(id: number): Promise<Unidades>;
}
