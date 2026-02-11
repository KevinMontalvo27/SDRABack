/// <reference types="multer" />
import { GenericController } from 'src/generic/generic.controller';
import { ObjetosAprendizaje } from '../entities/objetos_aprendizaje.entity';
import { ObjetosAprendizajeService } from '../services/objetos-aprendizaje.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateObjetoAprendizajeDto } from '../dtos/create-objeto-aprendizaje.dto';
export declare class ObjetosAprendizajeController extends GenericController<ObjetosAprendizaje, ObjetosAprendizajeService> {
    private readonly objetosAprendizajeService;
    private readonly cloudinaryService;
    constructor(objetosAprendizajeService: ObjetosAprendizajeService, cloudinaryService: CloudinaryService);
    findAll(): Promise<ObjetosAprendizaje[]>;
    create(entity: ObjetosAprendizaje): Promise<import("typeorm").InsertResult>;
    createWithFile(file: Express.Multer.File, body: Partial<CreateObjetoAprendizajeDto>): Promise<ObjetosAprendizaje>;
    findByTema(idTema: number): Promise<ObjetosAprendizaje[]>;
    countByTema(idTema: number): Promise<{
        count: number;
    }>;
    updateWithFile(id: number, file: Express.Multer.File, body: Partial<CreateObjetoAprendizajeDto>): Promise<ObjetosAprendizaje>;
    getDownloadUrl(id: number): Promise<{
        downloadUrl: string;
        nombre: string;
    }>;
    deleteWithFile(id: number): Promise<{
        message: string;
        fileDeleted: boolean;
    }>;
}
