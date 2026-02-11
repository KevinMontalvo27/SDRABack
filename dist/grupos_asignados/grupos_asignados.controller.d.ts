import { GruposAsignadosService } from './grupos_asignados.service';
import { GruposAsignados } from './grupos_asignados.entity';
import { GenericController } from 'src/generic/generic.controller';
export declare class GruposAsignadosController extends GenericController<GruposAsignados, GruposAsignadosService> {
    private readonly gruposAsignadosService;
    constructor(gruposAsignadosService: GruposAsignadosService);
    findAll(): Promise<GruposAsignados[]>;
    create(entity: GruposAsignados): Promise<import("typeorm").InsertResult>;
    findByProfesorId(idProfesor: number): Promise<GruposAsignados[]>;
}
