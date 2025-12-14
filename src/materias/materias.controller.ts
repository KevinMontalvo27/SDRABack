import { Controller, Get, Param } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { Materia } from './materias.entity';
import { MateriasService } from './materias.service';

@Controller('materias')
export class MateriasController extends GenericController<Materia, MateriasService> {
  constructor(private readonly materiasService: MateriasService) {
    super(materiasService);
  }

  @Get('grupo/:grupo')
  async getMateriasByGrupo(@Param('grupo') grupo: number): Promise<Materia[]> {
    return this.materiasService.findMateriasByGrupo(grupo);
  }

  @Get('profesor/:id_profesor')
  async getMateriasByProfesor(@Param('id_profesor') id_profesor: string): Promise<Materia[]> {
    return this.materiasService.findMateriasByProfesor(id_profesor);
  }
}
