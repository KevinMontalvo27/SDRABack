import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { ObjetosAprendizaje } from '../entities/objetos_aprendizaje.entity';

@Injectable()
export class ObjetosAprendizajeService extends GenericService<ObjetosAprendizaje> {
    constructor(
        @InjectRepository(ObjetosAprendizaje)
        private readonly objetosAprendizajeRepository: Repository<ObjetosAprendizaje>
    ) {
        super(objetosAprendizajeRepository);
    }

    async findByTemaId(idTema: number): Promise<ObjetosAprendizaje[]> {
        return this.objetosAprendizajeRepository.find({
            where: { id_tema: idTema },
            relations: ['estiloObjeto']
        });
    }

    async countByTemaId(idTema: number): Promise<number> {
        return this.objetosAprendizajeRepository.count({
            where: { id_tema: idTema }
        });
    }
}