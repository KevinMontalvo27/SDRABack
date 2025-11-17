import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { PerfilFinalInventarioDeFelderService } from './perfil_final_inventario_de_felder.service';
import { ResultadoRecomendacionDto } from './dto/recomendacion.dto';

@Controller('perfil-final-inventario-de-felder')
export class PerfilFinalInventarioDeFelderController extends GenericController<PerfilFinalInventarioDeFelder, PerfilFinalInventarioDeFelderService> {
  constructor(private readonly perfilFinalInventarioDeFelderService: PerfilFinalInventarioDeFelderService) {
    super(perfilFinalInventarioDeFelderService);
  }

  @Get()
  async findAll(): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderService.find();
  }

  @Post()
  async create(@Body() entity: PerfilFinalInventarioDeFelder) {
    return this.perfilFinalInventarioDeFelderService.create(entity);
  }

  @Get('id_grupo/:id')
  async findByGrupoId(@Param('id') idGrupos: string) {
    const ids = idGrupos.split(',').map(Number);
    return this.perfilFinalInventarioDeFelderService.findByGrupoIds(ids);
  }

  @Get('id_alumno/:id')
  async findByAlumnoId(@Param('id') idAlumno: string) {
    const ids = idAlumno.split(',').map(Number);
    return this.perfilFinalInventarioDeFelderService.findByAlumnoIds(ids);
  }

  @Get('alumno/:numCuenta')
  async findByNumAlumno(@Param('numCuenta') numAlumno: number) {
    return this.perfilFinalInventarioDeFelderService.findResultadoAlumno(numAlumno);
  }

  @Get('moda_estrategias/:num_grupo')
  async findModaEstrategiasBynumGrupo(@Param('num_grupo') numGrupo: number) {
    return this.perfilFinalInventarioDeFelderService.findModaEstrategiasByNumGrupo(numGrupo);
  }

   // ===== ENDPOINT DE RECOMENDACIÓN =====
  
  /**
   * Recomienda objetos de aprendizaje para un tema específico
   * basándose en el perfil del estudiante
   * 
   * GET /perfil-final-inventario-de-felder/recomendacion/:nroCuenta/tema/:idTema
   * 
   * Ejemplo: GET /perfil-final-inventario-de-felder/recomendacion/19104294/tema/1
   * 
   * @param nroCuenta - Número de cuenta del estudiante
   * @param idTema - ID del tema para el cual se buscan recomendaciones
   * @returns Objetos de aprendizaje compatibles con el perfil del estudiante
   */
  @Get('recomendacion/:nroCuenta/tema/:idTema')
  async recomendarObjetosParaTema(
    @Param('nroCuenta') nroCuenta: number,
    @Param('idTema') idTema: number
  ): Promise<ResultadoRecomendacionDto> {
    return this.perfilFinalInventarioDeFelderService.recomendarObjetosParaTema(
      Number(nroCuenta),
      Number(idTema)
    );
  }

  @Post('test')
  test(@Body() filtros?: any){
    return this.find(filtros);
  }
}
