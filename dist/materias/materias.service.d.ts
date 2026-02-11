import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Materia } from './materias.entity';
export declare class MateriasService extends GenericService<Materia> {
    private materiasRepository;
    constructor(materiasRepository: Repository<Materia>);
    findMateriasByGrupo(grupo: number): Promise<Materia[]>;
    findMateriasByProfesor(id_profesor: string): Promise<Materia[]>;
}
