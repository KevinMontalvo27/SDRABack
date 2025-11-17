import { Controller, Get, Post, Body, Param, BadRequestException, UseInterceptors, UploadedFile, Put, Delete } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { ObjetosAprendizaje } from '../entities/objetos_aprendizaje.entity';
import { ObjetosAprendizajeService } from '../services/objetos-aprendizaje.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateObjetoAprendizajeDto } from '../dtos/create-objeto-aprendizaje.dto';

@Controller('objetos-aprendizaje')
export class ObjetosAprendizajeController extends GenericController<ObjetosAprendizaje, ObjetosAprendizajeService> {
    constructor(
        private readonly objetosAprendizajeService: ObjetosAprendizajeService,
        private readonly cloudinaryService: CloudinaryService   
    ) {
        super(objetosAprendizajeService);
    }

    @Get()
    async findAll(): Promise<ObjetosAprendizaje[]> {
        return this.objetosAprendizajeService.find();
    }

    //OBJETO DE APRENDIZAJE SIN ARCHIVO, DATOS SOLO EN EL BODY
    @Post()
    async create(@Body() entity: ObjetosAprendizaje) {
        return this.objetosAprendizajeService.create(entity);
    }

    /**
     * Crear objeto de aprendizaje con archivo
     *  Sube el archivo a Cloudinary y guarda la URL en la base de datos en el campo 'contenido'
     */

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async createWithFile(
        @UploadedFile() file: Express.Multer.File,
        @Body() body: Partial<CreateObjetoAprendizajeDto>
    ) {
        if (!file) {
            throw new BadRequestException('Archivo no proporcionado');
        }

        try{
            // Subir el archivo a Cloudinary
            const fileUrl = await this.cloudinaryService.uploadFile(file, 'objetos-aprendizaje');

            //Crear el objeto de aprendizaje con la URL del archivo
            const objetoAprendizaje = new ObjetosAprendizaje();
            objetoAprendizaje.id_tema = body.id_tema;
            objetoAprendizaje.id_type = body.id_type;
            objetoAprendizaje.nombre = body.nombre;
            objetoAprendizaje.descripcion = body.descripcion;
            objetoAprendizaje.contenido = fileUrl;
            return this.objetosAprendizajeService.create(objetoAprendizaje);
        } catch (error) {
            throw new BadRequestException(`Error al subir el archivo: ${error.message}`);
        }

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

    /**
     * Actualizar objeto de aprendizaje con nuevo archivo
     */
    @Put('upload/:id')
    @UseInterceptors(FileInterceptor('file'))
    async updateWithFile(
        @Param('id') id: number,
        @UploadedFile() file: Express.Multer.File,
        @Body() body: Partial<CreateObjetoAprendizajeDto>
    ){
        const objetoExistente = await this.objetosAprendizajeService.findOneById(id);

        if (!objetoExistente) {
            throw new BadRequestException('Objeto de aprendizaje no encontrado');
        }

        try {
            let newFileUrl = objetoExistente.contenido;

            //Si se proporciona un nuevo archivo 
            if (file) {
                if (objetoExistente.contenido && objetoExistente.contenido.includes('cloudinary')) {
                    try {
                        //Eliminar el archivo antiguo de Cloudinary
                        const publicId = this.cloudinaryService.extractPublicId(objetoExistente.contenido);
                        await this.cloudinaryService.deleteFile(publicId);
                    } catch (error) {
                        console.error('Error al eliminar el archivo antiguo de Cloudinary:', error.message);
                    }
                }

                //Subir el nuevo archivo a Cloudinary
                newFileUrl = await this.cloudinaryService.uploadFile(file, 'objetos-aprendizaje');
            }

            //Actualizar el objeto de aprendizaje con la nueva URL del archivo
            const objetoActualizado = {
                ...objetoExistente,
                id_tema: body.id_tema ?? objetoExistente.id_tema,
                id_type: body.id_type ?? objetoExistente.id_type,
                nombre: body.nombre ?? objetoExistente.nombre,
                descripcion: body.descripcion ?? objetoExistente.descripcion,
                contenido: newFileUrl,
            };

            return this.objetosAprendizajeService.update(id, objetoActualizado);

        } catch (error) {
            throw new BadRequestException(`Error al subir el archivo: ${error.message}`);
        }
    }

    /**
     * Eliminar objeto de aprendizaje y su archivo en Cloudinary
     */
    @Delete(':id')
    async deleteWithFile(@Param('id') id: number) {
        try {
            return await this.objetosAprendizajeService.deleteWithFile(id);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}