import { CarrerasService } from './carreras.service';
import { Carreras } from './carreras.entity';
import { GenericController } from 'src/generic/generic.controller';
export declare class CarrerasController extends GenericController<Carreras, CarrerasService> {
    private readonly carrerasService;
    constructor(carrerasService: CarrerasService);
    findAll(): Promise<Carreras[]>;
    create(entity: Carreras): Promise<import("typeorm").InsertResult>;
}
