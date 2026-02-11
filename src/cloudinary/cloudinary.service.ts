import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import * as streamifier from 'streamifier';

export interface CloudinaryUploadResult {
    url: string;
    public_id: string;
    resource_type: string;
    format: string;
}
@Injectable()
export class CloudinaryService {
    /**
     * Sube un archivo a Cloudinary
     * @params file - Archivo de Express Multer 
     * @params folder - Carpeta en Cloudinary donde se guardará el archivo
     * @returns URL del archivo subido
     */

    async uploadFile(
        file: Express.Multer.File,
        folder: string = 'objetos-aprendizaje'
    ): Promise<CloudinaryUploadResult> {
        return new Promise((resolve, reject) => {

            const resourceType = this.getResourceType(file.mimetype, file.originalname);
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: folder,
                    quality: 'auto',
                    fetch_format: 'auto',
                    resource_type: resourceType, //Detecta el tipo de archivo automáticamente
                    //Configuracion adicional para diferentes tipos de archivos
                    allowed_formats: ['jpg', 'png', 'pdf', 'mp4', 'mp3', 'docx', 'pptx', 'txt']
                },
                (error: UploadApiErrorResponse, result: UploadApiResponse) => {
                    if (error) {
                        return reject(error);
                    } else {
                        resolve({
                            url: result.secure_url,
                            public_id: result.public_id,
                            resource_type: result.resource_type,
                            format: result.format
                        });
                    }
                }
            );

            //Convertir el buffer del archivo a stream y subirlo
            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
    }

    
    /**
     * Determina el resource_type correcto para Cloudinary
     * @params mimetype - Tipo MIME del archivo
     * @params filename - Nombre original del archivo
     * @returns 'image' | 'video' | 'raw'
     */
    private getResourceType(mimetype: string, filename: string): 'image' | 'video' | 'raw' {
        const extension = filename.split('.').pop()?.toLowerCase();
        
        // PDFs y documentos deben ser 'raw'
        if (
            mimetype === 'application/pdf' ||
            extension === 'pdf' ||
            mimetype.includes('document') ||
            mimetype.includes('msword') ||
            mimetype.includes('spreadsheet') ||
            mimetype.includes('presentation') ||
            ['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'txt', 'csv'].includes(extension || '')
        ) {
            return 'raw';
        }
        
        // Videos
        if (
            mimetype.startsWith('video/') ||
            ['mp4', 'webm', 'mov', 'avi', 'mkv'].includes(extension || '')
        ) {
            return 'video';
        }
        
        // Imágenes
        if (
            mimetype.startsWith('image/') ||
            ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp'].includes(extension || '')
        ) {
            return 'image';
        }
        
        // Audio y otros archivos como 'raw'
        return 'raw';
    }

    /**
     * Elimina un archivo de Cloudinary usando su public_id
     * @params publicId - ID público del archivo en Cloudinary
     */
    async deleteFile(publicId: string, resourceType: 'image' | 'video' | 'raw' = 'raw'): Promise<void> {
        try{
            await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
        } catch (error) {
            throw new Error(`Error al eliminar el archivo: ${error.message}`);
        }
    }

    /**
     * Extrae el public_id de una URL de Cloudinary
     * @params url - URL del archivo en Cloudinary
     * @returns public_id del archivo
     */
    extractPublicId(url: string): string{
        const parts = url.split('/');
        const fileWithExtension = parts[parts.length - 1];
        const publicId = fileWithExtension.split('.')[0];
        const folder = parts[parts.length - 2];
        return `${folder}/${publicId}`;
    }

    /**
     * Genera una URL que fuerza la descarga del archivo
     * @params publicId - ID público del archivo
     * @params resourceType - 'image' | 'video' | 'raw'
     * @returns URL de descarga con el flag de attachment
     */
    getDownloadUrl(publicId: string, resourceType: string = 'raw'): string {
        return cloudinary.url(publicId, {
            resource_type: resourceType,
            flags: 'attachment', 
            secure: true
        });
    }

}