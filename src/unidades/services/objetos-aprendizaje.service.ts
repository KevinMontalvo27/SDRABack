import { Delete, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { ObjetosAprendizaje } from '../entities/objetos_aprendizaje.entity';
import { CloudinaryService, CloudinaryUploadResult } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ObjetosAprendizajeService extends GenericService<ObjetosAprendizaje> {
    constructor(
        @InjectRepository(ObjetosAprendizaje)
        private readonly objetosAprendizajeRepository: Repository<ObjetosAprendizaje>,
        private readonly cloudinaryService: CloudinaryService

    ) {
        super(objetosAprendizajeRepository);
    }

    async findByTemaId(idTema: number): Promise<ObjetosAprendizaje[]> {
        return this.objetosAprendizajeRepository.find({
            where: { id_tema: idTema },
            relations: ['estiloObjeto']
        });
    }

    async countByTemaId(idTema: number): Promise<number> {
        return this.objetosAprendizajeRepository.count({
            where: { id_tema: idTema }
        });
    }

    /**
     * Crear objeto de aprendizaje con archivo
     * @param objetoData - Datos del objeto sin archivo
     * @param file - Archivo a subir
     * @returns Objeto de aprendizaje creado con URL y public_id
     */
    async createWithFile(
        objetoData: Partial<ObjetosAprendizaje>,
        file: Express.Multer.File
    ): Promise<ObjetosAprendizaje> {
        // Subir archivo a Cloudinary
        const uploadResult: CloudinaryUploadResult = await this.cloudinaryService.uploadFile(
            file, 
            'objetos-aprendizaje'
        );

        // Crear objeto con URL y public_id
        const nuevoObjeto = this.objetosAprendizajeRepository.create({
            ...objetoData,
            contenido: uploadResult.url,
            cloudinary_public_id: uploadResult.public_id
        });

        return await this.objetosAprendizajeRepository.save(nuevoObjeto);
    }

    /**
     * Actualizar objeto de aprendizaje con nuevo archivo opcional
     * @param id - ID del objeto a actualizar
     * @param objetoData - Datos a actualizar
     * @param file - Archivo nuevo (opcional)
     * @returns Objeto actualizado
     */
    async updateWithFile(
        id: number,
        objetoData: Partial<ObjetosAprendizaje>,
        file?: Express.Multer.File
    ): Promise<ObjetosAprendizaje> {
        const objetoExistente = await this.objetosAprendizajeRepository.findOne({ 
            where: { id } 
        });

        if (!objetoExistente) {
            throw new Error('Objeto de aprendizaje no encontrado');
        }

        // Si hay un archivo nuevo, manejar el reemplazo
        if (file) {
            // Eliminar archivo antiguo si existe
            if (objetoExistente.cloudinary_public_id || objetoExistente.contenido?.includes('cloudinary')) {
                try {
                    const publicId = objetoExistente.cloudinary_public_id || 
                                   this.cloudinaryService.extractPublicId(objetoExistente.contenido);
                    
                    await this.cloudinaryService.deleteFile(publicId);
                    console.log(`Archivo antiguo eliminado: ${publicId}`);
                } catch (error) {
                    console.error('Error al eliminar archivo antiguo:', error.message);
                    // No lanzar error, continuar con la actualización
                }
            }

            // Subir nuevo archivo
            const uploadResult: CloudinaryUploadResult = await this.cloudinaryService.uploadFile(
                file, 
                'objetos-aprendizaje'
            );

            objetoData.contenido = uploadResult.url;
            objetoData.cloudinary_public_id = uploadResult.public_id;
            
            console.log(`Nuevo archivo subido: ${uploadResult.public_id}`);
        }

        // Actualizar el objeto
        await this.objetosAprendizajeRepository.update(id, objetoData);
        
        return await this.objetosAprendizajeRepository.findOne({ where: { id } });
    }

    /**
     * @param id - ID del objeto de aprendizaje a eliminar
     * @returns Resultado de la eliminación
     */
    async deleteWithFile(id: number): Promise<{ message: string; fileDeleted: boolean }> {
        const objeto = await this.objetosAprendizajeRepository.findOne({ where: { id } });

        if (!objeto) {
            throw new Error('Objeto de aprendizaje no encontrado');
        }

        let fileDeleted = false;

        // Eliminar el archivo de Cloudinary si existe
        if (objeto.cloudinary_public_id || objeto.contenido?.includes('cloudinary')) {
            try {
                //Usar public_id guardado primero, sino extraer de URL
                const publicId = objeto.cloudinary_public_id || 
                               this.cloudinaryService.extractPublicId(objeto.contenido);
                
                await this.cloudinaryService.deleteFile(publicId);
                fileDeleted = true;
                console.log(`Archivo eliminado de Cloudinary: ${publicId}`);
            } catch (error) {
                console.error(`Error al eliminar el archivo de Cloudinary:`, error.message);
                throw new Error(`Error al eliminar el archivo de Cloudinary: ${error.message}`);
            }
        }

        // Eliminar el objeto de aprendizaje de la base de datos
        await this.delete(id);

        return {
            message: 'Objeto de aprendizaje eliminado exitosamente',
            fileDeleted,
        };
    }

    /**
     *Generar URL de descarga para un objeto
     * @param id - ID del objeto de aprendizaje
     * @returns URL de descarga y nombre del archivo
     */
    async getDownloadUrl(id: number): Promise<{ downloadUrl: string; nombre: string }> {
        const objeto = await this.objetosAprendizajeRepository.findOne({ where: { id } });

        if (!objeto) {
            throw new Error('Objeto de aprendizaje no encontrado');
        }

        if (!objeto.cloudinary_public_id && !objeto.contenido?.includes('cloudinary')) {
            throw new Error('El objeto no tiene un archivo en Cloudinary');
        }

        // Usar public_id guardado o extraer de URL
        const publicId = objeto.cloudinary_public_id || 
                        this.cloudinaryService.extractPublicId(objeto.contenido);

        const downloadUrl = this.cloudinaryService.getDownloadUrl(publicId, 'raw');

        return {
            downloadUrl,
            nombre: objeto.nombre
        };
    }
}