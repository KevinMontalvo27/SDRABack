import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Materia } from './materias.entity';

@Injectable()
export class MateriasService extends GenericService<Materia> {
  constructor(
    @InjectRepository(Materia)
    private materiasRepository: Repository<Materia>,
  ) {
    super(materiasRepository);
  }

  // OPCIÓN 1B: Si agregas campo grupo a Materia
  async findMateriasByGrupo(grupo: number): Promise<Materia[]> {
    return this.materiasRepository.find({
      where: { grupo: grupo },
      order: { nombre: 'ASC' },
    });
  }

  async findMateriasByProfesor(id_profesor: string): Promise<Materia[]> {
    return this.materiasRepository.find({
      where: { id_profesor: id_profesor },
      order: { nombre: 'ASC' },
    });
  }    
}

