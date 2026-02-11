import { Repository } from 'typeorm';
import { GruposAsignados } from './grupos_asignados.entity';
import { GenericService } from 'src/generic/generic.service';
export declare class GruposAsignadosService extends GenericService<GruposAsignados> {
    private readonly gruposAsignadosRepository;
    constructor(gruposAsignadosRepository: Repository<GruposAsignados>);
    findAllByProfesorId(idProfesor: number): Promise<GruposAsignados[]>;
}
