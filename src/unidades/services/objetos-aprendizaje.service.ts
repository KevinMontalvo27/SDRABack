import { Delete, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { ObjetosAprendizaje } from '../entities/objetos_aprendizaje.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

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
     * Elimina un objeto de aprendizaje y su archivo asociado en Cloudinary
     * @params id - ID del objeto de aprendizaje a eliminar
     * @returns Resultado de la eliminacion
     */
    async deleteWithFile(id: number): Promise<{ message: string; fileDeleted: boolean }> {
        const objeto = await this.objetosAprendizajeRepository.findOne({ where: { id } });

        if (!objeto) {
            throw new Error('Objeto de aprendizaje no encontrado');
        }

        let deletedFile = false;

        //Eliminar el archivo de Cloudinary si existe
        if (objeto.contenido) {
            try {
                const publicId = this.cloudinaryService.extractPublicId(objeto.contenido);
                await this.cloudinaryService.deleteFile(publicId);
                deletedFile = true;
            } catch (error) {
                throw new Error(`Error al eliminar el archivo de Cloudinary: ${error.message}`);
            }
        }

        //Eliminar el objeto de aprendizaje de la base de datos
        await this.delete(id);

        return {
            message: 'Objeto de aprendizaje eliminado exitosamente',
            fileDeleted: deletedFile,
        }
    }
}