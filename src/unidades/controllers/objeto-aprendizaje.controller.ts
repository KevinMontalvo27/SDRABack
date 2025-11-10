import { Controller, Get, Post, Body, Param, BadRequestException } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { ObjetosAprendizaje } from '../entities/objetos_aprendizaje.entity';
import { ObjetosAprendizajeService } from '../services/objetos-aprendizaje.service';

@Controller('objetos-aprendizaje')
export class ObjetosAprendizajeController extends GenericController<ObjetosAprendizaje, ObjetosAprendizajeService> {
    constructor(private readonly objetosAprendizajeService: ObjetosAprendizajeService) {
        super(objetosAprendizajeService);
    }

    @Get()
    async findAll(): Promise<ObjetosAprendizaje[]> {
        return this.objetosAprendizajeService.find();
    }

    @Post()
    async create(@Body() entity: ObjetosAprendizaje) {
        return this.objetosAprendizajeService.create(entity);
    }

    @Get('tema/:idTema')
    async findByTema(@Param('idTema') idTema: number): Promise<ObjetosAprendizaje[]> {
        return this.objetosAprendizajeService.findByTemaId(idTema);
    }

    @Get('tema/:idTema/count')
    async countByTema(@Param('idTema') idTema: number): Promise<{ count: number }> {
        const count = await this.objetosAprendizajeService.countByTemaId(idTema);
        return { count };
    }
}