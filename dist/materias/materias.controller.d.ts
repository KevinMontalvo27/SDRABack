import { GenericController } from 'src/generic/generic.controller';
import { Materia } from './materias.entity';
import { MateriasService } from './materias.service';
export declare class MateriasController extends GenericController<Materia, MateriasService> {
    private readonly materiasService;
    constructor(materiasService: MateriasService);
    getMateriasByGrupo(grupo: number): Promise<Materia[]>;
    getMateriasByProfesor(id_profesor: string): Promise<Materia[]>;
}
