import { Injectable, NotFoundException } from '@nestjs/common';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, In, Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Grupos } from 'src/grupos/grupos.entity';
import { ObjetosAprendizaje } from 'src/unidades/entities/objetos_aprendizaje.entity';
import { EstiloObjeto } from 'src/unidades/entities/estilo_objeto.entity';
import { RecomendacionObjetoDto, ResultadoRecomendacionDto } from './dto/recomendacion.dto';

interface RecomendacionObjeto {
  objeto: ObjetosAprendizaje;
  compatibilidad: number;
  estilosCompatibles: string[];
}

interface ResultadoRecomendacion {
  mensaje?: string;
  objetos: RecomendacionObjeto[];
  totalCompatibles: number;
  estilosEstudiante: string[];
}


@Injectable()
export class PerfilFinalInventarioDeFelderService extends GenericService<PerfilFinalInventarioDeFelder> {
  constructor(
    @InjectRepository(PerfilFinalInventarioDeFelder)
    private readonly perfilFinalInventarioDeFelderRepository: Repository<PerfilFinalInventarioDeFelder>,
    @InjectRepository(Grupos) 
    private gruposRepository: Repository<Grupos>,
    @InjectRepository(ObjetosAprendizaje)
    private objetosAprendizajeRepository: Repository<ObjetosAprendizaje>,
    @InjectRepository(EstiloObjeto)
    private estiloObjetoRepository: Repository<EstiloObjeto>,
  ) {
    super(perfilFinalInventarioDeFelderRepository);
  }

