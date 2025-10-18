import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Unidades } from '../entities/unidades.entity';

@Injectable()
export class UnidadesService extends GenericService<Unidades> {
    constructor(
        @InjectRepository(Unidades)
        private readonly unidadesRepository: Repository<Unidades>
    ) {
        super(unidadesRepository);
    }

    async findByMateriaId(idMateria: number): Promise<Unidades[]> {
        return this.unidadesRepository.find({
        where: { id_materia: idMateria },
        relations: ['temas'],
        order: { numero_unidad: 'ASC' }
        });
    }

    async findWithTemas(id: number): Promise<Unidades> {
        return this.unidadesRepository.findOne({
        where: { id },
        relations: ['temas', 'materia']
        });
    }
}