import { Repository } from 'typeorm';
import { Carreras } from './carreras.entity';
import { GenericService } from 'src/generic/generic.service';
export declare class CarrerasService extends GenericService<Carreras> {
    constructor(carrerasRepository: Repository<Carreras>);
}