  async findByGrupoIds(ids: number[]): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderRepository.find({ where: { grupo: In(ids) } });
  }

  async findByAlumnoIds(ids: number[]): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderRepository.find({ where: { grupo: In(ids) } });
  }

  async findResultadoAlumno(numAlumno: number): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderRepository.find({ where: { nro_cuenta: numAlumno } });
  }

  find(options?: FindManyOptions<PerfilFinalInventarioDeFelder>): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderRepository.find(options);
  }

  //Calcular la moda de inventario de Felder
  async findModaEstrategiasByNumGrupo(numGrupo: number): Promise<string[]> {
    const perfiles = await this.perfilFinalInventarioDeFelderRepository.find({
      where: { grupo: numGrupo },
      relations: ['ee1', 'ee2', 'ee3', 'ee4'],
    });//Ojo numGrupo es para el numero grupo especificamente

    // Crear un objeto para realizar un seguimiento de la frecuencia de cada estrategia de enseñanza
    const estrategiasFrecuencia: { [key: string]: number } = {};

    // Recorrer los perfiles y contar la frecuencia de cada estrategia de enseñanza
    perfiles.forEach((perfil) => {
      if (perfil.ee1 && perfil.ee1.titulo) {
        estrategiasFrecuencia[perfil.ee1.titulo] = (estrategiasFrecuencia[perfil.ee1.titulo] || 0) + 1;
      }

      if (perfil.ee2 && perfil.ee2.titulo) {
        estrategiasFrecuencia[perfil.ee2.titulo] = (estrategiasFrecuencia[perfil.ee2.titulo] || 0) + 1;
      }

      if (perfil.ee3 && perfil.ee3.titulo) {
        estrategiasFrecuencia[perfil.ee3.titulo] = (estrategiasFrecuencia[perfil.ee3.titulo] || 0) + 1;
      }

      if (perfil.ee4 && perfil.ee4.titulo) {
        estrategiasFrecuencia[perfil.ee4.titulo] = (estrategiasFrecuencia[perfil.ee4.titulo] || 0) + 1;
      }
    });

    // Convertir el objeto de frecuencia en un array de objetos [{ estrategia: string, frecuencia: number }]
    const estrategiasFrecuenciaArray = Object.keys(estrategiasFrecuencia).map((estrategia) => ({
      estrategia,
      frecuencia: estrategiasFrecuencia[estrategia],
    }));

    // Ordenar el array de estrategias por frecuencia de mayor a menor
    estrategiasFrecuenciaArray.sort((a, b) => b.frecuencia - a.frecuencia);

    // Obtener las estrategias ordenadas y limitarlas a 4
    const estrategiasOrdenadas = estrategiasFrecuenciaArray.map((item) => item.estrategia);
    const estrategiasLimitadas = estrategiasOrdenadas.slice(0, 4);

    return estrategiasLimitadas;
  }

    // ===== ALGORITMO DE RECOMENDACIÓN =====

  /**
   * Extrae los estilos de aprendizaje dominantes del perfil del estudiante
   * considerando la intensidad del puntaje
   */
  private extraerEstilos(perfil: PerfilFinalInventarioDeFelder): { estilo: string; puntaje: number }[] {
    const estilos: { estilo: string; puntaje: number }[] = [];

    // Activo-Reflexivo
    const ar = perfil.activo_reflexivo;
    const puntajeAR = parseInt(ar.match(/\d+/)?.[0] || '0');
    const tipoAR = ar.charAt(ar.length - 1);
    estilos.push({
      estilo: tipoAR === 'A' ? 'activo' : 'reflexivo',
      puntaje: puntajeAR
    });

    // Sensorial-Intuitivo
    const si = perfil.sensorial_intuitivo;
    const puntajeSI = parseInt(si.match(/\d+/)?.[0] || '0');
    const tipoSI = si.charAt(si.length - 1);
    estilos.push({
      estilo: tipoSI === 'A' ? 'sensorial' : 'intuitivo',
      puntaje: puntajeSI
    });

    // Visual-Verbal
    const vv = perfil.visual_verbal;
    const puntajeVV = parseInt(vv.match(/\d+/)?.[0] || '0');
    const tipoVV = vv.charAt(vv.length - 1);
    estilos.push({
      estilo: tipoVV === 'A' ? 'visual' : 'verbal',
      puntaje: puntajeVV
    });

    // Secuencial-Global
    const sg = perfil.secuencial_global;
    const puntajeSG = parseInt(sg.match(/\d+/)?.[0] || '0');
    const tipoSG = sg.charAt(sg.length - 1);
    estilos.push({
      estilo: tipoSG === 'A' ? 'secuencial' : 'global',
      puntaje: puntajeSG
    });

    return estilos.sort((a, b) => b.puntaje - a.puntaje);
  }

  /**
   * Calcula el nivel de compatibilidad entre los estilos del estudiante
   * y los estilos de un objeto de aprendizaje
   */
  private calcularCompatibilidad(
    estilosEstudiante: { estilo: string; puntaje: number }[],
    estilosObjeto: string[]
  ): number {
    let compatibilidad = 0;
    let pesoTotal = 0;

    estilosEstudiante.forEach((estiloEst, index) => {
      const peso = 4 - index; // 4, 3, 2, 1 (más peso a estilos dominantes)
      pesoTotal += peso;

      if (estilosObjeto.includes(estiloEst.estilo)) {
        const bonusPuntaje = estiloEst.puntaje / 11;
        compatibilidad += peso * (1 + bonusPuntaje);
      }
    });

    return pesoTotal > 0 ? (compatibilidad / (pesoTotal * 2)) * 100 : 0;
  }

  /**
   * Recomienda objetos de aprendizaje para un tema específico
   * basándose en el perfil del estudiante
   */
  async recomendarObjetosParaTema(
    nroCuenta: number,
    idTema: number
  ): Promise<ResultadoRecomendacionDto> {
    // 1. Obtener el perfil del estudiante
    const perfil = await this.perfilFinalInventarioDeFelderRepository.findOne({
      where: { nro_cuenta: nroCuenta }
    });

    if (!perfil) {
      throw new NotFoundException(`No se encontró perfil para el estudiante con número de cuenta ${nroCuenta}`);
    }

    // 2. Extraer estilos del estudiante
    const estilosEstudiante = this.extraerEstilos(perfil);
    const nombresEstilos = estilosEstudiante.map(e => e.estilo);

    // 3. Obtener todos los objetos de aprendizaje del tema
    const objetos = await this.objetosAprendizajeRepository.find({
      where: { id_tema: idTema },
      relations: ['estiloObjeto', 'tema']
    });

    // Si no hay objetos en el tema
    if (objetos.length === 0) {
      return {
        mensaje: 'No hay objetos de aprendizaje disponibles para este tema',
        objetos: [],
        totalCompatibles: 0,
        estilosEstudiante: nombresEstilos
      };
    }


    // 4. Buscar objetos compatibles por cada estilo en orden de dominancia
    const objetosEncontrados: RecomendacionObjetoDto[] = [];
    let estiloUsado: string | null = null;

    for(const estiloInfo of estilosEstudiante) {
      const estiloBuscado = estiloInfo.estilo;
      const objetosCompatibles: RecomendacionObjetoDto[] = [];

      //Buscar objetos que contengan este estilo
      for (const objeto of objetos) {
        if (objeto.estiloObjeto && objeto.estiloObjeto.estilos) {
          const estilosObjeto = objeto.estiloObjeto.estilos;
        
          // Verificar si el objeto incluye el estilo buscado
          if (estilosObjeto.includes(estiloBuscado)) {
            const compatibilidad = this.calcularCompatibilidad(estilosEstudiante, estilosObjeto);

            const estilosCompatibles = estilosEstudiante
              .filter(e => estilosObjeto.includes(e.estilo))
              .map(e => e.estilo);

            objetosCompatibles.push({
              objeto,
              compatibilidad,
              estilosCompatibles
            });
          }
        }
      }

      //Si encontramos objetos con este estilo, los usamos y salimos del ciclo
      if (objetosCompatibles.length > 0) {
        objetosEncontrados.push(...objetosCompatibles);
        estiloUsado = estiloBuscado;
        break;
      }
    }


    // 6. Ordenar por compatibilidad y tomar solo el mejor
    objetosEncontrados.sort((a, b) => b.compatibilidad - a.compatibilidad);
    

    // 7. Preparar respuesta con el mejor objeto
    if (objetosEncontrados.length === 0) {
      return {
        mensaje: `No se encontraron objetos de aprendizaje compatibles con tus estilos de aprendizaje.`,
        objetos: [],
        totalCompatibles: 0,
        estilosEstudiante: nombresEstilos
      };
    }

    return {
      mensaje: `Se encontraron ${objetosEncontrados.length} objeto(s) de aprendizaje compatible(s) con tu estilo (${estiloUsado})`,
      objetos: objetosEncontrados,
      totalCompatibles: objetosEncontrados.length,
      estilosEstudiante: nombresEstilos
    };
  }
}
