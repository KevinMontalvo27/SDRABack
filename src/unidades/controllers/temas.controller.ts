import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { Temas } from '../entities/temas.entity';
import { TemasService } from '../services/temas.service';

@Controller('temas')
export class TemasController extends GenericController<Temas, TemasService> {
    constructor(private readonly temasService: TemasService) {
        super(temasService);
    }

    @Get()
    async findAll(): Promise<Temas[]> {
        return this.temasService.find();
    }

    @Post()
    async create(@Body() entity: Temas) {
        return this.temasService.create(entity);
    }

    @Get('unidad/:idUnidad')
    async findByUnidad(@Param('idUnidad') idUnidad: number): Promise<Temas[]> {
        return this.temasService.findByUnidadId(idUnidad);
    }

    @Get(':id/with-objetos')
    async findWithObjetos(@Param('id') id: number): Promise<Temas> {
        return this.temasService.findWithObjetos(id);
    }
}