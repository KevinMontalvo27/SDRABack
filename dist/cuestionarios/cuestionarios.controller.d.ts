import { CuestionariosService } from './cuestionarios.service';
import { Cuestionarios } from './cuestionarios.entity';
import { GenericController } from 'src/generic/generic.controller';
export declare class CuestionariosController extends GenericController<Cuestionarios, CuestionariosService> {
    private readonly cuestionariosService;
    constructor(cuestionariosService: CuestionariosService);
    findAll(): Promise<Cuestionarios[]>;
    create(entity: Cuestionarios): Promise<import("typeorm").InsertResult>;
    findById(idCuestionario: number): Promise<Cuestionarios[]>;
}
