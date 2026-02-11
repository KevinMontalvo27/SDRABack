import { GenericController } from 'src/generic/generic.controller';
import { EstiloObjeto } from '../entities/estilo_objeto.entity';
import { EstiloObjetoService } from '../services/estilo-objeto.service';
export declare class EstiloObjetoController extends GenericController<EstiloObjeto, EstiloObjetoService> {
    private readonly estiloObjetoService;
    constructor(estiloObjetoService: EstiloObjetoService);
    findAll(): Promise<EstiloObjeto[]>;
    create(entity: EstiloObjeto): Promise<import("typeorm").InsertResult>;
    findByObjeto(objeto: string): Promise<EstiloObjeto>;
    findByEstilo(estilo: string): Promise<EstiloObjeto[]>;
    addEstilo(id: number, body: {
        estilo: string;
    }): Promise<EstiloObjeto>;
    removeEstilo(id: number, body: {
        estilo: string;
    }): Promise<EstiloObjeto>;
}
