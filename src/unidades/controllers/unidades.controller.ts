import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { Unidades } from '../entities/unidades.entity';
import { UnidadesService } from '../services/unidades.service';

@Controller('unidades')
export class UnidadesController extends GenericController<Unidades, UnidadesService> {
    constructor(private readonly unidadesService: UnidadesService) {
        super(unidadesService);
    }

    @Get()
    async findAll(): Promise<Unidades[]> {
        return this.unidadesService.find();
    }

    @Post()
    async create(@Body() entity: Unidades) {
        return this.unidadesService.create(entity);
    }

    @Get('materia/:idMateria')
    async findByMateria(@Param('idMateria') idMateria: number): Promise<Unidades[]> {
        return this.unidadesService.findByMateriaId(idMateria);
    }

    @Get(':id/with-temas')
    async findWithTemas(@Param('id') id: number): Promise<Unidades> {
        return this.unidadesService.findWithTemas(id);
    }
}